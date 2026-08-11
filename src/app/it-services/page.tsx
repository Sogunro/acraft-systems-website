import { ServerCog, Database, Compass } from 'lucide-react';
import { HubPageTemplate } from '@/components/sections/HubPageTemplate';

export const metadata = { title: 'IT Services' };

export default function ITServicesHub() {
  return (
    <HubPageTemplate
      eyebrow="IT Services"
      title="Reliable IT services for businesses that can't afford downtime"
      lede="From everyday support to disaster recovery and strategic consulting — one accountable partner across your entire IT estate."
      services={[
        {
          title: 'Managed IT Support',
          description: 'Proactive monitoring, fast response, predictable monthly cost. Your in-house IT, on tap.',
          href: '/it-services/managed-it-support',
          icon: ServerCog,
        },
        {
          title: 'Backup & Continuity',
          description: 'Resilient backups, disaster recovery plans and tested restore procedures.',
          href: '/it-services/backup-continuity',
          icon: Database,
        },
        {
          title: 'IT Consulting',
          description: 'Strategic roadmaps, vendor selection and project delivery aligned to your business goals.',
          href: '/it-services/it-consulting',
          icon: Compass,
        },
      ]}
    />
  );
}
