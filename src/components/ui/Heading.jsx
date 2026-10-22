// The large section heading used across the site, e.g. "Services" or "How hiring works".

export default function Heading({ children, className = "" }) {
  return (
    <h2 className={`font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-7xl ${className}`}>
      {children}
    </h2>
  );
}
