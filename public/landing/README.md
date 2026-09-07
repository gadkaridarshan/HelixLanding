<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> **Important — the live landing page is a different site.** The canonical production URL for this product is configured in `lib/brand.ts` (`brand.url`). The URL below is **only** a visual / brand reference and is **not** deployed from this repository.
>
> 🔗 **Reference site** (visual / brand reference only — **not** this product's live site):
> <https://helix-ai-orchestrator.vercel.app>
>
> 🔗 **Live landing page** for this product (deployed from this repo):
> <https://helix.dev>
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
4. **Features** — six-up capability grid with custom SVG icons.
5. **HowItWorks** — numbered four-step walkthrough.
6. **Personas** — three-up "who is this for" cards with quotes + benefits.
7. **FAQ** — accessible `details`/`summary` accordion.
8. **FinalCTA** — closing conversion panel with email capture.
9. **Footer** — link columns, brand mark, and a clearly-labelled reference-site pointer.

## URL policy (load-bearing)

- `brand.url` (in `lib/brand.ts`) is the **live** landing page for this product.
- `https://helix-ai-orchestrator.vercel.app` is an externally-hosted Helix
  deployment used purely as a visual / brand reference. It is **not**
  the live landing page for this product and is **not** deployed from
  this repo.
- Every place that surfaces the reference URL (Hero, Footer, README)
  labels it as a **reference site**. It is never labelled as "live
  site", "production", or "this site".