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

> **About the live site vs. the reference site**
>
> - **Live site (this product):** the production landing page deployed from this repository. Its canonical URL lives in `lib/brand.ts` under `brand.url` and is the URL Vercel assigns to this workspace's deployment. It is **not** `helix-ai-orchestrator.vercel.app`.
> - **Reference site:** `https://helix-ai-orchestrator.vercel.app` — an external Helix deployment used here purely as a visual / brand reference. It is **not** the live landing page for this product, it is not deployed from this repo, and it is not where visitors to *this* site will land.
>
> If a visitor follows a link labelled "reference site", they should understand they are leaving *this* product's site to view a separate, externally hosted example.

## Sections shipped

1. **Navbar** — sticky brand mark + section anchors + early-access CTA.
2. **Hero** — headline, dual CTAs, decorative atom/orbit SVG, social-proof bullets.
3. **StatsBar** — quick metric strip.
4. **Features** — capability grid.
5. **HowItWorks** — 3-step orchestration walkthrough.
6. **Personas** — who Helix is for.
7. **FinalCTA** — closing call-to-action.
8. **FAQ** — common questions.
9. **Footer** — site chrome, links, and the clearly-labelled reference-site pointer.

## Stack

- Next.js (App Router) + React + TypeScript.
- Tailwind CSS v4 with brand tokens in `app/globals.css` (`@theme` block).
- Zero runtime icon dependencies — small inline SVG only.
- Brand constants centralised in `lib/brand.ts` (`name`, `tagline`, `description`, `url`, `github`, `twitter`).

## Project layout

The marketing site is composed of self-contained landing sections, each with its own copy/data file under `content/` and a component under `app/components/sections/` (re-exported from `components/sections/` for alias parity).

### Live site vs. reference site — links on this page

Every outbound link to `helix-ai-orchestrator.vercel.app` on this site is explicitly labelled as a **reference site** link. None of these links are the live Helix site:

- **Live site (this product):** the canonical production URL in `lib/brand.ts` → `brand.url`. This is the URL Vercel assigns to this workspace's deployment and is the only true "live site" for this product.
- **Reference site:** `https://helix-ai-orchestrator.vercel.app` — used purely for visual / brand reference. It is **not** the live landing page for this product, it is **not** deployed from this repo, and visitors should not assume it is where they currently are.

### Section ↔ data wiring

| Section        | Component                                | Copy / data source          |
| -------------- | ---------------------------------------- | --------------------------- |
| Navbar         | `app/components/sections/Navbar.tsx`     | inline                      |
| Hero           | `app/components/sections/Hero.tsx`       | `content/hero.json`         |
| StatsBar       | `app/components/sections/StatsBar.tsx`   | `content/social-proof.json` |
| Features       | `app/components/sections/Features.tsx`   | `content/features.json`     |
| HowItWorks     | `app/components/sections/HowItWorks.tsx` | `content/how-it-works.json` |
| Personas       | `app/components/sections/Personas.tsx`   | `content/personas.json`     |
| FinalCTA       | `app/components/sections/FinalCTA.tsx`   | `content/cta.json`          |
| FAQ            | `app/components/sections/FAQ.tsx`        | `content/faq.json`          |
| Footer         | `app/components/sections/Footer.tsx`     | inline + reference-site note |

### Reference-site pointer

The Footer contains an inline note that clarifies any external Helix link is to the **reference site**, not the live site. See `app/components/sections/Footer.tsx`.

## Notes for contributors

- **Do not** relabel `helix-ai-orchestrator.vercel.app` as the "live site" in copy, comments, or docs — it is the reference site only.
- The actual live site URL is owned by `lib/brand.ts` (`brand.url`) and surfaces through `app/layout.tsx` metadata.
- If you add a new outbound link to `helix-ai-orchestrator.vercel.app`, label it as a reference-site link with an inline clarifying note.