// A heading with a row of numbered items. Used for "Why companies hire with NextGen" and "How hiring works".
// prefix="Step" labels items "Step 1, Step 2…"; leave it out to label them "01, 02…".

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function ItemGrid({ title, items, prefix }) {
  return (
    <Section innerClassName="flex flex-col gap-16">
      <Heading className="max-w-[900px]">{title}</Heading>
      <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-3 border-t border-ink pt-5">
            <span className="text-sm text-accent">{prefix ? `${prefix} ${index + 1}` : `0${index + 1}`}</span>
            <h3 className="font-display text-[26px] leading-tight font-medium tracking-[-0.02em]">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
