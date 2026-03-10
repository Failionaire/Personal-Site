"use client";

import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20" id="education">
      <SectionHeading>Education</SectionHeading>
      <GlassCard>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
            <svg aria-hidden="true" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-white/90">
              {resume.education.degree}
            </h3>
            <p className="text-sm text-purple-300/80">
              {resume.education.school}
            </p>
            <p className="text-xs text-white/40">{resume.education.period}</p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
