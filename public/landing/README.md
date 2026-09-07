# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> **Live site:** <https://helix-ai-orchestrator.vercel.app>
>
> Source: <https://github.com/gadkaridarshan/Helix>

This repo **is** the live site. Deploying this repository to your own Vercel account gives you a public marketing site for the Helix AI orchestrator at the domain you configure in `lib/brand.ts` (or override via the `NEXT_PUBLIC_BRAND_URL` environment variable).

## What this site is

A standalone Next.js (App Router) marketing site for **Helix**, the AI coding orchestrator that:

- Decomposes every prompt into atomic, reviewable units.
- Executes units in order with explicit dependencies.
- Verifies each unit against the rest of your repo (types, tests, lint).
- Produces small, reviewable PRs instead of one sprawling diff.

## Target users

The landing copy and sections are tuned for the audiences the Helix orchestrator serves:

- **Founders** — ship MVPs without an engineering org.
- **Engineers** — keep PRs small and reviews meaningful.
- **Tech leads / platform teams** — enforce code health at scale.
- **Product managers** — turn specs into merged code, not tickets.
- **AI enthusiasts** — see what production-grade agentic workflows look like.

## Sections shipped

1. **Navbar** — sticky brand mark + section anchors + early-access CTA.
2. **Hero** — headline, dual CTAs, decorative atom/orbit SVG, social-proof bullets.
3. **StatsBar** — quick metric strip.
4. **Features** — six capability tiles with icons.
5. **HowItWorks** — four-step describe → decompose → apply/review/merge → ship flow.
6. **Personas** — tabbed role-targeted value props.
7. **SocialProof** — logos and short testimonials.
8. **FAQ** — native `<details>` disclosure, fully accessible, no client JS.
9. **FinalCTA** — gradient panel closing call-to-action.
10. **Footer** — brand mark, secondary nav, copyright.

## Prerequisites

- **Node.js** ≥ 20.x (Node 20 LTS or newer recommended)
- **npm** ≥ 10.x (or pnpm / yarn — commands below use npm)
- A **Vercel** account (only required for deployment)

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

   **Verify:** completes without errors and creates `node_modules/` plus `package-lock.json`.

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

   Boots the optimized build on <http://localhost:3000>.

## Deploy to Vercel

This repo is a standard Next.js (App Router) project. Vercel auto-detects Next.js and uses these defaults:

| Setting        | Value           |
| -------------- | --------------- |
| Build command  | `next build`    |
| Output         | `.next`         |
| Install        | `npm install`   |
| Dev command    | `next dev`      |
| Node version   | 20.x (auto)     |

### Option A — Vercel CLI (fastest)