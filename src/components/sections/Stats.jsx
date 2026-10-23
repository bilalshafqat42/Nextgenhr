// The four key facts as cards, each with a small line icon. The first card ("20+") is bronze.
// Numbers still in [brackets] are hidden until the real figures are added.
// To add a card, give it an icon name from the list below.

import Section from "@/components/ui/Section";
import { stats } from "@/data/site";
import { isReal } from "@/lib/content";

const icons = {
  // Briefcase: years of experience
  experience: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  // Two linked rings: hired directly
  direct: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </>
  ),
  // Shield with a tick: no fees for candidates
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  // Map pin: founded in Dubai
  location: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
};

export default function Stats() {
  const shown = stats.filter((stat) => isReal(stat.value));
  if (shown.length === 0) return null;

  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-8 p-7 sm:gap-12 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,20,24,0.35)] ${
              stat.highlight ? "bg-accent text-paper" : "border border-line bg-white"
            }`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center ${
                stat.highlight ? "bg-paper/15 text-paper" : "bg-stone text-accent"
              }`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {icons[stat.icon]}
              </svg>
            </span>
            <div className="flex flex-col gap-3">
              <span className="font-display text-[clamp(3rem,4.2vw,4.25rem)] leading-none font-light tracking-[-0.05em] whitespace-nowrap">
                {stat.value}
              </span>
              <span className={`text-[15px] leading-snug ${stat.highlight ? "text-paper/85" : "text-muted"}`}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
