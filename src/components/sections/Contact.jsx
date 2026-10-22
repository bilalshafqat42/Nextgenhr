// "Let's talk." Contact details on the left, enquiry form on the right.
// The form is not connected yet. Later it will send enquiries to the client's email or CRM.

import Section from "@/components/ui/Section";
import { contact, siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact" innerClassName="flex flex-wrap gap-16 lg:gap-24">
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-9">
        <h2 className="font-display text-7xl leading-[0.92] font-medium tracking-[-0.05em] sm:text-[112px]">
          {contact.title}
        </h2>
        <div className="flex flex-col gap-2.5 font-display text-2xl tracking-[-0.02em] sm:text-[28px]">
          <a href="#" className="hover:text-accent">{siteConfig.email}</a>
          <a href="#" className="hover:text-accent">{siteConfig.phone}</a>
          <a href="#" className="hover:text-accent">WhatsApp →</a>
        </div>
        <address className="text-base leading-[1.7] text-muted not-italic">
          {siteConfig.address[0]}
          <br />
          {siteConfig.address[1]}
          <br />
          {siteConfig.hours}
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
