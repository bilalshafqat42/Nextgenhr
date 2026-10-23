// The 404 page, shown for unknown addresses and for unknown service, sector, city or blog slugs.

import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import { notFoundPage } from "@/data/site";

export const metadata = { title: notFoundPage.title };

export default function NotFound() {
  return (
    <>
      <main id="content">
        <PageHero title={notFoundPage.title} intro={notFoundPage.intro} />
        <Container className="flex flex-wrap gap-x-10 gap-y-4 py-20 lg:py-28">
          {notFoundPage.links.map((link) => (
            <TextLink key={link.href} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
