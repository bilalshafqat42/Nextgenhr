// The four key facts directly under the home page hero, so employers see the proof first.

import Container from "@/components/ui/Container";
import { trust } from "@/data/site";

export default function TrustStrip() {
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:py-16">
        {trust.map((item) => (
          <div key={item.value} className="flex flex-col gap-3 border-t border-ink pt-5">
            <span className="font-display text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl">{item.value}</span>
            <p className="max-w-[260px] text-[15px] leading-relaxed text-muted">{item.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
