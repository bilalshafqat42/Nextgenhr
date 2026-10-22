// /faq — every question on the site in one place, marked up for Google's FAQ results.

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

const allQuestions = [...faq.items, ...services.flatMap((service) => service.faq)];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(allQuestions), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]} />
      <PageHero
        title="Recruitment and HR questions, answered"
        intro="Straight answers about hiring in the UAE and how NextGen HR works."
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />
      <Faq title="All questions" items={allQuestions} />
      <CtaBand />
    </>
  );
}
