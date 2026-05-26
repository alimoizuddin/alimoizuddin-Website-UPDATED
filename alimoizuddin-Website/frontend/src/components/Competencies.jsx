import React, { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Competencies() {
  const { competencies } = useContent();
  const [active, setActive] = useState("ALL");

  const filters = ["ALL", ...(competencies || []).map((c) => c.title)];
  const visibleGroups =
    active === "ALL"
      ? competencies || []
      : (competencies || []).filter((c) => c.title === active);

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10"
      data-testid="skills-section"
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
            § 02 — Competencies
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
            What I bring <span className="italic text-[#C9A84C]">to the table.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 text-[#888880] text-base md:text-lg leading-[1.85] lg:pt-6"
          >
            Five capability stacks — engineered to compose. Filter the grid to see
            the building blocks behind every system shipped on this page.
          </motion.p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 mb-10" data-testid="skill-filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              data-testid={`filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] border transition-colors duration-500 ${
                active === f
                  ? "border-[#C9A84C] text-[#0D0D0D] bg-[#C9A84C]"
                  : "border-[#888880]/30 text-[#888880] hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {visibleGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={gi}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              data-testid={`skill-group-${group.id}`}
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] mb-2">
                  0{gi + 1}
                </div>
                <h3 className="font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight">
                  {group.title}
                </h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip-glow inline-flex items-center px-4 py-2 rounded-full border border-[#888880]/25 text-[12px] font-mono uppercase tracking-[0.12em] text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-500 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
