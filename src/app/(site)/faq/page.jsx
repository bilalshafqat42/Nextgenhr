// /faq — the general questions (marked up for Google and AI assistants) plus the questions from each service page.
// Service questions are shown here but marked up only on their own service page, so no answer is marked up twice.

import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { faq } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recruitment and HR Questions Answered",
  description:
    "Answers to common questions about recruitment agencies and HR consultancy in the UAE: fees, licensing, timelines and how hiring works.",
  path: "/faq",
});

const serviceQuestions = services.flatMap((service) => service.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(faq.items), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]} />
      <PageHero
        title="Recruitment and HR questions, answered"
        intro="Straight answers about hiring in the UAE and how NextGen HR works."
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />
      <Faq title="General questions" items={faq.items} />
      <Faq title="Questions about our services" byline={null} items={serviceQuestions} />
      <CtaBand />
    </>
  );
}
