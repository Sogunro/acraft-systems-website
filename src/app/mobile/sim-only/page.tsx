import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'SIM Only' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Mobile"
      title="Flexible SIM-only plans for business teams"
      lede="Pooled data, shared minutes, one monthly invoice. SIM-only contracts that move at the speed of your team — without the markup of a high-street retailer."
      imageSrc="/images/svc-sim-only.png"
      benefits={[
        { title: 'Pooled allowances', description: 'One shared pot of data, minutes and texts across the whole team. No one runs out.' },
        { title: 'Flexible terms', description: '30-day, 12-month or 24-month options. Add or remove users without penalty mid-contract.' },
        { title: 'Best-network coverage', description: 'We can supply on the major nationwide networks — we recommend based on coverage at your sites.' },
      ]}
      features={[
        'Pooled data, minutes and texts',
        'EU and international roaming options',
        '4G and 5G as standard',
        'Add or remove users monthly',
        'One consolidated monthly invoice',
        'Online billing portal with per-user breakdown',
      ]}
    />
  );
}
