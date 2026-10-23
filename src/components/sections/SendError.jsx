// Shown when a contact form enquiry could not be sent.
// reason is a short reference code (setup, login, network, busy, other) to help diagnose the problem.
// It contains no private details. No reason means required details were missing.

import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

const messages = {
  missing:
    "Some required details were missing. Please fill in your name, contact details and message, tick the consent box and try again.",
  busy: "We have received several messages from you in a short time. Please wait a few minutes and try again, or email us directly.",
  server: `Something went wrong on our side and your message was not sent. Please email us at ${siteConfig.email}, or try again in a few minutes.`,
};

export default function SendError({ reason }) {
  const intro = !reason ? messages.missing : reason === "busy" ? messages.busy : messages.server;

  return (
    <>
      <PageHero title="Sorry, your message was not sent." intro={intro} crumbs={[{ name: "Contact", path: "/contact" }]} />
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
