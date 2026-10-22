// Full-height founder portrait on one side, their quote and credentials on the other.

import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import { founder } from "@/data/site";

export default function Founder() {
  return (
    <section className="flex flex-wrap bg-stone lg:min-h-[900px]">
      <div className="relative min-h-[560px] flex-[1_1_560px]">
        <Photo note={founder.photo} notePosition="left-5 top-5" />
      </div>

      <div className="flex min-w-0 flex-[1_1_600px] flex-col justify-center gap-10 px-5 py-20 sm:px-18 sm:py-28">
        <SectionLabel>{founder.label}</SectionLabel>
        <blockquote className="font-display text-3xl leading-[1.18] tracking-[-0.025em] sm:text-[42px]">
          &ldquo;{founder.quote}&rdquo;
        </blockquote>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-medium">{founder.name}</span>
          <span className="text-[15px] text-muted">{founder.role}</span>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 border-t border-ink text-[15px] sm:grid-cols-2">
          {founder.credentials.map((item) => (
            <li key={item} className="border-b border-line py-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
