import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Microsoft 365' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Connectivity"
      title="Microsoft 365, deployed properly and supported every day"
      lede="Most M365 tenants are running with the defaults Microsoft shipped on day one. We deploy, secure, and support yours — so your team gets the platform they were promised."
      imageSrc="/images/svc-m365.png"
      benefits={[
        { title: 'Licence optimisation', description: 'We audit your licence mix every quarter. Most clients save 15–25% within the first review.' },
        { title: 'Secured by default', description: 'MFA, conditional access, DLP and Defender for M365 — configured against the latest guidance.' },
        { title: 'End-user adoption', description: 'Onboarding sessions, cheat sheets and office hours. People actually use what you pay for.' },
      ]}
      features={[
        'Tenant design and migration from Google or on-premises',
        'Exchange Online configuration and mail flow rules',
        'SharePoint and OneDrive information architecture',
        'Microsoft Teams rollout with governance',
        'Entra ID and conditional access policies',
        'Defender for Office 365 anti-phishing',
        'Backup of all M365 data',
        'Quarterly licence and usage reviews',
      ]}
      faq={[
        { q: 'Are you a Microsoft partner?', a: 'Yes. We hold Microsoft partner status and can provision licences directly through our CSP, with consolidated monthly billing.' },
      ]}
    />
  );
}
