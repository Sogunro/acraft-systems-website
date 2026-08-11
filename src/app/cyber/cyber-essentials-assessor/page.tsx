import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'Cyber Essentials Assessor' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Cyber"
      title="Independent Cyber Essentials assessment"
      lede="We're certified Cyber Essentials assessors. If you need an independent body to assess your business — or your supply chain — we can certify on behalf of the scheme."
      imageSrc="/images/svc-cyber-assessor.png"
      benefits={[
        { title: 'Officially accredited', description: 'Active assessors under the Cyber Essentials scheme — your certificate is recognised industry-wide.' },
        { title: 'Supplier assessment programmes', description: 'Push certification down through your supply chain at scale, with consolidated reporting.' },
        { title: 'Fair, fixed pricing', description: 'Per-assessment fees disclosed up front. No surprise add-ons during the process.' },
      ]}
      features={[
        'Cyber Essentials assessment and certification',
        'Cyber Essentials Plus technical audit',
        'Supplier certification programmes',
        'Pre-assessment readiness reviews',
        'Remediation roadmaps after gap analysis',
        'Annual renewal coordination',
      ]}
      faq={[
        { q: 'Can you assess us if you also did the remediation work?', a: 'No. To preserve independence, the team doing the assessment is separate from the team doing remediation. If we did your remediation, a different assessor will certify you.' },
      ]}
    />
  );
}
