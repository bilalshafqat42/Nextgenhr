// The bar fixed to the bottom of the screen on phones: "Send your brief" and WhatsApp, always one tap away.
// Hidden on tablets and computers, where the header button and the floating WhatsApp button do the same job.

import EnquiryLink from "@/components/ui/EnquiryLink";
import { whatsappLink } from "@/lib/contactLinks";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-paper/10 bg-ink sm:hidden">
      <EnquiryLink className="flex h-14 items-center justify-center bg-accent font-medium text-paper">Send your brief</EnquiryLink>
      {whatsappLink && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Employers: chat with NextGen HR on WhatsApp"
          className="flex h-14 items-center justify-center gap-2 font-medium text-paper"
        >
          <span aria-hidden="true" className="h-2 w-2 bg-[#25D366]" />
          WhatsApp
        </a>
      )}
    </div>
  );
}
