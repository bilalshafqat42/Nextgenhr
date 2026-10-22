// The whole home page, section by section, top to bottom.
// theme="copper" or theme="blue" switches the accent colour (defined in globals.css).
// To add, remove or reorder a section, change the list below.

import LogoIntro from "@/components/intro/LogoIntro";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import ItemGrid from "@/components/sections/ItemGrid";
import Testimonial from "@/components/sections/Testimonial";
import JobSeekers from "@/components/sections/JobSeekers";
import Faq from "@/components/sections/Faq";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";
import { process, whyUs } from "@/data/site";

export default function HomePage({ theme = "copper" }) {
  return (
    <div data-theme={theme} className="bg-paper text-ink">
      <LogoIntro />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <ItemGrid title={whyUs.title} items={whyUs.items} />
        <Testimonial />
        <ItemGrid title={process.title} items={process.items} prefix="Step" />
        <JobSeekers />
        <Faq />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
