// /recruitment-agency/<city> — one page per city, built from src/data/locations.js.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
import ListBlock from "@/components/sections/ListBlock";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import JsonLd from "@/components/ui/JsonLd";
import { getLocation, locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

// Every city page is built ahead of time; unknown addresses return a real 404.
export const ensureStatic = "navigation";

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
  const crumbs = [{ name: location.heading, path }];
  const otherCities = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: `Recruitment in ${location.city}`, description: location.description, path, city: location.city }),
          faqSchema(location.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero title={location.heading} intro={location.intro} crumbs={crumbs} />
      <ListBlock title={`NextGen HR in ${location.city}`} items={location.points} />
      <Prose sections={location.details} />
      <LinkList
        title="Services"
        spacing="bottom"
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <Faq title={`Recruitment in ${location.city}: questions`} byline={null} items={location.faq} />
      <LinkList
        title="Sectors"
        spacing="bottom"
        items={sectors.map((s) => ({ title: s.title, href: `/sectors/${s.slug}` }))}
      />
      <LinkList
        title="Other locations"
        items={otherCities.map((l) => ({ title: l.seoTitle, href: `/recruitment-agency/${l.slug}` }))}
      />
      <CtaBand title={`Hiring in ${location.city}? Send us your brief.`} />
    </>
  );
}
