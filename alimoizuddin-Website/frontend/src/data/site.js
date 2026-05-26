// Centralized content data for the site. Edit here to update everything.
// Last updated: May 2026 — synced with Portfolio Resume v4

export const PROFILE = {
  name: "Ali Moizuddin",
  shortName: "Ali Moizuddin",
  brand: "ALI MOIZUDDIN",
  tagline: "AI Systems Architect · Certified AI Generalist · Content Systems Specialist",
  location: "Siliguri, West Bengal, India",
  email: "aalimoizuddin@outlook.com",
  phone: "+91 8392006965",
  linkedin: "https://www.linkedin.com/in/alimoizuddin",
  notion:
    "https://www.notion.so/Ali-Moizuddin-Ghostwriter-AI-Content-Specialist-32b966fa7e83801b95e7f7be1caab23e",
  photo:
    "https://customer-assets.emergentagent.com/job_3e46ef77-ca74-4e8e-a719-ab3f22e4f199/artifacts/v3cmir8v_Profile%20Pic.jpg",
  // ↑ Replace this URL after deploying: Admin Panel → Image Library → upload photo → paste URL here
  statusPillLabel: "Available · 2 client slots",
};

// Social handles — drop your URLs in here. Set to null/empty to hide.
export const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", handle: "@alimoizuddin", url: "https://www.linkedin.com/in/alimoizuddin", icon: "linkedin" },
  { id: "x", label: "X / Twitter", handle: "@Ali_Moizuddin_", url: "https://x.com/Ali_Moizuddin_", icon: "twitter" },
  { id: "instagram", label: "Instagram", handle: "@ali_moizuddin_", url: "https://www.instagram.com/ali_moizuddin_/", icon: "instagram" },
  { id: "facebook", label: "Facebook", handle: "", url: "https://www.facebook.com/share/18xN3ZB3Xb/?mibextid=wwXIfr", icon: "facebook" },
  { id: "github", label: "GitHub", handle: "alimoizuddin", url: "https://github.com/alimoizuddin", icon: "github" },
  { id: "notion", label: "Notion", handle: "Portfolio", url: "https://www.notion.so/Ali-Moizuddin-Ghostwriter-AI-Content-Specialist-32b966fa7e83801b95e7f7be1caab23e", icon: "external" },
  // YouTube removed — add back when channel is ready:
  // { id: "youtube", label: "YouTube", handle: "@your-handle", url: "https://youtube.com/@your-handle", icon: "youtube" },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "agents", label: "Agents" },
  { id: "philosophy", label: "Philosophy" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "20+", label: "AI Systems Built" },
  { value: "40–60%", label: "Avg. Overhead Reduction" },
  { value: "200+", label: "Community Members Scaled" },
  { value: "1,000+", label: "Flashcard Entries Automated" },
];

export const COMPETENCIES = [
  {
    id: "ai",
    title: "AI & Automation",
    items: [
      "Agentic AI",
      "Custom GPT Architecture",
      "RAG Pipelines",
      "Vector Databases (Pinecone)",
      "n8n Workflow Automation",
      "VAPI.ai (Voice Agents)",
      "Advanced Prompt Engineering",
      "Zero-Shot / Few-Shot / Role-Playing",
      "Synthetic Media (HeyGen, ElevenLabs)",
      "Whisper / Faster-Whisper Transcription",
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Development",
    items: [
      "AI-Assisted Full-Stack Prototyping (Vibe Coding)",
      "Lovable.dev · Gradio · Emergent",
      "Python · Colab",
      "Bash / .bat Scripting",
      "Prompt-Driven UI (React.js)",
      "Tailwind CSS",
      "JSON Data Mapping",
      "REST API Integrations",
      "BM25 Search",
      "OCR",
      "Firebase",
      "Agentic Web Navigation",
      "Anti-Bot Bypass Strategies",
      "Multi-Agent Orchestration",
      "Web Scraping & Data Extraction (yt-dlp)",
      "Large-Scale Text Parsing",
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    items: [
      "Power BI",
      "DAX",
      "ETL Processes",
      "Dashboard Visualization",
      "MS Excel",
      "AI-Assisted VBA Macros",
    ],
  },
  {
    id: "content",
    title: "Content & Strategy",
    items: [
      "Independent Ghostwriting",
      "Executive Communications",
      "Brand Storytelling",
      "Pyramid Principle",
      "SCR Framework",
      "Edutainment",
      "Knowledge Distillation (80/20)",
      "Instructional Design",
      "Spaced Repetition · Anki",
      "Copywriting",
      "SOP Design",
      "Editorial Judgment",
    ],
  },
  {
    id: "systems",
    title: "Specialized Systems Thinking",
    items: [
      "80/20 Knowledge Compression",
      "Retrieval-Based Learning",
      "AI-Augmented Cognition",
      "Founder Communication Systems",
      "Behavioral Activation Frameworks",
      "Information-to-Execution Pipelines",
      "Human-Centered AI Automation",
      "Prompt Behavioral Engineering",
      "Cognitive Systems Design",
      "Human-AI Collaboration Design",
      "Knowledge Management Systems",
      "Information Architecture",
      "Behavioral Systems Engineering",
      "AI Workflow Orchestration",
      "Retrieval Systems",
      "Learning Engineering",
      "Multimodal AI Pipelines",
      "Prompt Systems Architecture",
      "Autonomous Agent Design",
      "AI-Augmented Research",
      "Educational AI Systems",
      "High-Fidelity Persona Replication",
      "Hybrid AI Architectures",
    ],
  },
];

export const PROJECTS = [
  // AUTOMATION
  {
    id: "digital-twin",
    category: "AUTOMATION",
    title: "Hybrid Digital Twin & Large-Scale Knowledge Extraction Engine",
    description:
      "Custom Python + Gradio web app bypassing API rate limits via yt-dlp and webvtt-py, extracting 1.95M words from 900+ media assets — compiled into NotebookLM Mega-Files powering a two-tier Digital Twin coaching system.",
    metric: "1.95M words processed",
    abstract: 4,
    caseStudy: true,
    detail: {
      role: "Solo build · architect",
      stack: ["Python", "Google Colab", "Gradio", "yt-dlp", "webvtt-py", "NotebookLM", "Gemini Gem"],
      problem:
        "Needed a way to extract, compress, and make queryable a massive library of long-form media content — while maintaining 100% framework accuracy without hallucination, at a scale no manual process could touch.",
      approach: [
        "Built a custom Python + Gradio web application with a frontend GUI to autonomously extract subtitle data from 900+ media assets, bypassing API rate limits and bot-blocking mechanisms without timeouts.",
        "Designed a dynamic chunking algorithm to clean and compile 1.95 million words into NotebookLM Mega-Files optimized for the 500,000-word context window.",
        "Architected a two-tier hybrid coaching system: NotebookLM as the core brain for strategic synthesis and 100% accurate framework recall, Gemini Gem for real-time YouTube search and ghostwriting execution.",
      ],
      result: [
        "900+ long-form assets made fully queryable with zero hallucination.",
        "1.95 million words compressed and structured without information loss.",
        "A coaching system that retrieves frameworks accurately on demand — at any hour.",
      ],
    },
  },
  {
    id: "job-hunt-engine",
    category: "AUTOMATION",
    title: "Autonomous Executive Job Hunt & SDR Engine",
    description:
      "6-layer browser-agent pipeline scraping Otta and YC, extracting real-time company pain points via Perplexity AI, generating .docx Handoff Packages with 90%+ ATS-optimized resumes and personalized cold outreach.",
    metric: "95% manual overhead reduction",
    abstract: 5,
    caseStudy: true,
    detail: {
      role: "Solo build · architect",
      stack: ["Python", "Code Interpreter", "Perplexity AI", "Browser agents", "Otta", "YC", "python-docx", "Apify", "Claude", "MiniMax Agent", "Codex"],
      problem:
        "Manual job applications collapse at volume. Researching each company, tailoring each resume, writing each cold email — done manually, quality disintegrates by application 10. The system needed to scale without sacrificing precision.",
      approach: [
        "Constructed a 6-layer autonomous browser-agent pipeline scraping global job boards (Otta, YC) for live listings.",
        "Extracted real-time company pain points via Perplexity AI — specific signals, not generic summaries.",
        "Dynamically tailored resume matrices per role, prioritizing the 20% of experience matching 80% of the JD.",
        "Generated downloadable .docx Handoff Packages per application: 90%+ ATS-optimized resume + hyper-personalized cold outreach draft.",
        "Engineered anti-bot bypass mechanisms to maintain pipeline continuity across job boards.",
      ],
      result: [
        "95% reduction in manual application and research overhead.",
        "Every application ships with a bespoke resume and opening message — at scale.",
        "Multi-hour workflow compressed into a 15-minute execution loop with 85%+ ATS fitment.",
      ],
    },
  },
  {
    id: "sdr-ghostwriting",
    category: "AUTOMATION",
    title: "SDR Executive Ghostwriting Pipeline",
    description:
      "Autonomous engine ingesting Apollo leads via Sheets, scraping recent posts with Apify, deploying QA Bouncer + Pitch Architect agents to generate hyper-personalized outreach — logging directly to CRM.",
    metric: "70% manual effort reduction",
    abstract: 1,
    caseStudy: true,
    detail: {
      role: "Solo build · architect / operator",
      stack: ["Apollo.io", "Apify", "n8n", "OpenAI (multi-agent)", "Google Sheets", "CRM webhook"],
      problem:
        "Outbound SDR work was breaking down at the personalization step. Generic templates got ignored, manual research was too slow to scale past 20–30 prospects per day, and reps were burning out before reaching pipeline targets.",
      approach: [
        "Ingest Apollo leads into a Sheet — single source of truth.",
        "Trigger Apify post-scraper per prospect to grab last 30 days of public signal.",
        "QA Bouncer agent screens the lead: title fit, post quality, recency.",
        "Pitch Architect agent drafts a personalized opener referencing the actual post.",
        "Approved outputs ship to the CRM with rationale + retry hooks.",
      ],
      result: [
        "70% manual SDR effort eliminated.",
        "Open + reply rates lifted because every message references something the prospect actually said publicly.",
        "Operator becomes a reviewer, not a researcher.",
      ],
    },
  },
  {
    id: "cicd-reasoning",
    category: "AUTOMATION",
    title: "Autonomous CI/CD Pipeline",
    description:
      "n8n workflow triggered via Outlook on code commits, using an OpenAI reasoning engine + Autonomous QA Architect to sanitize payloads, evaluate code quality, and dispatch success/rejection signals.",
    metric: "50%+ review cycle reduction",
    abstract: 2,
  },
  {
    id: "content-pipeline",
    category: "AUTOMATION",
    title: "End-to-End Content Automation System",
    description:
      "Full-stack engine automating ideation, drafting, editing, and publishing for 5+ active clients with structured prompts and multi-layer validation.",
    metric: "5+ clients in production",
    abstract: 3,
    caseStudy: true,
    detail: {
      role: "Solo build · system + editorial architect",
      stack: ["GPT-4", "Gemini", "n8n", "Python", "Notion", "Google Drive", "Custom validation layers"],
      problem:
        "Multi-client ghostwriting hits a wall fast: each operator has their own voice, their own publishing cadence, and their own zero-tolerance failure modes. Manual context-switching destroyed quality and throughput.",
      approach: [
        "Operator-specific config: voice rules, do-not-write list, structural templates, tone guard-rails.",
        "Pipeline stages: ideation prompts → draft → tone audit → style audit → publish-ready handoff.",
        "Each stage has its own validator — a rejection bounces back to the previous stage with a reason.",
        "All assets versioned, all rejections logged so the system learns what fails per client.",
      ],
      result: [
        "Production-ready for 5+ active clients in parallel.",
        "Output consistency holds even with sub-2-hour turnarounds.",
        "Operator becomes editor-in-chief, not staff writer.",
      ],
    },
  },
  // EDTECH
  {
    id: "ocr-engine",
    category: "EDTECH",
    title: "Industrial-Grade Vision-OCR Engine",
    description:
      "Full document lifecycle for 100+ page PDFs: ingestion, preprocessing, OCR, structuring, searchable PDF export, DOCX, LaTeX math, handwriting + table extraction, and QA reporting.",
    metric: "90% time reduction",
    abstract: 4,
    caseStudy: true,
    detail: {
      role: "Solo build · system architect",
      stack: ["Python", "Vision OCR", "LaTeX", "Manifest tracking", "DOCX exporters"],
      problem:
        "20+ years of UGC NET prep material existed as scattered PDFs, photocopies, and handwritten notes. Searching was impossible. Studying meant flipping pages. The cognitive cost was destroying retention.",
      approach: [
        "Built an ingestion-first OCR pipeline that handles 100+ page documents without choking.",
        "Layered handwriting extraction + LaTeX math extraction + table structuring on top of base OCR.",
        "Resumable processing with manifest tracking — never re-process what already succeeded.",
        "Output formats: searchable PDF, DOCX, plain text, structured JSON for downstream RAG.",
      ],
      result: [
        "90% reduction in manual extraction time.",
        "Decades of exam archives became fully queryable.",
        "Became the data backbone for the BM25 Search Engine and RAG Pipeline projects.",
      ],
    },
  },
  {
    id: "bm25-search",
    category: "EDTECH",
    title: "Custom BM25 Search Engine",
    description:
      "Proprietary OCR + BM25 retrieval over 500+ pages of digitized notes and 20+ years of UGC NET past year questions — manual search reduced from hours to seconds.",
    metric: "500+ pages indexed",
    abstract: 5,
    caseStudy: true,
    detail: {
      role: "Solo build · retrieval architect",
      stack: ["Custom OCR", "BM25 ranking", "Python", "Manifest-tracked indexing", "Query deduplication"],
      problem:
        "Modern vector search is overkill for tightly-scoped exam corpora — and it costs both money and latency. The right tool for 20+ years of UGC NET questions is ranked term retrieval. The problem: nobody wanted to build it.",
      approach: [
        "Digitize 500+ pages of handwritten + printed notes via custom OCR pipeline.",
        "Tokenize, stem, normalize — then index with classical BM25 ranking.",
        "Deduplicate near-identical questions across years; tag by topic + year.",
        "Surface ranked matches sub-second on a laptop, no API costs.",
      ],
      result: [
        "Manual search went from hours to seconds.",
        "Demonstrates that the right retrieval choice can beat 'just use a vector DB' by a wide margin on the right corpus.",
        "Became the foundation of the EdTech RAG pipeline downstream.",
      ],
    },
  },
  {
    id: "whisper-engine",
    category: "EDTECH",
    title: "Faster-Whisper Transcription Engine",
    description:
      "Full-stack bilingual (English/Hindi) transcription engine with Colab GPU support, batch processing, file/link/microphone input, subtitle generation, and TXT/SRT/VTT/JSON/ZIP exports across 100+ hours.",
    metric: "90%+ accuracy · 100+ hrs processed",
    abstract: 3,
  },
  {
    id: "rag-pipeline",
    category: "EDTECH",
    title: "AI-Driven RAG Pipeline",
    description:
      "Ingests transcripts, OCR PDFs, and past-year questions into a retrieval-augmented system; LLMs teach concepts using gamification + Jim Kwik retention frameworks.",
    metric: "40% retention lift",
    abstract: 4,
    caseStudy: true,
    detail: {
      role: "Solo build · system + pedagogy architect",
      stack: ["Vector retrieval", "LLM orchestration", "Jim Kwik memorization frameworks", "Gamification loops"],
      problem:
        "Most RAG systems hand you a paragraph. That isn't teaching — that's googling. Learners read it once and forgot it within 48 hours.",
      approach: [
        "Ingest the full corpus: lecture transcripts, OCR PDFs, past-year questions.",
        "Retrieve context, then direct the LLM to teach using active recall + spaced repetition prompts.",
        "Gamify the loop — points for correct recall, friction for skim-and-skip behavior.",
        "Surface weak topics back to the learner automatically.",
      ],
      result: [
        "Estimated 40% retention improvement over baseline RAG.",
        "Used by 5+ active learners through the Galactus Metasystem.",
      ],
    },
  },
  {
    id: "edu-intelligence",
    category: "EDTECH",
    title: "End-to-End Educational Intelligence Pipeline",
    description:
      "Comprehensive pipeline transforming raw lectures into searchable knowledge systems via OCR, Whisper, BM25 retrieval, structured filtering, and AI-assisted concept reinforcement.",
    metric: "Full lecture → knowledge graph",
    abstract: 1,
  },
  {
    id: "fault-tolerant",
    category: "EDTECH",
    title: "Fault-Tolerant Automation Infrastructure",
    description:
      "Resumable processing, manifest tracking, QA layers, and large-scale document handling baked into every EdTech pipeline — production failure becomes a retry, not a restart.",
    metric: "0% data loss on retry",
    abstract: 2,
  },
  {
    id: "transcript-bm25",
    category: "EDTECH",
    title: "Transcript-to-BM25 Workflow",
    description:
      "Multi-step pipeline converting raw transcripts into optimized search queries — automated filtering, deduplication, and formatting across 500+ exam-ready questions.",
    metric: "500+ questions structured",
    abstract: 5,
  },
  {
    id: "exam-prep-engine",
    category: "EDTECH",
    title: "Automated Competitive Exam Prep Engine",
    description:
      "Keyword-driven past-year question extractor with data-driven filtering — surfaces the top 20% high-yield questions covering 80% of exam patterns.",
    metric: "80/20 yield surfaced",
    abstract: 1,
  },
  {
    id: "galactus",
    category: "EDTECH",
    title: "Galactus Learning Metasystem",
    description:
      "Implementation-first learning system using retrieval practice, spaced repetition, compression, and behavioral activation — with a 7-minute daily execution protocol.",
    metric: "5+ active learners",
    abstract: 2,
    caseStudy: true,
    detail: {
      role: "Founder / curriculum architect",
      stack: ["Retrieval practice", "Spaced repetition", "Behavioral activation", "Anki", "Custom protocols"],
      problem:
        "Smart learners kept consuming content and producing nothing. The bottleneck wasn't information — it was the gap between knowing and doing.",
      approach: [
        "Compress source material into 80/20 distillations.",
        "Convert distillations into Anki + retrieval prompts.",
        "Wrap a 7-minute daily execution protocol around the loop — behavioral activation built in.",
        "Track adherence + retention, not study hours.",
      ],
      result: [
        "5+ active learners running the protocol.",
        "Operationalizes the entire 'consume → encode → execute' chain into a single 7-minute habit.",
      ],
    },
  },
  {
    id: "anki-automation",
    category: "EDTECH",
    title: "Retention Automation Pipeline",
    description:
      "Automated extraction of distilled notes into Anki for spaced-repetition scheduling — 1,000+ flashcard entries with zero manual formatting.",
    metric: "1,000+ cards shipped",
    abstract: 3,
  },
  {
    id: "audio-bat",
    category: "EDTECH",
    title: "Drag-and-Drop Audio Engineering",
    description:
      "A .bat script autonomously extracting audio from 3-hour+ video lectures in under 30 seconds — processing 100+ hours of content.",
    metric: "<30s per 3h lecture",
    abstract: 4,
  },
  // CONTENT
  {
    id: "voice-memo",
    category: "CONTENT",
    title: "3 AM Voice Memo Pipeline",
    description:
      "End-to-end system converting voice notes into structured content via multi-stage processing (transcription, structuring, polishing) — idea to publication.",
    metric: "2 days → <2 hours",
    abstract: 5,
    caseStudy: true,
    detail: {
      role: "Solo build · founder-tool architect",
      stack: ["Whisper", "GPT-4", "Python", "n8n", "Notion API"],
      problem:
        "Founders have their best ideas at 3 AM. By 9 AM they're already dressed up as somebody else's framework. The window from raw insight → publish-ready post is brutal and most pipelines lose the voice in between.",
      approach: [
        "Founder records a voice memo, drops it in a watched folder.",
        "Whisper transcribes; transcript is structured into thesis + evidence + payoff.",
        "An in-voice writing system polishes — keeping their cadence, idioms, contrarian beats.",
        "Output handed back in Notion ready for a final 30-second review.",
      ],
      result: [
        "Idea-to-publication turnaround: 2 days → under 2 hours.",
        "Voice fidelity preserved (zero generic AI-ese).",
        "Operators stop losing their best ideas to friction.",
      ],
    },
  },
  {
    id: "voice-writing",
    category: "CONTENT",
    title: "6 Voice-Specific AI Writing Systems",
    description:
      "Identity-preserving founder voice replication. Each system tuned to a specific operator's cadence, worldview, and narrative stylistic integrity.",
    metric: "6 voices · zero generic copy",
    abstract: 1,
    caseStudy: true,
    detail: {
      role: "Solo build · voice architect for 6 founders",
      stack: ["GPT-4 + Claude", "Bespoke prompt systems", "Voice fingerprint extraction", "Anti-AI-ese guardrails"],
      problem:
        "AI ghostwriting at scale fails on the same axis every time: voice collapse. Run 10 founders through the same pipeline and the outputs converge on the median LinkedIn-thought-leader voice. That's a moat-killer for the operator.",
      approach: [
        "For each founder, extract a voice fingerprint: sentence rhythm, idiom set, contrarian beats, recurring metaphors, taboo phrases.",
        "Build a per-founder prompt system — not just a style guide, an entire constrained-generation regime.",
        "Layer an anti-AI-ese guardrail: phrases like 'leverage', 'unlock', 'in today's world' are auto-rejected.",
        "QA pass compares output to their last 30 published pieces for cadence drift.",
      ],
      result: [
        "6 voices, zero generic copy.",
        "Each founder retains a distinct narrative identity at scale.",
        "Output is indistinguishable from their hand-written posts — by them and by their audience.",
      ],
    },
  },
  {
    id: "whisper-client",
    category: "CONTENT",
    title: "Whisper-Based Client Transcription Pipeline",
    description:
      "Cuts client transcription overhead by 80% — feeds directly into writing pipelines without manual cleanup.",
    metric: "80% time reduction",
    abstract: 2,
  },
  // INFRASTRUCTURE
  {
    id: "phantom-spend",
    category: "INFRASTRUCTURE",
    title: "Phantom-Spend SaaS Auditor",
    description:
      "Full-stack financial auditing tool ingesting CSV via webhook, using GPT-4-mini to identify redundant subscriptions — visualized in a React + Tailwind dashboard.",
    metric: "8–12 tools flagged / audit",
    abstract: 3,
    caseStudy: true,
    detail: {
      role: "Solo build · architect + UI",
      stack: ["React", "Tailwind CSS", "GPT-4-mini", "Webhook ingestion", "CSV parsing"],
      problem:
        "Most operators have no idea how much they spend on duplicate SaaS. Their bookkeeping shows the cost. It doesn't show the redundancy.",
      approach: [
        "Drop a CSV of subscription data into the auditor.",
        "GPT-4-mini classifies tools, clusters by capability, and identifies overlap.",
        "Custom React + Tailwind dashboard visualizes redundancy + estimated waste.",
        "Operator decides what to cut — system never auto-cancels.",
      ],
      result: [
        "8–12 redundant tools identified per audit on average.",
        "Converts opaque AP statements into a one-glance kill-list.",
      ],
    },
  },
  {
    id: "professor-invictus",
    category: "INFRASTRUCTURE",
    title: "Professor Invictus Alter-Ego System",
    description:
      "Cognitive performance activation framework using behavioral triggers, visualization, identity priming, and state conditioning — applied across 3+ daily deep-work sessions.",
    metric: "Deep-work on demand",
    abstract: 4,
  },
  {
    id: "batch-utilities",
    category: "INFRASTRUCTURE",
    title: "Batch Processing Utilities",
    description:
      "Automation scripts for video merging, audio extraction, and bulk file handling — 500+ media files, drop-folder → walk-away workflow.",
    metric: "85% time reduction",
    abstract: 5,
  },
  {
    id: "minimax",
    category: "INFRASTRUCTURE",
    title: "Minimax AI Educational Pipeline",
    description:
      "Prompt-optimized pipeline using a Minimax AI agent + raw course transcripts to conceptualize and generate a Python-focused educational comic book.",
    metric: "End-to-end automated",
    abstract: 1,
  },
  {
    id: "exec-escalation",
    category: "INFRASTRUCTURE",
    title: "Executive Escalation & Crisis Resolution",
    description:
      "High-visibility, targeted escalation via LinkedIn + Twitter to bypass support tiers and resolve complex subscription blockers directly with MiniMax executive leadership.",
    metric: "Tier-1 bypass executed",
    abstract: 2,
  },
  // BE10X
  {
    id: "ai-hr",
    category: "BE10X COHORT",
    title: "AI HR Recruiter",
    description:
      "n8n + Gemini + Google Sheets pipeline autonomously screening and scoring candidate resumes against JDs — structured scoring output.",
    metric: "50+ candidates / run",
    abstract: 3,
    caseStudy: true,
    detail: {
      role: "Solo build · hackathon-winning project",
      stack: ["n8n", "Gemini", "Google Sheets", "Webhook triggers", "Structured scoring rubric"],
      problem:
        "HR teams drown in resumes. 50+ submissions per role becomes a coin-flip exercise — high-quality candidates get filtered out by keyword density rather than substance. The cost: hiring mistakes that take 6 months to fix.",
      approach: [
        "Resumes ingested via Google Sheets → trigger n8n workflow per row.",
        "Gemini scores each resume against the JD on a structured rubric (experience match, skill depth, signal strength, red flags).",
        "Each score comes with a written rationale — not a black-box number.",
        "Output written back to the sheet, sorted by score, ready for the human reviewer.",
      ],
      result: [
        "50+ candidates processed per run with full rationale per candidate.",
        "Helped clinch 1st Prize at the Be10x AI Generalist Hackathon — beating IITians, PhDs, and SWEs.",
        "Reviewer time per role dropped by an order of magnitude.",
      ],
    },
  },
  {
    id: "zwigato",
    category: "BE10X COHORT",
    title: "Zwigato Customer Support Agent",
    description:
      "Pinecone-backed RAG support bot processing restaurant orders, querying internal policies, and updating inventory databases.",
    metric: "60% resolution-time cut",
    abstract: 4,
  },
  {
    id: "expense-tracker",
    category: "BE10X COHORT",
    title: "Expense Tracker System",
    description:
      "n8n automation for logging financial transactions, maintaining running balances, and segregating data via conversational inputs across 100+ categories.",
    metric: "100+ categories handled",
    abstract: 5,
  },
  {
    id: "habit-tracker",
    category: "BE10X COHORT",
    title: "Habit Tracker Web App",
    description:
      "Fully functional MVP using AI-Assisted Full-Stack Prototyping (Vibe Coding) on Lovable.dev + Firebase — full frontend + backend without traditional coding.",
    metric: "Shipped in 48 hours",
    abstract: 1,
  },
  {
    id: "amazon-dashboard",
    category: "BE10X COHORT",
    title: "Amazon Sales Dashboard",
    description:
      "End-to-end data visualization with Power BI, ETL, and DAX — tracking 10+ KPIs across product categories and sales regions.",
    metric: "10+ KPIs surfaced",
    abstract: 2,
  },
  {
    id: "synthetic-media",
    category: "BE10X COHORT",
    title: "Synthetic Media Pipelines",
    description:
      "HeyGen + ElevenLabs workflows producing professional-grade, multilingual video and voice clones — 20+ assets across 2 languages.",
    metric: "20+ assets, 2 languages",
    abstract: 3,
  },
];

export const PROJECT_CATEGORIES = [
  "ALL",
  "AUTOMATION",
  "EDTECH",
  "CONTENT",
  "INFRASTRUCTURE",
  "BE10X COHORT",
];

export const AGENTS = [
  { name: "CircadianGPT", vertical: "HEALTH", desc: "Chronotype-aligned sleep optimization — personalized recovery, performance, and behavioral regulation protocols.", method: "Dr. Michael Breus chronobiology + The Power of When + Mastery of Sleep" },
  { name: "10X Trial-Based Strength Engine", vertical: "HEALTH", desc: "Low-volume, high-efficiency strength programming with auto-regulated trial sets and recovery tracking.", method: "Mindvalley 10X Fitness methodology" },
  { name: "WildGPT", vertical: "HEALTH", desc: "Behavioral transformation engine translating nutrition psychology into structured lifestyle reset systems.", method: "Eric Edmeades WildFit philosophy" },
  { name: "SkinGPT", vertical: "HEALTH", desc: "Dermatology-informed decision support — structured routines for hydration, pigmentation, and barrier repair.", method: "20-section skincare knowledge base + Skin Quest Masterclass" },
  { name: "Task Manager (Moiz Matrix)", vertical: "PRODUCTIVITY", desc: "Execution-first task triage combining Eisenhower with a proprietary prioritization framework + calendar integrations.", method: "Eisenhower Matrix + proprietary Moiz Matrix · Zapier · Notion · Google Calendar" },
  { name: "Attention Engine", vertical: "PRODUCTIVITY", desc: "Cognitive load regulation system structuring deep-work blocks and minimizing attentional fragmentation.", method: "Cognitive load regulation + workflow sequencing" },
  { name: "Apex Prompt Architect", vertical: "PRODUCTIVITY", desc: "Multi-layer prompt orchestration meta-system generating reusable AI workflows, persona systems, and reasoning chains.", method: "Elite multi-layered prompt engineering" },
  { name: "Habitatica", vertical: "PRODUCTIVITY", desc: "Identity-based habit formation engine with environmental design and compounding behavior systems.", method: "James Clear · Atomic Habits" },
  { name: "AI Job Hunt Orchestrator", vertical: "PRODUCTIVITY", desc: "Multi-agent pipeline for job sourcing, pain-point analysis, ATS optimization, and sniper-email generation — 15-minute execution loop.", method: "Claude + Apify + Perplexity + MiniMax Agent + Codex · 85%+ ATS fitment" },
  { name: "TanGPT", vertical: "LIFESTYLE", desc: "Styling intelligence system translating color theory, wardrobe psychology, and grooming logic into outfit optimization frameworks.", method: "Tan France Hollywood styling methodology" },
  { name: "Micro-Space Architect", vertical: "LIFESTYLE", desc: "Expert spatial optimization agent transforming sub-10m² environments into high-function living and working sanctuaries.", method: "Spatial optimization frameworks" },
  { name: "Marni: The Digital Wing Girl", vertical: "LIFESTYLE", desc: "Relationship advisory agent with dynamic retrieval across YouTube, course transcripts, and PDFs for female-perspective social dynamics coaching.", method: "Marni Kinrys persona + live retrieval system" },
  { name: "KwikGPT", vertical: "KNOWLEDGE", desc: "Accelerated learning system integrating rapid recall, active learning loops, and transcript-to-knowledge compression pipelines.", method: "Jim Kwik accelerated learning methodologies" },
  { name: "Universal Knowledge Architect", vertical: "KNOWLEDGE", desc: "Converts complex videos, PDFs, and raw data into Zero-Loss mastery documents calibrated to 7–10 year-old comprehension.", method: "Zero-loss mastery + 2025 knowledge bases" },
  { name: "Digital Ghostwriting Engine (Cole OS)", vertical: "KNOWLEDGE", desc: "Execution-first writing system autonomously scanning Mega-Files for rapid content generation.", method: "Nicolas Cole core methodologies" },
  { name: "B10X Submission Architect", vertical: "KNOWLEDGE", desc: "Ruthlessly critical evaluation agent auditing n8n architectures — directly drove 1st-place Be10x Hackathon win.", method: "Technical architecture evaluation + pitch optimization" },
  { name: "The Architect's Cinematography", vertical: "KNOWLEDGE", desc: "Video post-production protocol applying high-impact cinematic grading to elite digital content.", method: "Empire Phase framework" },
  { name: "The Architect's Studio", vertical: "KNOWLEDGE", desc: "Image processing engine transforming raw imagery into Steel & Shadow / Gotham aesthetic for tech founder visual branding.", method: "Creative Director framework + cohesive brand systems" },
  { name: "KshitijGPT", vertical: "KNOWLEDGE", desc: "Hierarchical dating, social dynamics, and self-development coaching with dynamic retrieval — hallucination-free advice.", method: "Kshitij Sehrawat course visuals + live YouTube transcript retrieval" },
];

export const EXPERIENCE = [
  {
    role: "Independent AI Ghostwriter & Content Systems Specialist",
    org: "Self-Employed · Siliguri, India",
    period: "Feb 2026 — Present",
    bullets: [
      "Architected 15+ custom LLM pipelines (GPT-4 + Gemini) — reducing content production time by 60–80% and turning chaotic inputs into publish-ready assets.",
      "Engineered 6 voice-specific AI writing systems replicating client tone, worldview, and cadence — eliminating generic AI outputs and preserving founder voice across long-form outputs.",
      "Deployed a Whisper + n8n + Python transcription pipeline at 90%+ bilingual accuracy, routing structured assets to Drive and cutting manual transcription time by 80%.",
      "Transformed raw founder inputs (voice notes, Notion dumps) into publish-ready content — compressing idea-to-publication turnaround by 3x across 10+ client engagements.",
    ],
  },
  {
    role: "Co-Founder & Head of Brand Strategy",
    org: "Radio Club · Siliguri, India",
    period: "Dec 2024 — Mar 2026",
    bullets: [
      "Scaled a campus startup from 0 → 200+ members in under 4 months via organic, value-driven content distribution and precision brand positioning.",
      "Crafted launch messaging for the Feb 13 assembly — copywriting triggered the first viral wave, driving 80+ sign-ups in 48 hours.",
      "Operationalized SOPs, templates, and cross-functional workflows — reducing editorial errors by 25% across a multi-member content team.",
      "Converted community infrastructure by combining storytelling, recruitment funnels, and operational SOPs — personally screening the founding 50+ members.",
    ],
  },
  {
    role: "Academic Peer Mentor & Performance Coach",
    org: "Salesian College · Siliguri, India",
    period: "Aug 2024 — Present",
    bullets: [
      "Delivered complex academic theory to 150+ students across 10+ sessions using high-engagement analogies (e.g., explaining 'Ambivalence' via a breakup metaphor) — near-zero attention loss.",
      "Compressed 3–4 weeks of academic context into Rapid Response Teaching sessions for 1st- and 2nd-year students ahead of major guest speaker events.",
      "Produced premium handcrafted slide decks (0% AI), recognized by the HOD as the strongest presentation output in the entire Master's cohort.",
      "Elevated writing clarity by 35% across 20+ student submissions, while recruiting the founding 50 Radio Club members organically within 4 weeks.",
    ],
  },
];

export const CERTIFICATIONS = [
  { icon: "trophy", title: "1st Prize — Be10x AI Generalist Hackathon", year: "2026", note: "Outperformed IITians, tech PhDs, and software developers" },
  { icon: "spark", title: "Certified AI Generalist — Be10x AI Career Accelerator", year: "2026", note: "Agents · Branding · Fundamentals · Career Readiness" },
  { icon: "spark", title: "Top 0.1% Global ChatGPT User — OpenAI", year: "Dec 2025", note: "Advanced prompt engineering + system architecture" },
  { icon: "spark", title: "AICTE ATAL Recognition", year: "Jan 2024", note: "Contributions to the North Bengal startup ecosystem" },
  { icon: "spark", title: "Certificate of Achievement — Radio Club", year: "Jan 2025", note: "Leadership + ops scaling a 200+ member org" },
  { icon: "spark", title: "MUN Dual Award Winner", year: "Jan 2023", note: "Research excellence + structured debate" },
  { icon: "spark", title: "PPT Mastery + AI Tools Workshop", year: "", note: "Additional certifications" },
];

export const EDUCATION = [
  {
    degree: "MA English Language & Literature",
    school: "Salesian College, Siliguri",
    period: "Aug 2023 — Jun 2025",
    grade: "7.2 / 10",
    note: "Original research: \"The Ethics of Friendship in Klara and The Sun: Friendship in the Time of Artificial Companions\" — selected among the top departmental presentations.",
  },
  {
    degree: "BA English",
    school: "Munshi Premchand Mahavidyalaya, Siliguri",
    period: "Jul 2021 — Jun 2023",
    grade: "",
    note: "",
  },
];

export const CONTACT_CARDS = [
  {
    id: "freelance",
    title: "Freelance Inquiry",
    desc: "Ghostwriting, AI content systems, automation pipelines.",
    cta: "Start a Project",
    subject: "Freelance Inquiry — Ghostwriting / AI Systems",
  },
  {
    id: "hiring",
    title: "Hiring / Opportunities",
    desc: "Full-time, consulting, or advisory roles in AI.",
    cta: "Get In Touch",
    subject: "Opportunity — AI Generalist / Systems Architect Role",
  },
  {
    id: "collab",
    title: "Collaboration",
    desc: "Joint ventures, partnerships, knowledge exchange.",
    cta: "Let's Talk",
    subject: "Collaboration — Partnership / Joint Venture",
  },
];
