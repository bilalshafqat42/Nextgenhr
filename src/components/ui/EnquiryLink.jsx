"use client";

// A link to /contact that opens the enquiry popup instead, when the popup is on the page.
// Opening in a new tab (Ctrl/Cmd-click), or pages without the popup, still go to /contact as normal.

import Link from "next/link";
import { DIALOG_ID } from "@/components/ui/EnquiryDialog";

export default function EnquiryLink({ className, children }) {
  function open(event) {
    const dialog = document.getElementById(DIALOG_ID);
    if (!dialog || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    dialog.showModal();
  }

  return (
    <Link href="/contact" onClick={open} className={className}>
      {children}
    </Link>
  );
}
