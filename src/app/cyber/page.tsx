import { Shield, Award, ClipboardCheck } from 'lucide-react';
import { HubPageTemplate } from '@/components/sections/HubPageTemplate';

export const metadata = { title: 'Cybersecurity' };

export default function CyberHub() {
  return (
    <HubPageTemplate
      eyebrow="Cyber"
      title="Cybersecurity that's continuous, certified, and built for SMBs"
      lede="Threats don't take weekends off — neither does our monitoring. From baseline certifications to 24/7 managed detection and response."
      services={[
        {
          title: 'Managed Cybersecurity',
          description: 'Continuous threat detection, incident response, and hardening across endpoints, email and cloud.',
          href: '/cyber/managed-cybersecurity',
          icon: Shield,
        },
        {
          title: 'Cyber Essentials',
          description: 'Get certified to the recognised baseline standard your clients and insurers expect.',
          href: '/cyber/cyber-essentials',
          icon: Award,
        },
        {
          title: 'Cyber Essentials Assessor',
          description: 'Independent assessment by our certified assessors. We can certify your business or your supply chain.',
          href: '/cyber/cyber-essentials-assessor',
          icon: ClipboardCheck,
        },
      ]}
    />
  );
}
