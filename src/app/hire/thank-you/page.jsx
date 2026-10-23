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
        title="Thank you. We have your request."
        intro="Our team will contact you as soon as possible on working days to discuss the role."
        crumbs={[{ name: "Hire", path: "/hire" }]}
      />
      <Section innerClassName="flex flex-wrap gap-10">
        <TextLink href="/services">Explore our services →</TextLink>
        <TextLink href="/">Visit our website →</TextLink>
      </Section>
    </>
  );
}
