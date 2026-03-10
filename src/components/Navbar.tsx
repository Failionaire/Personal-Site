"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AlchemicalSigil from "./AlchemicalSigil";

const navLinks = [
  { label: "About", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#06060e]/80 shadow-lg shadow-purple-500/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text font-heading text-xl font-bold text-transparent"
        >
          <span className="inline-block h-9 w-9 opacity-70 transition-transform duration-300 group-hover:scale-150">
            <AlchemicalSigil />
          </span>
          TEA
          <span className="pointer-events-none absolute top-full left-0 mt-2 whitespace-nowrap rounded-lg border border-white/10 bg-[#06060e]/95 px-3 py-1.5 font-sans text-xs font-normal italic text-purple-300/80 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100">
            Ex Silicio, cogitationes distillatae
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-purple-300"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 -z-10 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-6 bg-white/70 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white/70 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white/70 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="border-b border-white/10 bg-[#06060e]/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-purple-500/10 text-purple-300"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
