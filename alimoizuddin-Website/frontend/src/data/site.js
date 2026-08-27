// Centralized content data for the site. Edit here to update everything.
// Last updated: June 2026 - synced with Profile.pdf source of truth


export const PROFILE = {
  "name": "Ali Moizuddin",
  "brand": "ALI MOIZUDDIN",
  "tagline": "AI Automation Engineer · RAG · Agentic AI · n8n · Be10x Hackathon Winner · Top 0.1% ChatGPT User",
  "location": "Siliguri, West Bengal, India",
  "email": "aalimoizuddin@outlook.com",
  "phone": "+91 8392006965",
  "linkedin": "https://www.linkedin.com/in/alimoizuddin",
  "photo": "https://customer-assets.emergentagent.com/job_3e46ef77-ca74-4e8e-a719-ab3f22e4f199/artifacts/v3cmir8v_Profile%20Pic.jpg",
  "statusPillLabel": "Open to roles · select freelance",
  "heroHeadlinePrefix": "I Build AI Systems",
  "heroHeadlineSuffix": "That Work.",
  "heroSub": "Building RAG, agentic AI, n8n, OCR/BM25 search, transcription, SDR research, and workflow automation systems that turn messy information into repeatable execution.",
  "shortName": "Ali Moizuddin",
};


// Social handles - drop your URLs in here. Set to null/empty to hide.
export const SOCIALS = [
  {
    "id": "linkedin",
    "label": "LinkedIn",
    "handle": "@alimoizuddin",
    "url": "https://www.linkedin.com/in/alimoizuddin",
    "icon": "linkedin"
  },
  {
    "id": "x",
    "label": "X / Twitter",
    "handle": "@Ali_Moizuddin_",
    "url": "https://x.com/Ali_Moizuddin_",
    "icon": "twitter"
  },
  {
    "id": "instagram",
    "label": "Instagram",
    "handle": "@ali_moizuddin_",
    "url": "https://www.instagram.com/ali_moizuddin_/",
    "icon": "instagram"
  },
  {
    "id": "facebook",
    "label": "Facebook",
    "handle": "Ali Moizuddin",
    "url": "https://www.facebook.com/people/Ali-Moizuddin/pfbid02fK8ibMawrFbyhybRqtsVLZos5TMQe3zdKmDA1WCCcmq6MfVvMT5icLLZkMbU3U2Pl/",
    "icon": "facebook"
  },
  {
    "id": "github",
    "label": "GitHub",
    "handle": "alimoizuddin",
    "url": "https://github.com/alimoizuddin",
    "icon": "github"
  },
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
  {
    "value": "20+",
    "label": "AI Systems Built"
  },
  {
    "value": "40 to 60%",
    "label": "Avg. Overhead Reduction"
  },
  {
    "value": "200+",
    "label": "Community Members Scaled"
  },
  {
    "value": "100+",
    "label": "Flashcard Entries Automated"
  }
];


export const COMPETENCIES = [
  {
    "id": "ai",
    "title": "AI & Automation",
    "items": [
      "Agentic AI",
      "Custom GPT Architecture",
      "RAG Pipelines",
      "Vector Databases (Pinecone)",
      "n8n Workflow Automation",
      "VAPI.ai (Voice Agents)",
      "Advanced Prompt Engineering",
      "Zero-Shot / Few-Shot / Role-Playing",
      "Synthetic Media (HeyGen, ElevenLabs)",
      "Whisper Transcription"
    ]
  },
  {
    "id": "engineering",
    "title": "Engineering & Development",
    "items": [
      "AI-Assisted Full-Stack Prototyping (Vibe Coding)",
      "Lovable.dev",
      "Python · Colab",
      "Bash / .bat Scripting",
      "Prompt-Driven UI (React.js)",
      "Tailwind CSS",
      "JSON Data Mapping",
      "REST API Integrations",
      "BM25 Search",
      "OCR",
      "Firebase"
    ]
  },
  {
    "id": "data",
    "title": "Data & Analytics",
    "items": [
      "Power BI",
      "DAX",
      "ETL Processes",
      "Dashboard Visualization"
    ]
  },
  {
    "id": "content",
    "title": "Content & Strategy",
    "items": [
      "Content Infrastructure",
      "Identity-Preserving Writing Systems",
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
      "Editorial Judgment"
    ]
  },
  {
    "id": "systems",
    "title": "Specialized Systems Thinking",
    "items": [
      "80/20 Knowledge Compression",
      "Retrieval-Based Learning",
      "AI-Augmented Cognition",
      "Operator Communication Systems",
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
      "Educational AI Systems"
    ]
  }
];


export const PROJECTS = [
  {
    "id": "linkedin-lead-engine",
    "category": "AUTOMATION",
    "title": "LinkedIn Lead Engine",
    "description": "Two-stage n8n pipeline that sources LinkedIn prospects, reads each one's latest post, and drafts a personalised public comment and connection note. Every output is written to Google Sheets as a draft; the system never posts or sends anything.",
    "metric": "8 silent defects closed pre-launch",
    "abstract": 2,
    "image": {
      "src": "/images/projects/linkedin-lead-engine-realistic.png",
      "alt": "Architecture diagram of the LinkedIn Lead Engine showing sourcing, enrichment, dual-model generation, and a human review gate",
      "caption": "Two scheduled stages coordinated through a single Google Sheet."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build · architect",
      "stack": [
        "n8n",
        "Apify",
        "OpenAI",
        "Google Sheets",
        "JavaScript"
      ],
      "problem": "A working outreach pipeline was silently re-processing the same leads every day and producing connection notes that read as obvious templates. The reported symptom was duplicate leads; the real cause was a row-update expression pinned to the first item in the batch, so only one lead was ever marked complete and every other lead stayed queued forever.",
      "approach": [
        "Connected a Telegram voice memo to audio download, transcription, and a private Google Docs handoff so the raw idea arrives intact before editorial shaping begins.",
        "Audited the workflow node by node and traced the duplication to a .first() expression that never advanced between loop iterations.",
        "Rebuilt state handling so each iteration updates its own row, sourcing deduplicates on profile URL, and failed scrapes are stamped rather than retried indefinitely.",
        "Split one overloaded prompt into two model calls after the single prompt kept leaking product language into public comments; the comment model is never given product context, so it cannot mention one.",
        "Ran three adversarial audit passes over the finished workflow, which surfaced a Wait node silently pausing 30 hours per lead because n8n defaults that unit to hours.",
        "Constrained the generator to offer one of five real documents instead of inventing a resource per lead, and kept a human review gate before anything is sent."
      ],
      "result": [
        "Duplicate processing eliminated; every lead now reaches a terminal state exactly once.",
        "Eight defects closed before launch, including three that produced no error output at all.",
        "Output moved from templated boilerplate to notes built from each prospect's actual post.",
        "Pipeline drafts only, keeping platform risk and message quality under human control."
      ]
    }
  },
  {
    "id": "linkedin-engine-factory",
    "category": "AUTOMATION",
    "title": "LinkedIn Engine Factory",
    "description": "Turns verified facts, voice rules, and an asset calendar into a LinkedIn content engine that produces review ready posts, comment plans, and carousels.",
    "metric": "First build: 14 hours. Later builds: 30 to 90 minutes.",
    "proofUrl": "https://github.com/alimoizuddin/linkedin-engine-factory",
    "proofLabel": "Private repository",
    "abstract": 1,
    "image": {
      "src": "/images/projects/linkedin-engine-factory.png",
      "alt": "Split screen view of the LinkedIn Engine Factory configuration and a generated post with seven slide carousel",
      "caption": "Engine setup on the left, a generated content package on the right."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo system design and automation",
      "stack": [
        "AI project workspace",
        "Markdown",
        "Structured prompts",
        "Web research",
        "PDF generation"
      ],
      "problem": "Building a rigorous LinkedIn content system by hand took 14 hours because positioning, voice rules, fact boundaries, and calendar structure were rebuilt for every subject. Early output also exposed a more serious risk: a plausible but unsupported claim could enter a polished draft.",
      "approach": [
        "Separated the portable chassis, including the workflow, QA checklist, and delivery contract, from the person-specific payload of voice, facts, positioning, brand, and calendar.",
        "Required voice rules to be grounded in a subject's own writing and kept positioning diagnosis visible for human review before downstream drafting.",
        "Added verified-fact tables, banned inflation pairs, and OPEN SLOT markers so missing evidence is surfaced as a question rather than converted into a plausible claim.",
        "Made fixed visual specifications and preview checks part of the system, then produced each post, engagement plan, and carousel as one review-ready package."
      ],
      "result": [
        "Documented engine setup time fell from 14 hours for the initial manual build to 30 to 90 minutes for later factory builds.",
        "Five documented engine builds covered AI automation, student media, health coaching, HR, and brand strategy while keeping the payload specific to each subject.",
        "A saved Row 13 package shows the output: a finished LinkedIn post, comment plan, and seven slide carousel built around a verified refusal guardrail.",
        "This remains an unpaid portfolio system. Audience baselines were not captured, so the case study does not claim growth or revenue results."
      ]
    }
  },
  {
    "id": "digital-twin",
    "category": "AUTOMATION",
    "title": "Hybrid Digital Twin & Large-Scale Knowledge Extraction Engine",
    "description": "Python + Gradio extraction system using yt-dlp to pull subtitles from long-form YouTube assets, compressing raw media knowledge into structured mega-files for NotebookLM and digital-twin style coaching workflows.",
    "metric": "900+ assets made queryable",
    "proofUrl": "https://github.com/alimoizuddin/youtube-knowledge-extractor",
    "abstract": 4,
    "image": {
      "src": "/images/projects/digital-twin.webp",
      "alt": "Large-scale knowledge extraction engine interface with local Gradio app and terminal",
      "caption": "YouTube scraper and knowledge extraction interface."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - architect",
      "stack": [
        "Python",
        "Gradio",
        "yt-dlp",
        "NotebookLM",
        "Gemini"
      ],
      "problem": "A large library of long-form media knowledge was scattered across videos, transcripts, and notes. Manual extraction was too slow, and generic summaries lost the exact frameworks.",
      "approach": [
        "Built a local Gradio interface to accept YouTube channel or asset inputs.",
        "Used yt-dlp and transcript extraction to pull subtitle data at scale.",
        "Compressed extracted material into structured mega-files for downstream retrieval and coaching workflows."
      ],
      "result": [
        "900+ media assets became queryable instead of manually searchable.",
        "Raw content turned into structured knowledge infrastructure.",
        "Created the foundation for digital-twin style coaching and retrieval workflows."
      ]
    }
  },
  {
    "id": "sdr-research-outreach",
    "category": "AUTOMATION",
    "title": "SDR Research & Outreach Automation Pipeline",
    "description": "Autonomous engine that ingests leads via Sheets, scrapes public signals with Apify, and drafts personalized outreach behind QA agents, turning heavy prospect research into a review workflow.",
    "metric": "15 min per lead, automated",
    "proofUrl": "https://github.com/alimoizuddin/autonomous-sdr-engine",
    "abstract": 1,
    "image": {
      "src": "/images/projects/sdr-research-outreach.webp",
      "alt": "Autonomous SDR engine workflow next to Google Sheets outreach output",
      "caption": "n8n SDR workflow connected to live outreach output."
    },
    "video": {
      "src": "/videos/autonomous-sdr-engine-executive-ghostwriting-pipeline.mp4",
      "title": "Executive ghostwriting pipeline walkthrough",
      "playbackRate": 1.15
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build, architect and operator",
      "stack": [
        "Apollo.io",
        "Apify",
        "n8n",
        "OpenAI Agents",
        "Google Sheets",
        "CRM webhook"
      ],
      "problem": "Personalized outreach breaks down when research, filtering, and drafting are done by hand. Each lead took roughly 15 minutes to source, read, and write to, so a batch of 20 consumed about 5 hours before a single message went out.",
      "approach": [
        "Ingest Apollo leads into a Google Sheet that acts as the single source of truth.",
        "Trigger an Apify scraper per prospect to pull recent public posts and news.",
        "A QA Bouncer agent screens each lead on title fit, post quality, and recency.",
        "A Pitch Architect agent drafts a personalized opener that must reference a real, specific signal.",
        "Approved drafts ship to a CRM review step over webhook, carrying rationale and retry hooks."
      ],
      "result": [
        "Manual research and drafting ran about 15 minutes per lead, roughly 5 hours for a batch of 20. The pipeline runs that same sequence unattended.",
        "The only manual step left is copying the approved draft to the prospect, so time saved scales with lead volume.",
        "A hard rule blocks any message that does not cite a real signal, so personalization held as volume grew.",
        "In this prototype the operator becomes a reviewer instead of a researcher."
      ]
    }
  },
  {
    "id": "cicd-reasoning",
    "category": "AUTOMATION",
    "title": "Autonomous CI/CD Pipeline",
    "description": "An n8n workflow that checks emailed code submissions, routes structured AI review results, and sends either a pass message or a rejection with suggested code.",
    "metric": "10 node automated QA workflow",
    "proofUrl": "https://github.com/alimoizuddin/autonomous-ci-cd-pipeline",
    "abstract": 2,
    "image": {
      "src": "/images/projects/cicd-reasoning.webp",
      "alt": "Autonomous CI/CD n8n workflow next to automated deployment failure report",
      "caption": "Automated QA workflow and deployment failure report."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo workflow design and automation",
      "stack": [
        "n8n",
        "Microsoft Outlook",
        "OpenAI",
        "Gmail",
        "JSON Schema",
        "HTTP request"
      ],
      "problem": "Code submitted through email still needs a reliable first check. Raw email HTML can add noise, and an unstructured AI response is hard for an automation to route safely.",
      "approach": [
        "Watches unread Outlook messages whose subject contains Code Submission, then processes them in batches.",
        "Extracts clean text from the email body before sending it to the review step.",
        "Requires the AI reviewer to return structured JSON: detected language, pass or reject status, reason, and corrected code.",
        "Routes a pass to a success email and a rejection to a report that includes the reason and suggested code."
      ],
      "result": [
        "The active ten node workflow polls for new submissions every minute and records a clear pass or reject decision for each item.",
        "The public repository contains the sanitized workflow export, screenshots, architecture notes, and a demonstration recording.",
        "The current deployment request posts to a test endpoint. A real production release would still need authenticated deployment, automated tests, and human approval."
      ]
    }
  },
  {
    "id": "ocr-engine",
    "category": "EDTECH",
    "title": "Industrial-Grade Vision-OCR Engine",
    "description": "Full document lifecycle for 100+ page PDFs: ingestion, preprocessing, OCR, structuring, searchable PDF export, DOCX, LaTeX math, handwriting + table extraction, and QA reporting.",
    "metric": "90% time reduction",
    "abstract": 4,
    "image": {
      "src": "/images/projects/ocr-engine-realistic.png",
      "alt": "Realistic working screenshot for ocr engine",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - system architect",
      "stack": [
        "Python",
        "Vision OCR",
        "LaTeX",
        "Manifest tracking",
        "DOCX exporters"
      ],
      "problem": "20+ years of UGC NET prep material existed as scattered PDFs, photocopies, and handwritten notes. Searching was impossible. Studying meant flipping pages. The cognitive cost was destroying retention.",
      "approach": [
        "Built an ingestion-first OCR pipeline that handles 100+ page documents without choking.",
        "Layered handwriting extraction + LaTeX math extraction + table structuring on top of base OCR.",
        "Resumable processing with manifest tracking - never re-process what already succeeded.",
        "Output formats: searchable PDF, DOCX, plain text, structured JSON for downstream RAG."
      ],
      "result": [
        "90% reduction in manual extraction time.",
        "Decades of exam archives became fully queryable.",
        "Became the data backbone for the BM25 Search Engine and RAG Pipeline projects."
      ]
    }
  },
  {
    "id": "bm25-search",
    "category": "EDTECH",
    "title": "Custom BM25 Search Engine",
    "description": "Proprietary OCR + BM25 retrieval over 500+ pages of digitized notes and 20+ years of UGC NET past year questions - manual search reduced from hours to seconds.",
    "metric": "500+ pages indexed",
    "abstract": 5,
    "image": {
      "src": "/images/projects/bm25-search-realistic.png",
      "alt": "Realistic working screenshot for bm25 search",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - retrieval architect",
      "stack": [
        "Custom OCR",
        "BM25 ranking",
        "Python",
        "Manifest-tracked indexing",
        "Query deduplication"
      ],
      "problem": "Modern vector search is overkill for tightly-scoped exam corpora - and it costs both money and latency. The right tool for 20+ years of UGC NET questions is ranked term retrieval. The problem: nobody wanted to build it.",
      "approach": [
        "Digitize 500+ pages of handwritten + printed notes via custom OCR pipeline.",
        "Tokenize, stem, normalize - then index with classical BM25 ranking.",
        "Deduplicate near-identical questions across years; tag by topic + year.",
        "Surface ranked matches sub-second on a laptop, no API costs."
      ],
      "result": [
        "Manual search went from hours to seconds.",
        "Demonstrates that the right retrieval choice can beat 'just use a vector DB' by a wide margin on the right corpus.",
        "Became the foundation of the EdTech RAG pipeline downstream."
      ]
    }
  },
  {
    "id": "edu-intelligence",
    "category": "EDTECH",
    "title": "End-to-End Educational Intelligence Pipeline",
    "description": "Comprehensive pipeline transforming raw lectures into searchable knowledge systems via OCR, Whisper, BM25 retrieval, structured filtering, and AI-assisted concept reinforcement.",
    "metric": "Full lecture → knowledge graph",
    "abstract": 1,
    "image": {
      "src": "/images/projects/edu-intelligence-realistic.png",
      "alt": "Realistic working screenshot for edu intelligence",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "fault-tolerant",
    "category": "EDTECH",
    "title": "Fault-Tolerant Automation Infrastructure",
    "description": "Resumable processing, manifest tracking, QA layers, and large-scale document handling baked into every EdTech pipeline - production failure becomes a retry, not a restart.",
    "metric": "0% data loss on retry",
    "abstract": 2,
    "image": {
      "src": "/images/projects/fault-tolerant-realistic.png",
      "alt": "Realistic working screenshot for fault tolerant",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "whisper-engine",
    "category": "EDTECH",
    "title": "OmniTranscriber Pro",
    "description": "Local-first and Colab-ready transcription workspace for Hinglish and lecture audio, combining Whisper, glossary correction, confidence scoring, editable review, and export bundles.",
    "metric": "Confidence-flagged review",
    "proofUrl": "https://github.com/alimoizuddin/omnitranscriber-pro",
    "abstract": 3,
    "image": {
      "src": "/images/projects/omnitranscriber-pro-realistic.png",
      "alt": "OmniTranscriber Pro transcription dashboard with waveform, confidence flags, and review layers",
      "caption": "Confidence-first transcription workspace for Hinglish lecture audio."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - transcription system architect",
      "stack": [
        "Python",
        "FastAPI",
        "faster-whisper",
        "OpenAI Whisper fallback",
        "Google Colab",
        "SQLite",
        "Vanilla JS"
      ],
      "problem": "Hinglish lecture audio broke the usual transcription promise: the model could hear the sound, but code-switching, noisy segments, and uncertain guesses made the transcript hard to trust.",
      "approach": [
        "Built a browser workflow for uploads, microphone recording, and URL-based jobs.",
        "Added domain prompts and glossary replacement so names, terms, and repeated lecture vocabulary survive cleanup.",
        "Converted model log probabilities into confidence scores and surfaced low-confidence segments in the editor.",
        "Kept the operator in the loop with editable segments, speaker labels, and downloadable TXT, SRT, VTT, Markdown, JSON, and ZIP outputs."
      ],
      "result": [
        "Bilingual lecture transcription became a review workflow instead of a blind copy-paste step.",
        "Uncertain lines are flagged for human correction instead of hidden behind model confidence.",
        "The same project runs locally or through a Colab GPU notebook for non-technical use."
      ]
    }
  },
  {
    "id": "rag-pipeline",
    "category": "EDTECH",
    "title": "AI-Driven RAG Pipeline",
    "description": "Ingests transcripts, OCR PDFs, and past-year questions into a retrieval-augmented system; LLMs teach concepts using gamification + active-recall retention frameworks.",
    "metric": "40% retention lift",
    "abstract": 4,
    "image": {
      "src": "/images/projects/rag-pipeline-realistic.png",
      "alt": "Realistic working screenshot for rag pipeline",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - system + pedagogy architect",
      "stack": [
        "Vector retrieval",
        "LLM orchestration",
        "Active recall + memorization frameworks",
        "Gamification loops"
      ],
      "problem": "Most RAG systems hand you a paragraph. That isn't teaching - that's googling. Learners read it once and forgot it within 48 hours.",
      "approach": [
        "Ingest the full corpus: lecture transcripts, OCR PDFs, past-year questions.",
        "Retrieve context, then direct the LLM to teach using active recall + spaced repetition prompts.",
        "Gamify the loop - points for correct recall, friction for skim-and-skip behavior.",
        "Surface weak topics back to the learner automatically."
      ],
      "result": [
        "Estimated 40% retention improvement over baseline RAG.",
        "Used in self-directed and friend learning workflows through the Galactus Metasystem."
      ]
    }
  },
  {
    "id": "transcript-bm25",
    "category": "EDTECH",
    "title": "Transcript-to-BM25 Workflow",
    "description": "Multi-step pipeline converting raw transcripts into optimized search queries - automated filtering, deduplication, and formatting across 500+ exam-ready questions.",
    "metric": "500+ questions structured",
    "abstract": 5,
    "image": {
      "src": "/images/projects/transcript-bm25-realistic.png",
      "alt": "Realistic working screenshot for transcript bm25",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "exam-prep-engine",
    "category": "EDTECH",
    "title": "Automated Competitive Exam Prep Engine",
    "description": "Keyword-driven past-year question extractor with data-driven filtering - surfaces the top 20% high-yield questions covering 80% of exam patterns.",
    "metric": "80/20 yield surfaced",
    "abstract": 1,
    "image": {
      "src": "/images/projects/exam-prep-engine-realistic.png",
      "alt": "Realistic working screenshot for exam prep engine",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "galactus",
    "category": "EDTECH",
    "title": "Galactus Learning Metasystem",
    "description": "Implementation-first learning system using retrieval practice, spaced repetition, compression, and behavioral activation - with a 7-minute daily execution protocol.",
    "metric": "5+ active learners",
    "abstract": 2,
    "image": {
      "src": "/images/projects/galactus-realistic.png",
      "alt": "Realistic working screenshot for galactus",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Founder / curriculum architect",
      "stack": [
        "Retrieval practice",
        "Spaced repetition",
        "Behavioral activation",
        "Anki",
        "Custom protocols"
      ],
      "problem": "Smart learners kept consuming content and producing nothing. The bottleneck wasn't information - it was the gap between knowing and doing.",
      "approach": [
        "Compress source material into 80/20 distillations.",
        "Convert distillations into Anki + retrieval prompts.",
        "Wrap a 7-minute daily execution protocol around the loop - behavioral activation built in.",
        "Track adherence + retention, not study hours."
      ],
      "result": [
        "5+ active learners running the protocol.",
        "Operationalizes the entire 'consume → encode → execute' chain into a single 7-minute habit."
      ]
    }
  },
  {
    "id": "anki-automation",
    "category": "EDTECH",
    "title": "Retention Automation Pipeline",
    "description": "Automated extraction of distilled notes into Anki for spaced-repetition scheduling - 100+ flashcard entries with minimal manual formatting.",
    "metric": "100+ cards shipped",
    "abstract": 3,
    "image": {
      "src": "/images/projects/anki-automation-realistic.png",
      "alt": "Realistic working screenshot for anki automation",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "voice-memo",
    "category": "CONTENT",
    "title": "3 AM Voice Memo Pipeline",
    "description": "End-to-end system converting voice notes into structured content assets via transcription, structuring, and polishing - idea to usable output.",
    "metric": "2 days → <2 hours",
    "abstract": 5,
    "image": {
      "src": "/images/projects/voice-memo-realistic.png",
      "alt": "Realistic working screenshot for voice memo",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - voice-to-asset architect",
      "stack": [
        "Whisper",
        "OpenAI",
        "Python",
        "n8n",
        "Document workspace API"
      ],
      "problem": "Useful ideas often arrive as voice notes, scattered fragments, or late-night thoughts. By the time they are manually cleaned, the original context and voice can disappear.",
      "approach": [
        "Record a voice memo and drop it into a watched workflow.",
        "Whisper transcribes; transcript is structured into thesis, evidence, and payoff.",
        "An identity-aware writing system polishes the output while preserving cadence and intent.",
        "Output is handed back ready for review, reuse, or publishing."
      ],
      "result": [
        "Idea-to-output turnaround: 2 days → under 2 hours.",
        "Voice fidelity preserved with less generic AI phrasing.",
        "Raw ideas stop getting lost to friction."
      ]
    }
  },
  {
    "id": "voice-writing",
    "category": "CONTENT",
    "title": "6 Identity-Preserving AI Writing Systems",
    "description": "Six LLM pipelines tuned to distinct voices, worldviews, and narrative patterns - built to avoid generic AI output.",
    "metric": "6 voices - zero generic copy",
    "abstract": 1,
    "image": {
      "src": "/images/projects/voice-writing-realistic.png",
      "alt": "Realistic working screenshot for voice writing",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - identity-system architect",
      "stack": [
        "OpenAI + Claude",
        "Bespoke prompt systems",
        "Voice fingerprint extraction",
        "Anti-AI-ese guardrails"
      ],
      "problem": "AI writing systems fail on the same axis every time: voice collapse. Run multiple people through the same pipeline and the outputs converge on the same generic tone.",
      "approach": [
        "For each voice, extract a fingerprint: sentence rhythm, idiom set, contrarian beats, recurring metaphors, and taboo phrases.",
        "Build a per-voice prompt system - not just a style guide, a constrained-generation regime.",
        "Layer an anti-AI-ese guardrail so weak phrases are rejected automatically.",
        "QA pass compares output against the reference voice for cadence drift."
      ],
      "result": [
        "6 distinct voices, zero generic copy.",
        "Each voice retains a distinct narrative identity at scale.",
        "Outputs preserve the person behind the words instead of flattening them into generic AI text."
      ]
    }
  },
  {
    "id": "whisper-client",
    "category": "CONTENT",
    "title": "Whisper-Based Transcription Pipeline",
    "description": "Cuts transcription cleanup overhead by 80% and feeds structured transcripts directly into writing, learning, or automation workflows.",
    "metric": "80% time reduction",
    "abstract": 2,
    "image": {
      "src": "/images/projects/whisper-client-realistic.png",
      "alt": "Realistic working screenshot for whisper client",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "phantom-spend",
    "category": "INFRASTRUCTURE",
    "title": "Phantom-Spend SaaS Auditor",
    "description": "Full-stack financial auditing tool ingesting CSV via webhook, using an OpenAI model to identify redundant subscriptions - visualized in a React + Tailwind dashboard.",
    "metric": "8 to 12 tools flagged / audit",
    "proofUrl": "https://github.com/alimoizuddin/phantom-spend-saas-auditor",
    "abstract": 3,
    "image": {
      "src": "/images/projects/phantom-spend.webp",
      "alt": "Phantom-Spend SaaS auditor workflow next to financial audit dashboard",
      "caption": "n8n backend paired with SaaS audit dashboard."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - architect + UI",
      "stack": [
        "React",
        "Tailwind CSS",
        "OpenAI model",
        "Webhook ingestion",
        "CSV parsing"
      ],
      "problem": "Most operators have no idea how much they spend on duplicate SaaS. Their bookkeeping shows the cost. It doesn't show the redundancy.",
      "approach": [
        "Drop a CSV of subscription data into the auditor.",
        "An OpenAI model classifies tools, clusters by capability, and identifies overlap.",
        "Custom React + Tailwind dashboard visualizes redundancy + estimated waste.",
        "Operator decides what to cut - system never auto-cancels."
      ],
      "result": [
        "8 to 12 redundant tools identified per audit on average.",
        "Converts opaque AP statements into a one-glance kill-list."
      ]
    }
  },
  {
    "id": "media-intake",
    "category": "INFRASTRUCTURE",
    "title": "Audio Extractor 3.0",
    "description": "A local drag and drop FFmpeg utility for lecture media. It creates a shareable MP3 and a transcription ready FLAC without cloud uploads, subscription costs, or manual splitting.",
    "metric": "~75 min to ~40 sec",
    "proofUrl": "https://github.com/alimoizuddin/media-intake-one-tool",
    "abstract": 5,
    "image": {
      "src": "/images/projects/audio-extractor-v3.png",
      "alt": "Windows workstation with an audio extraction command and MP3 and FLAC outputs",
      "caption": "Audio Extractor running locally on a Windows workstation."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build, workflow design and automation",
      "stack": [
        "Windows Batch",
        "FFmpeg",
        "FFprobe",
        "PowerShell"
      ],
      "problem": "A paid cloud converter added roughly 75 to 80 minutes of turnaround to each three hour lecture through upload, conversion, download, and manual splitting above a 200 MB upload limit. Failed transfers also needed attention.",
      "approach": [
        "Extracted audio locally, so source files remain on the machine.",
        "Generated a mono 96 kbps MP3 for listening and NotebookLM, plus a 16 kHz mono FLAC for transcription.",
        "Set the default MP3 settings to keep a three hour lecture near 130 MB, below NotebookLM's 200 MB source limit.",
        "Kept automatic splitting as a fallback for longer recordings and logged each FFmpeg run."
      ],
      "result": [
        "Audio extraction for a documented three hour lecture fell from roughly 75 minutes of turnaround to about 40 seconds.",
        "The default MP3 usually fits below the upload cap. Longer recordings are split automatically when needed.",
        "Removed a 999 INR yearly converter license, failed cloud transfers, and the manual splitting step.",
        "At the documented volume of 30 lectures a month, the estimate is about 460 hours of annual pipeline turnaround removed. That is wait time, not active labour."
      ]
    }
  },
  {
    "id": "professor-invictus",
    "category": "INFRASTRUCTURE",
    "title": "Professor Invictus Alter-Ego System",
    "description": "Cognitive performance activation framework using behavioral triggers, visualization, identity priming, and state conditioning - applied across 3+ daily deep-work sessions.",
    "metric": "Deep-work on demand",
    "abstract": 4,
    "image": {
      "src": "/images/projects/professor-invictus-realistic.png",
      "alt": "Realistic working screenshot for professor invictus",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "batch-utilities",
    "category": "INFRASTRUCTURE",
    "title": "Batch Processing Utilities",
    "description": "Automation scripts for video merging, audio extraction, and bulk file handling - 500+ media files, drop-folder → walk-away workflow.",
    "metric": "85% time reduction",
    "abstract": 5,
    "image": {
      "src": "/images/projects/batch-utilities-realistic.png",
      "alt": "Realistic working screenshot for batch utilities",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "minimax",
    "category": "INFRASTRUCTURE",
    "title": "Minimax AI Educational Pipeline",
    "description": "Prompt-optimized pipeline using a Minimax AI agent + raw course transcripts to conceptualize and generate a Python-focused educational comic book.",
    "metric": "End-to-end automated",
    "abstract": 1,
    "image": {
      "src": "/images/projects/minimax-realistic.png",
      "alt": "Realistic working screenshot for minimax",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "exec-escalation",
    "category": "INFRASTRUCTURE",
    "title": "Executive Escalation & Crisis Resolution",
    "description": "High-visibility, targeted escalation via LinkedIn + Twitter to bypass support tiers and resolve complex subscription blockers directly with MiniMax executive leadership.",
    "metric": "Tier-1 bypass executed",
    "abstract": 2,
    "image": {
      "src": "/images/projects/exec-escalation-realistic.png",
      "alt": "Realistic working screenshot for exec escalation",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "ai-hr",
    "category": "BE10X COHORT",
    "title": "AI HR Recruiter",
    "description": "n8n + Gemini + Google Sheets pipeline autonomously screening and scoring candidate resumes against JDs - structured scoring output.",
    "metric": "50+ candidates / run",
    "abstract": 3,
    "image": {
      "src": "/images/projects/ai-hr-realistic.png",
      "alt": "Realistic working screenshot for ai hr",
      "caption": "Practical evidence from the working system."
    },
    "caseStudy": true,
    "detail": {
      "role": "Solo build - hackathon-winning project",
      "stack": [
        "n8n",
        "Gemini",
        "Google Sheets",
        "Webhook triggers",
        "Structured scoring rubric"
      ],
      "problem": "HR teams drown in resumes. 50+ submissions per role becomes a coin-flip exercise - high-quality candidates get filtered out by keyword density rather than substance. The cost: hiring mistakes that take 6 months to fix.",
      "approach": [
        "Resumes ingested via Google Sheets → trigger n8n workflow per row.",
        "Gemini scores each resume against the JD on a structured rubric (experience match, skill depth, signal strength, red flags).",
        "Each score comes with a written rationale - not a black-box number.",
        "Output written back to the sheet, sorted by score, ready for the human reviewer."
      ],
      "result": [
        "50+ candidates processed per run with full rationale per candidate.",
        "Helped win the Be10x AI Generalist Hackathon - beating IITians, PhDs, and SWEs.",
        "Reviewer time per role dropped by an order of magnitude."
      ]
    }
  },
  {
    "id": "zwigato",
    "category": "BE10X COHORT",
    "title": "Zwigato Customer Support Agent",
    "description": "Pinecone-backed RAG support bot processing restaurant orders, querying internal policies, and updating inventory databases.",
    "metric": "60% resolution-time cut",
    "abstract": 4,
    "image": {
      "src": "/images/projects/zwigato-realistic.png",
      "alt": "Realistic working screenshot for zwigato",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "expense-tracker",
    "category": "BE10X COHORT",
    "title": "Expense Tracker System",
    "description": "n8n automation for logging financial transactions, maintaining running balances, and segregating data via conversational inputs across 100+ categories.",
    "metric": "100+ categories handled",
    "abstract": 5,
    "image": {
      "src": "/images/projects/expense-tracker-realistic.png",
      "alt": "Realistic working screenshot for expense tracker",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "habit-tracker",
    "category": "BE10X COHORT",
    "title": "Habit Tracker Web App",
    "description": "Fully functional MVP using AI-Assisted Full-Stack Prototyping (Vibe Coding) on Lovable.dev + Firebase - full frontend + backend without traditional coding.",
    "metric": "Shipped in 48 hours",
    "abstract": 1,
    "image": {
      "src": "/images/projects/habit-tracker-realistic.png",
      "alt": "Realistic working screenshot for habit tracker",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "amazon-dashboard",
    "category": "BE10X COHORT",
    "title": "Amazon Sales Dashboard",
    "description": "End-to-end data visualization with Power BI, ETL, and DAX - tracking 10+ KPIs across product categories and sales regions.",
    "metric": "10+ KPIs surfaced",
    "abstract": 2,
    "image": {
      "src": "/images/projects/amazon-dashboard-realistic.png",
      "alt": "Realistic working screenshot for amazon dashboard",
      "caption": "Practical evidence from the working system."
    },
  },
  {
    "id": "synthetic-media",
    "category": "BE10X COHORT",
    "title": "Synthetic Media Pipelines",
    "description": "HeyGen + ElevenLabs workflows producing professional-grade, multilingual video and voice clones - 20+ assets across 2 languages.",
    "metric": "20+ assets, 2 languages",
    "abstract": 3,
    "image": {
      "src": "/images/projects/synthetic-media-realistic.png",
      "alt": "Realistic working screenshot for synthetic media",
      "caption": "Practical evidence from the working system."
    },
  }
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
  {
    "name": "Circadian",
    "vertical": "HEALTH",
    "desc": "Energy & sleep scheduling assistant tuned to your chronotype.",
    "method": "Chronobiology / chronotype frameworks"
  },
  {
    "name": "Overload",
    "vertical": "HEALTH",
    "desc": "Progressive-overload programming via auto-regulated trial sets.",
    "method": "Auto-regulated progressive overload"
  },
  {
    "name": "Primal",
    "vertical": "HEALTH",
    "desc": "Ancestral-health coach - paleo / hunter-gatherer eating and lifestyle reset.",
    "method": "Paleo / hunter-gatherer frameworks"
  },
  {
    "name": "Dermis",
    "vertical": "HEALTH",
    "desc": "Evidence-graded skincare routines from dermatology literature.",
    "method": "Dermatology-literature routines"
  },
  {
    "name": "Task Manager (Moiz Matrix)",
    "vertical": "PRODUCTIVITY",
    "desc": "Eisenhower × energy-matched task triage and weekly review.",
    "method": "Eisenhower + proprietary Moiz Matrix"
  },
  {
    "name": "Attention Engine",
    "vertical": "PRODUCTIVITY",
    "desc": "Distraction-pattern detection + reframing for deep-work blocks.",
    "method": "Cognitive load regulation"
  },
  {
    "name": "Apex Prompt Architect",
    "vertical": "PRODUCTIVITY",
    "desc": "Builds the next prompt you need - from a half-formed instinct.",
    "method": "Elite multi-layered prompt meta-agent"
  },
  {
    "name": "Keystone",
    "vertical": "LIFESTYLE",
    "desc": "Habit design with identity-reinforcement loops + friction audit.",
    "method": "Identity-based habit design"
  },
  {
    "name": "Tailored",
    "vertical": "LIFESTYLE",
    "desc": "Personal style + grooming consultant calibrated to your context.",
    "method": "Color theory + wardrobe systems"
  },
  {
    "name": "Micro-Space Architect",
    "vertical": "LIFESTYLE",
    "desc": "Optimizes small living spaces (sub-10m²) for cognition + calm.",
    "method": "Spatial optimization frameworks"
  },
  {
    "name": "Wingwoman",
    "vertical": "LIFESTYLE",
    "desc": "Reads your texts and suggests tonally-on-point replies. Dating & social, female-perspective.",
    "method": "Dating & conversation dynamics"
  },
  {
    "name": "Recall",
    "vertical": "KNOWLEDGE",
    "desc": "Active recall, spaced repetition, 80/20 distillation on tap.",
    "method": "Active recall + spaced repetition"
  },
  {
    "name": "Universal Knowledge Architect",
    "vertical": "KNOWLEDGE",
    "desc": "Turns any topic into a structured curriculum with retrieval loops.",
    "method": "Zero-loss mastery + Master Notebook"
  },
  {
    "name": "B10X Submission Architect",
    "vertical": "KNOWLEDGE",
    "desc": "Drafts hackathon / cohort submissions to spec, in your voice.",
    "method": "Ruthless technical evaluator"
  },
  {
    "name": "The Architect's Studio",
    "vertical": "KNOWLEDGE",
    "desc": "Image processing engine transforming raw imagery into cohesive Steel & Shadow / cinematic-noir visual branding.",
    "method": "Empire Phase aesthetic + systems"
  },
  {
    "name": "Ascend",
    "vertical": "KNOWLEDGE",
    "desc": "Discipline, dating & social-dynamics coach for self-development.",
    "method": "Social dynamics + performance routines"
  }
];


export const EXPERIENCE = [
  {
    "role": "AI Automation Engineer · RAG · n8n · Agentic Workflows",
    "org": "Self-Employed · Siliguri, India",
    "period": "Feb 2023 - Present",
    "bullets": [
      "Most people think systems begin with software. Mine began with life.",
      "Personal Operating Systems: AI-powered workflows for learning, execution, planning, and knowledge management - built to reduce repetition and improve follow-through.",
      "RAG & Search Systems: OCR, BM25 search, transcript extraction, and long-context knowledge files built from 500+ pages of notes, 900+ media assets, and 100+ hours of audio - achieving 90 percent-plus transcription accuracy.",
      "Automation Pipelines: n8n, Python, LLM APIs, and browser-agent workflows for transcription, SDR research, job applications, content structuring, and workflow automation - reducing manual processing time by 80 to 90 percent across each system.",
      "Content Infrastructure: Since Feb 2026, expanded into voice-to-asset pipelines and identity-preserving LLM systems that turn raw inputs into structured outputs."
    ]
  },
  {
    "role": "Co-Founder & Head of Brand Strategy",
    "org": "Radio Club · Siliguri, India",
    "period": "Dec 2024 - Mar 2026",
    "bullets": [
      "Scaled a campus startup from 0 → 200+ members in under 4 months via organic, value-driven content distribution.",
      "Orchestrated Feb 13 assembly messaging - copywriting clarity triggered the first viral wave, driving 80+ sign-ups in 48 hours.",
      "Built a content engine automating ideation → drafting → editing → publishing, cutting editorial overhead by 40% with a 2-person team shipping 15+ pieces/week.",
      "Designed SOPs, templates, and cross-functional workflows - reducing editorial errors by 25% across a 10-member content team.",
      "Personally interviewed the first 50+ members, translating intuition into scalable recruitment + onboarding systems.",
      "Built community-led media infrastructure combining storytelling, recruitment funnels, editorial systems, and operational SOPs."
    ]
  },
  {
    "role": "Academic Peer Mentor & Performance Coach",
    "org": "Salesian College · Siliguri, India",
    "period": "Aug 2024 - May 2025",
    "bullets": [
      "Simplified complex academic theory (e.g. 'Ambivalence' through a breakup metaphor) - held attention of 150+ students across 10+ sessions.",
      "Deployed for Rapid Response Teaching: compressed 3 to 4 weeks of context into single high-density sessions before major guest speaker events.",
      "Designed premium handcrafted slide decks (0% AI), recognized by the HOD as the best presentation output in the Master's cohort.",
      "Ran voluntary performance workshops on active recall + spaced repetition - measurably improved retention in before/after testing.",
      "Improved writing clarity across 20+ student submissions through structured coaching and targeted feedback.",
      "Converted classroom engagement into community growth - organically recruited the founding 50 Radio Club members in 6 weeks."
    ]
  }
];


export const CERTIFICATIONS = [
  {
    "icon": "trophy",
    "title": "Be10x AI Generalist Hackathon Winner",
    "year": "2026",
    "note": "1st place; outperformed IITians, tech PhDs, and software developers (verifiable)"
  },
  {
    "icon": "spark",
    "title": "Certified AI Generalist - Be10x AI Career Accelerator",
    "year": "2026",
    "note": "Agents · Branding · Fundamentals · Career Readiness"
  },
  {
    "icon": "spark",
    "title": "Top 0.1% ChatGPT User",
    "year": "2025",
    "note": "Proof available privately"
  },
  {
    "icon": "spark",
    "title": "AICTE ATAL Recognition",
    "year": "Jan 2024",
    "note": "Contributions to the North Bengal startup ecosystem"
  },
  {
    "icon": "spark",
    "title": "Certificate of Achievement - Radio Club",
    "year": "Jan 2025",
    "note": "Leadership + ops scaling a 200+ member org"
  },
  {
    "icon": "spark",
    "title": "MUN Dual Award Winner",
    "year": "Jan 2023",
    "note": "Research excellence + structured debate"
  },
  {
    "icon": "spark",
    "title": "PPT Mastery + AI Tools Workshop",
    "year": "",
    "note": "Additional certifications"
  }
];


export const EDUCATION = [
  {
    degree: "MA English Language & Literature",
    school: "Salesian College, Siliguri",
    period: "Aug 2023 - Jun 2025",
    grade: "7.2 / 10",
    note: "Original research: \"The Ethics of Friendship in Klara and The Sun: Friendship in the Time of Artificial Companions\" - selected among the top departmental presentations.",
  },
  {
    degree: "BA English",
    school: "Munshi Premchand Mahavidyalaya, Siliguri",
    period: "Jul 2021 - Jun 2023",
    grade: "",
    note: "",
  },
];


export const CONTACT_CARDS = [
  {
    "id": "systems",
    "title": "AI Systems / Automation",
    "desc": "RAG, n8n, LLM workflows, search, transcription, and workflow automation.",
    "cta": "Discuss a Build",
    "subject": "AI Systems / Automation Inquiry"
  },
  {
    "id": "hiring",
    "title": "Hiring / Opportunities",
    "desc": "Full-time, internship, consulting, or AI systems roles.",
    "cta": "Get In Touch",
    "subject": "Opportunity - AI Automation Engineer"
  },
  {
    "id": "collab",
    "title": "Collaboration",
    "desc": "Research, campus systems, partnerships, knowledge workflows, or practical AI builds.",
    "cta": "Let's Talk",
    "subject": "Collaboration - AI Systems / Knowledge Workflows"
  }
];
