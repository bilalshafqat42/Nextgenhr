// The opening animation, shown over the page when it first loads:
// 1. One circle appears (the ring and the solid circle sit exactly on top of each other).
// 2. It splits into two circles: the NextGen HR symbol.
// 3. The name "NextGen HR" slides in.
// 4. The whole overlay fades away to reveal the page.
// It is pure CSS (see globals.css), and is skipped for visitors who prefer reduced motion.

export default function LogoIntro() {
  return (
    <div
      aria-hidden="true"
      className="intro-overlay pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-ink"
    >
      <div className="flex items-center">
        <svg viewBox="0 0 64 44" className="intro-mark h-16 w-auto shrink-0 sm:h-20">
          <circle className="intro-dot" cx="42" cy="22" r="18" fill="var(--accent-mark)" />
          <circle
            className="intro-ring"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="var(--paper)"
            strokeWidth="3"
          />
        </svg>
        <span className="intro-name pl-5 font-display text-5xl font-semibold tracking-[-0.04em] text-paper sm:text-6xl">
          NextGen <span className="font-normal text-muted-on-dark">HR</span>
        </span>
      </div>
    </div>
  );
}
