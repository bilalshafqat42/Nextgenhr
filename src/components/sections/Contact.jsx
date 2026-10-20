// The call-to-action section near the bottom of the page.

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container className="rounded-3xl bg-foreground/5 py-16 text-center">
        <h2 className="text-3xl font-bold">{contact.title}</h2>
        <p className="mt-4 text-foreground/70">{contact.text}</p>
        <div className="mt-8">
          <Button href={contact.button.href}>{contact.button.label}</Button>
        </div>
      </Container>
    </section>
  );
}
