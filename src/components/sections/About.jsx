// "Who we are" in one clear statement, plus a key facts list.
// Written so Google and AI assistants can quote NextGen accurately.

import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about">
      <Container className="flex flex-wrap items-end gap-16 pt-28 pb-24 lg:gap-24 lg:pt-40">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
          <SectionLabel>{about.label}</SectionLabel>
          <p className="font-display text-3xl leading-tight tracking-[-0.02em] sm:text-[40px]">
            {about.lead} <span className="text-muted">{about.rest}</span>
          </p>
        </div>

        <dl className="grid min-w-0 flex-[1_1_360px] grid-cols-2 border-t border-ink text-[15px]">
          {about.facts.map((fact) => (
            <div key={fact.label} className="col-span-2 grid grid-cols-2 border-b border-line py-4">
              <dt className="text-muted">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
