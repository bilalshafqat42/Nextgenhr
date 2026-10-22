// Latest articles, each credited to the founder (builds trust with clients, Google and AI search).

import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import { insights } from "@/data/site";

export default function Insights() {
  return (
    <Section id="insights" className="bg-stone" innerClassName="flex flex-col gap-12">
      <div className="flex flex-wrap items-baseline justify-between gap-6">
        <Heading>{insights.title}</Heading>
        <TextLink href="#">All articles →</TextLink>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {insights.items.map((item, index) => (
          <Link key={item.title} href="#" className="flex flex-col gap-5">
            <div className={`aspect-[4/3] ${index % 2 ? "bg-photo-alt" : "bg-photo"}`} />
            <span className="text-sm text-muted">{item.meta}</span>
            <h3 className="font-display text-[26px] leading-tight font-medium tracking-[-0.02em]">{item.title}</h3>
          </Link>
        ))}
      </div>
    </Section>
  );
}
