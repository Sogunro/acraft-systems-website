import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate';
export const metadata = { title: 'IT Consulting' };
export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="IT Services"
      title="Strategic IT consulting, free of vendor bias"
      lede="We are independent. We don't resell hardware quotas or chase referral fees. Our consulting recommends the right answer — even when the right answer is 'don't buy that yet.'"
      imageSrc="/images/svc-consulting.png"
      benefits={[
        { title: 'Vendor-independent', description: 'No commissions, no quotas. Our recommendations are about your business, not our pipeline.' },
        { title: 'Plain-language deliverables', description: 'Roadmaps your board can read without a translator. Numbers, risks, decisions.' },
        { title: 'Delivery, not just slides', description: 'We can also execute. One firm from strategy through to go-live, if you want.' },
      ]}
      features={[
        'Current-state IT assessment and risk register',
        '12 / 24 / 36-month technology roadmap',
        'Cloud migration planning (Azure, AWS, M365)',
        'Vendor evaluation and contract negotiation',
        'Budget planning and total cost of ownership models',
        'M&A IT due diligence',
        'Compliance gap analysis (Cyber Essentials, ISO 27001)',
        'Board-level reporting and presentations',
      ]}
      faq={[
        { q: 'How is consulting priced?', a: 'Fixed-fee for defined engagements (assessments, roadmaps), or daily rate for advisory retainers. We agree the scope and number in writing before we start.' },
      ]}
    />
  );
}
