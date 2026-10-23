// Shown when a contact form enquiry could not be sent.
// reason (setup, login, network, other) is a short reference code to help diagnose the problem. It contains no private details.

import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export default function SendError({ reason }) {
  return (
    <>
      <PageHero
        title="Sorry, your message was not sent."
        intro="Please check that every field is filled in and try again, or email us directly."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section innerClassName="flex flex-col gap-8">
        <div className="flex flex-wrap gap-6">
          <Link href="/contact" className="rounded-full bg-accent px-8 py-4 font-medium text-paper hover:opacity-90">
            Try again
          </Link>
          <a href={`mailto:${siteConfig.email}`} className="rounded-full border border-ink px-8 py-4 font-medium">
            Email {siteConfig.email}
          </a>
        </div>
        {reason && <p className="text-sm text-muted">Reference: {reason}</p>}
      </Section>
    </>
  );
}
