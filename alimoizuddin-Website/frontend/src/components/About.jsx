import React from "react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import AnimatedNumber from "./AnimatedNumber";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};


export default function About() {
  const { profile, stats, about } = useContent();
  const paragraphs = about?.paragraphs || [];
  const quote = about?.quote || "";
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 lg:py-44"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            § 01 — Identity
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: portrait + pull-quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C9A84C]/30" aria-hidden />
              <div className="absolute -inset-3 -translate-x-3 -translate-y-3 border border-[#C9A84C]/10" aria-hidden />
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={profile?.photo}
                  alt={`Portrait of ${profile?.name || "Ali Moizuddin"}`}
                  width="640"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-110"
                  data-testid="about-portrait"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,13,13,0) 50%, rgba(13,13,13,0.55) 100%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>


            <div className="mt-10 grid grid-cols-3 gap-4 text-[#888880] font-mono text-[10px] uppercase tracking-[0.2em]">
              <div>
                <div className="text-[#C9A84C]">Based</div>
                <div className="text-[#F5F0E8] mt-1 font-sans normal-case tracking-normal text-sm">
                  Siliguri, IN
                </div>
              </div>
              <div>
                <div className="text-[#C9A84C]">Status</div>
                <div className="text-[#F5F0E8] mt-1 font-sans normal-case tracking-normal text-sm">
                  Taking work
                </div>
              </div>
              <div>
                <div className="text-[#C9A84C]">Voice</div>
                <div className="text-[#F5F0E8] mt-1 font-sans normal-case tracking-normal text-sm">
                  EN · HI
                </div>
              </div>
            </div>
          </motion.div>


          {/* Right: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <blockquote className="pull-quote text-[#F5F0E8] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15]">
              <span className="text-[#C9A84C] font-serif italic mr-2 text-5xl align-top leading-none">
                &ldquo;
              </span>
              {quote}
            </blockquote>


            <div className="mt-10 space-y-6 text-[#888880] text-base md:text-[17px] leading-[1.85] max-w-2xl">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>


            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[#C9A84C]/20">
              {(stats || []).map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`py-6 ${
                    i !== (stats?.length || 0) - 1
                      ? "md:border-r border-[#C9A84C]/15"
                      : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-[#C9A84C]/15" : ""}`}
                  data-testid={`stat-${i}`}
                >
                  <div className="font-serif text-[#C9A84C] text-3xl md:text-4xl tracking-tight">
                    <AnimatedNumber value={s.value} />
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#888880]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
