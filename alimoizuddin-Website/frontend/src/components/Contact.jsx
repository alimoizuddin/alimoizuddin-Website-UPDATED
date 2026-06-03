import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, Mail, ArrowUpRight, Phone } from "lucide-react";
import axios from "axios";
import { useContent } from "../context/ContentContext";
import Socials from "./Socials";
import ContactDialog from "./ContactDialog";
import { track } from "../lib/analytics";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Contact() {
  const { profile, contactCards } = useContent();
  const PROFILE = profile || {};
  const CONTACT_CARDS = contactCards || [];
  const [activeCard, setActiveCard] = useState(null);
  const wellfoundUrl = PROFILE.wellfound || "https://wellfound.com/u/ali-moizuddin-1";

  const openDialog = async (card) => {
    setActiveCard(card);
    track("contact_click", { kind: card.id });
    try {
      await axios.post(`${API}/contact-intent`, {
        kind: card.id,
        subject: card.subject,
        source: typeof window !== "undefined" ? window.location.href : "",
      });
    } catch {
      // non-blocking
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 lg:py-44 border-t border-[#C9A84C]/10 overflow-hidden"
      data-testid="contact-section"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 80% 20%, rgba(31,71,136,0.2) 0%, transparent 70%), radial-gradient(50rem 30rem at 10% 80%, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            § 07 — Contact
          </span>
          <span className="block flex-1 h-px bg-[#C9A84C]/20" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-serif text-[#F5F0E8] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.02] max-w-4xl"
        >
          Let&rsquo;s build something{" "}
          <span className="italic text-[#C9A84C]">impossible.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="mt-8 max-w-2xl text-[#888880] text-base md:text-lg leading-[1.85]"
        >
          Pick the lane. I&rsquo;ll reply within one working day with a clear next
          step — not a discovery questionnaire.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {CONTACT_CARDS.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 2}
              onClick={() => openDialog(c)}
              data-testid={`contact-card-${c.id}`}
              className="group block text-left p-8 md:p-10 bg-[#111116] border border-[#888880]/15 hover:border-[#C9A84C]/60 transition-colors duration-500 min-h-[300px] flex flex-col w-full"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
                  0{i + 1}
                </span>
                <ArrowUpRight
                  className="w-5 h-5 text-[#888880] group-hover:text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                  strokeWidth={1.25}
                />
              </div>
              <h3 className="mt-10 font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-[#888880] text-[15px] leading-[1.75] flex-1">
                {c.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
                {c.cta}
                <span className="block w-6 h-px bg-[#C9A84C] group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.button>
          ))}
        </div>

        <ContactDialog
          open={!!activeCard}
          onClose={() => setActiveCard(null)}
          kind={activeCard?.id || ""}
          title={activeCard?.title || ""}
          subject={activeCard?.subject || ""}
        />

        {/* Direct email + socials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={5}
          className="mt-16 flex flex-col gap-10 pt-10 border-t border-[#C9A84C]/15"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-direct-email"
              className="group inline-flex items-center gap-4 font-serif text-[#F5F0E8] text-2xl md:text-3xl tracking-tight hover:text-[#C9A84C] transition-colors duration-500"
            >
              <Mail className="w-5 h-5 text-[#C9A84C]" strokeWidth={1.5} />
              {PROFILE.email}
              <span className="block w-8 h-px bg-[#C9A84C] group-hover:w-16 transition-all duration-500" />
            </a>

            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              data-testid="contact-direct-phone"
              onClick={() => track("phone_click")}
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#888880] hover:text-[#C9A84C] transition-colors duration-500"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              {PROFILE.phone}
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin"
                onClick={() => track("social_click", { network: "linkedin" })}
                className="inline-flex items-center gap-2.5 px-5 py-3 border border-[#888880]/30 text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-500 font-mono text-[10px] uppercase tracking-[0.22em]"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                LinkedIn
              </a>
              <a
                href={PROFILE.notion}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-notion"
                onClick={() => track("social_click", { network: "notion" })}
                className="inline-flex items-center gap-2.5 px-5 py-3 border border-[#888880]/30 text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-500 font-mono text-[10px] uppercase tracking-[0.22em]"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                Notion Portfolio
              </a>
              <a
                href={wellfoundUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-wellfound"
                onClick={() => track("social_click", { network: "wellfound" })}
                className="inline-flex items-center gap-2.5 px-5 py-3 border border-[#888880]/30 text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-500 font-mono text-[10px] uppercase tracking-[0.22em]"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                Wellfound
              </a>
            </div>

            <Socials variant="row" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
