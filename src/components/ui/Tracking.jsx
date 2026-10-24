"use client";

// The cookie banner and the analytics and advertising tags.
// Shown only when at least one tracking ID is set in src/data/site.js. The tags load only after "Accept".

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { fbq, getConsent, ids, setConsent, setupTags, trackingEnabled } from "@/lib/tracking";

export default function Tracking() {
  const [consent, setConsentState] = useState("unknown");
  const pathname = usePathname();

  // Read the saved choice after the page loads, and again whenever it changes (e.g. "Cookie settings").
  useEffect(() => {
    const read = () => setConsentState(getConsent());
    read();
    window.addEventListener("nextgen-consent-change", read);
    return () => window.removeEventListener("nextgen-consent-change", read);
  }, []);

  const granted = consent === "granted";

  // Set up the tags once consent is given. GA4 then tracks page changes by itself;
  // Meta needs a page view sent on every page change.
  useEffect(() => {
    if (!granted) return;
    setupTags();
    if (ids.metaPixel) fbq("track", "PageView");
  }, [granted, pathname]);

  if (!trackingEnabled) return null;

  const googleId = ids.ga4 || ids.googleAds;

  return (
    <>
      {granted && googleId && <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`} strategy="afterInteractive" />}
      {granted && ids.metaPixel && <Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" />}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie choices"
          className="fixed inset-x-3 bottom-3 z-50 flex flex-col gap-4 border border-paper/15 bg-ink p-5 text-sm text-text-on-dark shadow-2xl sm:right-auto sm:left-5 sm:bottom-5 sm:max-w-[420px]"
        >
          <p>
            We use cookies to see how visitors use our site and to measure our advertising. You can accept or reject them.{" "}
            <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-paper">
              Cookie Policy
            </Link>
          </p>
          <div className="flex gap-3">
            <button type="button" onClick={() => setConsent("granted")} className="rounded-full bg-paper px-5 py-2.5 font-medium text-ink hover:opacity-85">
              Accept
            </button>
            <button type="button" onClick={() => setConsent("denied")} className="rounded-full border border-paper/40 px-5 py-2.5 font-medium text-paper hover:bg-paper/10">
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
}
