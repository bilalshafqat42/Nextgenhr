// The home page, section by section, top to bottom.
// To add, remove or reorder a section, change the list below.

import LogoIntro from "@/components/intro/LogoIntro";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CtaBand from "@/components/sections/CtaBand";
import ExploreLinks from "@/components/sections/ExploreLinks";
import Faq from "@/components/sections/Faq";
import FeatureBand from "@/components/sections/FeatureBand";
import Hero from "@/components/sections/Hero";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
// The job seekers section (JobSeekers) is hidden: the site speaks to employers. To show it again, import it and add <JobSeekers /> above <Faq />.
// Stats (the six-tile key facts grid) is hidden for now. To show it again, add back:
//   import Stats from "@/components/sections/Stats";  and  <Stats />  below <About />
import Testimonial from "@/components/sections/Testimonial";
import TrustStrip from "@/components/sections/TrustStrip";
import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { process, realEstateBand, sectorsIntro, servicesIntro, siteConfig, whyUs } from "@/data/site";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

// The home page is the main page for "recruitment agency in Dubai".
export const metadata = {
  ...pageMetadata({ title: siteConfig.title, description: siteConfig.description, path: "/" }),
  title: { absolute: siteConfig.title },
};

export default function HomePage() {
  const latestPosts = getPosts().slice(0, 3);

  // The employer journey: proof first, then what we do, our strongest sector, how it works, why us, answers, contact.
  return (
    <>
      <LogoIntro />
      <Hero />
      <TrustStrip />
      <LinkList
        id="services"
        title={servicesIntro.title}
        intro={servicesIntro.intro}
        items={services.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <FeatureBand content={realEstateBand} />
      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <ItemGrid title={whyUs.title} items={whyUs.items} />
      <Testimonial />
      <About />
      <CtaBand />
      <Faq />
      <ExploreLinks
        columns={[
          { title: sectorsIntro.title, links: sectors.map((s) => ({ label: s.title, href: `/sectors/${s.slug}` })) },
          { title: "Where we work", links: locations.map((l) => ({ label: l.city, href: `/recruitment-agency/${l.slug}` })) },
          { title: "Latest guides", links: latestPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })) },
        ]}
      />
      <Contact />
    </>
  );
}
