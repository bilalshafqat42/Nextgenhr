// The full-screen opening section: animated photo, header on top, big headline at the bottom.

import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import Photo from "@/components/ui/Photo";
import TextLink from "@/components/ui/TextLink";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col bg-photo text-paper">
      <Photo src={hero.image.src} alt={hero.image.alt} preload />
      {/* Extra shade behind the headline so it stays readable over the city lights */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/40 to-transparent" />
      <Header />

      <Container className="relative mt-auto flex flex-col gap-12 pb-16 sm:pb-28">
        <h1 className="rise flex items-center gap-3 text-sm text-text-on-dark">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent-light" />
          {hero.heading}
        </h1>

        <p className="rise font-display text-[clamp(3.25rem,9vw,8rem)] leading-[0.92] font-medium tracking-[-0.045em]">
          {hero.titleLine1}
          <br />
          <span className="text-accent-light">{hero.titleLine2}</span>
        </p>

        <div className="rise-late flex flex-wrap items-end justify-between gap-8 border-t border-paper/25 pt-7">
          <div className="flex max-w-[500px] flex-col gap-4">
            <p className="text-lg leading-relaxed text-text-on-dark">{hero.text}</p>
            <p className="text-sm text-text-on-dark/70">{hero.jobSeekers}</p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {hero.links.map((link) => (
              <TextLink key={link.label} href={link.href} dark>
                {link.label}
              </TextLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
