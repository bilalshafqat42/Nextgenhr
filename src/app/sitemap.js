// The list of pages for Google to index. Served at /sitemap.xml.
// Add each new page here (services, sectors, articles) as the site grows.

import { siteConfig } from "@/data/site";

export default function sitemap() {
  return [{ url: siteConfig.url, changeFrequency: "weekly", priority: 1 }];
}
