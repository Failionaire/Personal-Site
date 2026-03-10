"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-purple-500/5 backdrop-blur-xl ${hover ? "transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] hover:shadow-purple-500/10" : ""} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
