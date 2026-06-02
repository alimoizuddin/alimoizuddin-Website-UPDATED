import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as DEFAULTS from "../data/site";




const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const CACHE_KEY = "ali_site_content";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes




const buildDefaults = () => ({
  profile: {
    ...DEFAULTS.PROFILE,
    statusPillLabel: "Available · 2 client slots",
    heroHeadlinePrefix: "I Build AI Systems",
    heroHeadlineSuffix: "That Reduce Manual Work.",
    heroSub:
      "Building RAG, agentic AI, n8n, OCR/BM25 search, transcription, SDR research, and workflow automation systems that turn messy information into repeatable execution.",
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
    body: "My edge is rare: literature-level understanding of human cognition, communication, and behavior — fused with systems-level mastery of AI architecture and automation. This combination is the foundation of every system I build.",
  },
  about: {
    quote: "I combine literature-level understanding of humans with systems-level mastery of AI. Very few people genuinely have both.",
    paragraphs: [
          "An MA in English Literature gave me the cognitive scaffolding — narrative theory, voice, and the architecture of meaning. AI gave me the tooling to operationalize it. Most operators have one or the other. The interdisciplinary moat is the entire point.",
          "Since Feb 2023, I have built 20+ AI-powered systems across personal operating systems, learning infrastructure, RAG, OCR/BM25 search, transcription, SDR research, job-application automation, browser-agent workflows, and full-stack AI-assisted prototypes. Most were self-directed; some were unpaid delegated builds for friends and Radio Club team members.",
          "The goal is simple: reduce manual repetition, structure messy inputs, and turn scattered workflows into repeatable operating infrastructure. The systems consistently target 40–60% less manual overhead while preserving human judgment, voice, and context."
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




// Read from sessionStorage cache
function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    return data;
  } catch { return null; }
}




// Write to sessionStorage cache
function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}




const ContentContext = createContext({
  content: buildDefaults(),
  loaded: false,
  refresh: () => {},
});




export function ContentProvider({ children }) {
  // Start with cache if available, else defaults — page renders instantly either way
  const cached = readCache();
  const [content, setContent] = useState(cached ? { ...buildDefaults(), ...cached } : buildDefaults());
  const [loaded, setLoaded] = useState(true); // always true — never block render




  const fetchContent = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/content`, { timeout: 5000 });
      if (data && typeof data === "object" && Object.keys(data).length > 0) {
        setContent((prev) => ({ ...prev, ...data }));
        writeCache(data); // cache for next visit
      }
    } catch {
      // silent — defaults already showing
    }
  }, []);




  useEffect(() => {
    // Refresh content after first paint without making mobile users wait 3 seconds.
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(fetchContent, { timeout: 1000 });
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timer = setTimeout(fetchContent, 250);
    return () => clearTimeout(timer);
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



