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
4. **Features** — six capability tiles with icons.
5. **HowItWorks** — three-step plan → execute → verify walkthrough.
6. **Personas** — solo founders, platform teams, OSS maintainers.
7. **FinalCTA** — gradient panel closing call-to-action.
8. **FAQ** — native `<details>` disclosure, fully accessible, no client JS.
9. **Footer** — brand mark, secondary nav, copyright.

## Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or pnpm / yarn — commands below use npm)
- A Vercel account (only required for deployment)

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

   Boots the optimized build on port 3000.

   **Verify:** `curl -I http://localhost:3000` returns `HTTP/1.1 200 OK` and the served HTML contains the wordmark "Helix".

## Deploy to Vercel

This repo is the **live site** for this workspace — distinct from the reference demo linked at the top. It works out-of-the-box on Vercel; the root `vercel.json` pins the framework (`nextjs`), build/install/dev/output commands, region (`iad1`), security headers, and long-lived caching for `/_next/static/*` and `/fonts/*`.

### Option A — Vercel CLI (recommended for this repo)

1. Install the CLI and authenticate:

   ```bash
   npm i -g vercel
   vercel login
   ```

2. From the repo root, deploy a preview:

   ```bash
   vercel
   ```

   **Verify:** the CLI prints a `Preview URL` line (e.g. `https://helix-landing-<hash>.vercel.app`). Open it — the hero, gradient background, and Final CTA all render without console errors.

3. Promote the preview to production:

   ```bash
   vercel --prod
   ```

   **Verify:** the CLI prints a `Production URL` line and exits 0.

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## Project layout

- `app/` — Next.js App Router entry (layout, pages, global styles).
- `components/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/` — Shared primitives (`Container`, `cn`).
- `content/` — Structured content (copy, FAQs, feature data).
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).
- `vercel.json` — Vercel project config (framework, build/output commands, region, security headers, caching).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values for local development.

| Variable                | Required | Purpose                                                                              |
| ----------------------- | -------- | ------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_BRAND_URL` | No       | Canonical production URL embedded in metadata + footer. Defaults to the reference.   |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle.

## License

See repository metadata.