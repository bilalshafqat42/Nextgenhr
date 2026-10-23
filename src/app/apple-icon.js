// The home screen icon for iPhone and iPad (180 × 180 PNG), matching icon.svg.

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111418" }}>
        <svg width="132" height="90" viewBox="0 0 64 44">
          <circle cx="42" cy="22" r="18" fill="#C9875E" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#FAF8F4" strokeWidth="3" />
        </svg>
      </div>
    ),
    size,
  );
}
