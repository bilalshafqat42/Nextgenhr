// The shell around every page: fonts, default title and description, the business's structured data
// and a "skip to content" link for keyboard users.
// The main site adds the footer and WhatsApp button in (site)/layout.jsx; the ads landing page uses (landing)/layout.jsx.
// Headlines use Inter Tight, body text uses Inter (see --font-display and --font-sans in globals.css).

import { Inter, Inter_Tight } from "next/font/google";
import Tracking from "@/components/ui/Tracking";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";
import { shareImage } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Each page sets its own canonical address and share URL (see src/lib/metadata.js).
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage.url] },
  // Proves ownership to Google Search Console if the code is added in src/data/site.js.
  verification: isReal(siteConfig.googleVerification) ? { google: siteConfig.googleVerification } : undefined,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${interTight.variable} antialiased`}>
      <body className="font-sans">
        <a
          href="#content"
          className="sr-only z-[60] bg-paper px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <Tracking />
      </body>
    </html>
  );
}
