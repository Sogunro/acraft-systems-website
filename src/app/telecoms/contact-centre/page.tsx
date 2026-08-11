import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Contact Centre' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Telecoms"
      title="Contact centre — omnichannel, intelligent, in the cloud"
      lede="Serve your customers on whatever channel they choose: voice, email, webchat, WhatsApp or social. Unified into one agent desktop with real-time supervisor insight."
      imageSrc="/images/svc-contact-centre.png"
      benefits={[
        { title: 'One agent desktop', description: 'Voice, chat, email and social in a single interface. No alt-tabbing, no context loss between channels.' },
        { title: 'Skills-based routing', description: 'Match each contact to the best-fit agent based on language, skill, history and current load.' },
        { title: 'Real-time and historical analytics', description: 'Live wallboards for supervisors, deep historical reporting for management and QA.' },
      ]}
      features={[
        'Voice, email, webchat, WhatsApp, SMS',
        'Skills-based and priority routing',
        'IVR and self-service automation',
        'Call recording and quality scorecards',
        'Real-time dashboards and wallboards',
        'CRM integrations (Salesforce, HubSpot, Dynamics)',
        'Workforce management add-on',
      ]}
    />
  );
}
