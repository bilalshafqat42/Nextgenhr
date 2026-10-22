// The top bar: logo, navigation and the "Hire talent" button.
// It sits on top of the hero photo, so it uses the dark (white text) logo.

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

export default function Header() {
  return (
    <header className="relative z-10">
      <Container className="flex items-center justify-between gap-6 py-7">
        <Link href="/" aria-label="NextGen HR home">
          <Logo theme="dark" className="text-[22px]" />
        </Link>

        <nav aria-label="Main" className="hidden gap-8 text-[15px] text-paper lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-paper px-5 py-3 text-[15px] font-medium text-ink hover:opacity-85"
        >
          Hire talent
        </Link>
      </Container>
    </header>
  );
}
