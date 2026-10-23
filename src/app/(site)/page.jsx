// The home page, section by section, top to bottom.
// To add, remove or reorder a section, change the list below.

import LogoIntro from "@/components/intro/LogoIntro";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import ItemGrid from "@/components/sections/ItemGrid";
import JobSeekers from "@/components/sections/JobSeekers";
import LinkList from "@/components/sections/LinkList";
// Stats (the six-tile key facts grid) is hidden for now. To show it again, add back:
//   import Stats from "@/components/sections/Stats";  and  <Stats />  below <About />
import Testimonial from "@/components/sections/Testimonial";
import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process, sectorsIntro, servicesIntro, siteConfig, whyUs } from "@/data/site";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

// The home page is the main page for "recruitment agency in Dubai".
export const metadata = {
  ...pageMetadata({ title: siteConfig.title, description: siteConfig.description, path: "/" }),
  title: { absolute: siteConfig.title },
};

export default function HomePage() {
  const latestPosts = getPosts().slice(0, 3);

  return (
    <>
      <LogoIntro />
      <Hero />
      <About />
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
      <CtaBand />
      <LinkList
        title={sectorsIntro.title}
        intro={sectorsIntro.intro}
        items={sectors.map((s) => ({ title: s.title, href: `/sectors/${s.slug}` }))}
      />
      <LinkList
        title="Where we work"
        spacing="bottom"
        items={locations.map((l) => ({ title: l.seoTitle, href: `/recruitment-agency/${l.slug}` }))}
      />
      <JobSeekers />
      <Faq />
      {latestPosts.length > 0 && (
        <LinkList
          title="From the blog"
          items={latestPosts.map((p) => ({ title: p.title, description: p.description, href: `/blog/${p.slug}` }))}
        />
      )}
      <Contact />
    </>
  );
}
