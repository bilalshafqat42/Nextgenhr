// The home page, section by section, top to bottom.
// To add, remove or reorder a section, change the list below.

import LogoIntro from "@/components/intro/LogoIntro";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import ItemGrid from "@/components/sections/ItemGrid";
import JobSeekers from "@/components/sections/JobSeekers";
import LinkList from "@/components/sections/LinkList";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import JsonLd from "@/components/ui/JsonLd";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process, sectorsIntro, servicesIntro, whyUs } from "@/data/site";
import { organizationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <LogoIntro />
      <Hero />
      <About />
      <Stats />
      <LinkList
        id="services"
        spacing="bottom"
        title={servicesIntro.title}
        intro={servicesIntro.intro}
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <ItemGrid title={whyUs.title} items={whyUs.items} />
      <Testimonial />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <LinkList
        title={sectorsIntro.title}
        intro={sectorsIntro.intro}
        items={sectors.map((s) => ({ title: s.title, href: `/sectors/${s.slug}` }))}
      />
      <JobSeekers />
      <Faq />
      <Contact />
    </>
  );
}
