import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  tone = 'default',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'surface' | 'tinted' | 'navy';
  id?: string;
}) {
  const tones = {
    default: 'bg-white text-ink',
    surface: 'bg-surface text-ink',
    // Light page-hero wash — same family as the homepage hero so every entry
    // point on the site opens light rather than on a slab of navy.
    tinted: 'bg-gradient-to-br from-navy-50 via-white to-accent/10 text-ink',
    navy: 'bg-navy-900 text-white',
  };
  return (
    <section id={id} className={cn('py-xxl md:py-section', tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-caption uppercase tracking-[0.18em] text-accent-ink font-semibold mb-md">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2 className={cn('text-h2 md:text-[40px] md:leading-[48px] max-w-3xl', light ? 'text-white' : 'text-navy-900', className)}>
      {children}
    </h2>
  );
}

export function SectionLede({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p className={cn('mt-base text-body-lg max-w-2xl', light ? 'text-navy-100' : 'text-muted', className)}>
      {children}
    </p>
  );
}
