// The enquiry form, used on the Contact page and the Hire landing page.
// It emails each enquiry to the company inbox (see src/lib/enquiry.js).
// source tells the email which page the enquiry came from ("contact" or "hire").
// Fields come from src/data/site.js; multiline fields become a text box.

import Link from "next/link";
import { OpenedAt, SubmitButton } from "@/components/ui/FormControls";
import { contact } from "@/data/site";
import { sendEnquiry } from "@/lib/enquiry";

const inputClass = "border-b border-ink bg-transparent text-lg text-ink outline-none focus:border-accent";

// Shows the consent sentence with "Privacy Policy" as a link.
function ConsentText({ text }) {
  const [before, after] = text.split("Privacy Policy");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
        Privacy Policy
      </Link>
      {after}
    </>
  );
}

export default function EnquiryForm({ fields = contact.fields, button = contact.button, source = "contact", className = "" }) {
  return (
    <form action={sendEnquiry} className={`flex flex-col gap-7 ${className}`}>
      <input type="hidden" name="source" value={source} />
      <OpenedAt />
      {fields.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-sm text-muted">
          {field.label}
          {field.multiline ? (
            <textarea
              name={field.name}
              required={field.required}
              maxLength={field.maxLength}
              rows={3}
              className={`${inputClass} resize-y py-2`}
            />
          ) : (
            <input
              type="text"
              name={field.name}
              required={field.required}
              maxLength={field.maxLength}
              autoComplete={field.autoComplete}
              className={`${inputClass} h-12`}
            />
          )}
        </label>
      ))}
      {/* Spam trap: hidden from people, but bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-2.5 text-[13px] leading-normal text-muted">
        <input type="checkbox" name="consent" required className="mt-1 accent-[var(--accent)]" />
        <span>
          <ConsentText text={contact.consent} />
        </span>
      </label>
      <SubmitButton>{button}</SubmitButton>
    </form>
  );
}
