// /job-seekers — how candidates send their CV, what happens next, and the no-fee promise.
// The one link to send in reply to job seeker messages. Kept out of Google search and the sitemap,
// because the site targets employers. The questions are marked up for Google on /faq only.

import Faq from "@/components/sections/Faq";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import { jobSeekerFaq, jobSeekerPage, siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata({ title: jobSeekerPage.title, description: jobSeekerPage.description, path: "/job-seekers" }),
  robots: { index: false, follow: true },
};

const cvEmail = `mailto:${siteConfig.email}?subject=${encodeURIComponent(jobSeekerPage.emailSubject)}`;

export default function JobSeekersPage() {
  return (
    <>
      <PageHero
        title={jobSeekerPage.title}
        intro={jobSeekerPage.intro}
        crumbs={[{ name: "Job seekers", path: "/job-seekers" }]}
      />
      <Prose sections={jobSeekerPage.sections} />
      <Section spacing="bottom" innerClassName="max-w-[820px]">
        <TextLink href={cvEmail}>Email your CV →</TextLink>
      </Section>
      <Faq title="Common questions" byline={null} items={jobSeekerFaq} />
    </>
  );
}
