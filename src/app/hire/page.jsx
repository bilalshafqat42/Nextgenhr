// /hire — the landing page for Google Ads. Form at the top, no menu, one goal: an enquiry.
// Hidden from Google search (ads only) and not listed in the sitemap.

import Link from "next/link";
import Faq from "@/components/sections/Faq";
import ItemGrid from "@/components/sections/ItemGrid";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/ui/EnquiryForm";
import Logo from "@/components/ui/Logo";
import { hirePage, process } from "@/data/site";
import { phoneLink, whatsappLink } from "@/lib/contactLinks";

export const metadata = {
  title: hirePage.title,
  description: hirePage.description,
  robots: { index: false, follow: true },
};

export default function HirePage() {
  return (
    <>
      <section className="bg-ink text-paper">
        {/* Minimal header: logo plus call and WhatsApp, so visitors stay focused on the form */}
        <Container className="flex items-center justify-between gap-4 py-6">
          <Link href="/" aria-label="NextGen HR home">
            <Logo theme="dark" className="text-[19px] sm:text-[22px]" />
          </Link>
          <div className="flex gap-3 text-sm font-medium">
            {phoneLink && (
              <a href={phoneLink} className="rounded-full border border-paper/40 px-4 py-2.5 whitespace-nowrap">
                Call us
              </a>
            )}
            {whatsappLink && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-4 py-2.5 whitespace-nowrap text-ink">
                WhatsApp
              </a>
            )}
          </div>
        </Container>

        <Container className="flex flex-wrap items-center gap-12 pt-8 pb-20 lg:gap-20 lg:pt-16 lg:pb-28">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
            <h1 className="font-display text-5xl leading-[0.95] font-medium tracking-[-0.045em] sm:text-7xl">
              {hirePage.title}
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-text-on-dark">{hirePage.intro}</p>
            <ul className="flex flex-col gap-3 text-base">
              {hirePage.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent-light" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-[1_1_400px] bg-paper p-8 text-ink sm:p-10">
            <h2 className="mb-6 font-display text-3xl font-medium tracking-[-0.03em]">{hirePage.formTitle}</h2>
            <EnquiryForm fields={hirePage.fields} button={hirePage.button} source="hire" />
          </div>
        </Container>
      </section>

      <ItemGrid title={process.title} items={process.items} prefix="Step" />
      <Faq />
    </>
  );
}
