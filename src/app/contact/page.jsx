// /contact — contact details and the enquiry form.

import Contact from "@/components/sections/Contact";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { contact } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact NextGen HR",
  description: "Contact NextGen HR, a recruitment agency and HR consultancy in Meydan, Dubai. Send your hiring brief or your CV.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero title="Contact NextGen HR" intro={contact.intro} crumbs={[{ name: "Contact", path: "/contact" }]} />
      <Contact />
    </>
  );
}
