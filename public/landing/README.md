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
4. **Features** — seven core capabilities as a card grid.
5. **HowItWorks** — 3-step orchestration flow (Describe → Decompose → Verify).
6. **Personas** — role-targeted value props (Solo Founders, Staff Engineers, Eng Managers, Tech Leads, AI Engineers).
7. **FAQ** — common objections, answered (native `<details>`, no client JS).
8. **FinalCTA** — last-mile conversion band with primary + secondary CTAs.
9. **Footer** — Product / Resources / Company / Legal link columns + social links.

## Stack

- **Next.js 16** (App Router, RSC) on **React 19**.
- **TypeScript** (strict).
- **Tailwind CSS v4** via `@tailwindcss/postcss`.
- `clsx` + `tailwind-merge` for class composition.
- `next/font/google` (Inter + JetBrains Mono) — no external font CDN.

## Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or pnpm / yarn — commands below use npm)
- A Vercel account (only required for deployment)

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000> — the landing page hot-reloads on save.

3. **Type-check the project**

   ```bash
   npm run type-check
   ```

   Should report `0 errors`.

4. **Production build**

   ```bash
   npm run build
   npm run start
   ```

   `npm run start` boots the optimized build on port 3000.

## Deploy to Vercel

This repo is a standard Next.js (App Router) project and is the **live site** for this workspace — distinct from the reference demo linked above. The included `vercel.json` pins the framework, build command, output directory, and security headers so a one-step deploy is reliable.

### Option A — Vercel CLI (recommended for this repo)

```bash
npm i -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

### Option B — Git integration

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js from `vercel.json`. The defaults match the project:
   - Framework: `nextjs`
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`). It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

### Environment variables

Copy `.env.example` to `.env.local` for local dev, and configure the same key on Vercel under **Project → Settings → Environment Variables**:

| Variable                  | Required | Purpose                                                                          |
| ------------------------- | -------- | -------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_URL`   | No       | Canonical production URL for metadata + OG cards. Defaults to the reference URL. |

## Project layout

- `app/` — Next.js App Router entry (layout, pages, global styles, fonts).
- `components/landing/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/` — Shared primitives (`Button`, `Container`, `SectionHeading`, `FeatureCard`, `cn`).
- `content/` — Structured content (copy, FAQs, feature data, personas).
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery, `site.webmanifest`).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## License

See repository metadata.