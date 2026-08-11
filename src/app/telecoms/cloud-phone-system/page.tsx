import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Cloud Phone System' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Telecoms"
      title="Cloud phone system — one number, anywhere you work"
      lede="Replace your aging on-premise PBX with a modern, cloud-hosted phone system. Desk phones, mobile apps and softphones — all ringing on the same number, all centrally managed."
      imageSrc="/images/svc-cloud-phone.png"
      benefits={[
        { title: 'Work from anywhere', description: 'One number rings your desk, your mobile app and your laptop softphone — pick up wherever you are.' },
        { title: 'No on-site PBX', description: 'No hardware to maintain, no upgrades to plan. The platform improves continuously, in the background.' },
        { title: 'Predictable per-user pricing', description: 'A flat monthly fee per extension. Scale up and down as headcount changes.' },
      ]}
      features={[
        'Hosted VoIP platform (no on-site PBX)',
        'Desk phones, mobile app and softphone',
        'Call recording with secure retention',
        'IVR menus, hunt groups and queues',
        'Voicemail-to-email transcription',
        'Microsoft Teams integration',
        'Number porting from existing providers',
        'Real-time call analytics dashboard',
      ]}
      faq={[
        { q: 'Can we keep our existing numbers?', a: 'Yes. We handle the porting process end-to-end. There\'s no interruption to incoming calls during cutover.' },
      ]}
    />
  );
}
