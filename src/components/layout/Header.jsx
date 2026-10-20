// The top bar with the site name and navigation links.

import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig, navLinks } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-foreground/10">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        <nav className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
