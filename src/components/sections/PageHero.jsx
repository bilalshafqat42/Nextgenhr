// The dark top section of every inner page: header, breadcrumb trail, the page's main heading and intro.
// crumbs: [{ name: "Services", path: "/services" }, …] — Home is added automatically.

import Link from "next/link";
import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";

export default function PageHero({ title, intro, crumbs = [] }) {
  return (
    <section className="bg-ink text-paper">
      <Header />
      <Container className="flex flex-col gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-on-dark">
          <ol className="flex flex-wrap gap-2">
            {[{ name: "Home", path: "/" }, ...crumbs].map((crumb, index) => (
              <li key={crumb.path} className="flex gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                <Link href={crumb.path} className="hover:text-paper">
                  {crumb.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-[1000px] font-display text-5xl leading-[0.95] font-medium tracking-[-0.045em] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {intro && <p className="max-w-[720px] text-lg leading-relaxed text-text-on-dark">{intro}</p>}
      </Container>
    </section>
  );
}
