// A reusable button that works as a link.
// variant="primary" gives a filled button, variant="secondary" gives an outlined one.

import Link from "next/link";

const styles = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary: "border border-foreground/20 hover:bg-foreground/5",
};

export default function Button({ href, children, variant = "primary" }) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 font-medium transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
