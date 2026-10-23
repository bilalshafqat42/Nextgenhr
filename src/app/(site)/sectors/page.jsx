// /sectors — the list of all sectors.

import CtaBand from "@/components/sections/CtaBand";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { sectors } from "@/data/sectors";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sectors We Recruit For in the UAE",
  description:
    "Sector recruitment in the UAE for real estate, construction, hospitality, retail and technology employers. Screened shortlists from a licensed Dubai agency.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Sectors", path: "/sectors" }])} />
      <PageHero
        title="Sectors we recruit for"
        intro="Each sector hires differently. We bring sector knowledge to every search, so you meet candidates who already understand your business."
        crumbs={[{ name: "Sectors", path: "/sectors" }]}
      />
      <LinkList
        title="Our sectors"
        items={sectors.map((s) => ({ title: s.title, description: s.description, href: `/sectors/${s.slug}` }))}
      />
      <CtaBand />
    </>
  );
}
