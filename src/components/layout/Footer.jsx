// The dark footer with the large logo, shown at the bottom of every page.
// "use cache" lets Next.js work out the year once and reuse it, instead of on every visit.

import Link from "next/link";
import Container from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-muted-on-dark">
      <Container className="flex flex-col gap-14 pt-18 pb-8">
        <div className="flex flex-wrap items-center gap-6 sm:gap-9">
          <LogoMark theme="dark" className="h-16 w-auto sm:h-32" />
          <span className="font-display text-6xl leading-[0.85] font-semibold tracking-[-0.06em] text-paper sm:text-9xl">
            NextGen <span className="font-normal text-muted-on-dark">HR</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-between gap-6 border-t border-line-dark pt-6 text-sm">
          <span>
            © {year} {siteConfig.legalName} · {siteConfig.licence}
          </span>
          <span className="flex gap-6">
            <Link href="#" className="hover:text-paper">Privacy Policy</Link>
            <Link href="#" className="hover:text-paper">Terms</Link>
            <Link href="#" className="hover:text-paper">LinkedIn</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
