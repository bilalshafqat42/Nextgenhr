"use server";

// Sends a contact form enquiry to the company inbox through the Hostinger mailbox.
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

  if (!name || !contact || !message || !consent) redirect("/contact/error");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: email settings are missing.");
    redirect("/contact/error");
  }

  let sent = false;
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
      subject: `Website enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text: [`Name: ${name}`, `Company: ${company || "-"}`, `Phone or email: ${contact}`, "", message].join("\n"),
    });
    sent = true;
  } catch (error) {
    console.error("Contact form: sending failed.", error);
  }

  redirect(sent ? "/contact/sent" : "/contact/error");
}
