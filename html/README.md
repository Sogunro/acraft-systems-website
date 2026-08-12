# Acraft Systems — static HTML build

A self-contained copy of the site: all 24 pages as plain HTML, CSS, JS and
images. No Node.js, no build step, no server required.

This is generated output, not the source. The source of truth is the Next.js
app in `src/` at the repository root — edit there, then regenerate this folder.

## Using it

Open `index.html` in any browser, or upload the whole folder to any static
host (cPanel `public_html`, Netlify, GitHub Pages, S3). All paths are
relative, so it works from a subfolder or straight off a USB stick.

## Regenerating

From the repository root:

```bash
# 1. Temporarily add to next.config.mjs:
#      output: 'export',
#      trailingSlash: true,
#      images: { unoptimized: true, ... }
npm run build

# 2. Copy and rewrite absolute paths to relative
rm -rf html && cp -r out html
node make-portable.mjs html

# 3. Revert next.config.mjs — Railway needs server mode
```

`trailingSlash: true` matters: it makes Next emit `about/index.html` rather
than `about.html`, which is the layout `make-portable.mjs` rewrites links to.
Without it every internal link 404s.

`images.unoptimized` is required because the Next Image Optimization API needs
a running server, which a static export has none.

## Differences from the deployed site

Images are served at full size rather than resized per device, since the
optimizer is unavailable. Pages look identical; image payloads are larger.
