// /services/<slug> — one page per service, built from src/data/services.js.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { getService, services } from "@/data/services";
import { process } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.title, path },
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.description, path }),
          faqSchema(service.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero title={service.seoTitle} intro={service.intro} crumbs={crumbs} />
      <ItemGrid title="What's included" items={service.includes} />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <Faq title={`${service.title}: questions`} byline={`Licensed activity: ${service.licence}.`} items={service.faq} />
      <LinkList
        title="Other services"
        items={others.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <CtaBand />
    </>
  );
}
