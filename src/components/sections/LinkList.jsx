// A heading with a numbered list of links, each with a round arrow button.
// Used for services, sectors and related pages. items: [{ title, description, href }]

import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function LinkList({ id, title, intro, items, spacing = "full" }) {
  return (
    <Section id={id} spacing={spacing}>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <Heading>{title}</Heading>
        {intro && <p className="max-w-[400px] text-[17px] leading-relaxed text-muted">{intro}</p>}
      </div>

      <div className="border-t border-ink">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group grid grid-cols-[48px_1fr_56px] items-center gap-6 border-b border-line py-10 lg:grid-cols-[80px_1fr_1.1fr_56px]"
          >
            <span className="col-start-1 row-start-1 text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="col-start-2 row-start-1 font-display text-2xl font-medium tracking-[-0.025em] sm:text-4xl">
              {item.title}
            </h3>
            {item.description && (
              <p className="col-start-2 row-start-2 text-[17px] leading-relaxed text-muted lg:col-start-3 lg:row-start-1">
                {item.description}
              </p>
            )}
            <span className="col-start-3 row-start-1 flex h-14 w-14 items-center justify-center rounded-full border border-ink text-xl transition-colors group-hover:bg-ink group-hover:text-paper lg:col-start-4" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
