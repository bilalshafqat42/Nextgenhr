# How to publish a blog post

1. Copy `_template.md` in this folder and rename it, for example `hiring-in-dubai-guide.md`.
   The file name becomes the web address: `nextgenhr.ae/blog/hiring-in-dubai-guide`.
   Use lowercase words separated by hyphens.
2. Fill in the header between the `---` lines. Always keep the "quotes" around each value:
   - `title`: the headline shown on the page (include the main search term, e.g. "recruitment agency in Dubai")
   - `seoTitle`: optional shorter title for Google and the browser tab, under 55 characters
   - `description`: one or two sentences, about 150 characters, shown on Google
   - `date`: publish date as YYYY-MM-DD
   - `author`: leave as "NextGen HR team" unless agreed otherwise
   - `draft`: set to `true` to keep a finished post off the site until you are ready
3. Write the article below the header in Markdown:
   - `## Heading` for sections, `### Smaller heading` inside them. Do not use a single `#`: the title is already the page heading
   - `- item` for bullet lists, `1. item` for numbered lists
   - `**bold**` for bold, `[link text](https://example.com)` for links
4. Save, commit and push to GitHub. The post appears on the site after the Hostinger build (about 2 minutes)
   and is added to the sitemap automatically.

Files starting with `_` are never published. If the header has a mistake, the build stops with a message naming the file, so a broken post never goes live; fix it and push again.

Writing tips for search:
- Answer the question in the first paragraph.
- One main search term per article, used naturally in the title, first paragraph and one heading.
- Link to the matching service page, e.g. `[HR consultancy](/services/hr-consultancy)`.
- Check facts about laws and regulations against official sources (MOHRE, u.ae) before publishing.
- If you add a post, also add a line for it under "Guides" in `public/llms.txt` (a summary file for AI assistants).
