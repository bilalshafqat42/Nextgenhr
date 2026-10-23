// The closing call to action at the bottom of inner pages.

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CtaBand({ title = "Ready to hire? Send us your brief." }) {
  return (
    <section className="pb-28 lg:pb-40">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-8 bg-ink px-8 py-16 text-paper sm:px-14">
          <h2 className="max-w-[640px] font-display text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
            {title}
          </h2>
          <Link href="/contact" className="rounded-full bg-accent px-8 py-4 font-medium text-paper hover:opacity-90">
            Send your brief
          </Link>
        </div>
      </Container>
    </section>
  );
}
