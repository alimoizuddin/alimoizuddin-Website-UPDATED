"""Initial content seed — mirrors the original /app/frontend/src/data/site.js defaults.
This is loaded into MongoDB on first run so the admin can edit it without losing anything.
"""

DEFAULT_PROFILE = {
    "name": "Ali Moizuddin",
    "brand": "ALI MOIZUDDIN",
    "tagline": "AI Systems Architect · Certified AI Generalist · RAG · Agentic AI · n8n · Top 0.1% ChatGPT User",
    "location": "Siliguri, West Bengal, India",
    "email": "aalimoizuddin@outlook.com",
    "phone": "+91 8392006965",
    "linkedin": "https://www.linkedin.com/in/alimoizuddin",
    "notion": "https://www.notion.so/Ali-Moizuddin-AI-Ghostwriter-Content-System-Specialist-32b966fa7e83801b95e7f7be1caab23e",
    "wellfound": "https://wellfound.com/u/ali-moizuddin-1",
    "photo": "https://customer-assets.emergentagent.com/job_3e46ef77-ca74-4e8e-a719-ab3f22e4f199/artifacts/v3cmir8v_Profile%20Pic.jpg",
    "statusPillLabel": "Available · 2 client slots",
    "heroHeadlinePrefix": "I Build AI Systems",
    "heroHeadlineSuffix": "That Think.",
    "heroSub": "Building RAG, agentic AI, n8n, OCR/BM25 search, transcription, SDR research, and workflow automation systems that turn messy information into repeatable execution.",
}

DEFAULT_SOCIALS = [
    {"id": "linkedin", "label": "LinkedIn", "handle": "@alimoizuddin", "url": "https://www.linkedin.com/in/alimoizuddin", "icon": "linkedin"},
    {"id": "x", "label": "X / Twitter", "handle": "@Ali_Moizuddin_", "url": "https://x.com/Ali_Moizuddin_", "icon": "twitter"},
    {"id": "instagram", "label": "Instagram", "handle": "@ali_moizuddin_", "url": "https://www.instagram.com/ali_moizuddin_/", "icon": "instagram"},
    {"id": "facebook", "label": "Facebook", "handle": "", "url": "https://www.facebook.com/share/18xN3ZB3Xb/?mibextid=wwXIfr", "icon": "facebook"},
    {"id": "github", "label": "GitHub", "handle": "alimoizuddin", "url": "https://github.com/alimoizuddin", "icon": "github"},
    {"id": "notion", "label": "Notion", "handle": "Portfolio", "url": "https://www.notion.so/Ali-Moizuddin-AI-Ghostwriter-Content-System-Specialist-32b966fa7e83801b95e7f7be1caab23e", "icon": "external"},
    {"id": "wellfound", "label": "Wellfound", "handle": "ali-moizuddin-1", "url": "https://wellfound.com/u/ali-moizuddin-1", "icon": "external"},
]

DEFAULT_STATS = [
    {"value": "20+", "label": "AI Systems Built"},
    {"value": "40–60%", "label": "Avg. Overhead Reduction"},
    {"value": "200+", "label": "Community Members Scaled"},
    {"value": "100+", "label": "Flashcard Entries Automated"},
]

DEFAULT_PHILOSOPHY_LINES = [
    "Build systems, not tasks.",
    "Optimize for leverage over effort.",
    "Convert information into execution.",
    "Use AI to amplify authentic human insight — not replace it.",
]

DEFAULT_PHILOSOPHY_BODY = (
    "My edge is rare: literature-level understanding of human cognition, "
    "communication, and behavior — fused with systems-level mastery of AI "
    "architecture and automation. This combination is the foundation of every "
    "system I build."
)

DEFAULT_ABOUT_PARAGRAPHS = [
    "An MA in English Literature gave me the cognitive scaffolding — narrative theory, voice, and the architecture of meaning. AI gave me the tooling to operationalize it. Most operators have one or the other. The interdisciplinary moat is the entire point.",
    "Since Feb 2023, I have built 20+ AI-powered systems across personal operating systems, learning infrastructure, RAG, OCR/BM25 search, transcription, SDR research, job-application automation, browser-agent workflows, and full-stack prototypes. From Feb 2026, that systems work evolved into content infrastructure: voice-to-asset pipelines, identity-preserving LLMs, and publishing workflows.",
    "The work is measured in concrete throughput: 500+ pages processed, 900+ media assets made queryable, 100+ hours of audio transcribed, and 40–60% manual overhead reduction across repeatable systems.",
    "Philosophy is simple: build systems, not tasks. Optimize for leverage over effort. Use AI to amplify authentic human insight — never to replace it. Anything less is just noise dressed up as productivity.",
]

DEFAULT_ABOUT_QUOTE = "I combine literature-level understanding of humans with systems-level mastery of AI. Very few people genuinely have both."

DEFAULT_CONTACT_CARDS = [
    {"id": "freelance", "title": "Freelance Inquiry", "desc": "Ghostwriting, AI content systems, automation pipelines.", "cta": "Start a Project", "subject": "Freelance Inquiry — Ghostwriting / AI Systems"},
    {"id": "hiring", "title": "Hiring / Opportunities", "desc": "Full-time, consulting, or advisory roles in AI.", "cta": "Get In Touch", "subject": "Opportunity — AI Generalist / Systems Architect Role"},
    {"id": "collab", "title": "Collaboration", "desc": "Joint ventures, partnerships, knowledge exchange.", "cta": "Let's Talk", "subject": "Collaboration — Partnership / Joint Venture"},
]

# Competencies, projects, agents, experience, certifications, education are large.
# They get populated from a JSON file the first time backend boots.
# We keep them as Python literals here for portability.

DEFAULT_COMPETENCIES = [
    {"id": "ai", "title": "AI & Automation", "items": ["Agentic AI", "Custom GPT Architecture", "RAG Pipelines", "Vector Databases (Pinecone)", "n8n Workflow Automation", "VAPI.ai (Voice Agents)", "Advanced Prompt Engineering", "Zero-Shot / Few-Shot / Role-Playing", "Synthetic Media (HeyGen, ElevenLabs)", "Whisper Transcription"]},
    {"id": "engineering", "title": "Engineering & Development", "items": ["AI-Assisted Full-Stack Prototyping (Vibe Coding)", "Lovable.dev", "Python · Colab", "Bash / .bat Scripting", "Prompt-Driven UI (React.js)", "Tailwind CSS", "JSON Data Mapping", "REST API Integrations", "BM25 Search", "OCR", "Firebase"]},
    {"id": "data", "title": "Data & Analytics", "items": ["Power BI", "DAX", "ETL Processes", "Dashboard Visualization"]},
    {"id": "content", "title": "Content & Strategy", "items": ["Content Infrastructure", "Identity-Preserving Writing Systems", "Executive Communications", "Brand Storytelling", "Pyramid Principle", "SCR Framework", "Edutainment", "Knowledge Distillation (80/20)", "Instructional Design", "Spaced Repetition · Anki", "Copywriting", "SOP Design", "Editorial Judgment"]},
    {"id": "systems", "title": "Specialized Systems Thinking", "items": ["80/20 Knowledge Compression", "Retrieval-Based Learning", "AI-Augmented Cognition", "Founder Communication Systems", "Behavioral Activation Frameworks", "Information-to-Execution Pipelines", "Human-Centered AI Automation", "Prompt Behavioral Engineering", "Cognitive Systems Design", "Human-AI Collaboration Design", "Knowledge Management Systems", "Information Architecture", "Behavioral Systems Engineering", "AI Workflow Orchestration", "Retrieval Systems", "Learning Engineering", "Multimodal AI Pipelines", "Prompt Systems Architecture", "Autonomous Agent Design", "AI-Augmented Research", "Educational AI Systems"]},
]

DEFAULT_AGENTS = [
    {"name": "Circadian", "vertical": "HEALTH", "desc": "Energy & sleep scheduling assistant tuned to your chronotype.", "method": "Dr. Breus chronotypes"},
    {"name": "10X Trial-Based Strength", "vertical": "HEALTH", "desc": "Progressive overload programming via auto-regulated trial sets.", "method": "Mindvalley 10X Fitness"},
    {"name": "WildGPT", "vertical": "HEALTH", "desc": "Outdoor & survival prep — protocols for trips, weather, terrain.", "method": "Eric Edmeades behavioral health"},
    {"name": "SkinGPT", "vertical": "HEALTH", "desc": "Evidence-graded skincare routines from dermatology literature.", "method": "Skin Quest Masterclass"},
    {"name": "Task Manager (Moiz Matrix)", "vertical": "PRODUCTIVITY", "desc": "Eisenhower × energy-matched task triage and weekly review.", "method": "Eisenhower + proprietary Moiz Matrix"},
    {"name": "Attention Engine", "vertical": "PRODUCTIVITY", "desc": "Distraction-pattern detection + reframing for deep-work blocks.", "method": "Cognitive load regulation"},
    {"name": "Apex Prompt Architect", "vertical": "PRODUCTIVITY", "desc": "Builds the next prompt you need — from a half-formed instinct.", "method": "Elite multi-layered prompt meta-agent"},
    {"name": "Habitatica", "vertical": "LIFESTYLE", "desc": "Habit design with identity-reinforcement loops + friction audit.", "method": "James Clear · Atomic Habits"},
    {"name": "TanGPT", "vertical": "LIFESTYLE", "desc": "Personal style + grooming consultant calibrated to your context.", "method": "Tan France Hollywood styling"},
    {"name": "Micro-Space Architect", "vertical": "LIFESTYLE", "desc": "Optimizes small living spaces (sub-10m²) for cognition + calm.", "method": "Spatial optimization frameworks"},
    {"name": "Marni: The Digital Wing Girl", "vertical": "LIFESTYLE", "desc": "Reads texts, suggests tonally-correct replies. Never cringe.", "method": "Elite 1-on-1 coaching dynamics"},
    {"name": "KwikGPT", "vertical": "KNOWLEDGE", "desc": "Active recall, spaced repetition, 80/20 distillation on tap.", "method": "Jim Kwik accelerated learning"},
    {"name": "Universal Knowledge Architect", "vertical": "KNOWLEDGE", "desc": "Turns any topic into a structured curriculum with retrieval loops.", "method": "Zero-loss mastery + Master Notebook"},
    {"name": "B10X Submission Architect", "vertical": "KNOWLEDGE", "desc": "Drafts hackathon / cohort submissions to spec, in your voice.", "method": "Ruthless technical evaluator"},
    {"name": "The Architect's Studio", "vertical": "KNOWLEDGE", "desc": "A meta-agent for building agents — patterns, prompts, evals.", "method": "Empire Phase aesthetic + systems"},
    {"name": "KshitijGPT", "vertical": "KNOWLEDGE", "desc": "Iron Man Lifestyle Coach — exam-prep + performance regimen.", "method": "BM25 + retrieval-based learning"},
]

DEFAULT_EXPERIENCE = [
    {"role": "AI Systems Architect & Automation Builder", "org": "Self-Employed · Siliguri, India", "period": "Feb 2023 — Present", "bullets": ["Most people think systems begin with software. Mine began with life.", "Personal Operating Systems: AI-powered workflows for learning, execution, planning, and knowledge management — built to reduce repetition and improve follow-through.", "RAG & Search Systems: OCR, BM25 search, transcript extraction, and long-context knowledge files built from 500+ pages of notes, 900+ media assets, and 100+ hours of audio — achieving 90 percent-plus transcription accuracy.", "Automation Pipelines: n8n, Python, LLM APIs, and browser-agent workflows for transcription, SDR research, job applications, content structuring, and workflow automation — reducing manual processing time by 80 to 90 percent across each system.", "Content Infrastructure: Since Feb 2026, expanded into voice-to-asset pipelines and identity-preserving LLM systems that turn raw inputs into structured outputs."]},
    {"role": "Co-Founder & Head of Brand Strategy", "org": "Radio Club · Siliguri, India", "period": "Dec 2024 — Mar 2026", "bullets": ["Scaled a campus startup from 0 → 200+ members in under 4 months via organic, value-driven content distribution.", "Orchestrated Feb 13 assembly messaging — copywriting clarity triggered the first viral wave, driving 80+ sign-ups in 48 hours.", "Built a content engine automating ideation → drafting → editing → publishing, cutting editorial overhead by 40% with a 2-person team shipping 15+ pieces/week.", "Designed SOPs, templates, and cross-functional workflows — reducing editorial errors by 25% across a 10-member content team.", "Personally interviewed the first 50+ members, translating intuition into scalable recruitment + onboarding systems.", "Built community-led media infrastructure combining storytelling, recruitment funnels, editorial systems, and operational SOPs."]},
    {"role": "Academic Peer Mentor & Performance Coach", "org": "Salesian College · Siliguri, India", "period": "Aug 2024 — May 2025", "bullets": ["Simplified complex academic theory (e.g. 'Ambivalence' through a breakup metaphor) — held attention of 150+ students across 10+ sessions.", "Deployed for Rapid Response Teaching: compressed 3–4 weeks of context into single high-density sessions before major guest speaker events.", "Designed premium handcrafted slide decks (0% AI), recognized by the HOD as the best presentation output in the Master's cohort.", "Ran voluntary performance workshops on active recall + spaced repetition — improved exam performance by an estimated 30% across 8 students.", "Lifted writing clarity by 35% across 20+ student submissions via structured coaching and targeted feedback.", "Converted classroom engagement into community growth — organically recruited the founding 50 Radio Club members in 6 weeks."]},
]

DEFAULT_CERTIFICATIONS = [
    {"icon": "trophy", "title": "Be10x AI Generalist Hackathon Winner", "year": "2026", "note": "1st place; outperformed IITians, tech PhDs, and software developers"},
    {"icon": "spark", "title": "Certified AI Generalist — Be10x AI Career Accelerator", "year": "2026", "note": "Agents · Branding · Fundamentals · Career Readiness"},
    {"icon": "spark", "title": "Top 0.1% Global ChatGPT User — OpenAI", "year": "Dec 2025", "note": "Advanced prompt engineering + system architecture"},
    {"icon": "spark", "title": "AICTE ATAL Recognition", "year": "Jan 2024", "note": "Contributions to the North Bengal startup ecosystem"},
    {"icon": "spark", "title": "Certificate of Achievement — Radio Club", "year": "Jan 2025", "note": "Leadership + ops scaling a 200+ member org"},
    {"icon": "spark", "title": "MUN Dual Award Winner", "year": "Jan 2023", "note": "Research excellence + structured debate"},
    {"icon": "spark", "title": "PPT Mastery + AI Tools Workshop", "year": "", "note": "Additional certifications"},
]

DEFAULT_EDUCATION = [
    {"degree": "MA English Language & Literature", "school": "Salesian College, Siliguri", "period": "Aug 2023 — Jun 2025", "grade": "7.2 / 10", "note": "Original research: \"Freedom vs Programmed Loyalty in True Friendship\" — selected as one of the top departmental presentations."},
    {"degree": "BA English", "school": "Munshi Premchand Mahavidyalaya, Siliguri", "period": "Jul 2021 — Jun 2023", "grade": "", "note": ""},
]

DEFAULT_PROJECT_CATEGORIES = ["ALL", "AUTOMATION", "EDTECH", "CONTENT", "INFRASTRUCTURE", "BE10X COHORT"]

DEFAULT_STACK_MARQUEE = ["GPT-4", "Gemini", "Claude", "Whisper", "n8n", "Apollo.io", "Apify", "Pinecone", "ElevenLabs", "HeyGen", "VAPI.ai", "Lovable.dev", "React", "Tailwind", "Firebase", "Python", "Power BI", "DAX", "BM25", "RAG", "OCR", "Anki"]

# Projects with optional case study detail. Long, but it's a one-time seed.
DEFAULT_PROJECTS = []  # populated from JSON to keep this file manageable


def build_initial_content(projects):
    return {
        "profile": DEFAULT_PROFILE,
        "socials": DEFAULT_SOCIALS,
        "stats": DEFAULT_STATS,
        "philosophy": {"lines": DEFAULT_PHILOSOPHY_LINES, "body": DEFAULT_PHILOSOPHY_BODY},
        "about": {"paragraphs": DEFAULT_ABOUT_PARAGRAPHS, "quote": DEFAULT_ABOUT_QUOTE},
        "contactCards": DEFAULT_CONTACT_CARDS,
        "competencies": DEFAULT_COMPETENCIES,
        "agents": DEFAULT_AGENTS,
        "experience": DEFAULT_EXPERIENCE,
        "certifications": DEFAULT_CERTIFICATIONS,
        "education": DEFAULT_EDUCATION,
        "projectCategories": DEFAULT_PROJECT_CATEGORIES,
        "stackMarquee": DEFAULT_STACK_MARQUEE,
        "projects": projects,
    }
