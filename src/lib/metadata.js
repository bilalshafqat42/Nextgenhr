// Builds each page's title, description and canonical address for Google and social sharing.

import { siteConfig } from "@/data/site";

export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url: path,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
