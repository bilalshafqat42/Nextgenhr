// The four hiring steps.

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { process } from "@/data/site";

export default function Process() {
  return (
    <Section innerClassName="flex flex-col gap-16">
      <Heading>{process.title}</Heading>
      <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3 border-t border-ink pt-5">
            <span className="text-sm text-accent">Step {index + 1}</span>
            <span className="font-display text-[26px] font-medium tracking-[-0.02em]">{step.title}</span>
            <span className="text-base leading-relaxed text-muted">{step.text}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
