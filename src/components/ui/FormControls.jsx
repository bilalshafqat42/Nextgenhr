"use client";

// The small interactive parts of the enquiry form (the rest of the form is plain HTML from the server):
// - SubmitButton shows "Sending…" and is disabled while the message is being sent, so it cannot be sent twice.
// - OpenedAt records when the form was opened, which helps the server spot spam bots that submit instantly.

import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-14 self-start rounded-full bg-accent px-9 font-medium text-paper hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function OpenedAt() {
  const input = useRef(null);
  useEffect(() => {
    input.current.value = String(Date.now());
  }, []);
  return <input ref={input} type="hidden" name="openedAt" defaultValue="" />;
}
