'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number };

/**
 * Animated constellation background — drifting nodes joined by lines that fade
 * in as nodes approach each other.
 *
 * Canvas rather than SVG/DOM: the link pass is O(n²) over ~90 nodes every frame,
 * which would thrash layout as DOM elements but is trivial for a canvas.
 *
 * Respects prefers-reduced-motion by painting a single static frame, and pauses
 * entirely when scrolled out of view so it costs nothing further down the page.
 */
export function ParticleField({
  className,
  tone = 'dark',
}: {
  className?: string;
  /** 'dark' paints light nodes for a navy background; 'light' paints navy nodes for a white one. */
  tone?: 'dark' | 'light';
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let visible = true;

    // Cap DPR at 2 — beyond that the pixel cost outweighs any visible gain.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Node count scales with area so the field looks equally dense on a phone
    // and an ultrawide, rather than sparse on one and cluttered on the other.
    const seed = () => {
      const target = Math.round(Math.min(120, Math.max(34, (width * height) / 14000)));
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    /**
     * Horizontal falloff: full strength at the left and right edges, fading to
     * nothing across the middle so the hero copy sits on clean background.
     * 0 at centre → 1 at the edges.
     */
    const edgeWeight = (x: number) => {
      const offset = Math.abs(x - width / 2) / (width / 2); // 0 centre, 1 edge
      const clear = 0.34; // inner band kept completely clear
      if (offset <= clear) return 0;
      const t = (offset - clear) / (1 - clear);
      // Gentler than a square: reaches useful strength soon after leaving the
      // clear band, so the web is crisply visible across the whole side panel
      // rather than only at the extreme edge.
      return Math.pow(t, 1.3);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Link distance scales with viewport so the web keeps its shape when resized.
      const linkDist = Math.min(210, Math.max(140, width / 8));

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDist) continue;
          // Fade with distance, then again by how close the pair is to the centre.
          const mask = edgeWeight((p.x + q.x) / 2);
          if (mask <= 0.01) continue;
          // Square-rooting the distance term keeps links strong for most of
          // their span instead of fading almost immediately.
          const alpha = Math.sqrt(1 - dist / linkDist) * mask;
          if (alpha <= 0.01) continue;
          ctx.strokeStyle =
            tone === 'light'
              ? `rgba(31, 108, 190, ${alpha * 0.55})`
              : `rgba(195, 225, 255, ${alpha})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      // Nodes last so they sit on top of the link lines. No glow — the blur read
      // as haze over the hero copy rather than as points of light.
      for (const p of particles) {
        const mask = edgeWeight(p.x);
        if (mask <= 0.01) continue;
        ctx.fillStyle =
          tone === 'light'
            ? `rgba(28, 55, 99, ${Math.min(1, 1.1 * mask)})`
            : `rgba(240, 248, 255, ${Math.min(1, 1.5 * mask)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around the edges so the field never thins out at the borders.
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }
      draw();
      frame = requestAnimationFrame(step);
    };

    resize();

    if (reduced) {
      draw(); // single static frame — still decorative, no motion
    } else {
      frame = requestAnimationFrame(step);
    }

    const onResize = () => {
      resize();
      if (reduced) draw();
    };
    window.addEventListener('resize', onResize);

    // Stop animating once the hero scrolls away.
    const io = new IntersectionObserver(([entry]) => {
      const nowVisible = entry.isIntersecting;
      if (nowVisible === visible) return;
      visible = nowVisible;
      if (reduced) return;
      if (visible) {
        frame = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(frame);
      }
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      io.disconnect();
    };
  }, [tone]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
