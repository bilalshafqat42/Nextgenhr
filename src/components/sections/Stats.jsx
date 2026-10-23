// The key facts as a "bento" grid: one large bronze tile, smaller tiles and two wide tiles with links.
// On desktop: the large tile fills the left column over two rows; the rest fill the right.
// Tiles with values still in [brackets] are hidden until the real figures are added.

import Link from "next/link";
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
  // Folded map: the emirates we cover
  map: <path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />,
  // Four squares: sectors
  sectors: (
    <>
      <rect x="4" y="4" width="7" height="7" />
      <rect x="13" y="4" width="7" height="7" />
      <rect x="4" y="13" width="7" height="7" />
      <rect x="13" y="13" width="7" height="7" />
    </>
  ),
};

const tones = {
  bronze: { tile: "bg-accent text-paper", icon: "text-paper", text: "text-paper/80" },
  dark: { tile: "bg-ink text-paper", icon: "text-accent-mark", text: "text-paper/80" },
  stone: { tile: "bg-stone", icon: "text-accent", text: "text-muted" },
  white: { tile: "border border-line bg-white", icon: "text-accent", text: "text-muted" },
};

const sizes = {
  big: "sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[320px] lg:min-h-0",
  wide: "sm:col-span-2",
};

function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-6 w-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

export default function Stats() {
  const shown = stats.filter((stat) => isReal(stat.value));
  if (shown.length === 0) return null;

  return (
    <Section spacing="bottom">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:auto-rows-[minmax(220px,auto)]">
        {shown.map((stat) => {
          const tone = tones[stat.tone] || tones.white;
          const big = stat.size === "big";
          const wide = stat.size === "wide";

          return (
            <div
              key={stat.value}
              className={`relative flex flex-col justify-between gap-10 overflow-hidden p-8 ${tone.tile} ${sizes[stat.size] || ""}`}
            >
              {/* A faint ring on the large tile, echoing the logo */}
              {big && (
                <span aria-hidden="true" className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full border-2 border-paper/20" />
              )}
              <Icon name={stat.icon} className={tone.icon} />

              <div className={`relative flex gap-4 ${wide ? "flex-col md:flex-row md:items-end md:justify-between md:gap-10" : "flex-col"}`}>
                <div className="flex flex-col gap-3">
                  <span
                    className={`font-display leading-none font-light tracking-[-0.05em] whitespace-nowrap ${
                      big ? "text-[clamp(6rem,11vw,11rem)]" : "text-[clamp(3rem,4.4vw,4rem)]"
                    }`}
                  >
                    {stat.value}
                  </span>
                  {!wide && <p className={`max-w-[300px] text-[15px] leading-relaxed ${tone.text}`}>{stat.label}</p>}
                </div>

                {wide && (
                  <div className="flex max-w-[340px] flex-col gap-4">
                    <p className={`text-[15px] leading-relaxed ${tone.text}`}>{stat.label}</p>
                    {stat.links && (
                      <div className="flex flex-wrap gap-2">
                        {stat.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full border border-line px-3 py-1.5 text-[13px] transition-colors hover:border-accent hover:bg-accent hover:text-paper"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
