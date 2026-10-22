// The shell around every page: fonts, page title and description.
// Headlines use Inter Tight, body text uses Inter (see --font-display and --font-sans in globals.css).

import { Inter, Inter_Tight } from "next/font/google";
import { siteConfig } from "@/data/site";
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
  title: siteConfig.title,
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
