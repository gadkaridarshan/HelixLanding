# helix-landing

A professional marketing landing page for the Helix AI Orchestrator, built with Next.js and deployed on Vercel. This page showcases the product’s value proposition, features, and call-to-action sections, providing a clean, responsive experience for visitors.

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
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CTA.tsx
│   ├── CTA.module.css
│   ├── Features.tsx
│   ├── Features.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── Hero.tsx
│   ├── Hero.module.css
│   └── UI/
│       └── Button.tsx
├── public/
├── .vscode/
│   └── settings.json
├── HelixCardInventory.md
├── HelixGrandProjectSummary.md
├── .gitignore
├── next.config.js
├── package.json
└── tailwind.config.js