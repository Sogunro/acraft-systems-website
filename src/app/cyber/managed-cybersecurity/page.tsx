import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Managed Cybersecurity' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Cyber"
      title="Managed detection, response, and hardening — 24/7"
      lede="A modern attacker doesn't break in, they log in. We monitor your identity, endpoints and email continuously, and respond to threats while you sleep."
      imageSrc="/images/svc-cyber-managed.png"
      benefits={[
        { title: 'Detection across the full stack', description: 'Identity, endpoint, email, cloud and network — correlated into a single view.' },
        { title: 'Response, not just alerts', description: 'When something fires, we contain it. No forwarding 200 alerts a week for you to triage.' },
        { title: 'Quarterly hardening', description: 'We rotate through your configurations every 90 days, closing drift before attackers find it.' },
      ]}
      features={[
        '24/7 SOC monitoring with named on-call team',
        'Microsoft Defender / Sentinel deployment and tuning',
        'Endpoint detection and response (EDR/XDR)',
        'Email security and phishing protection',
        'Identity protection (Entra ID, conditional access)',
        'Vulnerability scanning and patch prioritisation',
        'Quarterly hardening reviews and reporting',
        'Incident response retainer with defined SLAs',
      ]}
      faq={[
        { q: 'How is this different from antivirus?', a: 'Antivirus blocks known-bad files. Managed cybersecurity adds 24/7 human analysis, behavioural detection, identity protection, and an active response — antivirus is one input among many.' },
        { q: 'What happens during an incident?', a: 'We isolate affected systems, preserve evidence, communicate with your team on a defined cadence, and lead recovery. A written post-incident report follows within 5 business days.' },
      ]}
    />
  );
}
