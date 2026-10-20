// The home page. It just stacks the sections in order.
// To add a new section: create it in src/components/sections, then import it here.

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}
