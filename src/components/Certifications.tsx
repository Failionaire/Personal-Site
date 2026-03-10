"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20" id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {resume.certifications.map((cert, i) => (
          <motion.div
            key={cert}
            className="group relative rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-purple-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                <svg aria-hidden="true" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-purple-200">
                {cert}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
