// The four hiring steps.

import Container from "@/components/ui/Container";
import { process } from "@/data/site";

export default function Process() {
  return (
    <section>
      <Container className="flex flex-col gap-16 py-28 lg:py-40">
        <h2 className="font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-7xl">
          {process.title}
        </h2>
        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-ink pt-5">
              <span className="text-sm text-accent">Step {index + 1}</span>
              <span className="font-display text-[26px] font-medium tracking-[-0.02em]">{step.title}</span>
              <span className="text-base leading-relaxed text-muted">{step.text}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
