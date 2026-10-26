// /terms — plain-text page, content in src/data/legal.js.

import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import { termsOfUse as policy } from "@/data/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: policy.title, description: policy.description, path: `/${policy.slug}` });

export default function TermsPage() {
  return (
    <>
      <PageHero title={policy.title} crumbs={[{ name: policy.title, path: `/${policy.slug}` }]} />
      <Prose note={`Last updated: ${policy.lastUpdated}`} sections={policy.sections} />
    </>
  );
}
