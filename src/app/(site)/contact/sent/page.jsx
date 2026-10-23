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
        intro="We reply on working days, Monday to Friday. Job seekers: if you have not yet sent your CV, email it to info@nextgenhr.ae."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section innerClassName="flex flex-wrap gap-10">
        <TextLink href="/services">Explore our services →</TextLink>
        <TextLink href="/blog">Read our blog →</TextLink>
      </Section>
    </>
  );
}
