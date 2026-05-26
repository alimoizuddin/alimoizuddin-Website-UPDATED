# Ali Moizuddin — Personal Brand Site · PRD

## Problem Statement (verbatim)
World-class personal brand website for **Ali Moizuddin** — a Certified AI Generalist, AI Systems Architect, and Content Systems Specialist based in Siliguri, India. Goals: (1) attract high-ticket freelance / ghostwriting clients, (2) attract employers / recruiters in AI / automation / content systems, (3) establish Ali as a personal brand and thought leader, (4) function as an interactive, living portfolio. Aesthetic: Premium Editorial / Dark Luxury — Financial Times meets Wired meets a founding partner's personal site.

## Architecture
- **Frontend**: React 19 + CRA + Tailwind + framer-motion + Lenis smooth scroll. Single-page editorial layout (`/app/frontend/src/pages/Home.jsx`) composed of section components in `/app/frontend/src/components/`.
- **Content source**: `/app/frontend/src/data/site.js` — all profile, projects, agents, experience, certifications data centralized here.
- **Backend**: FastAPI (`/app/backend/server.py`) with `/api/contact-intent` POST/GET (logs each contact-card click), plus legacy `/api/`, `/api/health`, `/api/status` endpoints. MongoDB via motor.
- **Design system**: see `/app/design_guidelines.json` — colors (#0D0D0D bg, #F5F0E8 text, #C9A84C gold, #1F4788 navy), fonts (Cormorant Garamond / DM Sans / JetBrains Mono).

## User Personas
1. **High-ticket freelance client** (founder/exec) — wants ghostwriting + content systems proof.
2. **Recruiter / hiring manager in AI** — wants verifiable AI engineering depth.
3. **Peer / collaborator** — wants partnership channel + thought-leadership signal.

## Core Requirements (static)
- 8 sections: Hero, About, Skills, Projects, Agents, Philosophy, Experience, Contact.
- Sticky nav with mobile full-screen overlay.
- Cinematic motion (slow staggered reveals, cursor glow, scroll cue, grain overlay).
- Mailto-based contact (3 lanes: freelance / hiring / collaboration), backend logs the click.
- Mobile fully responsive.

## What's Implemented
### Iteration 1 (2025-12)
- ✅ All 8 sections + editorial styling, mesh gradient hero, grain overlay, cursor glow.
- ✅ Sticky nav + mobile hamburger overlay.
- ✅ Contact: 3 mailto lanes + LinkedIn + Notion logged to `/api/contact-intent`.
- ✅ Backend 9/9, frontend 100%, zero console errors.

### Iteration 4 (2025-12) — Multi-page refactor + Admin CMS
- ✅ **Font swap**: Fraunces (variable serif, distinctive editorial feel) + Geist (modern body) — replaces Cormorant + DM Sans. Way less "AI-generated" energy.
- ✅ **Separate dedicated pages**: `/about`, `/skills`, `/projects`, `/agents`, `/philosophy`, `/experience`, `/contact`. Home becomes a 7-card section index + hero + marquee.
- ✅ **Admin Panel** at `/admin/login` → `/admin`. JWT auth (7-day token, bcrypt password hash, admin seeded from .env). 14 editable content sections via collapsible JSON editor. Image library with upload (≤5MB base64-stored in Mongo, served via `/api/uploads/:id`) + copy URL + delete.
- ✅ **CMS backend**: `/api/content` (public) returns all site content; `/api/admin/content/:section` (auth) for updates. Frontend `ContentProvider` fetches on mount with bundled defaults as safety net.
- ✅ **Bakhtin removed** from About paragraph — now reads as smart without name-dropping.
- ✅ Backend 38/38, frontend 14/14, zero console errors. Mobile responsive verified.

**Admin credentials (in `/app/memory/test_credentials.md`)**: `admin@alimoizuddin.site` / `Editor2026!` — change by editing `ADMIN_PASSWORD` in `/app/backend/.env` and restarting backend.

## Backlog
**P1 (next session candidates)**
- Add Open Graph image and proper favicon.
- Wire up an admin view of `/api/contact-intent` (auth-gated).
- Add a `/case-studies/[id]` route with deeper project write-ups + before/after metrics.
- Track scroll depth + section-viewed analytics.

**P2**
- Newsletter / waitlist capture in Contact.
- Testimonial / social-proof carousel near Projects.
- Light/dark theme toggle (only if requested — current dark is intentional).
- Sitemap.xml + robots.txt for SEO.

## Test Credentials
N/A — no auth in app.
