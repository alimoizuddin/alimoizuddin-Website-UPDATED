import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Trophy } from "lucide-react";
import { useContent } from "../context/ContentContext";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const { profile } = useContent();
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 24,
        behavior: "smooth",
      });
    }
  };

  const suffix = profile?.heroHeadlineSuffix || "That Think.";
  const suffixWords = suffix.split(" ");
  const lastWord = suffixWords[suffixWords.length - 1] || "";
  const suffixHead = suffixWords.slice(0, -1).join(" ");
  const m = lastWord.match(/^([^.,!?]+)([.,!?]*)$/);
  const goldWord = m ? m[1] : lastWord;
  const punct = m ? m[2] : "";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-mesh overflow-hidden"
      data-testid="hero-section"
    >
      {/* Decorative meshes — hidden on mobile for performance */}
      <div
        aria-hidden
        className="hero-blob-1 absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-[#1F4788] opacity-25 blur-[120px]"
      />
      <div
        aria-hidden
        className="hero-blob-2 absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[#C9A84C] opacity-[0.07] blur-[140px]"
      />

      {/* Achievement badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-24 md:top-28 right-6 md:right-10 lg:right-16 z-10"
        data-testid="hero-badge"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full shimmer opacity-60 blur-md" aria-hidden />
          <div className="relative flex items-center gap-3 px-4 py-2.5 border border-[#C9A84C]/40 rounded-full bg-[#0D0D0D]/60 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={1.5} />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#F5F0E8]">
              1st Prize · Be10x AI Hackathon
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-[#C9A84C]/40" />
            <span className="hidden sm:inline font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Top 0.1% ChatGPT
            </span>
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-24 w-full">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <span className="block w-12 h-px bg-[#C9A84C]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
            Issue 01 · Siliguri, India · 2026
          </span>
          <span
            data-testid="status-pill"
            className="hidden sm:inline-flex items-center gap-2.5 ml-2 pl-3 pr-4 py-1.5 border border-[#888880]/30 rounded-full bg-[#0D0D0D]/40 backdrop-blur-sm"
          >
            <span className="relative flex">
              <span className="status-dot block w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5F0E8]">
              {profile?.statusPillLabel || "Available · 2 client slots"}
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-serif text-[#F5F0E8] text-[3.4rem] leading-[0.95] sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-light tracking-[-0.02em]"
          data-testid="hero-headline"
        >
          {profile?.heroHeadlinePrefix || "I Build Systems"}
          <br />
          <span className="italic text-[#F5F0E8]">
            {suffixHead && <>{suffixHead} </>}
            <span className="text-[#C9A84C]">{goldWord}</span>
            {punct}
          </span>
        </motion.h1>

        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-10 max-w-2xl font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#C9A84C]"
        >
          AI Systems Architect · Certified AI Generalist · 1st Prize Be10x · Top 0.1% ChatGPT
        </motion.p>

        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-6 max-w-2xl text-lg md:text-xl text-[#888880] leading-relaxed"
        >
          {profile?.heroSub ||
            "Transforming chaotic human cognition into scalable, autonomous AI infrastructure — for the operators, founders, and editorial-grade clients who can't afford generic."}
        </motion.p>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/projects"
            data-testid="hero-work-btn"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-[#F5F0E8] transition-colors duration-500"
          >
            See My Work
            <span className="block w-6 h-px bg-[#0D0D0D] group-hover:w-10 transition-all duration-500" />
          </a>
          <a
            href="/contact"
            data-testid="hero-contact-btn"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] font-mono text-[11px] uppercase tracking-[0.25em] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors duration-500"
          >
            Work With Me
            <span className="block w-6 h-px bg-[#C9A84C] group-hover:w-10 transition-all duration-500" />
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute left-6 md:left-10 lg:left-16 bottom-10 hidden md:flex items-center gap-4"
          aria-hidden
        >
          <div className="relative h-16 w-px bg-[#888880]/20 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#C9A84C] to-transparent animate-scroll-cue" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#888880]">
            Scroll
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute right-6 md:right-10 lg:right-16 bottom-10 hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#888880]"
        >
          <ArrowDown className="w-3 h-3" strokeWidth={1.5} />
          Systems Portfolio
        </motion.div>
      </div>
    </section>
  );
}
