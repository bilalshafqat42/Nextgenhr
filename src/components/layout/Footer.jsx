// The bottom bar shown on every page.
// "use cache" lets Next.js work out the year once and reuse it, instead of on every visit.

import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-8 text-sm text-foreground/60">
      <Container>
        © {year} {siteConfig.name}. All rights reserved.
      </Container>
    </footer>
  );
}
