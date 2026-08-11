import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Business Broadband' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Connectivity"
      title="Business-grade broadband with priority support"
      lede="Consumer broadband is built for streaming Netflix. We supply circuits built for business — symmetric where possible, SLA-backed, and supported by humans who pick up the phone."
      imageSrc="/images/svc-broadband.png"
      benefits={[
        { title: 'Business SLAs', description: 'Defined response and fix times, with credits if we miss them. No consumer-grade fobbing off.' },
        { title: 'One bill, one supplier', description: 'Circuit, router, monitoring and support — billed monthly, supported in one place.' },
        { title: 'Failover ready', description: 'Add 4G/5G or a second circuit so a single fault never takes you offline.' },
      ]}
      features={[
        'FTTC, FTTP and Ethernet over FTTC',
        'Static IP addresses included',
        'Managed router with proactive monitoring',
        '4G/5G failover options',
        'Multi-site procurement and centralised billing',
        'Business-hours and 24/7 SLA tiers',
      ]}
    />
  );
}
