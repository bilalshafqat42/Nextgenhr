// /sectors — the list of all sectors.

import CtaBand from "@/components/sections/CtaBand";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import JsonLd from "@/components/ui/JsonLd";
import { sectors } from "@/data/sectors";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sectors We Recruit For in the UAE",
  description:
    "Senior and specialist recruitment in the UAE for real estate, construction, hospitality, retail and technology employers, from a licensed Dubai agency.",
  path: "/sectors",
});

const sectorsIntro = [
  {
    heading: "The roles we recruit in every sector",
    paragraphs: [
      "Whatever the sector, we focus on the people who lead and shape a business: heads of department, senior managers and specialists. We do not recruit labour, entry-level or household staff.",
    ],
    items: [
      "Heads of department and general managers",
      "Senior managers in sales, operations, finance and HR",
      "Technical and professional specialists",
      "Emirati talent for long-term roles",
    ],
  },
  {
    heading: "HR support alongside hiring",
    paragraphs: [
      "Many of the companies we recruit for also need HR set up properly. Our HR consultancy covers policies, employee handbooks, team structure and salary benchmarking, so the people you hire join a company that is ready for them.",
    ],
  },
];

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
      <Prose sections={sectorsIntro} />
      <CtaBand />
    </>
  );
}
