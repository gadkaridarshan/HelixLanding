## What was built

This board shipped a complete, Vercel-deployable marketing surface for
Helix across the following deliverables:

- **Project scaffold & global theme** — Next.js 14 App Router + TypeScript
  + Tailwind v4, Inter / JetBrains Mono via `next/font`, brand tokens
  (ink / brand / accent / aurora palettes, radii, typography, spacing)
  in `lib/brand.ts` and `@theme` in `app/globals.css`, polished
  gradient + grid + noise background system, and a shared layout shell.
- **Section composition root** — `app/page.tsx` orders every section
  in a deliberate narrative flow: Navbar → Hero → StatsBar → Features
  → HowItWorks → Personas → FAQ → FinalCTA → Footer.
- **Above-the-fold sections** — Hero (gradient headline, dual CTAs,
  decorative atom/orbit SVG, social-proof bullets), StatsBar (quick
  metric strip), and the section composition shell.
- **Capability sections** — Features (six tiles with icons) and
  HowItWorks (three numbered steps: plan → execute → verify).
- **Audience & social proof** — Personas covering solo founders,
  platform teams, OSS maintainers, product managers, and enterprise
  builders, with tailored value props and CTAs.
- **Conversion & footer** — FinalCTA gradient panel, accessible FAQ
  accordion (native `<details>`, no client JS), and Footer with brand
  mark, link columns, GitHub CTA, and an explicitly-labeled
  reference-site pointer.
- **Dual-tree section re-exports** — every section ships as a single
  canonical implementation under `components/landing/**` with thin
  re-export shims under `components/sections/` and
  `app/components/sections/`, so both path trees resolve to the same
  component.
- **Vercel-ready deployment** — `vercel.json`, `.vercelignore`, and a
  clean `.gitignore` configured so the site deploys out-of-the-box via
  the Vercel CLI or Git integration.
- **Reference vs. live site copy** — every surface that links to the
  external Vercel demo labels it as a **reference site** (visual /
  brand reference only), distinct from the live landing site defined
  by `brand.url` in `lib/brand.ts`. Visible text, badges, and
  accessible names all make this distinction explicit.

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## Deploy to Vercel

This repo is a standard Next.js (App Router) project and works
out-of-the-box on Vercel.

### Option A — Vercel CLI (recommended)