import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, FileText, GitBranch, Layers, ShieldCheck, Terminal } from "lucide-react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const docs = [
  {
    icon: Layers,
    eyebrow: "Site Structure",
    title: "Portfolio shell",
    body:
      "The website is a React portfolio with route-level pages for About, Skills, Projects, Docs, Agents, Philosophy, Experience, Contact, and project case studies.",
    points: [
      "Primary app shell: frontend/src/App.js",
      "Shared layout: Layout, Nav, Footer, PageHeader",
      "Case-study route: /case-studies/:id",
    ],
  },
  {
    icon: Database,
    eyebrow: "Content Model",
    title: "Single content map",
    body:
      "The public content is centralized in frontend/src/data/site.js, then normalized through ContentContext before it reaches the UI.",
    points: [
      "Projects, competencies, certifications, and profile copy live in site.js",
      "Remote content can merge through the backend when enabled",
      "Seed project data mirrors the public project list for backend initialization",
    ],
  },
  {
    icon: GitBranch,
    eyebrow: "Proof Archives",
    title: "Evidence over claims",
    body:
      "Selected builds have public proof folders under project-archives, with sanitized code, workflows, screenshots, docs, or package links.",
    points: [
      "Autonomous SDR Engine",
      "Autonomous CI/CD Pipeline",
      "Phantom-Spend SaaS Auditor",
      "YouTube Knowledge Extraction Engine",
      "OmniTranscriber Pro",
    ],
  },
  {
    icon: Terminal,
    eyebrow: "Transcriber Placement",
    title: "OmniTranscriber Pro",
    body:
      "The transcriber is documented as an EDTECH case study and proof archive, with the downloadable package pushed to its own GitHub repository.",
    points: [
      "Website case study: /case-studies/whisper-engine",
      "Proof archive: project-archives/omnitranscriber-pro",
      "Package repo: github.com/alimoizuddin/omnitranscriber-pro",
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Honesty Rules",
    title: "No inflated metrics",
    body:
      "The documentation uses code-backed claims only. The old fixed accuracy claim was replaced with confidence-flagged review because that is what the system verifies.",
    points: [
      "Self-directed build, not a paid client result",
      "Human-in-the-loop review is explicit",
      "Uncertain transcript segments are surfaced instead of hidden",
    ],
  },
  {
    icon: FileText,
    eyebrow: "Deployment",
    title: "Live website path",
    body:
      "The production frontend deploys from the GitHub main branch to Vercel. The backend API is hosted separately and can serve remote content when enabled.",
    points: [
      "Frontend host: Vercel",
      "Backend host: Render",
      "Production domain: alimoizuddin.in",
    ],
  },
];

const links = [
  {
    label: "OmniTranscriber Case Study",
    to: "/case-studies/whisper-engine",
    internal: true,
  },
  {
    label: "Project Proof Archive",
    href: "https://github.com/alimoizuddin/alimoizuddin-Website-UPDATED/tree/main/project-archives/omnitranscriber-pro",
  },
  {
    label: "Transcriber Package Repo",
    href: "https://github.com/alimoizuddin/omnitranscriber-pro",
  },
];

export default function DocumentationPage() {
  return (
    <Layout>
      <PageHeader
        kicker="Site Documentation"
        title="Documentation"
        italicWord="Documentation"
        sub="A public map of how the website is structured, where the proof lives, and how OmniTranscriber Pro is placed inside the portfolio."
      />

      <section className="relative border-t border-[#C9A84C]/10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#C9A84C]/15"
          >
            <div className="py-6 md:pr-8 md:border-r border-[#C9A84C]/15">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Source
              </div>
              <div className="mt-2 font-serif text-2xl text-[#F5F0E8]">GitHub main</div>
            </div>
            <div className="py-6 md:px-8 md:border-r border-[#C9A84C]/15">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Frontend
              </div>
              <div className="mt-2 font-serif text-2xl text-[#F5F0E8]">React + Tailwind</div>
            </div>
            <div className="py-6 md:pl-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Transcriber
              </div>
              <div className="mt-2 font-serif text-2xl text-[#F5F0E8]">Documented + packaged</div>
            </div>
          </motion.div>

          <div className="mt-16 space-y-6">
            {docs.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.article
                  key={doc.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-t border-[#C9A84C]/15 pt-8"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-[#C9A84C]/30 text-[#C9A84C]">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#C9A84C]">
                        {doc.eyebrow}
                      </span>
                    </div>
                    <h2 className="mt-5 font-serif text-3xl md:text-4xl text-[#F5F0E8] tracking-tight">
                      {doc.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[#EAEAEA] text-lg leading-[1.75] max-w-3xl">
                      {doc.body}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {doc.points.map((point) => (
                        <li key={point} className="flex gap-4 text-[#888880] leading-[1.7]">
                          <span className="mt-3 block h-px w-6 flex-shrink-0 bg-[#C9A84C]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 border-t border-[#C9A84C]/20 pt-10"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-6">
              Direct Links
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              {links.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="inline-flex items-center justify-between gap-4 border border-[#C9A84C]/30 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] hover:border-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-4 border border-[#C9A84C]/30 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] hover:border-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
