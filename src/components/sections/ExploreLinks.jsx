// "Explore": sectors, locations and the latest guides in three compact columns near the bottom of the home page.
// Keeps these links for Google and curious visitors without breaking up the main journey.
// columns: [{ title, links: [{ label, href }] }]

import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function ExploreLinks({ title = "Explore", columns }) {
  return (
    <Section spacing="bottom">
      <Heading className="mb-12">{title}</Heading>
      <div className="grid gap-12 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col border-t border-ink pt-5">
            <h3 className="mb-4 text-sm font-medium tracking-[0.08em] text-accent uppercase">{column.title}</h3>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center justify-between gap-4 border-b border-line py-4 text-lg">
                <span>{link.label}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
