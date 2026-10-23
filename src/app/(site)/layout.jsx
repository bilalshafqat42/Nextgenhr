// The main website: every page except the ads landing page.
// Adds the full footer and the floating WhatsApp button.

import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function SiteLayout({ children }) {
  return (
    <>
      <main id="content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
