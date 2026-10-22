// The list of pages for Google to index. Served at /sitemap.xml.
// Service, sector and city pages are added automatically from their data files.

import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const pages = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
  { path: "/sectors", priority: 0.8 },
  ...sectors.map((s) => ({ path: `/sectors/${s.slug}`, priority: 0.8 })),
  ...locations.map((l) => ({ path: `/recruitment-agency/${l.slug}`, priority: 0.8 })),
  { path: "/about", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/cookie-policy", priority: 0.2 },
];

export default function sitemap() {
  return pages.map((page) => ({ url: new URL(page.path, siteConfig.url).toString(), priority: page.priority }));
}
