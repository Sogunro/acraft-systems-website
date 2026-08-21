export const site = {
  name: 'Acraft Systems',
  legalName: 'Acraft Systems LTD',
  tagline: 'Your IT, Our Expertise',
  region: 'Nigeria',
  phone: '+234 815 659 5194',
  // Unspaced E.164 form for `tel:` hrefs — dialers handle this reliably,
  // whereas spaces in a tel: URI are not guaranteed to be parsed.
  phoneDial: '+2348156595194',
  email: 'support@acraftsystems.com',
  address: '17B Senate Crescent, Isheri-Magodo, Lagos',
  hours: 'Mon–Fri, 8am–6pm WAT · 24/7 emergency support',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  { label: 'About Us', href: '/about' },
  {
    label: 'IT Services',
    href: '/it-services',
    children: [
      {
        label: 'Managed IT Support',
        href: '/it-services/managed-it-support',
        description: 'Proactive monitoring, fast response, predictable cost.',
      },
      {
        label: 'Backup & Continuity',
        href: '/it-services/backup-continuity',
        description: 'Resilient backups and disaster recovery you can trust.',
      },
      {
        label: 'IT Consulting',
        href: '/it-services/it-consulting',
        description: 'Strategy and roadmaps tailored to your business goals.',
      },
    ],
  },
  {
    label: 'Cyber',
    href: '/cyber',
    children: [
      {
        label: 'Managed Cybersecurity',
        href: '/cyber/managed-cybersecurity',
        description: 'Continuous threat detection, response, and hardening.',
      },
      {
        label: 'Cyber Essentials',
        href: '/cyber/cyber-essentials',
        description: 'Get certified to the recognised baseline standard.',
      },
      {
        label: 'Cyber Essentials Assessor',
        href: '/cyber/cyber-essentials-assessor',
        description: 'Independent assessment by certified experts.',
      },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export const partners = [
  { name: 'Microsoft 365', src: '/images/partners/microsoft-365.png' },
  { name: 'Fortinet', src: '/images/partners/fortinet.svg' },
  { name: 'Dell', src: '/images/partners/dell.png' },
  { name: 'Cyber Essentials', src: '/images/partners/cyber-essentials.svg' },
  { name: 'Google Reviews', src: '/images/partners/google-reviews.png' },
  { name: 'Cisco', src: '/images/partners/cisco.png' },
];
