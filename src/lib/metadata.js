// Builds each page's title, description, canonical address and social share preview.
// The share image (/opengraph-image) is added to every page, so links shared on WhatsApp or LinkedIn show a preview.
// type: "website" for normal pages, "article" for blog posts.

import { siteConfig } from "@/data/site";

export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "NextGen HR: recruitment agency and HR consultancy in Dubai",
};

export function pageMetadata({ title, description, path, type = "website" }) {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_AE",
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [shareImage.url] },
  };
}
