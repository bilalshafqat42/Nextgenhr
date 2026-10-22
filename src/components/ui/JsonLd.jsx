// Prints structured data (built in src/lib/schema.js) into the page for Google and AI assistants.
// Pass one or more schema objects; empty ones are skipped.

export default function JsonLd({ data }) {
  return [data]
    .flat()
    .filter(Boolean)
    .map((item, index) => (
      <script
        key={index}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
      />
    ));
}
