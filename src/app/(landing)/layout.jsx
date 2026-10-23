// The Google Ads landing page (/hire): no full footer or extra links, so visitors stay focused on the form.
// Only a short legal line with the policy links remains.

import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function LandingLayout({ children }) {
  return (
    <>
      <main id="content">{children}</main>
      <footer className="bg-ink text-sm text-muted-on-dark">
        <Container className="flex flex-wrap justify-between gap-4 py-8">
          <span>
            {siteConfig.legalName} · {siteConfig.licence}
          </span>
          <span className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-paper">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-paper">Cookie Policy</Link>
          </span>
        </Container>
      </footer>
    </>
  );
}
