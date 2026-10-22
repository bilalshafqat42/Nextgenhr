// "Who we are" in one clear statement, plus a key facts list.
// Written so Google and AI assistants can quote NextGen accurately.

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/data/site";

export default function About() {
  return (
    <Section id="about" innerClassName="flex flex-wrap items-end gap-16 lg:gap-24">
      <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
        <SectionLabel>{about.label}</SectionLabel>
        <p className="font-display text-3xl leading-tight tracking-[-0.02em] sm:text-[40px]">
          {about.lead} <span className="text-muted">{about.rest}</span>
        </p>
      </div>

      <dl className="min-w-0 flex-[1_1_360px] border-t border-ink text-[15px]">
        {about.facts.map((fact) => (
          <div key={fact.label} className="grid grid-cols-2 border-b border-line py-4">
            <dt className="text-muted">{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
