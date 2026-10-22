// The services as a numbered list with round arrow buttons. Add or remove items in src/data/site.js.

import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services">
      <Container className="pb-28 lg:pb-40">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-7xl">
            {services.title}
          </h2>
          <p className="max-w-[400px] text-[17px] leading-relaxed text-muted">{services.intro}</p>
        </div>

        <div className="border-t border-ink">
          {services.items.map((item, index) => (
            <Link
              key={item.title}
              href="#contact"
              className="group grid grid-cols-[48px_1fr_56px] items-center gap-6 border-b border-line py-10 lg:grid-cols-[80px_1fr_1.1fr_56px]"
            >
              <span className="col-start-1 row-start-1 text-sm text-accent">0{index + 1}</span>
              <h3 className="col-start-2 row-start-1 font-display text-2xl font-medium tracking-[-0.025em] sm:text-4xl">
                {item.title}
              </h3>
              <p className="col-start-2 row-start-2 text-[17px] leading-relaxed text-muted lg:col-start-3 lg:row-start-1">
                {item.description}
              </p>
              <span className="col-start-3 row-start-1 flex h-14 w-14 items-center justify-center rounded-full border border-ink text-xl transition-colors group-hover:bg-ink group-hover:text-paper lg:col-start-4">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
