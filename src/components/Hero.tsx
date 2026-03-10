"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { resume } from "@/data/resume";
import Polyhedron from "./Polyhedron";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % resume.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-6xl text-center">
        {/* Name */}
        <motion.h1
          className="font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
            {resume.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mt-4 text-xl font-medium text-white/60 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {resume.title}
        </motion.p>

        {/* Animated taglines */}
        <motion.div
          className="mt-6 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={taglineIndex}
              className="inline-block bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-lg font-medium text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {resume.taglines[taglineIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Contact glass card */}
        <motion.div
          className="glass-card mx-auto mt-12 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-xl md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={`mailto:${resume.contact.email}`}
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-purple-300"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {resume.contact.email}
          </a>
          <span className="hidden h-4 w-px bg-white/20 md:block" />
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-purple-300"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="hidden h-4 w-px bg-white/20 md:block" />
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-purple-300"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="hidden h-4 w-px bg-white/20 md:block" />
          <a
            href={resume.contact.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-purple-300"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Credly
          </a>
          <span className="hidden h-4 w-px bg-white/20 md:block" />
          <span className="flex items-center gap-2 text-sm text-white/60">
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {resume.contact.location}
          </span>
        </motion.div>

        {/* Interactive polyhedron */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Polyhedron />
        </motion.div>
      </div>
    </section>
  );
}
