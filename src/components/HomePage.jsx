// The whole home page, section by section, top to bottom.
// theme="copper" or theme="blue" switches the accent colour (defined in globals.css).
// To add, remove or reorder a section, change the list below.

import LogoIntro from "@/components/intro/LogoIntro";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Founder from "@/components/sections/Founder";
import Timeline from "@/components/sections/Timeline";
import Testimonial from "@/components/sections/Testimonial";
import Process from "@/components/sections/Process";
import JobSeekers from "@/components/sections/JobSeekers";
import Faq from "@/components/sections/Faq";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";

export default function HomePage({ theme = "copper" }) {
  return (
    <div data-theme={theme} className="bg-paper text-ink">
      <LogoIntro />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Founder />
        <Timeline />
        <Testimonial />
        <Process />
        <JobSeekers />
        <Faq />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
