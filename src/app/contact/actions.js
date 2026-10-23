"use server";

// Sends a contact form enquiry to the company inbox through the company mailbox (Titan Mail).
// Mail settings come from environment variables (see .env.example), never from the code.

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

const clean = (value, max = 2000) => String(value ?? "").trim().slice(0, max);

export async function sendEnquiry(formData) {
  // Spam trap: real visitors never see or fill the "website" field.
  if (clean(formData.get("website"))) redirect("/contact/sent");

  const name = clean(formData.get("name"), 120);
  const company = clean(formData.get("company"), 120);
  const contact = clean(formData.get("contact"), 160);
  const message = clean(formData.get("message"));
  const consent = formData.get("consent") === "on";
  const source = formData.get("source") === "hire" ? "hire" : "contact";

  if (!name || !contact || !message || !consent) redirect("/contact/error");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: email settings are missing.");
    redirect("/contact/error/setup");
  }

  // A short, password-free reason shown on the error page, so problems can be diagnosed.
  let reason = null;
  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transport.sendMail({
      from: `NextGen HR website <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `${source === "hire" ? "Ad enquiry" : "Website enquiry"} from ${name.replace(/[\r\n]+/g, " ")}`,
      text: [`Name: ${name}`, `Company: ${company || "-"}`, `Phone or email: ${contact}`, `Page: /${source}`, "", message].join("\n"),
    });
  } catch (error) {
    console.error("Contact form: sending failed.", error);
    reason = error.code === "EAUTH" ? "login" : ["ESOCKET", "ETIMEDOUT", "ECONNECTION", "EDNS"].includes(error.code) ? "network" : "other";
  }

  // Visitors from the Hire landing page (Google Ads) get their own thank-you page, so ad conversions can be counted.
  redirect(reason ? `/contact/error/${reason}` : source === "hire" ? "/hire/thank-you" : "/contact/sent");
}
