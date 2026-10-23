// /contact — contact details and the enquiry form.

import Contact from "@/components/sections/Contact";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { contact } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us: Recruitment Agency in Dubai",
  description:
    "Contact NextGen HR, a licensed recruitment agency and HR consultancy at Meydan Grandstand, Dubai. Send your hiring brief or CV. We reply on working days.",
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
