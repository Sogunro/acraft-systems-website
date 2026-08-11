import Image from 'next/image';
import { CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section, SectionEyebrow, SectionTitle, SectionLede } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CTA } from './CTA';

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  lede: string;
  imageSrc: string;
  imageAlt?: string;
  benefits: { title: string; description: string }[];
  features: string[];
  faq?: { q: string; a: string }[];
};

export function ServicePageTemplate(props: ServicePageProps) {
  const { eyebrow, title, lede, imageSrc, imageAlt, benefits, features, faq } = props;

  return (
    <>
      {/* Hero */}
      <Section tone="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-700" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-12 gap-xl items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionEyebrow>{eyebrow}</SectionEyebrow>
                <h1 className="text-h1 md:text-display text-white">{title}</h1>
                <p className="mt-base text-body-lg text-navy-100 max-w-xl">{lede}</p>
                <div className="mt-lg flex flex-col sm:flex-row gap-md">
                  <Button href="/contact" variant="primary" size="lg">Get a quote</Button>
                  <Button href="/it-services" variant="outline" size="lg">All services</Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-navy-700 shadow-elevated">
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section tone="default">
        <Container size="wide">
          <Reveal>
            <SectionEyebrow>Why it matters</SectionEyebrow>
            <SectionTitle>What you get with this service</SectionTitle>
          </Reveal>
          <div className="mt-xl grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {benefits.map((b, i) => {
              const tones = [
                { bar: 'bg-accent',       tile: 'bg-accent text-white',       Icon: Zap },
                { bar: 'bg-amber-500',    tile: 'bg-amber-500 text-white',    Icon: Shield },
                { bar: 'bg-emerald-600',  tile: 'bg-emerald-600 text-white',  Icon: TrendingUp },
              ];
              const t = tones[i % tones.length];
              return (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="relative bg-white border border-line rounded-lg p-lg h-full shadow-card overflow-hidden">
                    <span className={`absolute top-0 inset-x-0 h-1 ${t.bar}`} />
                    <div className="flex items-center justify-between mb-base">
                      <div className={`h-14 w-14 rounded-lg flex items-center justify-center shadow-sm ${t.tile}`}>
                        <t.Icon className="h-7 w-7" strokeWidth={2.25} />
                      </div>
                      <span className="text-h2 font-bold text-navy-100 leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-h4 text-navy-900 mb-sm">{b.title}</h3>
                    <p className="text-body text-muted leading-relaxed">{b.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Features list */}
      <Section tone="surface">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-xl">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionEyebrow>What's included</SectionEyebrow>
                <SectionTitle>Everything covered, end-to-end</SectionTitle>
                <SectionLede>
                  A single, fixed-fee engagement covers the entire scope. No surprise invoices, no scope creep.
                </SectionLede>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ul className="grid sm:grid-cols-2 gap-md">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-md bg-white rounded-md p-md border border-line">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-body text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <Section tone="default">
          <Container size="default">
            <Reveal>
              <SectionEyebrow>FAQ</SectionEyebrow>
              <SectionTitle>Questions clients usually ask</SectionTitle>
            </Reveal>
            <div className="mt-xl space-y-md">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.04}>
                  <details className="group bg-white border border-line rounded-lg p-lg open:shadow-card">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-base">
                      <span className="text-h4 text-navy-900">{item.q}</span>
                      <span className="text-accent text-h3 leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-md text-body text-muted leading-relaxed">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTA />
    </>
  );
}
