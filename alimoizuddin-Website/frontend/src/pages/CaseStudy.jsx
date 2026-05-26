import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useContent } from "../context/ContentContext";
import NoiseOverlay from "../components/NoiseOverlay";
import ReadingProgress from "../components/ReadingProgress";
import { track } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CaseStudy() {
  const { id } = useParams();
  const { projects, profile } = useContent();
  const PROFILE = profile || {};
  const project = (projects || []).find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      track("case_study_view", { id: project.id, title: project.title });
    }
  }, [project]);

  if (!project || !project.caseStudy) {
    return (
      <main className="relative min-h-screen bg-[#0D0D0D] text-[#F5F0E8] flex items-center justify-center px-6">
        <NoiseOverlay />
        <div className="text-center max-w-md">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-4">
            404 · Not Found
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mb-6 leading-tight">
            This case study doesn&rsquo;t exist.
          </h1>
          <Link
            to="/"
            data-testid="case-back-home"
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  const d = project.detail || {};

  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      <NoiseOverlay />
      <ReadingProgress />

      {/* mini nav */}
      <header className="sticky top-0 z-40 bg-[#0D0D0D]/85 backdrop-blur-md border-b border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880] hover:text-[#C9A84C] transition-colors"
            data-testid="case-nav-back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>
          <Link
            to="/"
            className="font-serif text-[#C9A84C] text-xl tracking-[0.18em]"
          >
            {PROFILE.brand || "ALI MOIZUDDIN"}
          </Link>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-12 h-px bg-[#C9A84C]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
            Case Study · {project.category}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-serif text-[#F5F0E8] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]"
          data-testid="case-title"
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-8 text-[#888880] text-lg md:text-xl leading-[1.75] max-w-3xl"
        >
          {project.description}
        </motion.p>

        {/* Meta strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#C9A84C]/20"
        >
          <div className="py-6 md:border-r border-[#C9A84C]/15 md:pr-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Headline Metric
            </div>
            <div className="mt-2 font-serif text-2xl md:text-3xl text-[#F5F0E8]">
              {project.metric}
            </div>
          </div>
          <div className="py-6 md:border-r border-[#C9A84C]/15 md:px-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Role
            </div>
            <div className="mt-2 text-[#F5F0E8] text-base leading-snug">
              {d.role || "Solo build"}
            </div>
          </div>
          <div className="py-6 md:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Category
            </div>
            <div className="mt-2 text-[#F5F0E8] text-base">{project.category}</div>
          </div>
        </motion.div>

        {/* Stack */}
        {d.stack && d.stack.length > 0 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
              Stack
            </div>
            <div className="flex flex-wrap gap-2.5">
              {d.stack.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-[#888880]/25 text-[12px] font-mono uppercase tracking-[0.12em] text-[#F5F0E8]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Problem */}
        {d.problem && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
              Problem
            </div>
            <p className="font-serif text-[#F5F0E8] text-2xl md:text-3xl leading-[1.35] max-w-3xl">
              {d.problem}
            </p>
          </motion.section>
        )}

        {/* Approach */}
        {d.approach && d.approach.length > 0 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
              Approach
            </div>
            <ol className="space-y-5 max-w-3xl">
              {d.approach.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-mono text-[#C9A84C] text-[11px] uppercase tracking-[0.22em] mt-2 flex-shrink-0 w-10">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#F5F0E8] text-[17px] leading-[1.7]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </motion.section>
        )}

        {/* Result */}
        {d.result && d.result.length > 0 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
              Result
            </div>
            <ul className="space-y-4 max-w-3xl">
              {d.result.map((r) => (
                <li key={r} className="flex gap-4">
                  <span className="mt-3 block w-6 h-px bg-[#C9A84C]" />
                  <span className="text-[#F5F0E8] text-lg md:text-xl leading-[1.55]">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-[#C9A84C]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-2">
              Want one built like this?
            </div>
            <p className="font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight max-w-xl leading-tight">
              Pick a lane in Contact — I&rsquo;ll reply within one working day.
            </p>
          </div>
          <Link
            to="/contact"
            data-testid="case-cta"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[#F5F0E8] transition-colors duration-500"
          >
            Work With Me
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </article>
    </main>
  );
}
