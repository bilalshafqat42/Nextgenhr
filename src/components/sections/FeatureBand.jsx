// A copper band that highlights one offer, used on the home page for real estate, the team's strongest sector.
// content: { label, title, text, links: [{ label, href }] }

import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";

export default function FeatureBand({ content }) {
  return (
    <section className="pb-28 lg:pb-40">
      <Container>
        <div className="grid gap-10 bg-accent px-8 py-14 text-paper sm:px-14 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <span className="text-[13px] font-medium tracking-[0.08em] text-paper uppercase">{content.label}</span>
            <h2 className="font-display text-4xl leading-[1.05] font-medium tracking-[-0.035em] sm:text-6xl">{content.title}</h2>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-lg leading-relaxed text-paper/85">{content.text}</p>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              {content.links.map((link) => (
                <TextLink key={link.href} href={link.href} dark>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
