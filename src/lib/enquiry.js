"use server";

// Sends a contact form enquiry to the company inbox through the company mailbox (Titan Mail).
// Mail settings come from environment variables (see .env.example), never from the code.
// Spam protection: a hidden trap field, a minimum time on the page, and a limit per visitor.

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const clean = (value, max = 2000) => String(value ?? "").trim().slice(0, max);

// Each visitor (by IP address) may send up to 5 enquiries every 10 minutes.
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const recent = new Map();

function tooMany(ip) {
  const now = Date.now();
  const times = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  times.push(now);
  recent.set(ip, times);
  if (recent.size > 5000) recent.clear(); // keep memory small
  return times.length > LIMIT;
}

export async function sendEnquiry(formData) {
  const source = formData.get("source") === "hire" ? "hire" : "contact";
  const sentPage = source === "hire" ? "/hire/thank-you" : "/contact/sent";

  // Spam trap: real visitors never see or fill the "website" field.
  if (clean(formData.get("website"))) redirect(sentPage);

  // Bots submit instantly. The form records when it was opened; under 3 seconds is treated as spam.
  const openedAt = Number(formData.get("openedAt"));
  if (openedAt && Date.now() - openedAt < 3000) redirect(sentPage);

  const ip = ((await headers()).get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (tooMany(ip)) redirect("/contact/error/busy");

  const name = clean(formData.get("name"), 120);
  const company = clean(formData.get("company"), 120);
  const contact = clean(formData.get("contact"), 160);
  const message = clean(formData.get("message"));
  const consent = formData.get("consent") === "on";

  if (!name || !contact || !message || !consent) redirect("/contact/error");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: email settings are missing.");
    redirect("/contact/error/setup");
  }

  // A short, password-free reason shown on the error page, so problems can be diagnosed.
  let reason = null;
  try {
    const port = Number(SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transport.sendMail({
      from: `NextGen HR website <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `${source === "hire" ? "Ad enquiry" : "Website enquiry"} from ${name.replace(/[\r\n]+/g, " ")}`,
      text: [`Name: ${name}`, `Company: ${company || "-"}`, `Work email or mobile: ${contact}`, `Page: /${source}`, "", message].join("\n"),
    });
  } catch (error) {
    console.error("Contact form: sending failed.", error);
    reason = error.code === "EAUTH" ? "login" : ["ESOCKET", "ETIMEDOUT", "ECONNECTION", "EDNS"].includes(error.code) ? "network" : "other";
  }

  // Visitors from the Hire landing page (Google Ads) get their own thank-you page, so ad conversions can be counted.
  redirect(reason ? `/contact/error/${reason}` : sentPage);
}
