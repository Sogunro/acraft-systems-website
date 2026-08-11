import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Backup & Continuity' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="IT Services"
      title="Backups that actually restore when you need them"
      lede="Most backups fail silently. We design, monitor and test recovery procedures so that when something goes wrong, you're back online in minutes — not days."
      imageSrc="/images/svc-backup.png"
      benefits={[
        { title: 'Tested restores, monthly', description: 'We restore sample data every month and report the results. No untested backups.' },
        { title: 'Off-site and immutable', description: 'Backups are encrypted, geo-redundant, and protected against ransomware deletion.' },
        { title: 'Documented runbooks', description: 'Step-by-step recovery procedures specific to your environment, kept up to date.' },
      ]}
      features={[
        'Image-level backups of servers and workstations',
        'Microsoft 365 backup (Exchange, OneDrive, SharePoint, Teams)',
        'Immutable, ransomware-resistant storage',
        'Geo-redundant off-site replication',
        'Monthly restore testing with written reports',
        'Disaster recovery runbooks and tabletop exercises',
        'RTO and RPO targets aligned to your business',
        'Single-file or full-system restore on demand',
      ]}
      faq={[
        { q: 'What’s the difference between backup and DR?', a: 'Backup keeps a copy of your data. Disaster recovery is the documented process — including infrastructure, runbooks and people — for getting back online after a major incident. You need both.' },
        { q: 'Do you back up Microsoft 365?', a: 'Yes. Microsoft’s shared-responsibility model means they protect the platform; your data is your responsibility. We back it up daily.' },
      ]}
    />
  );
}
