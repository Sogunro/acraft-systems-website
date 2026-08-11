import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Leased Lines' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Connectivity"
      title="Leased lines — dedicated bandwidth, guaranteed uptime"
      lede="A leased line is not shared with your neighbours. It's a dedicated, symmetric, SLA-backed circuit from your premises to the carrier — the foundation for serious business connectivity."
      imageSrc="/images/svc-leased-lines.png"
      benefits={[
        { title: 'Symmetric speeds', description: 'Upload as fast as you download. Essential for cloud, video, and backup-to-cloud workloads.' },
        { title: '99.95%+ uptime', description: 'SLA-backed availability with engineer-on-site fix times measured in hours, not days.' },
        { title: 'Scalable bearer', description: 'Start at 100 Mbps on a 1 Gbps bearer and uplift in days, not weeks, as you grow.' },
      ]}
      features={[
        '10 Mbps to 10 Gbps symmetric circuits',
        'Multiple carrier options for best price',
        'Free installation surveys',
        'Managed firewall and router',
        'Diverse-route redundancy available',
        'Single point of contact for faults',
      ]}
    />
  );
}
