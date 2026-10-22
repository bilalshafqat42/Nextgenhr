// The small spaced-out capitals above a section heading, e.g. "ABOUT NEXTGEN HR".

export default function SectionLabel({ children }) {
  return (
    <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
      {children}
    </span>
  );
}
