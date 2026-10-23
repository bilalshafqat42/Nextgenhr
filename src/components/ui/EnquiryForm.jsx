// The enquiry form, used on the Contact page and the Hire landing page.
// It emails each enquiry to the company inbox (see src/app/contact/actions.js).
// source tells the email which page the enquiry came from ("contact" or "hire").

import { sendEnquiry } from "@/app/contact/actions";
import { contact } from "@/data/site";

export default function EnquiryForm({ fields = contact.fields, button = contact.button, source = "contact", className = "" }) {
  return (
    <form action={sendEnquiry} className={`flex flex-col gap-7 ${className}`}>
      <input type="hidden" name="source" value={source} />
      {fields.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-sm text-muted">
          {field.label}
          <input
            type="text"
            name={field.name}
            required={field.required}
            autoComplete={field.autoComplete}
            className="h-12 border-b border-ink bg-transparent text-lg text-ink outline-none focus:border-accent"
          />
        </label>
      ))}
      {/* Spam trap: hidden from people, but bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-2.5 text-[13px] leading-normal text-muted">
        <input type="checkbox" name="consent" required className="mt-1 accent-[var(--accent)]" />
        {contact.consent}
      </label>
      <button type="submit" className="h-14 self-start rounded-full bg-accent px-9 font-medium text-paper hover:opacity-90">
        {button}
      </button>
    </form>
  );
}
