// A full-bleed image area with a slow zoom animation.
// Pass src="/images/hero.jpg" to show a real photo. Until real photos arrive, it shows a large, faint
// version of the NextGen symbol (the two circles) so the area looks designed rather than empty.
// While developing, a note says which photo goes there (hidden on the live site).

import Image from "next/image";

export default function Photo({ src, alt = "", note, notePosition = "right-5 top-5", className = "", tone = "photo" }) {
  const background = tone === "alt" ? "bg-photo-alt" : "bg-photo";

  return (
    <div className={`absolute inset-0 overflow-hidden ${background} ${className}`}>
      <div className="slow-zoom absolute inset-0">
        {src ? (
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        ) : (
          <svg
            viewBox="0 0 64 44"
            aria-hidden="true"
            className="absolute top-1/2 right-[-30%] h-[115%] w-auto -translate-y-1/2 sm:right-[-14%]"
          >
            <circle cx="42" cy="22" r="18" fill="var(--accent-mark)" fillOpacity="0.1" />
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--paper)" strokeOpacity="0.08" strokeWidth="0.6" />
          </svg>
        )}
      </div>
      {/* Darkens the photo slightly so white text on top stays readable */}
      {src && <div className="absolute inset-0 bg-ink/35" />}
      {!src && note && process.env.NODE_ENV !== "production" && (
        <span className={`absolute ${notePosition} rounded border border-dashed border-muted-on-dark/60 px-2.5 py-1.5 text-xs text-muted-on-dark`}>
          Photo: {note}
        </span>
      )}
    </div>
  );
}
