// "Who we are" in one clear statement. Written so Google and AI assistants can quote NextGen accurately.
// On the home page it sits beside a dark brand panel with a link to /about.
// On the About page (facts={true}) the panel is swapped for the key facts list.

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import TextLink from "@/components/ui/TextLink";
import Logo from "@/components/ui/Logo";
import { about } from "@/data/site";

export default function About({ facts = false }) {
  return (
    <Section id="about" innerClassName="grid items-center gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
      <div className="flex min-w-0 flex-col gap-7">
        <SectionLabel>{about.label}</SectionLabel>
        <h2 className="flex flex-col gap-2 font-display font-medium tracking-[-0.035em]">
          <span className="text-[clamp(1.6rem,3.5vw,3.25rem)] leading-[1.05]">{about.titleLine1}</span>
          <span className="text-[clamp(1.12rem,2.45vw,2.275rem)] leading-[1.1] text-muted">{about.titleLine2}</span>
        </h2>
        <p className="max-w-[600px] text-lg leading-relaxed text-muted">{about.text}</p>
        {!facts && (
          <div>
            <TextLink href={about.link.href}>{about.link.label}</TextLink>
          </div>
        )}
      </div>

      {facts ? (
        <dl className="min-w-0 border-t border-ink text-[15px]">
          {about.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-2 border-b border-line py-4">
              <dt className="text-muted">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="relative flex aspect-[4/3] items-center justify-center bg-ink lg:aspect-square">
          <Logo theme="dark" className="text-[clamp(1.75rem,3vw,2.5rem)]" />
        </div>
      )}
    </Section>
  );
}
