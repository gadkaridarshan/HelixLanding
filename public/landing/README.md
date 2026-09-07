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

This repo ships a top-level `vercel.json` declaring `framework: "nextjs"`,
so a fresh `vercel --prod` works out-of-the-box with no extra config.

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel          # one-time, requires Vercel CLI ≥ 34.x
vercel login             # one-time
vercel link --yes        # one-time: creates .vercel/
vercel --prod            # production deployment
```

`vercel --prod` will:

1. Upload the repo to Vercel.
2. Read `vercel.json` → `framework: "nextjs"` → auto-detect build/install commands.
3. Run `npm install && npm run build` and produce `.next/`.
4. Apply the security headers from `vercel.json`
   (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
   `Permissions-Policy`) and the long-lived cache headers for
   `/og.svg`, `/favicon.svg`, `/favicon.ico`.
5. Promote the deployment to production.

### Option B — Git integration

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel reads `vercel.json` and pre-fills the framework settings.
   Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent
   deploys are cached.

### Post-deploy verification

```bash
PROD_URL="https://helix-ai-orchestrator.vercel.app"
curl -sI "$PROD_URL/"             | head -n 1
curl -sI "$PROD_URL/og.svg"       | head -n 1
curl -sI "$PROD_URL/favicon.svg"  | head -n 1
```

The canonical production URL for **this** live site is defined in
`lib/brand.ts` (`brand.url`). It is **not** the reference URL listed
at the top of this README — that one points only to an external
visual reference and is not deployed from this repository.

## Project layout

- `app/` — Next.js App Router entry (layout, pages, global styles)
- `components/landing/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/sections/final-cta/` — Canonical FinalCTA band (USER-63000).
- `components/sections/footer/` — Canonical site footer (USER-63000).
- `components/ui/` — Shared primitives (`Container`, `Button`, `cn`).
- `content/` — Structured content (copy, FAQs, feature data)
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`)
- `public/` — Static assets (favicon, OG image, marketing imagery)
- `vercel.json` — Vercel project config (framework, headers, cache).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## License

See repository metadata.