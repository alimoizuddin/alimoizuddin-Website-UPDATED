import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: "anand",
    quote:
      "Ali isn't just a creative; he is a ruthless operator. When we co-founded Radio Club, the biggest risk was the platform collapsing under its own weight as we grew. Ali stepped in and built the 'unsexy' operational backbone — the workflows, SOPs, and AI-assisted pipelines — that allowed us to scale from 0 to over 200 active members smoothly. He doesn't just manage content; he builds expressive infrastructure. Any Founder looking to scale their voice and operations without losing their human touch needs Ali in their corner.",
    name: "Anand Kumar",
    title: "Founder, Radio Club · Salesian College Siliguri",
    date: "March 2026",
    relation: "Co-founder · worked with Ali on the same team",
  },
  {
    id: "paul",
    quote:
      "I am delighted to recommend Ali Moizuddin, who made a meaningful contribution to the Radio Club during his four to five months at Salesian College. As a co-founding force in the club's early journey, Ali played an important role in shaping its vision, culture, and operational foundation. Even within a relatively short span, he demonstrated initiative, creativity, and a strong sense of teamwork that helped the club establish itself as a vibrant student-led platform.",
    name: "Paul Cheruthottupuram",
    title: "Former Director, Radio Salesian 90.8 FM",
    date: "April 2026",
    relation: "Mentor",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            § 08 — Testimonials
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-serif text-[#F5F0E8] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] max-w-4xl mb-16 md:mb-20"
        >
          What operators say about{" "}
          <span className="italic text-[#C9A84C]">the work.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#C9A84C]/15">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="bg-[#0D0D0D] p-8 md:p-10 lg:p-12 flex flex-col justify-between"
              data-testid={`testimonial-${t.id}`}
            >
              {/* Opening mark */}
              <span
                className="font-serif text-[#C9A84C] text-6xl leading-none mb-6 block"
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="text-[#888880] text-base md:text-[17px] leading-[1.85] flex-1">
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div className="mt-10 pt-8 border-t border-[#C9A84C]/15">
                <div className="font-serif text-[#F5F0E8] text-lg tracking-tight">
                  {t.name}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  {t.title}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#888880]">
                  {t.date} · {t.relation}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
