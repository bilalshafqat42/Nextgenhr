// Structured data (JSON-LD): a hidden, machine-readable summary of NextGen for Google and AI assistants.
// It describes the business and the FAQ. Placeholders in [brackets] are left out automatically,
// so nothing unfinished is published to search engines.

import { faq, siteConfig, services } from "@/data/site";

const isReal = (value) => value && !value.includes("[");

export default function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
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
    knowsLanguage: ["en", "ar"],
    makesOffer: services.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.title, description: item.description },
    })),
  };

  const questions = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items
      .filter((item) => isReal(item.answer))
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
  };

  return [business, questions].map((data) => (
    <script
      key={data["@type"]}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  ));
}
