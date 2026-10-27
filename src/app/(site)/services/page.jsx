// /services — the list of all services and common questions about choosing one.

import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { servicesFaq } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recruitment and HR Consultancy Services in the UAE",
  description:
    "NextGen HR services: recruitment, skilled workforce recruitment, Emiratisation hiring, executive search and HR consultancy for UAE employers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Services", path: "/services" }]), faqSchema(servicesFaq)]} />
      <PageHero
        title="Recruitment and HR consultancy services"
        intro="Five ways we help UAE employers hire well and set up HR properly. Every service sits under our two licensed activities: Human resources consultancy and Labor Recruitment Brokerage Office Services."
        crumbs={[{ name: "Services", path: "/services" }]}
      />
      <LinkList
        title="Our services"
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <Faq title="Choosing a service" byline={null} items={servicesFaq} />
      <CtaBand />
    </>
  );
}
