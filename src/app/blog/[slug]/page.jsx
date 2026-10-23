// /blog/<slug> — one article, built from content/blog/<slug>.md.

import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import LinkList from "@/components/sections/LinkList";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import Section from "@/components/ui/Section";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const others = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[articleSchema({ ...post, path }), breadcrumbSchema(crumbs)]} />
      <PageHero title={post.title} intro={post.description} crumbs={crumbs} />
      <Section innerClassName="max-w-[760px]">
        <p className="mb-10 text-sm text-muted">
          {formatDate(post.date)} · {post.author}
        </p>
        {/* The article body comes from our own Markdown files in content/blog, not from visitors */}
        <article className="article" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Section>
      {others.length > 0 && (
        <LinkList
          title="More articles"
          spacing="bottom"
          items={others.map((p) => ({ title: p.title, description: p.description, href: `/blog/${p.slug}` }))}
        />
      )}
      <CtaBand />
    </>
  );
}
