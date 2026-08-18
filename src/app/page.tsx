import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section, SectionEyebrow, SectionTitle, SectionLede } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { ParticleField } from '@/components/ui/ParticleField';
import { PartnerStrip } from '@/components/sections/PartnerStrip';
import { CTA } from '@/components/sections/CTA';
import { site } from '@/lib/site';

const heroBadges = [
  { icon: Clock, label: '24/7 support' },
  { icon: CheckCircle2, label: 'Jargon-free' },
  { icon: Award, label: 'Cyber Essentials certified' },
];

const services = [
  {
    title: 'Managed IT Support',
    description: 'Proactive monitoring, fast response, and predictable monthly cost — your in-house IT, on tap.',
    href: '/it-services/managed-it-support',
    imageSrc: '/images/cards/card-managed-it.png',
  },
  {
    title: 'Managed Cybersecurity',
    description: 'Continuous threat detection, incident response and hardening across endpoints, email and cloud.',
    href: '/cyber/managed-cybersecurity',
    imageSrc: '/images/cards/card-cyber.png',
  },
  {
    title: 'Bespoke Software Engineering',
    description: 'Custom applications and integrations built around how your business actually works.',
    href: '/connectivity/microsoft-365',
    imageSrc: '/images/cards/card-m365.png',
  },
  {
    title: 'Data Centre Management',
    description: 'Racks, power, cooling and connectivity — monitored, maintained and kept online.',
    href: '/telecoms/cloud-phone-system',
    imageSrc: '/images/cards/card-cloud-phone.png',
  },
  {
    title: 'IT Consulting',
    description: 'Strategic roadmaps, vendor selection and project delivery — aligned to your business goals.',
    href: '/it-services/it-consulting',
    imageSrc: '/images/cards/card-consulting.png',
  },
  {
    title: 'Project Management',
    description: 'Migrations, rollouts and office moves run to plan — scoped, scheduled and delivered on time.',
    href: '/it-services/it-consulting',
    imageSrc: '/images/cards/card-managed-it.png',
  },
];

const whyUs = [
  {
    imageSrc: '/images/why/why-speed.png',
    title: 'Response within 60 minutes',
    description: 'Every ticket is acknowledged within an hour during business hours, with 24/7 cover for critical incidents.',
    bar: 'bg-accent',
  },
  {
    imageSrc: '/images/why/why-team.png',
    title: 'One named team, not a queue',
    description: `You'll get to know the engineers handling your account — no faceless call centre, no script-reading.`,
    bar: 'bg-navy-900',
  },
  {
    imageSrc: '/images/why/why-certified.png',
    title: 'Certified, audited expertise',
    description: 'Microsoft, Fortinet and Cyber Essentials accredited. We hold ourselves to the standards we recommend.',
    bar: 'bg-amber-500',
  },
  {
    imageSrc: '/images/why/why-pricing.png',
    title: 'Fixed monthly fee',
    description: 'Predictable cost per user, per month. No surprise invoices, no per-ticket surcharges.',
    bar: 'bg-emerald-600',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed background image */}
      <section className="relative isolate overflow-hidden bg-white text-navy-900 min-h-[620px] md:min-h-[720px] flex items-center">
        {/* Soft tinted wash instead of a dark photo — keeps the hero light and
            lets the headline carry the page. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-50 via-white to-accent/10" />
        <div
          aria-hidden
          className="absolute -top-40 -right-32 -z-10 h-[520px] w-[520px] rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-48 -left-40 -z-10 h-[460px] w-[460px] rounded-full bg-brand/10 blur-3xl"
        />
        {/* Drifting node network, tuned for a light background. */}
        <ParticleField tone="light" className="absolute inset-0 -z-10 h-full w-full" />

        <Container size="wide" className="relative py-section md:py-[140px] text-center">
          <Reveal>
            <p className="text-caption md:text-body-sm uppercase tracking-[0.32em] text-accent-hover font-semibold mb-xl">
              {site.name} · IT support across {site.region}
            </p>
            <h1 className="text-navy-900 text-balance max-w-5xl mx-auto
                           text-[40px] leading-[1.15] tracking-[-0.01em]
                           md:text-[64px] md:leading-[1.12]
                           font-bold">
              Expert IT support for businesses across {site.region}
            </h1>
            <p className="mt-xl text-body-lg md:text-[20px] md:leading-[32px] text-muted max-w-2xl mx-auto">
              {site.name} is your dedicated IT team, ready to assist whenever you need us. Straightforward,
              jargon-free IT support — 24/7.
            </p>
            <div className="mt-xxl flex flex-col sm:flex-row gap-md justify-center">
              <Button href="/it-services" variant="primary" size="lg">
                Explore IT services <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact us
              </Button>
            </div>
            <div className="mt-xxl flex flex-wrap justify-center gap-x-xl gap-y-md">
              {heroBadges.map((b) => (
                <div key={b.label} className="inline-flex items-center gap-sm text-body-sm text-muted">
                  <b.icon className="h-4 w-4 text-accent" />
                  {b.label}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <PartnerStrip />

      {/* SERVICES */}
      <Section tone="default">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-xl mb-xl">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionEyebrow>What we do</SectionEyebrow>
                <SectionTitle>Everything you need under one roof</SectionTitle>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex lg:items-end">
              <Reveal delay={0.05}>
                <SectionLede>
                  Six service lines, one accountable partner. From day-to-day support to strategic transformation —
                  we cover the full IT stack so you don&apos;t have to juggle vendors.
                </SectionLede>
              </Reveal>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-lg">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="surface">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-xl">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionEyebrow>Why {site.name}</SectionEyebrow>
                <SectionTitle>An IT partner you can actually reach</SectionTitle>
                <SectionLede>
                  We earn our keep by being predictable, fast, and easy to deal with. Here&apos;s what that means in practice.
                </SectionLede>
                <div className="mt-lg">
                  <Button href="/about" variant="navy" size="lg">
                    More about us <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-lg">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="relative bg-white border border-line rounded-lg p-lg h-full shadow-card overflow-hidden">
                    <span className={`absolute top-0 inset-x-0 h-1 ${w.bar}`} />
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden mb-base shadow-sm ring-1 ring-line">
                      <Image
                        src={w.imageSrc}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-h4 text-navy-900 mb-sm">{w.title}</h3>
                    <p className="text-body text-muted leading-relaxed">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIAL */}
      <Section tone="default">
        <Container size="default">
          <Reveal>
            <figure className="relative bg-navy-50 border border-line rounded-xl px-xl py-xxl md:px-xxl md:py-[80px] overflow-hidden">
              {/* Oversized decorative quote mark — sits behind the text, lightly tinted */}
              <span
                aria-hidden
                className="absolute -top-base left-lg md:-top-lg md:left-xl text-[180px] md:text-[240px] leading-none font-serif text-accent/15 select-none"
              >
                &ldquo;
              </span>

              <div className="relative">
                <SectionEyebrow>Client story</SectionEyebrow>
                <blockquote className="mt-md max-w-3xl">
                  <p className="text-h3 md:text-[30px] md:leading-[44px] text-navy-900 text-balance font-medium">
                    Switching to {site.name} cut our downtime in half. They picked up the phone every time and made
                    the migration painless. We finally have an IT partner that feels in-house.
                  </p>
                </blockquote>
                <figcaption className="mt-lg flex items-center gap-md">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-body-sm text-muted">
                    <span className="font-semibold text-navy-900">Operations Director</span>
                    <span className="mx-sm">·</span>
                    80-seat professional services firm, Lagos
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
