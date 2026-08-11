import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Mobile with Handset' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Mobile"
      title="Latest handsets, bundled with airtime"
      lede="Get your team kitted out with iPhone, Samsung or Google Pixel — bundled into a single monthly fee. Optional device management so you can enforce passcodes, encryption and remote wipe."
      imageSrc="/images/svc-handset.png"
      benefits={[
        { title: 'One monthly fee', description: 'Handset, airtime, insurance and support — bundled, predictable, deductible.' },
        { title: 'Same-next-day replacement', description: 'Lost or broken devices replaced within 24 hours during business days.' },
        { title: 'Optional MDM', description: 'Enforce passcodes, encryption, app whitelisting and remote wipe across the fleet.' },
      ]}
      features={[
        'iPhone, Samsung Galaxy, Google Pixel ranges',
        'Bundled airtime tariffs',
        'Damage and loss insurance options',
        'Mobile device management (MDM) included',
        'Refresh cycle every 24 or 36 months',
        'Trade-in scheme for old devices',
      ]}
    />
  );
}
