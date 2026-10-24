"use client";

// Placed on the thank-you pages: records the enquiry as a lead in Google Analytics, Google Ads and Meta
// (only for visitors who accepted cookies). source: "contact" or "hire".

import { useEffect } from "react";
import { trackLead } from "@/lib/tracking";

export default function LeadEvent({ source }) {
  useEffect(() => trackLead(source), [source]);
  return null;
}
