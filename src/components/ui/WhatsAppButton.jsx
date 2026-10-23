// The round WhatsApp button fixed to the bottom-right corner of every page.
// It only appears once the WhatsApp number is filled in (not in [brackets]) in src/data/site.js.

import { whatsappLink } from "@/lib/contactLinks";

export default function WhatsAppButton() {
  if (!whatsappLink) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NextGen HR on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="#FFFFFF" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.3.6 4.54 1.75 6.52L3 29l6.65-1.74A13 13 0 0 0 16.04 29C23.2 29 29 23.17 29 16S23.2 3 16.04 3Zm0 23.8c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.95 1.03 1.05-3.84-.26-.4A10.76 10.76 0 0 1 5.24 16c0-5.95 4.85-10.8 10.8-10.8 5.94 0 10.77 4.85 10.77 10.8 0 5.95-4.83 10.8-10.77 10.8Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.37-.5-2.6-1.6-.97-.86-1.62-1.92-1.81-2.25-.19-.32-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  );
}
