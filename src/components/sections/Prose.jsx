// Plain text sections, used for the About story and the Privacy and Cookie policies.
// sections: [{ heading, paragraphs: ["…", "…"] }]; a section without a heading shows only its text.

import Section from "@/components/ui/Section";

export default function Prose({ sections, note }) {
  return (
    <Section innerClassName="max-w-[820px]">
      {note && <p className="mb-10 text-sm text-muted">{note}</p>}
      <div className="flex flex-col gap-12">
        {sections.map((section, index) => (
          <div key={section.heading ?? index} className="flex flex-col gap-4">
            {section.heading && (
              <h2 className="font-display text-3xl font-medium tracking-[-0.02em]">{section.heading}</h2>
            )}
            {section.paragraphs.map((text) => (
              <p key={text} className="text-lg leading-relaxed text-ink/85">
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
