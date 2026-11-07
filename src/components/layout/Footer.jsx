// The dark footer shown at the bottom of every page: large logo, links to every page, legal line.
// "use cache" lets Next.js work out the year once and reuse it, instead of on every visit.

import Link from "next/link";
import Container from "@/components/ui/Container";
import CookieSettings from "@/components/ui/CookieSettings";
import { LogoMark } from "@/components/ui/Logo";
import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { companyProfile, siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";
import { whatsappLink } from "@/lib/contactLinks";

// Social accounts plus WhatsApp, in the footer's "Follow us" line. Facebook appears once its link is added.
const social = [
  ...siteConfig.social.filter((s) => isReal(s.url) && s.label !== "LinkedIn"),
  whatsappLink && { label: "WhatsApp", url: whatsappLink },
  ...siteConfig.social.filter((s) => isReal(s.url) && s.label === "LinkedIn"),
].filter(Boolean);

const columns = [
  { title: "Services", links: services.map((s) => ({ label: s.navTitle, href: `/services/${s.slug}` })) },
  { title: "Sectors", links: sectors.map((s) => ({ label: s.title, href: `/sectors/${s.slug}` })) },
  { title: "Locations", links: locations.map((l) => ({ label: l.city, href: `/recruitment-agency/${l.slug}` })) },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Company profile (PDF)", href: companyProfile.href, file: true },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-muted-on-dark">
      <Container className="flex flex-col gap-16 pt-18 pb-8">
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 text-[15px] lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <span className="font-medium text-paper">{column.title}</span>
              {column.links.map((link) =>
                link.file ? (
                  <a key={link.href} href={link.href} target="_blank" className="hover:text-paper">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="hover:text-paper">
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-6 sm:gap-9 lg:justify-center">
          <LogoMark theme="dark" className="h-16 w-auto sm:h-32" />
          <span className="font-display text-6xl leading-[0.85] font-semibold tracking-[-0.06em] text-paper sm:text-9xl">
            NextGen <span className="font-normal text-muted-on-dark">HR</span>
          </span>
        </div>

        {/* Bottom bar: contact and social, the job seekers note, then legal and credit.
            The extra bottom padding keeps the last row clear of the floating WhatsApp button. */}
        <div className="flex flex-col gap-8 border-t border-line-dark pt-8 pb-24 text-sm">
          <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-4">
            <span className="flex flex-col gap-1.5">
              <a href={`mailto:${siteConfig.email}`} className="text-paper hover:text-accent-light">{siteConfig.email}</a>
              <span>{siteConfig.address[0]}, Dubai</span>
            </span>
            {social.length > 0 && (
              <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="text-paper">Follow us</span>
                {social.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="me noopener noreferrer" className="hover:text-paper">
                    {s.label}
                  </a>
                ))}
              </span>
            )}
          </div>

          <p>
            Job seekers: please email your CV to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-paper underline underline-offset-4 hover:text-accent-light">{siteConfig.email}</a>. We never charge candidates a fee.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-3 border-t border-line-dark pt-6 text-[13px]">
            <span>
              © {year} {siteConfig.legalName} · {siteConfig.licence}
            </span>
            <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <CookieSettings />
              <span>
                Designed and developed by{" "}
                <a href="https://bilalshafqat.com/" target="_blank" className="text-paper underline underline-offset-4 hover:text-accent-light">
                  Bilal Shafqat
                </a>
              </span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
