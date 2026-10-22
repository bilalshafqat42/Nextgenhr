// The NextGen HR logo: "The Match" symbol plus the name.
// The ring is the employer, the solid circle is the candidate.
// theme="dark" is for dark backgrounds, theme="light" for light ones.

export function LogoMark({ theme = "light", className = "" }) {
  const ring = theme === "dark" ? "var(--paper)" : "var(--ink)";
  const dot = theme === "dark" ? "var(--accent-mark)" : "var(--accent)";

  return (
    <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
      <circle cx="42" cy="22" r="18" fill={dot} />
      <circle cx="22" cy="22" r="18" fill="none" stroke={ring} strokeWidth="3" />
    </svg>
  );
}

export default function Logo({ theme = "light", className = "" }) {
  const nameColor = theme === "dark" ? "text-paper" : "text-ink";
  const hrColor = theme === "dark" ? "text-muted-on-dark" : "text-muted";

  return (
    <span className={`flex items-center gap-3 whitespace-nowrap ${className}`}>
      <LogoMark theme={theme} className="h-[1.2em] w-auto" />
      <span className={`font-display font-semibold tracking-[-0.04em] ${nameColor}`}>
        NextGen <span className={`font-normal ${hrColor}`}>HR</span>
      </span>
    </span>
  );
}
