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
4. **Features** — capability grid (atomic work-breakdown, verification, PRs).
5. **HowItWorks** — 3-step orchestration walkthrough.
6. **Personas** — who Helix is for.
7. **FinalCTA** — closing call-to-action.
8. **FAQ** — common questions.
9. **Footer** — site chrome with explicit reference-site labelling.

## Live site vs. reference site

There are **two** distinct URLs and they refer to **different** sites:

- **Live site (this product):** the value of `brand.url` in [`lib/brand.ts`](./lib/brand.ts). This is the canonical production URL for this workspace's deployment and is the only true "live site" for this product.
- **Reference site:** [Reference site (visual / brand reference only): helix-ai-orchestrator.vercel.app](https://helix-ai-orchestrator.vercel.app) — used purely as a visual / brand reference. It is **not** the live landing page for this product, it is **not** deployed from this repo, and visitors should not assume following that link takes them to the site they are currently viewing.

Any link rendered on the live site that points at the reference URL **must** be labelled as a reference-site link (see the [Footer](./components/sections/Footer.tsx) for the canonical pattern). Do not label it as "live site", "production", or "deployment" — that misleads visitors.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS for styling
- Fully static, no backend services

## License

MIT — see [LICENSE](./LICENSE).