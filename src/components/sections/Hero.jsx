// The big intro section at the top of the home page.

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="py-24 sm:py-32">
      <Container>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={hero.primaryButton.href}>
            {hero.primaryButton.label}
          </Button>
          <Button href={hero.secondaryButton.href} variant="secondary">
            {hero.secondaryButton.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
