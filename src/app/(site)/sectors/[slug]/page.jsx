// /sectors/<slug> — one page per sector, built from src/data/sectors.js.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
import ListBlock from "@/components/sections/ListBlock";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { getSector, sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

// Every sector page is built ahead of time; unknown addresses return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }) {
  const sector = getSector((await params).slug);
  if (!sector) return {};
  return pageMetadata({ title: sector.seoTitle, description: sector.description, path: `/sectors/${sector.slug}` });
}

export default async function SectorPage({ params }) {
  const sector = getSector((await params).slug);
  if (!sector) notFound();

  const path = `/sectors/${sector.slug}`;
  const crumbs = [
    { name: "Sectors", path: "/sectors" },
    { name: sector.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: `${sector.title} recruitment`, description: sector.description, path }),
          faqSchema(sector.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero title={sector.heading} intro={sector.intro} crumbs={crumbs} />
      <ListBlock title="Roles we recruit" items={sector.roles} />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <Faq title={`${sector.title} recruitment: questions`} byline={null} items={sector.faq} />
      <LinkList
        title="Related services"
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <CtaBand />
    </>
  );
}
