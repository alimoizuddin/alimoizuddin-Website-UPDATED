import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

const SECTIONS = [
  { path: "/about", number: "01", title: "About", italic: "Identity", desc: "Background, philosophy, the interdisciplinary moat." },
  { path: "/projects", number: "02", title: "Projects", italic: "Systems", desc: "28 production systems across automation, EdTech, content, infrastructure." },
  { path: "/agents", number: "03", title: "Agents", italic: "Ecosystem", desc: "16 Custom GPTs, Gemini Gems & agentic workflows across 4 verticals." },
  { path: "/skills", number: "04", title: "Skills", italic: "Stack", desc: "Five capability stacks engineered to compose." },
  { path: "/philosophy", number: "05", title: "Philosophy", italic: "Edge", desc: "Why systems beat tasks, and why voice beats volume." },
  { path: "/experience", number: "06", title: "Experience", italic: "Record", desc: "Roles, awards, certifications, education." },
  { path: "/contact", number: "07", title: "Contact", italic: "Work", desc: "Three lanes: freelance, hiring, collaboration." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  const { profile } = useContent();
  return (
    <Layout>
      <Hero />
      <Marquee />

      {/* Section overview grid */}
      <section
        className="relative py-24 md:py-32 lg:py-40 border-t border-[#C9A84C]/10"
        data-testid="home-sections"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
              The Index
            </span>
            <span className="block flex-1 h-px bg-[#C9A84C]/20" />
          </div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="font-serif text-[#F5F0E8] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] max-w-4xl mb-16 md:mb-20"
          >
            Seven entry points into the work.{" "}
            <span className="italic text-[#C9A84C]">Pick yours.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/15">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.path}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="bg-[#0D0D0D]"
              >
                <Link
                  to={s.path}
                  data-testid={`home-section-${s.path.replace("/", "")}`}
                  className="group block p-8 md:p-10 lg:p-12 bg-[#0D0D0D] hover:bg-[#111116] transition-colors duration-500 h-full"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
                      § {s.number}
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#888880] group-hover:text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl tracking-tight leading-none">
                    {s.title}
                    <br />
                    <span className="italic text-[#C9A84C]">{s.italic}.</span>
                  </h3>
                  <p className="mt-6 text-[#888880] text-[15px] leading-[1.7]">
                    {s.desc}
                  </p>
                </Link>
              </motion.div>
            ))}

            {/* Sign-off tile */}
            <div className="bg-[#0D0D0D] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] mb-10">
                  Currently
                </div>
                <p className="font-serif text-[#F5F0E8] text-2xl md:text-3xl leading-snug">
                  Designing and deploying production AI systems — and selectively taking
                  <span className="italic text-[#C9A84C]"> {profile?.statusPillLabel?.split("·")[1]?.trim() || "2 new client slots"}</span> this quarter.
                </p>
              </div>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                {profile?.location?.split(",")[0] || "Siliguri"} · India
              </p>
            </div>

            {/* Closing tile — fills the 9th grid cell with intentional content */}
            <Link
              to="/contact"
              data-testid="home-section-cta-tile"
              className="group bg-[#0D0D0D] hover:bg-[#111116] p-8 md:p-10 lg:p-12 flex flex-col justify-between transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
                    § 08 — Open Lane
                  </span>
                  <ArrowUpRight
                    className="w-5 h-5 text-[#888880] group-hover:text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="font-serif text-[#F5F0E8] text-3xl md:text-4xl tracking-tight leading-none">
                  Let&rsquo;s build
                  <br />
                  <span className="italic text-[#C9A84C]">something impossible.</span>
                </h3>
                <p className="mt-6 text-[#888880] text-[15px] leading-[1.7]">
                  Freelance, hiring, or collaboration — three lanes, one reply within a working day.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Start here
                <span className="block w-6 h-px bg-[#C9A84C] group-hover:w-12 transition-all duration-500" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
    </Layout>
  );
}
