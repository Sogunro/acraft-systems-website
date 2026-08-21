import Image from 'next/image';
import { partners } from '@/lib/site';

export function PartnerStrip() {
  // Duplicate the list so the seamless loop has identical halves
  const loop = [...partners, ...partners];

  return (
    <section className="bg-surface py-lg md:py-xl border-y border-line">
      <p className="text-caption uppercase tracking-[0.32em] text-muted font-semibold text-center mb-lg">
        Trusted partners & certifications
      </p>

      {/* Marquee track. Fades on both edges so logos appear to emerge / dissolve. */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-sm md:gap-base">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 flex items-center justify-center h-10 md:h-12 w-[120px] md:w-[140px] px-sm bg-white rounded-sm border border-line"
              aria-label={p.name}
              title={p.name}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={120}
                height={32}
                className="max-h-6 md:max-h-7 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
