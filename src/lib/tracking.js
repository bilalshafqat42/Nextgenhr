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

// What each kind of link click is called in Google Analytics. "lead" clicks are ways an employer
// contacts us, also sent to Meta as a Contact. Job seeker CV emails are kept separate on purpose.
const clickEvents = {
  whatsapp: { name: "whatsapp_click", lead: true },
  phone: { name: "phone_click", lead: true },
  email: { name: "email_click", lead: true },
  cvEmail: { name: "cv_email_click", lead: false },
  profile: { name: "profile_download", lead: false },
  brief: { name: "brief_open", lead: false },
};

// Works out which kind of link was clicked, or null for links we do not track.
export function clickType(href, pathname) {
  if (!href) return null;
  if (/wa\.me\/|whatsapp\.com\//i.test(href)) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) {
    const subject = decodeURIComponent(href.split("subject=")[1] || "");
    return pathname === "/job-seekers" || /^CV\b/i.test(subject) ? "cvEmail" : "email";
  }
  const path = href.startsWith("/") ? href.split(/[?#]/)[0] : href.replace(/^https?:\/\/(www\.)?nextgenhr\.ae/i, "").split(/[?#]/)[0];
  if (path.endsWith(".pdf")) return "profile";
  if (path === "/contact") return "brief";
  return null;
}

// Records one link click (only for visitors who accepted cookies).
// link_area says where on the page it was: header, footer, mobile bar, floating button or the page itself.
export function trackClick(type, { pathname, area, text }) {
  const event = clickEvents[type];
  if (!event || !trackingEnabled || getConsent() !== "granted") return;
  setupTags();
  if (ids.ga4) gtag("event", event.name, { page_path: pathname, link_area: area, link_text: text });
  if (ids.metaPixel && event.lead) fbq("track", "Contact", { content_name: type });
}

// Records one enquiry as a lead in every tool that is switched on. source: "contact" or "hire".
export function trackLead(source) {
  if (!trackingEnabled || getConsent() !== "granted") return;
  setupTags();
  if (ids.ga4) gtag("event", "generate_lead", { lead_source: source });
  if (ids.googleAds && ids.googleAdsLeadLabel) gtag("event", "conversion", { send_to: `${ids.googleAds}/${ids.googleAdsLeadLabel}` });
  if (ids.metaPixel) fbq("track", "Lead", { content_name: source });
}
