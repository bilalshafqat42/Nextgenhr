// The top bar: logo, navigation and the "Hire talent" button.
// It sits on dark backgrounds, so it uses the dark (white text) logo.
// On phones the links fold into a "Menu" button (see MobileMenu.jsx).
// A compact copy also appears fixed at the top once the visitor scrolls down (see StickyHeader.jsx).

import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";
import EnquiryLink from "@/components/ui/EnquiryLink";
import StickyHeader from "@/components/layout/StickyHeader";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

function HeaderBar({ compact = false }) {
  return (
    <Container className={`flex items-center justify-between gap-3 sm:gap-6 ${compact ? "py-3" : "py-7"}`}>
      <Link href="/" aria-label="NextGen HR home">
        <Logo theme="dark" className="text-[18px] sm:text-[22px]" />
      </Link>

      <nav aria-label={compact ? "Main (sticky)" : "Main"} className="hidden gap-8 text-[15px] text-paper lg:flex">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:opacity-70">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <EnquiryLink className="rounded-full bg-paper px-3 py-3 text-sm font-medium whitespace-nowrap text-ink hover:opacity-85 sm:px-5 sm:text-[15px]">
          Hire talent
        </EnquiryLink>
        <MobileMenu links={navLinks} />
      </div>
    </Container>
  );
}

export default function Header() {
  return (
    <>
      <header className="relative z-10">
        <HeaderBar />
      </header>
      <StickyHeader>
        <HeaderBar compact />
      </StickyHeader>
    </>
  );
}
