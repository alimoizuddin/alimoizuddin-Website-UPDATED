import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as DEFAULTS from "../data/site";




const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";
const REMOTE_CONTENT_ENABLED = process.env.REACT_APP_ENABLE_REMOTE_CONTENT === "true";
const CACHE_KEY = "ali_site_content";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes
const CONTENT_FETCH_TIMEOUT_MS = 1200;




const buildDefaults = () => ({
  profile: {
    ...DEFAULTS.PROFILE,
    statusPillLabel: "Open to roles · select freelance",
    heroHeadlinePrefix: "I Build AI Systems",
    heroHeadlineSuffix: "That Work.",
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
          "Since Feb 2023, I have built 20+ AI-powered systems across personal operating systems, learning infrastructure, RAG, OCR/BM25 search, transcription, SDR research, job-application automation, browser-agent workflows, and full-stack AI-assisted prototypes. From Feb 2026, that systems work evolved into content infrastructure: voice-to-asset pipelines, identity-preserving LLMs, and publishing workflows.",
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




function mergeProjectDetail(base, project) {
  const baseDetail = base?.detail && typeof base.detail === "object" ? base.detail : null;
  const projectDetail = project?.detail && typeof project.detail === "object" ? project.detail : null;

  if (!baseDetail && !projectDetail) return undefined;
  return { ...(baseDetail || {}), ...(projectDetail || {}) };
}




function mergeProjects(serverProjects) {
  const defaultProjects = DEFAULTS.PROJECTS || [];
  if (!Array.isArray(serverProjects)) return defaultProjects;

  const byId = new Map(defaultProjects.map((project) => [project.id, { ...project }]));
  const order = defaultProjects.map((project) => project.id);

  serverProjects.forEach((project) => {
    if (!project?.id) return;

    const base = byId.get(project.id) || {};
    const detail = mergeProjectDetail(base, project);
    const merged = {
      ...base,
      ...project,
      image: project.image?.src ? project.image : base.image,
    };

    if (detail) merged.detail = detail;
    byId.set(project.id, merged);

    if (!order.includes(project.id)) {
      order.push(project.id);
    }
  });

  return order.map((id) => byId.get(id)).filter(Boolean);
}




function normalizeAbout(about, defaults) {
  const merged = { ...defaults, ...(about || {}) };
  const paragraphs = Array.isArray(merged.paragraphs) ? merged.paragraphs : defaults.paragraphs;
  const defaultSinceFeb = defaults.paragraphs?.[1];

  merged.paragraphs = paragraphs
    .map((paragraph) => {
      if (typeof paragraph !== "string") return paragraph;
      if (paragraph.includes("Since Feb 2023")) return defaultSinceFeb;
      return paragraph;
    })
    .filter((paragraph) => {
      if (typeof paragraph !== "string") return true;
      return !/self-directed|unpaid delegated|unpaid builds/i.test(paragraph);
    });

  return merged;
}




function normalizeProfile(profile, defaults) {
  const merged = { ...defaults, ...(profile || {}) };
  const oldSuffixes = new Set([
    "That Reduce Manual Work.",
    "That Thinks.",
    "That Turn Messy Work Into Repeatable Execution.",
  ]);

  if (!merged.heroHeadlineSuffix || oldSuffixes.has(merged.heroHeadlineSuffix)) {
    merged.heroHeadlineSuffix = defaults.heroHeadlineSuffix;
  }

  return merged;
}




function normalizeExperience(experience) {
  const defaults = DEFAULTS.EXPERIENCE || [];
  if (!Array.isArray(experience)) return defaults;

  const systemsRole = defaults.find((entry) => entry.role === "AI Automation Engineer · RAG · n8n · Agentic Workflows");

  return experience.map((entry) => {
    if (!systemsRole || !entry) return entry;
    const isSystemsRole =
      entry.role === systemsRole.role ||
      (entry.period === "Feb 2023 — Present" && /system|architect|automation/i.test(entry.role || ""));

    return isSystemsRole ? { ...entry, ...systemsRole } : entry;
  });
}




function normalizeContent(data = {}) {
  if (!data || typeof data !== "object") return {};

  const defaults = buildDefaults();

  return {
    ...data,
    profile: normalizeProfile(data.profile, defaults.profile),
    about: normalizeAbout(data.about, defaults.about),
    socials: Array.isArray(data.socials) ? data.socials : defaults.socials,
    experience: normalizeExperience(data.experience),
    projects: mergeProjects(data.projects),
  };
}




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
  const cached = REMOTE_CONTENT_ENABLED ? readCache() : null;
  const [content, setContent] = useState(cached ? { ...buildDefaults(), ...normalizeContent(cached) } : buildDefaults());
  const [loaded, setLoaded] = useState(true); // always true — never block render




  const fetchContent = useCallback(async () => {
    if (!REMOTE_CONTENT_ENABLED || !API) return;

    try {
      const { data } = await axios.get(`${API}/content`, { timeout: CONTENT_FETCH_TIMEOUT_MS });
      if (data && typeof data === "object" && Object.keys(data).length > 0) {
        const normalized = normalizeContent(data);
        setContent((prev) => ({ ...prev, ...normalized }));
        writeCache(normalized); // cache for next visit
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



