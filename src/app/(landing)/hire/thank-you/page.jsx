// /hire/thank-you — shown after an enquiry from the Hire landing page.
// Google Ads counts a visit to this page as a conversion. Hidden from Google search.

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";

export const metadata = { title: "Request received", robots: { index: false } };

export default function HireThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank you. Your brief is with our team."
        intro="A recruiter will contact you on working days, Monday to Friday, to confirm the role, salary range and start date. Need to add details? Email info@nextgenhr.ae."
        crumbs={[{ name: "Hire", path: "/hire" }]}
      />
      <Section innerClassName="flex flex-wrap gap-10">
        <TextLink href="/services/recruitment">See how we recruit →</TextLink>
        <TextLink href="/blog/how-to-choose-a-recruitment-agency-in-dubai">Read: how to choose a recruitment agency →</TextLink>
      </Section>
    </>
  );
}
