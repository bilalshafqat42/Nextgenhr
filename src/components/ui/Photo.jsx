// A full-bleed photo area with a slow zoom animation.
// Until real photos arrive it shows a dark placeholder with a note saying what goes there.
// Later: pass src="/images/hero.jpg" and it shows the real photo instead.

import Image from "next/image";

export default function Photo({ src, alt = "", note, notePosition = "right-5 top-5", className = "", tone = "photo" }) {
  const background = tone === "alt" ? "bg-photo-alt" : "bg-photo";

  return (
    <div className={`absolute inset-0 overflow-hidden ${background} ${className}`}>
      <div className="slow-zoom absolute inset-0">
        {src ? (
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_36px)]" />
        )}
      </div>
      {/* Darkens the photo slightly so white text on top stays readable */}
      <div className="absolute inset-0 bg-ink/35" />
      {!src && note && (
        <span className={`absolute ${notePosition} rounded border border-dashed border-muted-on-dark/60 px-2.5 py-1.5 text-xs text-muted-on-dark`}>
          Photo: {note}
        </span>
      )}
    </div>
  );
}
