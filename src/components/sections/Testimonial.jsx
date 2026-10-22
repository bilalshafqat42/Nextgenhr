// A full-bleed animated photo with a client quote on top.

import Container from "@/components/ui/Container";
import Photo from "@/components/ui/Photo";
import { testimonial } from "@/data/site";

export default function Testimonial() {
  return (
    <section className="relative flex min-h-[640px] items-end bg-photo-alt text-paper lg:min-h-[800px]">
      <Photo note={testimonial.photo} tone="alt" />
      <Container className="relative pb-24">
        <figure className="flex flex-col gap-7">
          <blockquote className="max-w-[1080px] font-display text-4xl leading-[1.1] tracking-[-0.03em] sm:text-[56px]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="text-base text-text-on-dark">{testimonial.author}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
