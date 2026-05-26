import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkle, GraduationCap } from "lucide-react";
import { useContent } from "../context/ContentContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Experience() {
  const { experience, certifications, education } = useContent();
  const EXPERIENCE = experience || [];
  const CERTIFICATIONS = certifications || [];
  const EDUCATION = education || [];
  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            § 06 — Track Record
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-serif text-[#F5F0E8] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-16 md:mb-20"
        >
          Experience &amp; <span className="italic text-[#C9A84C]">credentials.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          <span
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#C9A84C]/80 via-[#C9A84C]/30 to-transparent"
          />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="relative mb-14 md:mb-20"
              data-testid={`exp-${i}`}
            >
              <span
                aria-hidden
                className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3.5 h-3.5 border border-[#C9A84C] bg-[#0D0D0D]"
              />
              <span
                aria-hidden
                className="absolute -left-[33px] md:-left-[49px] top-[10px] w-1.5 h-1.5 bg-[#C9A84C]"
              />

              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] mb-3">
                {e.period}
              </div>
              <h3 className="font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight leading-tight">
                {e.role}
              </h3>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#888880]">
                {e.org}
              </div>
              <ul className="mt-5 space-y-2.5 text-[#888880] text-[15px] leading-[1.8] max-w-3xl">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 block w-3 h-px bg-[#C9A84C]/50 flex-shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Recognition
            </div>
            <h3 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl tracking-tight leading-tight">
              Certifications &amp; awards
            </h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.title}
                data-testid={`cert-${i}`}
                className="group flex items-start gap-4 p-5 border border-[#888880]/15 bg-[#111116] hover:border-[#C9A84C]/40 transition-colors duration-500"
              >
                <span className="mt-1 inline-flex items-center justify-center w-9 h-9 border border-[#C9A84C]/40 text-[#C9A84C] flex-shrink-0">
                  {c.icon === "trophy" ? (
                    <Trophy className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Sparkle className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </span>
                <div>
                  <div className="font-serif text-[#F5F0E8] text-lg md:text-xl leading-tight">
                    {c.title}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                    {c.year}
                  </div>
                  {c.note && (
                    <div className="mt-2 text-[#888880] text-[13px] leading-[1.55]">
                      {c.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Education
            </div>
            <h3 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl tracking-tight leading-tight">
              Where it began.
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {EDUCATION.map((ed) => (
              <div
                key={ed.degree}
                className="flex flex-col gap-3 pb-6 border-b border-[#C9A84C]/15"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex gap-4 items-start">
                    <GraduationCap
                      className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="font-serif text-[#F5F0E8] text-xl md:text-2xl tracking-tight">
                        {ed.degree}
                      </div>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#888880]">
                        {ed.school}
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] md:text-right md:flex-shrink-0">
                    {ed.period}
                    {ed.grade && (
                      <>
                        <span className="mx-2 text-[#888880]">·</span>
                        <span className="text-[#F5F0E8]">{ed.grade}</span>
                      </>
                    )}
                  </div>
                </div>
                {ed.note && (
                  <p className="md:ml-9 text-[#888880] text-[14px] leading-[1.65] italic">
                    {ed.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
