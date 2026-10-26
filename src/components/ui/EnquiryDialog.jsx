"use client";

// The enquiry form in a popup, so visitors can send a brief without leaving the page they are reading.
// Opened by any EnquiryLink (the "Hire talent" and "Send your brief" buttons). The form itself is passed in
// as children from the server. Closes with the X, the Escape key, a click outside, or after moving page.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const DIALOG_ID = "enquiry-dialog";

export default function EnquiryDialog({ title, intro, quickLinks = [], children }) {
  const dialog = useRef(null);
  const pathname = usePathname();

  // Close after the form is sent (the thank-you page loads) or after any other page change.
  useEffect(() => {
    if (dialog.current?.open) dialog.current.close();
  }, [pathname]);

  return (
    <dialog
      ref={dialog}
      id={DIALOG_ID}
      aria-labelledby={`${DIALOG_ID}-title`}
      // A click on the dark area around the panel closes it.
      onClick={(event) => event.target === dialog.current && dialog.current.close()}
      className="m-auto max-h-[92svh] w-[min(560px,calc(100vw-24px))] overflow-y-auto bg-paper p-0 text-ink backdrop:bg-ink/70"
    >
      <div className="flex flex-col gap-6 p-6 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <h2 id={`${DIALOG_ID}-title`} className="font-display text-3xl leading-tight font-medium tracking-[-0.03em] sm:text-4xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => dialog.current.close()}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink text-xl hover:bg-ink hover:text-paper"
          >
            ×
          </button>
        </div>
        <p className="text-base leading-relaxed text-muted">{intro}</p>
        {quickLinks.length > 0 && (
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`rounded-full px-4 py-2.5 ${link.whatsapp ? "bg-[#25D366] text-ink" : "border border-ink"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {children}
      </div>
    </dialog>
  );
}
