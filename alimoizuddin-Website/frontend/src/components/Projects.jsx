import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { track } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  const { projects, projectCategories } = useContent();
  const [filter, setFilter] = useState("ALL");

  const filtered = useMemo(
    () => (filter === "ALL" ? projects || [] : (projects || []).filter((p) => p.category === filter)),
    [filter, projects]
  );

  const cats = projectCategories || ["ALL"];

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10"
      data-testid="projects-section"
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
            § 03 — Selected Work
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 font-serif text-[#F5F0E8] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
          >
            Systems <span className="italic text-[#C9A84C]">I&rsquo;ve built.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 text-[#888880] text-base md:text-lg leading-[1.85] lg:pt-6"
          >
            Production-grade pipelines, agents, dashboards, and editorial
            engines. Each one shipped, measured, and still running.
          </motion.p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-14" data-testid="project-filters">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              data-testid={`project-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] border transition-colors duration-500 ${
                filter === c
                  ? "border-[#C9A84C] text-[#0D0D0D] bg-[#C9A84C]"
                  : "border-[#888880]/30 text-[#888880] hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              data-testid={`project-card-${p.id}`}
              className="group relative bg-[#111116] border border-[#888880]/15 p-7 md:p-10 flex flex-col min-h-[420px] hover:border-[#C9A84C]/60 transition-colors duration-500"
            >
              {/* abstract gradient header */}
              <div
                aria-hidden
                className={`card-abstract-${p.abstract} h-32 -mx-7 -mt-7 md:-mx-10 md:-mt-10 mb-8 relative overflow-hidden`}
              >
                <div className="absolute inset-0 mix-blend-overlay opacity-30 noise-overlay-mini" />
                <svg
                  className="absolute right-4 top-4 w-10 h-10 text-[#C9A84C]/40"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 38 L38 2 M2 2 L38 38"
                    stroke="currentColor"
                    strokeWidth="0.6"
                  />
                  <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="0.6" />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
                  {p.category}
                </span>
                <span className="block flex-1 h-px bg-[#C9A84C]/15" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#888880]">
                  /{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-serif text-[#F5F0E8] text-2xl md:text-[1.7rem] leading-tight tracking-tight">
                {p.title}
              </h3>

              <p className="mt-4 text-[#888880] text-[15px] leading-[1.8] flex-1">
                {p.description}
              </p>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C]">
                  <span className="block w-1 h-1 rounded-full bg-[#C9A84C]" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    {p.metric}
                  </span>
                </div>
                {p.caseStudy ? (
                  <Link
                    to={`/case-studies/${p.id}`}
                    onClick={() => track("case_study_open", { id: p.id })}
                    data-testid={`case-link-${p.id}`}
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] hover:text-[#F5F0E8] transition-colors duration-500"
                  >
                    <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Case Study
                  </Link>
                ) : (
                  <ArrowUpRight
                    className="w-5 h-5 text-[#888880] group-hover:text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                    strokeWidth={1.25}
                  />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
