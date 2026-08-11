import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Cyber Essentials' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Cyber"
      title="Get Cyber Essentials certified — without the headache"
      lede="Cyber Essentials is the recognised baseline. We take you from kick-off to certification, including the remediation work — not just the paperwork."
      imageSrc="/images/svc-cyber-essentials.png"
      benefits={[
        { title: 'Fixed-fee certification', description: 'One price covers assessment, remediation guidance and submission. No hourly meter.' },
        { title: 'We do the remediation', description: 'Many providers identify gaps and leave them with you. We close them.' },
        { title: 'Ready for renewals', description: 'We track your renewal date and start the next cycle 60 days early — no expiry surprises.' },
      ]}
      features={[
        'Scope definition and asset inventory',
        'Gap analysis against the five technical controls',
        'Remediation plan with engineering support',
        'SAQ (self-assessment questionnaire) completion',
        'Submission and liaison with certifying body',
        'Cyber Essentials Plus upgrade path',
        'Annual renewal management',
      ]}
      faq={[
        { q: 'How long does certification take?', a: 'For most SMBs, 4–6 weeks from kick-off to certificate — depending on the size of the estate and current state of controls.' },
        { q: 'What’s the difference between Cyber Essentials and Cyber Essentials Plus?', a: 'Essentials is a self-assessment we submit on your behalf. Plus adds an external technical audit (vulnerability scan, mock attack). Plus is required by some government and enterprise contracts.' },
      ]}
    />
  );
}
