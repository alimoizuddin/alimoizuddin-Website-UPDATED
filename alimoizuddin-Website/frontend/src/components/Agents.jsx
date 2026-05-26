import React from "react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

const verticalColors = {
  HEALTH: "text-[#C9A84C]",
  PRODUCTIVITY: "text-[#F5F0E8]",
  LIFESTYLE: "text-[#C9A84C]",
  KNOWLEDGE: "text-[#F5F0E8]",
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Agents() {
  const { agents } = useContent();
  return (
    <section
      id="agents"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10"
      data-testid="agents-section"
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
            § 04 — Custom GPT Ecosystem
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 font-serif text-[#F5F0E8] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
          >
            The agent <span className="italic text-[#C9A84C]">ecosystem.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 text-[#888880] text-base md:text-lg leading-[1.85] lg:pt-6"
          >
            Sixteen domain-specific GPT agents engineered across four verticals
            — each one tuned to a real cognitive job, not a generic chat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {(agents || []).map((a, i) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              data-testid={`agent-card-${a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="group relative bg-[#111116] border border-[#888880]/15 hover:border-[#C9A84C]/40 transition-colors duration-500 flex"
            >
              {/* Vertical chip rail */}
              <div className="flex items-center justify-center px-3 py-6 border-r border-[#C9A84C]/15">
                <span
                  className={`vchip font-mono text-[9px] uppercase tracking-[0.32em] ${
                    verticalColors[a.vertical] || "text-[#C9A84C]"
                  }`}
                >
                  {a.vertical}
                </span>
              </div>

              <div className="flex-1 p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-[#C9A84C] text-xl md:text-2xl tracking-tight leading-tight">
                    {a.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#888880]">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-[#F5F0E8] text-[15px] leading-[1.7]">
                  {a.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#888880]">
                  <span className="block w-4 h-px bg-[#C9A84C]/40" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    {a.method}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
