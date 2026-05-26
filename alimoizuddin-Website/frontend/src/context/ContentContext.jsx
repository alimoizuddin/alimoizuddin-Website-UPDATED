import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as DEFAULTS from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Build the default content object so the site never breaks on backend failure.
const buildDefaults = () => ({
  profile: {
    ...DEFAULTS.PROFILE,
    statusPillLabel: "Available · 2 client slots",
    heroHeadlinePrefix: "I Build Systems",
    heroHeadlineSuffix: "That Think.",
    heroSub:
      "Transforming chaotic human cognition into scalable, autonomous AI infrastructure — for the operators, founders, and editorial-grade clients who can't afford generic.",
    brand: DEFAULTS.PROFILE.brand || "ALI MOIZUDDIN",
  },
  socials: DEFAULTS.SOCIALS,
  stats: DEFAULTS.STATS,
  philosophy: {
    lines: [
      "Build systems, not tasks.",
      "Optimize for leverage over effort.",
      "Convert information into execution.",
      "Use AI to amplify authentic human insight — not replace it.",
    ],
    body:
      "My edge is rare: literature-level understanding of human cognition, communication, and behavior — fused with systems-level mastery of AI architecture and automation. This combination is the foundation of every system I build.",
  },
  about: {
    quote:
      "I combine literature-level understanding of humans with systems-level mastery of AI. Very few people genuinely have both.",
    paragraphs: [
      "An MA in English Literature gave me the cognitive scaffolding — narrative theory, voice, and the architecture of meaning. AI gave me the tooling to operationalize it. Most operators have one or the other. The interdisciplinary moat is the entire point.",
      "I've built 20+ AI systems in production: ghostwriting pipelines that preserve founder voice, OCR engines that ingest decades of exam archives, agents that run while the operator sleeps. The work compounds 40–60% overhead reductions across clients — and once won 1st Prize at the Be10x AI Hackathon.",
      "Philosophy is simple: build systems, not tasks. Optimize for leverage over effort. Use AI to amplify authentic human insight — never to replace it. Anything less is just noise dressed up as productivity.",
    ],
  },
  contactCards: DEFAULTS.CONTACT_CARDS,
  competencies: DEFAULTS.COMPETENCIES,
  agents: DEFAULTS.AGENTS,
  experience: DEFAULTS.EXPERIENCE,
  certifications: DEFAULTS.CERTIFICATIONS,
  education: DEFAULTS.EDUCATION,
  projectCategories: DEFAULTS.PROJECT_CATEGORIES,
  stackMarquee: [
    "GPT-4", "Gemini", "Claude", "Whisper", "n8n", "Apollo.io", "Apify",
    "Pinecone", "ElevenLabs", "HeyGen", "VAPI.ai", "Lovable.dev",
    "React", "Tailwind", "Firebase", "Python", "Power BI", "DAX",
    "BM25", "RAG", "OCR", "Anki",
  ],
  projects: DEFAULTS.PROJECTS,
});

const ContentContext = createContext({
  content: buildDefaults(),
  loaded: false,
  refresh: () => {},
});

export function ContentProvider({ children }) {
  const [content, setContent] = useState(buildDefaults());
  const [loaded, setLoaded] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/content`);
      if (data && typeof data === "object" && Object.keys(data).length > 0) {
        // Merge server values over defaults so missing sections still work
        setContent((prev) => ({ ...prev, ...data }));
      }
    } catch (e) {
      // silent fall-back to defaults
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <ContentContext.Provider value={{ content, loaded, refresh: fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext).content;
}

export function useContentMeta() {
  return useContext(ContentContext);
}
