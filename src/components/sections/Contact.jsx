// "Let's talk." Contact details on the left, enquiry form on the right.
// Email, phone, WhatsApp and hours appear only once they are filled in (not in [brackets]) in src/data/site.js.

import EnquiryForm from "@/components/ui/EnquiryForm";
import Section from "@/components/ui/Section";
import { contact, siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";
import { phoneLink, whatsappLink } from "@/lib/contactLinks";

export default function Contact() {
  const links = [
    isReal(siteConfig.email) && { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    phoneLink && { label: siteConfig.phone, href: phoneLink },
    whatsappLink && { label: "WhatsApp →", href: whatsappLink },
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

      <EnquiryForm className="min-w-0 flex-[1_1_480px] self-end" />
    </Section>
  );
}
