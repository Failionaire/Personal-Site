"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: string;
  id?: string;
}

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <motion.h2
      id={id}
      className="mb-8 font-heading text-3xl font-bold tracking-tight md:text-4xl"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {children}
      </span>
    </motion.h2>
  );
}
