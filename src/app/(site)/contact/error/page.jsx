// /contact/error — shown if required fields were missing. Hidden from Google.

import SendError from "@/components/sections/SendError";

export const metadata = { title: "Message not sent", robots: { index: false } };

export default function ErrorPage() {
  return <SendError />;
}
