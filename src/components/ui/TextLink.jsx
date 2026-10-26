// An underlined text link, the main "button" style in this minimal design.
// Use dark={true} when it sits on a dark background. Links to /contact open the enquiry popup.

import Link from "next/link";
import EnquiryLink from "@/components/ui/EnquiryLink";

export default function TextLink({ href, children, dark = false }) {
  const color = dark ? "border-paper text-paper" : "border-ink text-ink";
  const className = `inline-block border-b pt-2.5 pb-1 text-lg transition-opacity hover:opacity-70 ${color}`;

  if (href === "/contact") return <EnquiryLink className={className}>{children}</EnquiryLink>;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
