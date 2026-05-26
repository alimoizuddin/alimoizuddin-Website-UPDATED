import React from "react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Philosophy() {
  const { philosophy } = useContent();
  const lines = philosophy?.lines || [];
  const body = philosophy?.body || "";

  return (
    <section
      id="philosophy"
      className="relative py-28 md:py-40 lg:py-48 border-t border-[#C9A84C]/10 overflow-hidden"
      data-testid="philosophy-section"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% 50%, rgba(31,71,136,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="block w-12 h-px bg-[#C9A84C]/50" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            § 05 — Philosophy
          </span>
          <span className="block w-12 h-px bg-[#C9A84C]/50" />
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {lines.map((l, i) => (
            <motion.p
              key={l}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="pull-quote text-[#F5F0E8] text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15]"
            >
              {l}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={4}
          className="mt-20"
        >
          <div className="gold-divider w-32 mx-auto mb-10" />
          <p className="max-w-2xl mx-auto text-[#888880] text-base md:text-lg leading-[1.85]">
            {body}
          </p>
          <div className="gold-divider w-32 mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
