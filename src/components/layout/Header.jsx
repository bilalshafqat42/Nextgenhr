// The top bar: logo, navigation and the "Hire talent" button.
// It sits on dark backgrounds, so it uses the dark (white text) logo.
// On phones the links fold into a "Menu" button (a <details> element, so no JavaScript is needed).

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

export default function Header() {
  return (
    <header className="relative z-10">
      <Container className="flex items-center justify-between gap-6 py-7">
        <Link href="/" aria-label="NextGen HR home">
          <Logo theme="dark" className="text-[19px] sm:text-[22px]" />
        </Link>

        <nav aria-label="Main" className="hidden gap-8 text-[15px] text-paper lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-paper px-4 py-3 text-sm font-medium whitespace-nowrap text-ink hover:opacity-85 sm:px-5 sm:text-[15px]"
          >
            Hire talent
          </Link>

          <details className="group lg:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-paper/40 px-4 text-sm text-paper [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-5 top-full flex flex-col rounded-2xl bg-paper p-2 text-lg text-ink shadow-xl"
            >
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="rounded-xl px-4 py-3 hover:bg-stone">
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
