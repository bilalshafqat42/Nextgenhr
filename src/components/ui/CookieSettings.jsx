"use client";

// "Cookie settings" link in the footer: clears the saved choice so the cookie banner shows again.

import { setConsent, trackingEnabled } from "@/lib/tracking";

export default function CookieSettings() {
  if (!trackingEnabled) return null;
  return (
    <button type="button" onClick={() => setConsent(null)} className="text-left hover:text-paper">
      Cookie settings
    </button>
  );
}
