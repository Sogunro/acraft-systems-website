'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionEyebrow, SectionTitle, SectionLede } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up to your backend / form provider here.
    setSubmitted(true);
  }

  return (
    <>
      <Section tone="tinted" className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl" />
        <Container size="wide" className="relative">
          <div className="max-w-3xl">
            <Reveal>
              <SectionEyebrow>Contact us</SectionEyebrow>
              <h1 className="text-h1 md:text-display text-navy-900 text-balance">
                Tell us what you need
              </h1>
              <p className="mt-lg text-body-lg text-muted max-w-2xl">
                Drop a few lines below and a senior engineer will respond within one business hour. No
                sales-handover, no chatbot.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="default">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-xl">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                {submitted ? (
                  <div className="bg-surface border border-line rounded-xl p-xxl text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-base">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="text-h3 text-navy-900 mb-sm">Message received</h2>
                    <p className="text-body text-muted max-w-md mx-auto">
                      Thanks. We&apos;ll be in touch within one business hour. In the meantime, feel free to call us
                      directly on {site.phone}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="bg-white border border-line rounded-xl p-lg md:p-xl shadow-card space-y-base">
                    <div className="grid sm:grid-cols-2 gap-base">
                      <Field label="Full name" id="name" required />
                      <Field label="Company" id="company" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-base">
                      <Field label="Work email" id="email" type="email" required />
                      <Field label="Phone" id="phone" type="tel" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-body-sm font-semibold text-navy-900 mb-sm">
                        What can we help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-md border border-line bg-white px-md h-11 text-body text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        <option>Managed IT Support</option>
                        <option>Managed Cybersecurity</option>
                        <option>Bespoke Software Engineering</option>
                        <option>Data Centre Management</option>
                        <option>IT Consulting</option>
                        <option>Project Management</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-body-sm font-semibold text-navy-900 mb-sm">
                        Tell us a bit more
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full rounded-md border border-line bg-white px-md py-md text-body text-ink focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                        placeholder="How many users? Current pain points? Timeline?"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                      Send message
                    </Button>
                    <p className="text-caption text-muted">
                      By submitting, you agree to be contacted about your enquiry. We never share your details.
                    </p>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-lg">
                  <ContactCard icon={Phone} title="Call us" body={site.phone} href={`tel:${site.phoneDial}`} sub={site.hours} />
                  <ContactCard icon={Mail} title="Email us" body={site.email} href={`mailto:${site.email}`} sub="Replies within 1 business hour" />
                  <ContactCard icon={MapPin} title="Visit us" body={site.address} sub={`Serving businesses across ${site.region}`} />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  id,
  type = 'text',
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-body-sm font-semibold text-navy-900 mb-sm">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-white px-md h-11 text-body text-ink focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
  sub,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  sub?: string;
  href?: string;
}) {
  const content = (
    <div className="bg-surface border border-line rounded-lg p-lg flex items-start gap-base">
      <div className="h-10 w-10 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-caption uppercase tracking-widest text-muted font-semibold">{title}</div>
        <div className="text-body-lg font-semibold text-navy-900 mt-xs break-words">{body}</div>
        {sub && <div className="text-body-sm text-muted mt-xs">{sub}</div>}
      </div>
    </div>
  );
  if (href) return <a href={href} className="block hover:opacity-90 transition">{content}</a>;
  return content;
}
