// /services/<slug> — one page per service, built from src/data/services.js.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import ItemGrid from "@/components/sections/ItemGrid";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import JsonLd from "@/components/ui/JsonLd";
import { locations } from "@/data/locations";
import { getService, services } from "@/data/services";
import { hrProcess, process } from "@/data/site";
import { getPost } from "@/lib/blog";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

// Every service page is built ahead of time; unknown addresses return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.title, path },
  ];
  const steps = service.slug === "hr-consultancy" ? hrProcess : process;
  const post = service.relatedPost ? getPost(service.relatedPost) : null;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.description, path }),
          faqSchema(service.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero title={service.heading} intro={service.intro} crumbs={crumbs} />
      <ItemGrid title="What's included" items={service.includes} />
      {service.details && <Prose sections={service.details} />}
      <ItemGrid title={steps.title} items={steps.items} prefix="Step" />
      <Faq title={`${service.title}: questions`} byline={`Licensed activity: ${service.licence}.`} items={service.faq} />
      {post && (
        <LinkList
          title="Related reading"
          spacing="bottom"
          items={[{ title: post.title, description: post.description, href: `/blog/${post.slug}` }]}
        />
      )}
      <LinkList
        title="Where we work"
        spacing="bottom"
        items={locations.map((l) => ({ title: l.seoTitle, href: `/recruitment-agency/${l.slug}` }))}
      />
      <LinkList
        title="Other services"
        items={others.map((s) => ({ title: s.title, description: s.summary, href: `/services/${s.slug}` }))}
      />
      <CtaBand />
    </>
  );
}
