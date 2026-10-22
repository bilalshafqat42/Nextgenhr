// The row of big numbers. The first one ("20+") is shown in the accent colour.

import Section from "@/components/ui/Section";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-2 border-t border-ink lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2.5 pt-8 pr-8">
            <span
              className={`font-display text-6xl leading-none font-light tracking-[-0.05em] sm:text-[104px] ${
                stat.highlight ? "text-accent" : ""
              }`}
            >
              {stat.value}
            </span>
            <span className="text-[15px] text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
