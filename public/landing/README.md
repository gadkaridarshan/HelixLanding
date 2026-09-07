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

1. **Navbar** — sticky brand mark, section anchors, and an early-access CTA.
2. **Hero** — headline, dual CTAs (live site + GitHub), decorative atom/orbit SVG, social-proof bullets.
3. **StatsBar** — quick metric strip (atoms, verified PRs, supported stacks).
4. **Features** — capability grid highlighting atomic planning, parallelization gating, language-aware protected paths, and quality bar.
5. **HowItWorks** — three-step plan → execute → verify walkthrough.
6. **Personas** — role-targeted value props for Developer, Tech Lead, AI Engineer, Product Manager, and Founder via a tabbed UI.
7. **SocialProof** — testimonial/logo strip reinforcing credibility.
8. **FAQ** — native `<details>` disclosure, fully accessible, no client JS.
9. **Cta** (Final CTA) — gradient panel closing call-to-action.
10. **Footer** — brand wordmark, navigation links, legal links, social links, and a "deployed on Vercel" badge.

## Prerequisites

- **Node.js** ≥ 20.x (App Router minimum).
- **npm** ≥ 10.x. `pnpm` and `yarn` also work; the commands below assume `npm`.
- A **Vercel** account — only required for deployment, not for local development.

## Quick start

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

   Boots the optimized build on port 3000. The page should render identically to the dev server.

## Deploy to Vercel

This repo is a standard Next.js (App Router) project and is the **live site** for this workspace — distinct from the reference demo linked above. It works out-of-the-box on Vercel.

### Option A — Vercel CLI (recommended for first deploy)

```bash
npm i -g vercel
vercel login
vercel        # preview deployment to a per-PR URL
vercel --prod # production deployment
```

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Environment variables

| Variable                 | Purpose                                                                    |
| ------------------------ | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_URL`  | Canonical production URL for `<title>`, OG cards, footer hostname.         |

## Project layout

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`, `fonts.ts`).
- `components/landing/` — **Single source of truth** for every section (Navbar, Hero, StatsBar, Features, HowItWorks, Personas, SocialProof, FAQ, Cta, Footer).
- `components/sections/` and `app/components/sections/` — Thin re-export shims so either alias resolves to the same component tree.
- `components/ui/` — Shared primitives (`Container`, `cn`).
- `content/` — Structured content (feature copy, FAQ entries, personas, etc.).
- `lib/` — Brand identity (`lib/brand.ts`) and design tokens (`lib/theme.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## Troubleshooting

- **`Module not found: Can't resolve '@/...'`** — the `@/*` path alias is defined in `tsconfig.json` (`baseUrl: "."`, `paths: { "@/*": ["./*"] }`). Re-run `npm install` if a fresh clone.
- **Build fails on Tailwind classes** — this repo uses Tailwind v4 with the `@tailwindcss/postcss` plugin; ensure `postcss.config.mjs` and `app/globals.css` `@theme` block are intact.
- **Fonts missing (FOIT / 404 on `next/font/google`)** — only happens in offline builds. Run `npm run build` with network access; `next/font` fetches at build time.
- **Vercel build reports `Cannot find module 'next'`** — Vercel uses `installCommand: npm install` (see `vercel.json`). The `package.json` already pins `next@^16.3.4`.

## License

See repository metadata.