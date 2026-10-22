// The founder's two decades in the UAE, as a simple row of years.

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { timeline } from "@/data/site";

export default function Timeline() {
  return (
    <Section innerClassName="flex flex-col gap-16">
      <Heading className="max-w-[900px]">{timeline.title}</Heading>
      <ol className="grid grid-cols-1 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
        {timeline.items.map((item, index) => (
          <li key={index} className="flex flex-col gap-3 pt-7 pr-8 pb-6">
            <span className="font-display text-5xl font-light tracking-[-0.04em] sm:text-[56px]">{item.year}</span>
            <span className="text-base leading-relaxed text-muted">{item.text}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
