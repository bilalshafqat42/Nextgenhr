// Builders for structured data (JSON-LD): machine-readable facts for Google and AI assistants.
// Anything still in [brackets] is left out, so placeholders are never published to search engines.

import { siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";

const url = (path = "/") => new URL(path, siteConfig.url).toString();

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": url("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: isReal(siteConfig.phone) ? siteConfig.phone : undefined,
    email: isReal(siteConfig.email) ? siteConfig.email : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    knowsLanguage: ["en"],
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url(path),
    provider: { "@id": url("/#organization") },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
  };
}

export function faqSchema(items) {
  const answered = items.filter((item) => isReal(item.answer));
  if (answered.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

// crumbs: [{ name: "Services", path: "/services" }, …] — Home is added automatically.
export function breadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: url(crumb.path),
    })),
  };
}
