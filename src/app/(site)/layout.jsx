// The main website: every page except the ads landing page.
// Adds the full footer, the floating WhatsApp button (phones: the bottom action bar) and the enquiry popup.

import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import EnquiryDialog from "@/components/ui/EnquiryDialog";
import EnquiryForm from "@/components/ui/EnquiryForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { enquiryPopup } from "@/data/site";
import { phoneLink, whatsappLink } from "@/lib/contactLinks";

const quickLinks = [
  whatsappLink && { label: "WhatsApp", href: whatsappLink, external: true, whatsapp: true },
  phoneLink && { label: "Call us", href: phoneLink },
].filter(Boolean);

export default function SiteLayout({ children }) {
  return (
    <>
      <main id="content">{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
      <EnquiryDialog title={enquiryPopup.title} intro={enquiryPopup.intro} quickLinks={quickLinks}>
        <EnquiryForm />
      </EnquiryDialog>
    </>
  );
}
