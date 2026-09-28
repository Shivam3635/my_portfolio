# Shivam Singh — Developer Portfolio

A modern, minimal, dark-first personal portfolio website for **Shivam Singh** (BCA Student, University of Allahabad), designed for Web Developer internship applications.

🌐 **Live Local Dev:** [http://localhost:3000](http://localhost:3000)  
📄 **Resume Endpoint:** `/resume.pdf`

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens & tech-grid background
- **Icons:** Lucide React + custom SVG brand icons
- **Theme Management:** Dark-first with light-mode toggle (`useSyncExternalStore` + `localStorage` persistence)
- **Typography:** Geist Sans & Geist Mono (`next/font/google`)
- **Accessibility:** Semantic HTML5, keyboard navigation focus rings, `prefers-reduced-motion` compliance

---

## 📂 Project Structure

```
├── public/
│   └── resume.pdf                 # Generated resume document
├── scripts/
│   └── generate_resume.py         # Standard PDF generator for /resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css            # Design tokens, tech-grid, and custom scrollbar
│   │   ├── layout.tsx             # SEO metadata, Open Graph, Twitter cards, ThemeProvider
│   │   └── page.tsx               # Primary single-page portfolio layout
│   ├── components/
│   │   ├── About.tsx              # Background story and quick info panel
│   │   ├── Achievements.tsx       # Verified academic & camp distinctions
│   │   ├── CertificationAndNCC.tsx# TCS iON Young Professional & NCC CQMS Cadet details
│   │   ├── Contact.tsx            # Email trigger, copy email, mail composer, and social links
│   │   ├── Education.tsx          # University of Allahabad BCA & high school credentials
│   │   ├── Experience.tsx         # Event Management Volunteer at Quantum Quirks Coding Club
│   │   ├── Footer.tsx             # Copyright, links, and back-to-top button
│   │   ├── Hackathons.tsx         # SIH 2026 (Vaidrith) and GDG Code for Community (JanSetu)
│   │   ├── Hero.tsx               # Introduction, status pill, CTA, and interactive terminal
│   │   ├── Icons.tsx              # Clean SVG icons for GitHub & LinkedIn
│   │   ├── Navbar.tsx             # Sticky navbar, section tracker, resume link, theme toggle
│   │   ├── Projects.tsx           # High-fidelity CSS UI mockups, tech tags, and repo links
│   │   ├── Skills.tsx             # Categorized skills with familiarity indicators
│   │   └── ThemeProvider.tsx      # Dark/light theme management
│   ├── data/
│   │   └── portfolioData.ts       # Single source of factual profile data
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## 🚀 Featured Projects

1. **[AcademIQ](https://github.com/Shivam3635/AcademIQ)**  
   - Centralized academic notices, exam calendar, and campus resources hub.  
   - *Tech:* Next.js, TypeScript, Tailwind CSS, Firebase Auth & Firestore.  
   - *Live:* [academ-iq-sigma.vercel.app](https://academ-iq-sigma.vercel.app)

2. **[JanSetu AI](https://github.com/Shivam3635/JanSetuAI)**  
   - AI-powered civic platform converting multilingual citizen grievances (Hindi & English) into GIS infrastructure insights.  
   - *Tech:* Flask, Google Gemini NLU, Firestore, Google Maps API, Web Speech API.  
   - *Live:* [jan-setu-ai-phi.vercel.app](https://jan-setu-ai-phi.vercel.app/)  
   - *Hackathon:* Code for Community 2026 (CMP Degree College × GDG Prayagraj) — Judge Appreciation.

3. **[Bhoomi Intel](https://github.com/Shivam3635/Bhoomi_Intel)**  
   - Evidence intelligence layer connecting fragmented land governance data and cadastral maps into traceable policy briefs.  
   - *Tech:* Next.js, Python FastAPI, PostGIS / Leaflet, RAG / AI Layer, Recharts.  
   - *Live:* [bhoomi-intel.vercel.app](https://bhoomi-intel.vercel.app/)

---

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle
npm run build
```

---

## 👤 Contact

- **Name:** Shivam Singh
- **Location:** Prayagraj, India
- **Email:** [singhshivamop36@gmail.com](mailto:singhshivamop36@gmail.com)
- **GitHub:** [github.com/Shivam3635](https://github.com/Shivam3635)
- **LinkedIn:** [linkedin.com/in/shivam-singh-5147a1285](https://www.linkedin.com/in/shivam-singh-5147a1285)
