import Image from 'next/image';
import { Headset, Users, Wrench, ShieldCheck, MessageSquareText, Building2 } from 'lucide-react';
import { IconTile, type TileIcon } from '@/components/ui/IconTile';
import { Container } from '@/components/ui/Container';
import { Section, SectionEyebrow, SectionTitle, SectionLede } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CTA } from '@/components/sections/CTA';
import { PartnerStrip } from '@/components/sections/PartnerStrip';
import { site } from '@/lib/site';

export const metadata = { title: 'About Us' };

// `featured` marks the two claims that carry the most weight commercially.
// They get the red brand accent so the grid has a focal point instead of
// six identical tiles.
const values: {
  icon: TileIcon;
  title: string;
  description: string;
  featured?: boolean;
  filled?: boolean;
}[] = [
  {
    icon: Headset,
    title: '24-hour support',
    description: 'Round-the-clock support and monitoring for your business — whenever something breaks, we are already on it.',
    featured: true,
  },
  {
    icon: Users,
    title: 'Our team is your team',
    description: 'We want you to think of us as part of your team — your own dedicated IT department, just outside the office.',
  },
  {
    icon: Wrench,
    title: 'We find a solution',
    description: "We won't tell you something is impossible. Instead, we work the problem until a suitable solution exists.",
  },
  {
    icon: Building2,
    title: 'Designed for SMEs',
    description: 'We care about the smaller businesses — because we are one of them too. No enterprise-only attitude.',
  },
  {
    icon: MessageSquareText,
    title: "We don't speak in geek",
    description: 'Plain old layman’s terms only. We will never baffle you with technobabble or hide behind jargon.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber-security experts',
    description: 'Our team holds some of the highest cybersecurity qualifications available — and uses them every day.',
    featured: true,
    filled: true,
  },
];

const stats = [
  { value: '12 min', label: 'Average first response' },
  { value: '99.95%', label: 'Uptime across managed estates' },
  { value: '24/7', label: 'Critical incident coverage' },
  { value: '100%', label: 'Cyber Essentials pass rate' },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-700" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <Container size="wide" className="relative">
          <div className="max-w-3xl">
            <Reveal>
              <SectionEyebrow>About our business</SectionEyebrow>
              <h1 className="text-h1 md:text-display text-white text-balance">
                Who are we?
              </h1>
              <p className="mt-lg text-body-lg text-navy-100 max-w-2xl">
                At {site.name}, we provide expert IT and telecom services to keep your business running smoothly.
                Whether you&apos;re based in Agodi, Bodija, Iyaganku, Jericho or anywhere across Ibadan and the rest of
                Nigeria — our tailored solutions ensure your technology works seamlessly.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <PartnerStrip />

      <Section tone="default">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-xl items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionEyebrow>Our approach</SectionEyebrow>
                <SectionTitle>Tailored to your business — never one-size-fits-all</SectionTitle>
                <div className="mt-lg space-y-md text-body text-muted leading-relaxed max-w-xl">
                  <p>
                    Every business has different IT needs. Whether you require ongoing support, stronger
                    cybersecurity, or reliable telecom services, we offer personalised, stress-free solutions so
                    you can focus on growing your business.
                  </p>
                  <p>
                    Let us take care of your IT while you concentrate on your success.
                    {' '}<span className="text-navy-900 font-semibold">Get in touch with us today.</span>
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line shadow-card">
                  <Image
                    src="/images/about-team.png"
                    alt={`The ${site.name} team`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container size="wide">
          <Reveal>
            <SectionEyebrow>What we measure ourselves on</SectionEyebrow>
            <SectionTitle>The numbers we report each quarter</SectionTitle>
          </Reveal>
          <div className="mt-xl grid grid-cols-2 lg:grid-cols-4 gap-lg">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="bg-white border border-line rounded-lg p-lg text-center">
                  <div className="text-h2 font-bold text-accent">{s.value}</div>
                  <div className="text-body-sm text-muted mt-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default">
        <Container size="wide">
          <Reveal>
            <SectionEyebrow>Why us?</SectionEyebrow>
            <SectionTitle>Six reasons SMEs across Nigeria choose {site.name}</SectionTitle>
          </Reveal>
          <div className="mt-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group bg-white border border-line rounded-2xl p-lg h-full shadow-card">
                  <IconTile
                    icon={v.icon}
                    tone={v.featured ? 'brand' : 'neutral'}
                    filled={v.filled}
                    className="mb-base"
                  />
                  <h3 className="text-h4 text-navy-900 mb-sm">{v.title}</h3>
                  <p className="text-body text-muted leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Want to know more before you commit?" description="A 20-minute call with our technical lead, no sales handover. Bring your hardest IT question." />
    </>
  );
}
