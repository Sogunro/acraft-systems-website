import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section, SectionEyebrow, SectionTitle, SectionLede } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { IconTile } from '@/components/ui/IconTile';
import { CTA } from './CTA';

export type HubPageProps = {
  eyebrow: string;
  title: string;
  lede: string;
  services: {
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
};

export function HubPageTemplate({ eyebrow, title, lede, services }: HubPageProps) {
  return (
    <>
      <Section tone="tinted" className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl" />
        <Container size="wide" className="relative">
          <div className="max-w-3xl">
            <Reveal>
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h1 className="text-h1 md:text-display text-navy-900 text-balance">{title}</h1>
              <p className="mt-lg text-body-lg text-muted max-w-2xl">{lede}</p>
              <div className="mt-xl">
                <Button href="/contact" variant="primary" size="lg">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container size="wide">
          <Reveal>
            <SectionEyebrow>Services in this area</SectionEyebrow>
            <SectionTitle>Choose what fits your business</SectionTitle>
          </Reveal>
          <div className="mt-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-lg">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group block bg-white border border-line rounded-2xl p-lg shadow-card transition hover:shadow-elevated hover:-translate-y-0.5 h-full"
                >
                  <IconTile icon={s.icon} className="mb-base" />
                  <h3 className="text-h4 text-navy-900 mb-sm">{s.title}</h3>
                  <p className="text-body text-muted leading-relaxed">{s.description}</p>
                  <span className="mt-base inline-flex items-center gap-xs text-body-sm font-semibold text-accent-ink">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
