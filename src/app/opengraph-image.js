// The preview image shown when the site is shared on WhatsApp, LinkedIn, Facebook or X.

import { ImageResponse } from "next/og";

export const alt = "NextGen HR: recruitment agency and HR consultancy in Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#111418",
          color: "#FAF8F4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="88" height="60" viewBox="0 0 64 44">
            <circle cx="42" cy="22" r="18" fill="#C9875E" />
            <circle cx="22" cy="22" r="18" fill="none" stroke="#FAF8F4" strokeWidth="3" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1.5 }}>NextGen HR</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1, letterSpacing: -4 }}>
          <span>People first.</span>
          <span style={{ color: "#E2B08C" }}>Hiring done right.</span>
        </div>
        <span style={{ fontSize: 28, color: "#AEB6C1" }}>
          Recruitment agency and HR consultancy in Dubai · 20+ years of UAE experience
        </span>
      </div>
    ),
    size,
  );
}
