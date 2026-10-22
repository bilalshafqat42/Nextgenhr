// The dark footer shown at the bottom of every page: large logo, links to every page, legal line.
// "use cache" lets Next.js work out the year once and reuse it, instead of on every visit.

import Link from "next/link";
import Container from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const columns = [
  { title: "Services", links: services.map((s) => ({ label: s.navTitle, href: `/services/${s.slug}` })) },
  { title: "Sectors", links: sectors.map((s) => ({ label: s.title, href: `/sectors/${s.slug}` })) },
  { title: "Locations", links: locations.map((l) => ({ label: l.city, href: `/recruitment-agency/${l.slug}` })) },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-muted-on-dark">
      <Container className="flex flex-col gap-16 pt-18 pb-8">
        <div className="grid grid-cols-2 gap-10 text-[15px] lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <span className="font-medium text-paper">{column.title}</span>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-9">
          <LogoMark theme="dark" className="h-16 w-auto sm:h-32" />
          <span className="font-display text-6xl leading-[0.85] font-semibold tracking-[-0.06em] text-paper sm:text-9xl">
            NextGen <span className="font-normal text-muted-on-dark">HR</span>
          </span>
        </div>

        <div className="border-t border-line-dark pt-6 text-sm">
          © {year} {siteConfig.legalName} · {siteConfig.licence}
        </div>
      </Container>
    </footer>
  );
}
