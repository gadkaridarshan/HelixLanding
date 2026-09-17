# helix-landing

A professional marketing landing page for the Helix AI Orchestrator, built with Next.js and deployed on Vercel. This page showcases the product’s value proposition, features, and call‑to‑action sections, providing a clean, responsive experience for visitors.

## Prerequisites
- Node.js (v18.17.0 or later)
- npm (v9.0.0 or later)
- Git (for version control)

## Running locally
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Verify success: Open <http://localhost:3000> in your browser to see the landing page

## Project Structure
helix-landing/
├── app/
│   ├── globals.css
│   ├── global.d.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CTA.tsx
│   ├── CTA.module.css
│   ├── Features.tsx
│   ├── Features.module.css
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Hero.module.css
├── public/
├── .vscode/
│   ├── settings.json
│   └── vercel.json
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json

## What was built
- Implemented the full landing page with layout, global styles, and section components (hero, features, CTA, footer)
- Ensured the page is responsive and matches the reference site
- Configured for deployment on Vercel