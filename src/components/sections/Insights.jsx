// Latest articles, each credited to the founder (builds trust with clients, Google and AI search).

import Link from "next/link";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import { insights } from "@/data/site";

export default function Insights() {
  return (
    <section id="insights" className="bg-stone">
      <Container className="flex flex-col gap-12 py-28 lg:py-40">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="font-display text-5xl font-medium tracking-[-0.04em] sm:text-7xl">{insights.title}</h2>
          <TextLink href="#">All articles →</TextLink>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {insights.items.map((item, index) => (
            <Link key={item.title} href="#" className="group flex flex-col gap-5">
              <div className={`aspect-[4/3] overflow-hidden ${index % 2 ? "bg-photo-alt" : "bg-photo"}`}>
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-sm text-muted">{item.meta}</span>
              <span className="font-display text-[26px] leading-tight font-medium tracking-[-0.02em]">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
