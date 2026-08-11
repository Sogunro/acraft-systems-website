import { Cloud, Wifi, Cable, Smartphone, Network } from 'lucide-react';
import { HubPageTemplate } from '@/components/sections/HubPageTemplate';

export const metadata = { title: 'Connectivity' };

export default function ConnectivityHub() {
  return (
    <HubPageTemplate
      eyebrow="Connectivity"
      title="Connectivity that keeps your business online, always"
      lede="From dedicated leased lines to guest WiFi and Microsoft 365 — connectivity that's fast, secure, and fully managed."
      services={[
        { title: 'Microsoft 365', description: 'Email, Teams, OneDrive and SharePoint — deployed, secured and supported.', href: '/connectivity/microsoft-365', icon: Cloud },
        { title: 'Business Broadband', description: 'Reliable, business-grade internet access with priority support.', href: '/connectivity/business-broadband', icon: Wifi },
        { title: 'Leased Lines', description: 'Dedicated symmetric bandwidth with strict SLAs and guaranteed uptime.', href: '/connectivity/leased-lines', icon: Cable },
        { title: 'Mobile Internet', description: '4G/5G failover and primary connectivity for branches and remote sites.', href: '/connectivity/mobile-internet', icon: Smartphone },
        { title: 'Guest WiFi', description: 'Secure, branded WiFi for visitors and staff — captive portal included.', href: '/connectivity/guest-wifi', icon: Network },
      ]}
    />
  );
}
