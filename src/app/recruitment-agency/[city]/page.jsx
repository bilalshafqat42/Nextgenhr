// /recruitment-agency/<city> — one page per city, built from src/data/locations.js.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
import ListBlock from "@/components/sections/ListBlock";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { getLocation, locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process } from "@/data/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }) {
  const location = getLocation((await params).city);
  if (!location) return {};
  return pageMetadata({
    title: location.seoTitle,
    description: location.description,
    path: `/recruitment-agency/${location.slug}`,
  });
}

export default async function LocationPage({ params }) {
  const location = getLocation((await params).city);
  if (!location) notFound();

  const path = `/recruitment-agency/${location.slug}`;
  const crumbs = [{ name: location.seoTitle, path }];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: `Recruitment in ${location.city}`, description: location.description, path }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero title={location.seoTitle} intro={location.intro} crumbs={crumbs} />
      <ListBlock title={`NextGen HR in ${location.city}`} items={location.points} />
      <LinkList
        title="Services"
        spacing="bottom"
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <LinkList title="Sectors" items={sectors.map((s) => ({ title: s.title, href: `/sectors/${s.slug}` }))} />
      <CtaBand title={`Hiring in ${location.city}? Send us your brief.`} />
    </>
  );
}
