import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Managed IT Support' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="IT Services"
      title="Managed IT support that feels in-house"
      lede="Proactive monitoring, fast response, and a fixed monthly fee. We become your IT department — accountable, responsive, and easy to reach."
      imageSrc="/images/svc-managed-it.png"
      benefits={[
        { title: 'Predictable cost', description: 'Fixed monthly fee per user. No surprise invoices, no per-ticket surcharges.' },
        { title: 'Faster resolution', description: 'Average 12-minute first response, 4-hour resolution on standard tickets.' },
        { title: 'Proactive prevention', description: 'We catch issues before your users notice. Monitoring, patching and tuning included.' },
      ]}
      features={[
        '24/7 monitoring of servers, networks and endpoints',
        'Unlimited remote support during business hours',
        'On-site visits when remote isn’t enough',
        'Automated patching for OS and applications',
        'Asset inventory and licence tracking',
        'Monthly performance and incident reports',
        'Named technical account manager',
        'Onboarding and offboarding of staff devices',
      ]}
      faq={[
        { q: 'How quickly will you respond?', a: 'Tickets are acknowledged within 60 minutes during business hours. Critical incidents trigger 24/7 escalation paths.' },
        { q: 'Do you cover Mac and Windows?', a: 'Yes. We support Windows, macOS, and the major Linux distributions, plus mobile device management on iOS and Android.' },
        { q: 'Can you work with our existing software vendors?', a: 'Yes. We act as your single point of contact and coordinate with third-party vendors on your behalf.' },
      ]}
    />
  );
}
