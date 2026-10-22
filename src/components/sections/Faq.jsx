// Common questions, written the way people ask Google and AI assistants.
// Uses the browser's built-in <details> element, so it opens and closes without any JavaScript.

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { faq } from "@/data/site";

export default function Faq() {
  return (
    <Section innerClassName="flex flex-wrap gap-16 lg:gap-18">
      <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
        <Heading>{faq.title}</Heading>
        <p className="text-[15px] leading-relaxed text-muted">{faq.byline}</p>
      </div>

      <div className="min-w-0 flex-[2_1_640px] border-t border-ink">
        {faq.items.map((item, index) => (
          <details key={item.question} open={index === 0} className="group border-b border-line py-7">
            <summary className="flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden justify-between gap-6 font-display text-2xl font-medium tracking-[-0.015em]">
              <h3>{item.question}</h3>
              <span aria-hidden="true" className="text-2xl text-muted transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-[720px] text-[17px] leading-[1.7] text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
