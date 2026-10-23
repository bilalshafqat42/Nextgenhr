// Reads blog posts from content/blog/*.md.
// Each file starts with a short header (title, description, date, author) followed by the article in Markdown.
// To publish a post: add a new .md file to content/blog, then push to GitHub. See content/blog/README.md.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const folder = path.join(process.cwd(), "content/blog");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// "2026-10-23" -> "23 October 2026"
export const formatDate = (iso) => `${Number(iso.slice(8, 10))} ${months.at(Number(iso.slice(5, 7)) - 1)} ${iso.slice(0, 4)}`;

function readPost(file) {
  const { data, content } = matter(fs.readFileSync(path.join(folder, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    description: data.description,
    date: String(data.date instanceof Date ? data.date.toISOString() : data.date).slice(0, 10),
    author: data.author || "NextGen HR team",
    html: marked.parse(content),
  };
}

// All posts, newest first. Files starting with "_" or named README are ignored (drafts and instructions).
export function getPosts() {
  if (!fs.existsSync(folder)) return [];
  return fs
    .readdirSync(folder)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_") && file !== "README.md")
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug) => getPosts().find((post) => post.slug === slug);
