import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { site } from '@/lib/site';

export function CTA({
  title = 'Ready to talk to your new IT team?',
  description = `Tell us what you need. We'll respond within one business hour during working hours.`,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-700 opacity-90" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <Container size="wide" className="relative">
        <div className="grid md:grid-cols-3 gap-xl items-center">
          <div className="md:col-span-2">
            <h2 className="text-h2 md:text-[40px] md:leading-[48px] text-white max-w-2xl">{title}</h2>
            <p className="mt-base text-body-lg text-navy-100 max-w-xl">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-md md:items-end">
            <Button href="/contact" variant="primary" size="lg">
              Contact us
            </Button>
            <Button href={`tel:${site.phoneDial}`} variant="outline" size="lg">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
