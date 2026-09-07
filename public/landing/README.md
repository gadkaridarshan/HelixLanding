<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> **Important — this repo is the live site for this workspace.** The canonical production URL for this product is configured in `lib/brand.ts` (`brand.url`) and can be overridden via `NEXT_PUBLIC_BRAND_URL`. The URL below is **only** a visual / brand reference and is **not** deployed from this repository.
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
4. **Features** — capability tiles with icons.
5. **HowItWorks** — step-by-step plan → execute → verify walkthrough.
6. **Personas** — solo founders, platform teams, OSS maintainers, and more.
7. **FAQ** — native `<details>` disclosure, fully accessible, no client JS.
8. **FinalCTA** — gradient panel closing call-to-action.
9. **Footer** — brand mark, Product / Resources / Company / Legal columns, social links, copyright.

## Prerequisites

- **Node.js** ≥ 20.x  *(Next.js 16 requires Node 20.9 or newer)*
- **npm** ≥ 10.x  *(or pnpm / yarn — commands below use npm)*
- A **Vercel** account  *(only required for deployment)*
- Git  *(only required if you deploy via the Git integration)*

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

   **Verify:** ends with `✓ Compiled successfully` and a route table that includes `○ /`, `○ /sitemap.xml`, `○ /robots.txt`, and `○ /og.svg`. No `Module not found` or unresolved import warnings.

6. **Run the production build locally**

   ```bash
   npm run start
   ```

   **Verify:** the page is served on <http://localhost:3000> and behaves identically to the dev server, but without React's dev overlays.

## Environment variables

Copy the example file and override the brand URL if you have your own domain:

```bash
cp .env.example .env.local
```

| Variable                   | Purpose                                                            | Default                                     |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| `NEXT_PUBLIC_BRAND_URL`    | Canonical production URL used by metadata, OG cards, and footer.   | `https://helix-ai-orchestrator.vercel.app`  |

Any variable prefixed with `NEXT_PUBLIC_` is exposed to the browser bundle; keep secrets out of it.

## Deploy to Vercel

This repo is a standard Next.js (App Router) project and is the **live site** for this workspace — distinct from the reference demo linked at the top. `vercel.json` is already configured with `"framework": "nextjs"`, security headers, and long-lived cache headers for `/fonts/*`. Two options:

### Option A — Vercel CLI (recommended for this repo)

```bash
npm i -g vercel
vercel login
vercel        # preview deployment to a *.vercel.app URL
vercel --prod # production deployment
```

**Verify:** the CLI prints `✓ Production: https://<your-project>.vercel.app [copied to clipboard]` and the deployed URL returns HTTP 200 with the hero rendered.

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

**Verify:** the Vercel dashboard shows a green ✓ on the latest deployment, and the assigned domain loads the landing page end-to-end.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Project layout

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `fonts.ts`, `globals.css`).
- `app/components/sections/**` — Re-export shims so `@/app/components/sections/*` resolves to the canonical implementations under `components/`.
- `components/landing/**` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/**` — Section-level re-export shims (one per section) so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/**` — Shared primitives (`Button`, `Container`, `SectionHeading`, `cn`).
- `content/` — Structured copy (features, personas, FAQ, how-it-works) loaded by the sections.
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`, `lib/theme.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).
- `vercel.json` — Vercel framework + headers + rewrite configuration.

## Reference vs. live site — at a glance

| Label              | URL                                            | What it is                                                                 |
| ------------------ | ---------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site** | <https://helix-ai-orchestrator.vercel.app>     | External visual / brand reference only. **Not** deployed from this repo.   |
| **Live site**      | `brand.url` (see `lib/brand.ts`)               | This repo, deployed to its own domain once configured in `lib/brand.ts`.  |

## Troubleshooting

- **`Module not found: Can't resolve '@/components/...'`** — make sure `tsconfig.json` includes the `@/*` path alias (`"./*"`). It is configured by default in this repo.
- **OG image is missing on social shares** — confirm `/public/og.svg` exists and `lib/brand.ts` `brand.url` matches your deployed domain.
- **Fonts look unstyled** — `next/font/google` requires network access during the first build; in air-gapped environments, pre-cache or self-host the font files.

## License

See repository metadata.