// Reads blog posts from content/blog/*.md.
// Each file starts with a short header (title, description, date, author) followed by the article in Markdown.
// To publish a post: add a new .md file to content/blog, then push to GitHub. See content/blog/README.md.
// A header mistake stops the build with a clear message naming the file, so a broken post never goes live.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const folder = path.join(process.cwd(), "content/blog");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// "2026-10-23" -> "23 October 2026"
export const formatDate = (iso) => `${Number(iso.slice(8, 10))} ${months.at(Number(iso.slice(5, 7)) - 1)} ${iso.slice(0, 4)}`;

function readPost(file) {
  let parsed;
  try {
    parsed = matter(fs.readFileSync(path.join(folder, file), "utf8"));
  } catch (error) {
    throw new Error(`content/blog/${file}: the header between the --- lines is not valid. Put "quotes" around the title and description. (${error.message})`);
  }
  const { data, content } = parsed;
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");

  if (!data.title || !data.description) throw new Error(`content/blog/${file}: title and description are required.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`content/blog/${file}: date must be written as YYYY-MM-DD, for example "2026-11-05".`);

  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    // Optional shorter title for Google and the browser tab; the page heading always uses the full title.
    seoTitle: data.seoTitle || data.title,
    description: data.description,
    date,
    author: data.author || "NextGen HR team",
    draft: data.draft === true,
    html: marked.parse(content),
  };
}

// All published posts, newest first. Files starting with "_" and posts marked draft: true are not published.
export function getPosts() {
  if (!fs.existsSync(folder)) return [];
  return fs
    .readdirSync(folder)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_") && file !== "README.md")
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export const getPost = (slug) => getPosts().find((post) => post.slug === slug);
