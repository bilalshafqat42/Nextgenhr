// Split section for job seekers: full-height photo on the left, text and links on the right.

import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import TextLink from "@/components/ui/TextLink";
import { jobSeekers } from "@/data/site";

export default function JobSeekers() {
  return (
    <section id="jobs" className="flex flex-wrap lg:min-h-[760px]">
      <div className="relative min-h-[480px] flex-[1_1_560px]">
        <Photo note={jobSeekers.photo} notePosition="left-5 top-5" />
      </div>

      <div className="flex min-w-0 flex-[1_1_560px] flex-col justify-center gap-7 bg-stone px-5 py-20 sm:px-18 sm:py-24">
        <SectionLabel>{jobSeekers.label}</SectionLabel>
        <h2 className="font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-6xl">
          {jobSeekers.title}
        </h2>
        <p className="max-w-[460px] text-lg leading-relaxed text-muted">{jobSeekers.text}</p>
        <div className="flex flex-wrap gap-8">
          {jobSeekers.links.map((link) => (
            <TextLink key={link.label} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
