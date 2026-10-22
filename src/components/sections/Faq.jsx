// Common questions, written the way people ask Google and AI assistants.
// Uses the browser's built-in <details> element, so it opens and closes without any JavaScript.

import Container from "@/components/ui/Container";
import { faq } from "@/data/site";

export default function Faq() {
  return (
    <section>
      <Container className="flex flex-wrap gap-16 py-28 lg:gap-18 lg:py-40">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
          <h2 className="font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-7xl">
            {faq.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">{faq.byline}</p>
        </div>

        <div className="min-w-0 flex-[2_1_640px] border-t border-ink">
          {faq.items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group border-b border-line py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl font-medium tracking-[-0.015em]">
                {item.question}
                <span className="text-2xl text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-[720px] text-[17px] leading-[1.7] text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
