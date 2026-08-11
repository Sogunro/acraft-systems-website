import { Phone, Headphones, Users } from 'lucide-react';
import { HubPageTemplate } from '@/components/sections/HubPageTemplate';

export const metadata = { title: 'Telecoms' };

export default function TelecomsHub() {
  return (
    <HubPageTemplate
      eyebrow="Telecoms"
      title="Modern telecoms for distributed, hybrid teams"
      lede="Cloud-based phone systems, contact-centre platforms, and Microsoft Teams calling — one number, anywhere."
      services={[
        { title: 'Cloud Phone System', description: 'Modern VoIP, hosted in the cloud. Desk, mobile and softphone in one.', href: '/telecoms/cloud-phone-system', icon: Phone },
        { title: 'Contact Centre', description: 'Omnichannel customer engagement — voice, email, chat and social.', href: '/telecoms/contact-centre', icon: Headphones },
        { title: 'Microsoft Teams', description: 'Teams calling and meeting-room kits, fully managed.', href: '/telecoms/microsoft-teams', icon: Users },
      ]}
    />
  );
}
