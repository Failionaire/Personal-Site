"use client";

import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Summary() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20" id="summary">
      <SectionHeading>About</SectionHeading>
      <GlassCard className="text-base leading-relaxed text-white/70 md:text-lg md:leading-relaxed">
        <p>{resume.summary}</p>
      </GlassCard>
    </section>
  );
}
