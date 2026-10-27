// /about — the company story, key facts and licensed activities.

import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import ListBlock from "@/components/sections/ListBlock";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import JsonLd from "@/components/ui/JsonLd";
import { aboutPage, siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us: Licensed Recruitment and HR Consultancy",
  description: aboutPage.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero title={aboutPage.title} intro={aboutPage.intro} crumbs={[{ name: "About", path: "/about" }]} />
      <Prose
        sections={[
          ...aboutPage.sections,
          { heading: "How we work", paragraphs: aboutPage.principles },
        ]}
      />
      <About facts />
      <ListBlock
        title="Licensed activities"
        items={siteConfig.activities.map((a) => `${a.name} (${a.code})`)}
        spacing="bottom"
      />
      <CtaBand />
    </>
  );
}
