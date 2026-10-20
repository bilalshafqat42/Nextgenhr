# Nextgenhr

A Next.js website written in plain JavaScript, built from small components.

## Run it

```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

## Folder guide

```
src/
├── app/                  Pages (each folder = a URL)
│   ├── layout.jsx        Wraps every page: Header + page + Footer
│   ├── page.jsx          Home page: stacks the sections in order
│   └── globals.css       Global styles and colours
├── components/
│   ├── layout/           Parts shown on every page (Header, Footer)
│   ├── sections/         Big blocks of a page (Hero, Services, Contact)
│   └── ui/               Small reusable pieces (Button, Card, Container)
└── data/
    └── site.js           ALL the website text. Edit words here.
```

## Common tasks

- **Change text:** edit `src/data/site.js`.
- **Add a section:** create `src/components/sections/MySection.jsx`, then import it in `src/app/page.jsx`.
- **Add a page:** create `src/app/about/page.jsx`. It is live at `/about`.
- **Change colours:** edit `--background` and `--foreground` in `src/app/globals.css`.

Styling uses Tailwind CSS classes directly in each component.
