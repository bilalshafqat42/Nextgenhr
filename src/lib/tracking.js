// Helpers for Google Analytics, Google Ads and the Meta Pixel. IDs live in src/data/site.js (tracking).
// Nothing is sent unless the visitor has clicked "Accept" on the cookie banner.

import { tracking } from "@/data/site";
import { isReal } from "@/lib/content";

export const ids = {
  ga4: isReal(tracking.ga4) ? tracking.ga4 : null,
  googleAds: isReal(tracking.googleAds) ? tracking.googleAds : null,
  googleAdsLeadLabel: isReal(tracking.googleAdsLeadLabel) ? tracking.googleAdsLeadLabel : null,
  metaPixel: isReal(tracking.metaPixel) ? tracking.metaPixel : null,
};

// True once at least one tool has a real ID. Until then there is no banner and nothing loads.
export const trackingEnabled = Boolean(ids.ga4 || ids.googleAds || ids.metaPixel);

const CONSENT_KEY = "nextgen-cookie-consent";

// "granted", "denied" or null (not chosen yet). Storage can be blocked, so every access is guarded.
export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    if (value) localStorage.setItem(CONSENT_KEY, value);
    else localStorage.removeItem(CONSENT_KEY);
  } catch {}
  window.dispatchEvent(new Event("nextgen-consent-change"));
}

// Google's gtag() queue. Calls made before gtag.js has loaded are kept and sent once it loads.
export function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// Meta's fbq() queue, the same idea as gtag(): calls wait until fbevents.js has loaded.
export function fbq(...args) {
  if (!window.fbq) {
    const queue = function () {
      queue.callMethod ? queue.callMethod.apply(queue, arguments) : queue.queue.push(arguments);
    };
    queue.push = queue;
    queue.loaded = true;
    queue.version = "2.0";
    queue.queue = [];
    window.fbq = queue;
    window._fbq = window._fbq || queue;
  }
  window.fbq(...args);
}

// Set-up calls, safe to run more than once. Called when consent is given and before any event.
export function setupTags() {
  if (!window.nextgenTagsReady) {
    window.nextgenTagsReady = true;
    if (ids.ga4 || ids.googleAds) gtag("js", new Date());
    if (ids.ga4) gtag("config", ids.ga4);
    if (ids.googleAds) gtag("config", ids.googleAds);
    if (ids.metaPixel) fbq("init", ids.metaPixel);
  }
}

// Records one enquiry as a lead in every tool that is switched on. source: "contact" or "hire".
export function trackLead(source) {
  if (!trackingEnabled || getConsent() !== "granted") return;
  setupTags();
  if (ids.ga4) gtag("event", "generate_lead", { lead_source: source });
  if (ids.googleAds && ids.googleAdsLeadLabel) gtag("event", "conversion", { send_to: `${ids.googleAds}/${ids.googleAdsLeadLabel}` });
  if (ids.metaPixel) fbq("track", "Lead", { content_name: source });
}
