import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Microsoft Teams' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Telecoms"
      title="Microsoft Teams calling and meeting-room kits"
      lede="Make Teams your phone system. We enable Teams Phone, port your numbers, and kit out your meeting rooms with certified hardware — managed end-to-end."
      imageSrc="/images/svc-teams.png"
      benefits={[
        { title: 'One app for everything', description: 'Calls, meetings, chat and collaboration in the same app your team already uses every day.' },
        { title: 'Certified room hardware', description: 'Teams Rooms by Logitech, Poly and Yealink — designed, installed and supported.' },
        { title: 'Direct Routing flexibility', description: 'We supply minutes via Direct Routing, often at lower cost than Microsoft\'s Calling Plans.' },
      ]}
      features={[
        'Teams Phone deployment and licensing',
        'Direct Routing for inbound and outbound calls',
        'Number porting from any UK provider',
        'Teams Rooms hardware design and install',
        'Auto attendants and call queues',
        'Compliance recording and analytics',
      ]}
    />
  );
}
