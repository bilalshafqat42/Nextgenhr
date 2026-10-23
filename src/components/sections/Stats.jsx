// The row of big numbers. The first one ("20+") is shown in the accent colour.
// Numbers still in [brackets] are hidden until the real figures are added.

import Section from "@/components/ui/Section";
import { stats } from "@/data/site";
import { isReal } from "@/lib/content";

export default function Stats() {
  const shown = stats.filter((stat) => isReal(stat.value));
  if (shown.length === 0) return null;

  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-2 border-t border-ink lg:grid-cols-4">
        {shown.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2.5 pt-8 pr-8">
            <span
              className={`font-display text-6xl leading-none font-light tracking-[-0.05em] sm:text-[88px] lg:text-[clamp(4rem,6.5vw,6.5rem)] ${
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
