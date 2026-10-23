// Ready-made phone and WhatsApp links. Each is null until its number is filled in (not in [brackets]) in src/data/site.js.

import { siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";

const digits = (number) => number.replace(/[^\d]/g, "");

export const phoneLink = isReal(siteConfig.phone) ? `tel:+${digits(siteConfig.phone)}` : null;

export const whatsappLink = isReal(siteConfig.whatsapp)
  ? `https://wa.me/${digits(siteConfig.whatsapp)}?text=${encodeURIComponent("Hello NextGen HR, I would like to discuss a hiring need.")}`
  : null;
