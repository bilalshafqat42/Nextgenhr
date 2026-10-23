// /blog — the list of all articles, newest first. Articles live in content/blog/*.md.

import CtaBand from "@/components/sections/CtaBand";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { formatDate, getPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recruitment and HR Blog for UAE Employers",
  description:
    "Practical guides on recruitment, hiring and HR for employers in Dubai and the UAE: choosing an agency, candidate fees, HR policies and more.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <PageHero
        title="Recruitment and HR blog"
        intro="Practical guides on hiring and HR in Dubai and across the UAE."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <LinkList
        title="Latest articles"
        items={posts.map((post) => ({
          title: post.title,
          description: `${formatDate(post.date)} · ${post.description}`,
          href: `/blog/${post.slug}`,
        }))}
      />
      <CtaBand />
    </>
  );
}
