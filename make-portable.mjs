import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: node make-portable.mjs <out-dir>'); process.exit(1); }

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const files = walk(ROOT);

// Patterns to rewrite: absolute paths starting with "/_next/" or "/images/"
// We rewrite them to be relative to the HTML file's directory.
// Also: hrefs to internal pages like "/about/", "/connectivity/leased-lines/" need to become relative.

const INTERNAL_HREF_PREFIXES = ['/about/', '/connectivity/', '/contact/', '/cyber/', '/it-services/', '/mobile/', '/telecoms/'];

function relPrefix(htmlPath) {
  const depth = relative(ROOT, dirname(htmlPath)).split(sep).filter(Boolean).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

for (const file of files) {
  if (file.endsWith('.html')) {
    let html = readFileSync(file, 'utf8');
    const prefix = relPrefix(file);
    // Rewrite asset paths
    html = html.replace(/(["'(])\/(_next\/|images\/)/g, (_m, q, p) => `${q}${prefix}${p}`);
    // Rewrite internal page links
    html = html.replace(/href="(\/[^"]*)"/g, (m, p) => {
      if (p.startsWith('//')) return m; // protocol-relative
      if (p === '/') return `href="${prefix}index.html"`;
      // Only rewrite if it matches a known internal route
      const matches = INTERNAL_HREF_PREFIXES.some(pre => p === pre.slice(0, -1) || p.startsWith(pre)) || p === '/';
      if (!matches) return m;
      // strip leading /, ensure trailing /index.html or trailing /
      let stripped = p.replace(/^\//, '');
      if (stripped.endsWith('/')) stripped += 'index.html';
      else if (!stripped.match(/\.[a-z]+$/i)) stripped += '/index.html';
      return `href="${prefix}${stripped}"`;
    });
    writeFileSync(file, html);
  } else if (file.endsWith('.js') || file.endsWith('.css')) {
    let txt = readFileSync(file, 'utf8');
    const before = txt;
    // For JS/CSS in /_next/static/..., relative back to root is "../../../"
    const depth = relative(ROOT, dirname(file)).split(sep).filter(Boolean).length;
    const prefix = depth === 0 ? './' : '../'.repeat(depth);
    txt = txt.replace(/(["'(])\/(_next\/|images\/)/g, (_m, q, p) => `${q}${prefix}${p}`);
    if (txt !== before) writeFileSync(file, txt);
  }
}

console.log(`Rewrote paths in ${files.length} files.`);
