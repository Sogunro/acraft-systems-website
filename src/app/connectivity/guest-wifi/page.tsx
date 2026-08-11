import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Guest WiFi' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Connectivity"
      title="Guest WiFi that's secure, branded, and easy to manage"
      lede="Your visitors expect WiFi. Your security team expects it not to touch the corporate network. We deliver both — with a captive portal that looks like your brand, not a router default."
      imageSrc="/images/svc-guest-wifi.png"
      benefits={[
        { title: 'Network isolation', description: 'Guest traffic is fully separated from corporate. A compromised laptop can\'t reach your file server.' },
        { title: 'Branded captive portal', description: 'Your logo, your terms, your colours. Optional email/SMS capture for marketing.' },
        { title: 'Compliant logging', description: 'Connection logs retained per regulatory requirements with secure access controls.' },
      ]}
      features={[
        'Enterprise WiFi 6 / 6E access points',
        'Branded captive portal with email capture',
        'VLAN isolation from corporate network',
        'Content filtering and bandwidth caps',
        'Per-user and per-session limits',
        'Centralised cloud management',
      ]}
    />
  );
}
