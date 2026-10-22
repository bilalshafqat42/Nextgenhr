// Tells search engines and AI crawlers what they may read. Served at /robots.txt.

import { siteConfig } from "@/data/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
