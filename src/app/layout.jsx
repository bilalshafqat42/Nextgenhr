// The shell around every page: fonts, default title and description, and the footer.
// Headlines use Inter Tight, body text uses Inter (see --font-display and --font-sans in globals.css).

import { Inter, Inter_Tight } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { isReal } from "@/lib/content";
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

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
  // Proves ownership to Google Search Console once the code is added in src/data/site.js.
  verification: isReal(siteConfig.googleVerification) ? { google: siteConfig.googleVerification } : undefined,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} antialiased`}>
      <body className="font-sans">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
