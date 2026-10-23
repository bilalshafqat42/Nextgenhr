"use client";

// The compact header that slides down once the visitor scrolls past the top of the page.
// It is hidden (and can't be tabbed into) until then, so only one header is ever in use.

import { useEffect, useState } from "react";

export default function StickyHeader({ children }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const update = () => setShown(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      inert={!shown}
      className={`fixed inset-x-0 top-0 z-40 border-b border-paper/10 bg-ink/80 backdrop-blur-md transition duration-300 ${
        shown ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
