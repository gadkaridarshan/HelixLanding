<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> **Important — this repo is the live site for this workspace.** The canonical production URL for this product is configured in `lib/brand.ts` (`brand.url`). The URL below is **only** a visual / brand reference and is **not** deployed from this repository.
>
> 🔗 **Reference site** (visual / brand reference only — **not** this product's live site):
> <https://helix-ai-orchestrator.vercel.app>
>
> Source: <https://github.com/gadkaridarshan/Helix>

## What this site is

A standalone Next.js (App Router) marketing site for Helix, the AI coding orchestrator that:

- Decomposes every prompt into atomic, reviewable units.
- Executes units in order with explicit dependencies.
- Verifies each unit against the rest of your repo (types, tests, lint).
- Produces small, reviewable PRs instead of one sprawling diff.

## Sections shipped

1. **Navbar** — sticky brand mark + section anchors + early-access CTA.
2. **Hero** — headline, dual CTAs, decorative atom/orbit SVG, social-proof bullets.
3. **StatsBar** — quick metric strip.
4. **Features** — six core capabilities (atomic decomposition, ordered execution, repo-aware verification, small PRs, pluggable agent, auditability).
5. **HowItWorks** — three-step execution loop (decompose → execute & verify → ship).
6. **Personas** — built-for grid (developers, PMs, founders, enterprise) + testimonial.
7. **FAQ** — native `<details>` accordion with six common questions.
8. **FinalCTA** — closing conversion panel.
9. **Footer** — link columns, brand mark, and an explicitly-labelled reference-site pointer.

## Tech stack

- **Next.js 14+** App Router (server components by default).
- **React 19**.
- **Tailwind CSS v4** (via `@tailwindcss/postcss`).
- **TypeScript** (strict).
- **next/font/google** — Inter (UI) + JetBrains Mono (code).
- **Vercel-ready** — no platform-specific code.

## Requirements

- **Node.js** ≥ 20.x (Next.js 14 App Router minimum).
- **npm** ≥ 10.x (commands below assume npm; pnpm/yarn work too).
- A Vercel account — only required for deployment, not for local dev.

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000>. Hot reload is enabled; saving any file
   under `app/` or `components/` refreshes the page immediately.

   **Success check:** the browser renders the hero with the gradient
   headline ("Atomic work-breakdown for AI coding agents.") over the
   layered cyan/violet background. No 404s in the network panel for
   fonts or favicon.

3. **Type-check the project**

   ```bash
   npm run typecheck
   ```

   **Success check:** prints `0 errors` and exits 0.

4. **Lint**

   ```bash
   npm run lint
   ```

   **Success check:** exits 0 with no errors.

5. **Production build**

   ```bash
   npm run build
   ```

   **Success check:** ends with `✓ Compiled successfully` and a route
   table that includes `○ /`. No `Module not found` or unresolved
   import warnings.

6. **Run the production build locally**

   ```bash
   npm run start
   ```

   Open <http://localhost:3000>.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel (New Project → Import).
3. Vercel auto-detects Next.js — no build command or output directory
   overrides required.
4. After the first deploy, set the production domain to match
   `brand.url` in `lib/brand.ts` (or update `brand.url` to match your
   Vercel-assigned domain). Either is fine — `brand.url` is the
   single source of truth for the canonical live URL.

## Project structure