// An underlined text link, the main "button" style in this minimal design.
// Use dark={true} when it sits on a dark background.

import Link from "next/link";

export default function TextLink({ href, children, dark = false }) {
  const color = dark ? "border-paper text-paper" : "border-ink text-ink";

  return (
    <Link
      href={href}
      className={`inline-block border-b pt-2.5 pb-1 text-lg transition-opacity hover:opacity-70 ${color}`}
    >
      {children}
    </Link>
  );
}
