// "Let's talk." Contact details on the left, enquiry form on the right.
// Email, phone, WhatsApp and hours appear only once they are filled in (not in [brackets]) in src/data/site.js.
// The form is not connected yet. Later it will send enquiries to the client's email or CRM.

import Section from "@/components/ui/Section";
import { contact, siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";

const digits = (number) => number.replace(/[^\d]/g, "");

export default function Contact() {
  const links = [
    isReal(siteConfig.email) && { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    isReal(siteConfig.phone) && { label: siteConfig.phone, href: `tel:+${digits(siteConfig.phone)}` },
    isReal(siteConfig.whatsapp) && { label: "WhatsApp →", href: `https://wa.me/${digits(siteConfig.whatsapp)}` },
  ].filter(Boolean);

  return (
    <Section id="contact" innerClassName="flex flex-wrap gap-16 lg:gap-24">
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-9">
        <h2 className="font-display text-7xl leading-[0.92] font-medium tracking-[-0.05em] sm:text-[112px]">
          {contact.title}
        </h2>
        {links.length > 0 && (
          <div className="flex flex-col gap-2.5 font-display text-2xl tracking-[-0.02em] sm:text-[28px]">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        )}
        <address className="text-base leading-[1.7] text-muted not-italic">
          {siteConfig.address[0]}
          <br />
          {siteConfig.address[1]}
          {isReal(siteConfig.hours) && (
            <>
              <br />
              {siteConfig.hours}
            </>
          )}
        </address>
      </div>

      <form className="flex min-w-0 flex-[1_1_480px] flex-col gap-7 self-end">
        {contact.fields.map((field) => (
          <label key={field} className="flex flex-col gap-1.5 text-sm text-muted">
            {field}
            <input
              type="text"
              className="h-12 border-b border-ink bg-transparent text-lg text-ink outline-none focus:border-accent"
            />
          </label>
        ))}
        <label className="flex items-start gap-2.5 text-[13px] leading-normal text-muted">
          <input type="checkbox" className="mt-1 accent-[var(--accent)]" />
          {contact.consent}
        </label>
        <button
          type="button"
          className="h-14 self-start rounded-full bg-accent px-9 font-medium text-paper hover:opacity-90"
        >
          {contact.button}
        </button>
      </form>
    </Section>
  );
}
