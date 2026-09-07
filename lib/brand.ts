// helix: lib/brand.ts
/**
 * @helix:story USER-303000
 * @helix:story USER-440000
 *
 * Brand constants — single source of truth for naming, tagline,
 * description, and canonical URLs used across the landing surface
 * (metadata, layout, sections, social proof).
 *
 * URL policy — read carefully, this is the load-bearing bit:
 *
 *   • `url`  is the **LIVE SITE** for this product — the canonical
 *     production URL that Vercel will deploy this workspace to. Every
 *     piece of UI that wants to point visitors at "this site, deployed"
 *     reads `brand.url`.
 *
 *   • The URL `https://helix-ai-orchestrator.vercel.app` is **NOT** the
 *     live site for this product. It is an externally-hosted Helix
 *     deployment used purely as a visual / brand reference. It is not
 *     deployed from this repo and visitors should never be led to
 *     believe that following a link to it would take them back to the
 *     site they are currently viewing.
 *
 *     Anywhere that URL is rendered on this product's live site it
 *     **must** be labelled as a "reference site" link (see the Footer
 *     for the canonical pattern). It must never be labelled as "live
 *     site", "deployed site", or any equivalent phrase.
 */

export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  description:
    "Helix is the atomic work-breakdown orchestrator for AI coding agents. Decompose every prompt into reviewable steps, execute them in order with explicit dependencies, and ship small, verifiable PRs instead of one sprawling diff.",
  url: "https://helix.dev",
  twitter: "@helixdev",
  ogImage: "/og.svg",
} as const;

export type Brand = typeof brand;