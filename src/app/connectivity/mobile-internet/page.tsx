import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Mobile Internet' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Connectivity"
      title="4G and 5G connectivity for branches, pop-ups, and failover"
      lede="When the wire goes down — or there isn't one — 4G/5G keeps you trading. We design, supply and manage mobile internet that's automatic, secure, and centrally billed."
      imageSrc="/images/svc-mobile-internet.png"
      benefits={[
        { title: 'Automatic failover', description: 'Drops to mobile within seconds if your primary circuit fails. Users barely notice.' },
        { title: 'Branch in a box', description: 'Pre-configured routers — plug in, power on, online in minutes. Ideal for pop-ups and rapid rollouts.' },
        { title: 'Pooled data', description: 'Shared monthly allowance across all sites. Heavy users at one location don\'t starve another.' },
      ]}
      features={[
        '4G LTE and 5G routers with external antennas',
        'Dual-SIM, multi-carrier resilience',
        'Centralised monitoring and management',
        'Pooled data plans across sites',
        'Plug-and-play deployment',
        'Optional fixed IP and private APN',
      ]}
    />
  );
}
