// An underlined text link, the main "button" style in this minimal design.
// Use dark={true} when it sits on a dark background. Links to /contact open the enquiry popup,
// and links to a PDF open it in a new tab.

import Link from "next/link";
import EnquiryLink from "@/components/ui/EnquiryLink";

export default function TextLink({ href, children, dark = false }) {
  const color = dark ? "border-paper text-paper" : "border-ink text-ink";
  const className = `inline-block border-b pt-2.5 pb-1 text-lg transition-opacity hover:opacity-70 ${color}`;

  if (href === "/contact") return <EnquiryLink className={className}>{children}</EnquiryLink>;
  if (href.endsWith(".pdf"))
    return (
      <a href={href} target="_blank" className={className}>
        {children}
      </a>
    );

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
