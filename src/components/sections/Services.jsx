// A grid of service cards. Add or remove items in src/data/site.js.

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold">{services.title}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
