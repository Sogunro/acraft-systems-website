import { Smartphone, Signal } from 'lucide-react';
import { HubPageTemplate } from '@/components/sections/HubPageTemplate';

export const metadata = { title: 'Business Mobile' };

export default function MobileHub() {
  return (
    <HubPageTemplate
      eyebrow="Mobile"
      title="Business mobile plans on reliable nationwide networks"
      lede="Flexible SIM-only contracts and bundled handsets — billed monthly, managed centrally."
      services={[
        { title: 'SIM Only', description: 'Flexible SIM-only plans with shared pools of data, minutes and texts.', href: '/mobile/sim-only', icon: Signal },
        { title: 'Mobile with Handset', description: 'Latest iPhone and Android devices bundled with airtime.', href: '/mobile/mobile-with-handset', icon: Smartphone },
      ]}
    />
  );
}
