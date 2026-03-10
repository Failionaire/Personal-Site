"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="skills">
      <SectionHeading>Technical Skills</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resume.skills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <GlassCard className="h-full">
              <h3 className="mb-3 font-heading text-sm font-semibold tracking-wide text-purple-300 uppercase">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition-colors hover:border-purple-500/30 hover:text-purple-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
