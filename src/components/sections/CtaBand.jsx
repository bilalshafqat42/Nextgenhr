// The closing call to action at the bottom of inner pages.

import EnquiryLink from "@/components/ui/EnquiryLink";
import Container from "@/components/ui/Container";
import { companyProfile } from "@/data/site";

export default function CtaBand({ title = "Ready to hire? Send us your brief." }) {
  return (
    <section className="pb-28 lg:pb-40">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-8 bg-ink px-8 py-16 text-paper sm:px-14">
          <h2 className="max-w-[640px] font-display text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
            {title}
          </h2>
          <div className="flex flex-wrap gap-3">
            <EnquiryLink className="rounded-full bg-accent px-8 py-4 font-medium text-paper hover:opacity-90">
              Send your brief
            </EnquiryLink>
            <a href={companyProfile.href} target="_blank" className="rounded-full border border-paper/40 px-8 py-4 font-medium text-paper hover:bg-paper hover:text-ink">
              Company profile (PDF)
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
