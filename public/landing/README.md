<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents. This Next.js (App Router) project is the live marketing surface for the product: a polished, brand-consistent landing page that explains what Helix does, who it is for, and how to get started.

> **Important — this repo is the live site for this workspace.** The canonical production URL for this product is configured in `lib/brand.ts` (`brand.url`). The URL below is **only** a visual / brand reference and is **not** deployed from this repository.
>
> 🔗 **Reference site** (visual / brand reference only — **not** this product's live site):
> <https://helix-ai-orchestrator.vercel.app>
>
> Source: <https://github.com/gadkaridarshan/Helix>

## What this site does

A standalone Next.js (App Router) marketing site for Helix, the AI coding orchestrator that:

- Decomposes every prompt into atomic, reviewable units.
- Executes units in order with explicit dependencies.
- Verifies each unit against the rest of your repo (types, tests, lint).
- Produces small, reviewable PRs instead of one sprawling diff.

The page is composed as a single narrative flow — brand chrome at the top, value proposition, capability walkthrough, persona fit, social proof, FAQ, and a closing call-to-action — followed by a footer that explicitly distinguishes the reference site from the live product URL.

## Prerequisites

- **Node.js** ≥ 20.x (Next.js 14 App Router minimum).
- **npm** ≥ 10.x. `pnpm` and `yarn` work too; the commands below assume `npm`.
- A Vercel account — only required for deployment, not for local development.

## Running locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000>. Hot reload is enabled — saving any file under `app/` or `components/` refreshes the page immediately.

   **Verify:** the browser renders the hero with the gradient headline ("Atomic work-breakdown for AI coding agents.") over the layered cyan/violet background, and the network panel shows no 404s for fonts or favicon.

3. **Type-check the project**

   ```bash
   npm run typecheck
   ```

   **Verify:** prints `0 errors` and exits 0.

4. **Lint**

   ```bash
   npm run lint
   ```

   **Verify:** exits 0 with no errors.

5. **Production build**

   ```bash
   npm run build
   ```

   **Verify:** ends with `✓ Compiled successfully` and a route table that includes `○ /`. No `Module not found` or unresolved import warnings.

6. **Run the production build locally**

   ```bash
   npm run start
   ```

   Boots the optimized build on port 3000. **Verify:** the same landing page renders identically to the dev server.

## Sections shipped

1. **Navbar** — sticky transparent-to-solid brand bar with section anchors and an early-access CTA.
2. **Hero** — headline, dual CTAs, decorative atom/orbit SVG, and social-proof bullets.
3. **StatsBar** — quick metric strip below the hero.
4. **Features** — six capability tiles highlighting atomic planning, parallel agents, atomic work-breakdown, and GIVEN/WHEN/THEN acceptance criteria.
5. **HowItWorks** — three-step plan → execute → verify walkthrough with simple SVG diagrams.
6. **Personas** — tabbed/cards for Indie Developers, Startup CTOs, Engineering Managers, Enterprise Platform Teams, and AI/Agent Builders.
7. **FinalCTA** — gradient panel closing call-to-action.
8. **FAQ** — accessible accordion with 4–5 marketing FAQs.
9. **Footer** — brand mark, secondary nav, GitHub star CTA, Vercel reference, and a clearly-labelled reference-site pointer.

## Project Structure