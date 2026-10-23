// /contact/sent — shown after an enquiry is sent. Hidden from Google.

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";

export const metadata = { title: "Message sent", robots: { index: false } };

export default function SentPage() {
  return (
    <>
      <PageHero
        title="Thank you. Your message is on its way."
        intro="Our team will get back to you as soon as possible on working days."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section innerClassName="flex flex-wrap gap-10">
        <TextLink href="/services">Explore our services →</TextLink>
        <TextLink href="/">Back to the home page →</TextLink>
      </Section>
    </>
  );
}
