"use client";

// The "Menu" button on phones. Built on the browser's <details> element, with small additions:
// it closes after moving to another page, when pressing Escape, and when tapping outside it.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu({ links }) {
  const menu = useRef(null);
  const pathname = usePathname();

  // Close after navigating (also when coming back with the browser's Back button).
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const close = (event) => {
      if (!menu.current?.open) return;
      if (event.key === "Escape" || (event.type === "pointerdown" && !menu.current.contains(event.target))) {
        menu.current.open = false;
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, []);

  return (
    <details ref={menu} className="lg:hidden">
      <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-paper/40 px-3 text-sm text-paper sm:px-4 [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <nav aria-label="Mobile" className="absolute inset-x-4 top-full flex flex-col bg-paper p-2 text-lg text-ink shadow-xl sm:inset-x-5">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="px-4 py-3 hover:bg-stone">
            {link.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
