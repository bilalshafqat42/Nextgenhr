// /contact/error/<reason> — shown if the email could not be sent, with a short reference code. Hidden from Google.

import { notFound } from "next/navigation";
import SendError from "@/components/sections/SendError";

const reasons = ["setup", "login", "network", "busy", "other"];

// Every reason page is built ahead of time; unknown addresses return a real 404.
export const ensureStatic = "navigation";

export const metadata = { title: "Message not sent", robots: { index: false } };

export function generateStaticParams() {
  return reasons.map((reason) => ({ reason }));
}

export default async function ReasonErrorPage({ params }) {
  const { reason } = await params;
  if (!reasons.includes(reason)) notFound();
  return <SendError reason={reason} />;
}
