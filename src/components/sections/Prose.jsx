// Plain text sections, used for the About story and the Privacy and Cookie policies.
// sections: [{ heading, paragraphs: ["…", "…"], items: ["…"] }]; a section without a heading shows only its text,
// and the optional items show as a bullet list after the paragraphs.
// Paragraphs still containing a [placeholder] are hidden until completed.

import Section from "@/components/ui/Section";
import { isReal } from "@/lib/content";

export default function Prose({ sections, note }) {
  return (
    <Section innerClassName="max-w-[820px]">
      {note && <p className="mb-10 text-sm text-muted">{note}</p>}
      <div className="flex flex-col gap-12">
        {sections.filter((section) => section.paragraphs.some(isReal)).map((section, index) => (
          <div key={section.heading ?? index} className="flex flex-col gap-4">
            {section.heading && (
              <h2 className="font-display text-3xl font-medium tracking-[-0.02em]">{section.heading}</h2>
            )}
            {section.paragraphs.filter(isReal).map((text) => (
              <p key={text} className="text-lg leading-relaxed text-ink/85">
                {text}
              </p>
            ))}
            {section.items && (
              <ul className="flex list-disc flex-col gap-2 pl-6 text-lg leading-relaxed text-ink/85 marker:text-accent">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
