// Builders for structured data (JSON-LD): machine-readable facts for Google and AI assistants.
// Anything still in [brackets] is left out, so placeholders are never published to search engines.

import { siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";

const url = (path = "/") => new URL(path, siteConfig.url).toString();
const organization = { "@id": url("/#organization") };

// The business itself. Printed on every page (from the root layout) so other schemas can refer to it.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": organization["@id"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    url: url("/"),
    image: url("/opengraph-image"),
    description: siteConfig.description,
    foundingDate: siteConfig.foundingYear,
    telephone: isReal(siteConfig.phone) ? siteConfig.phone : undefined,
    email: isReal(siteConfig.email) ? siteConfig.email : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address[0]}, Nad Al Sheba`,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    knowsAbout: ["Recruitment", "HR consultancy", "Executive search", "Emiratisation hiring"],
    knowsLanguage: ["en"],
    sameAs: siteConfig.social.map((s) => s.url).filter(isReal),
  };
}

// The website, which helps Google show the right site name in search results.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: url("/"),
    publisher: organization,
  };
}

// city: optional, for city pages, so the service is tied to that city.
export function serviceSchema({ name, description, path, city }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: url(path),
    provider: organization,
    areaServed: city ? { "@type": "City", name: city } : { "@type": "Country", name: "United Arab Emirates" },
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

export function articleSchema({ title, description, date, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: url("/opengraph-image"),
    datePublished: date,
    dateModified: date,
    author: organization,
    publisher: organization,
    mainEntityOfPage: url(path),
  };
}
