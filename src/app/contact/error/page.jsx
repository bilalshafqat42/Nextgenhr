// /contact/error — shown if an enquiry could not be sent. Hidden from Google.

import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata = { title: "Message not sent", robots: { index: false } };

export default function ErrorPage() {
  return (
    <>
      <PageHero
        title="Sorry, your message was not sent."
        intro="Please check that every field is filled in and try again, or email us directly."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section innerClassName="flex flex-wrap gap-6">
        <Link href="/contact" className="rounded-full bg-accent px-8 py-4 font-medium text-paper hover:opacity-90">
          Try again
        </Link>
        <a href={`mailto:${siteConfig.email}`} className="rounded-full border border-ink px-8 py-4 font-medium">
          Email {siteConfig.email}
        </a>
      </Section>
    </>
  );
}
