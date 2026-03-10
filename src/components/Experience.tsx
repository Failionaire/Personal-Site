"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20" id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-purple-500/40 via-violet-500/20 to-transparent md:left-8" />

        <div className="flex flex-col gap-8">
          {resume.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              className="relative pl-12 md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 top-8 flex h-5 w-5 items-center justify-center md:left-6">
                <div className="h-3 w-3 rounded-full border-2 border-purple-400 bg-purple-400/20" />
                <div className="absolute h-5 w-5 animate-ping rounded-full bg-purple-400/20" />
              </div>

              <GlassCard>
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white/90">
                      {job.title}
                    </h3>
                    <p className="text-sm text-purple-300/80">
                      {job.company} &middot; {job.location}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                    {job.period}
                  </span>
                </div>

                {job.description && (
                  <p className="mb-4 text-sm leading-relaxed text-white/50">
                    {job.description}
                  </p>
                )}

                <ul className="space-y-2">
                  {job.highlights.map((highlight, j) => (
                    <motion.li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-white/65"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + j * 0.05 }}
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400/60" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
