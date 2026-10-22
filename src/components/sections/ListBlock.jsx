// A heading with a simple two-column list, e.g. "Roles we recruit" on sector pages.

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function ListBlock({ title, items, spacing = "full" }) {
  return (
    <Section spacing={spacing} innerClassName="flex flex-col gap-12">
      <Heading>{title}</Heading>
      <ul className="grid grid-cols-1 gap-x-10 border-t border-ink sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="border-b border-line py-5 text-lg">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
