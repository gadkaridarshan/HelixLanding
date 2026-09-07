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
 *     site", "production", "this site", or anything else that would
 *     suggest it is the live deployment of the workspace the visitor
 *     is browsing.
 */
export const brand = {
  name: "Helix",
  tagline: "Atomic work-breakdown for AI coding agents",
  description:
    "Helix turns every prompt into atomic, reviewable units — then executes, verifies, and ships them as small PRs your team can actually review.",
  url: "https://helix.dev",
  ogImage: "/og.svg",
  twitter: "@helixdev",
} as const;

export type Brand = typeof brand;