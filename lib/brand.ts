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
 *     site", "our site", "the Helix app", or anything that would
 *     conflate the two.
 */

export interface Brand {
  /** Short product name. */
  name: string;
  /** Brand mark (single character / glyph) used in the navbar logo. */
  mark: string;
  /** One-line value proposition shown in metadata + hero. */
  tagline: string;
  /** Longer description for SEO + social cards. */
  description: string;
  /** Canonical live URL of this product (what Vercel deploys). */
  url: string;
  /** Visual / brand reference URL — labelled as "reference site" only. */
  referenceUrl: string;
  /** Source repository. */
  repoUrl: string;
  /** Primary support / contact email (placeholder). */
  email: string;
  /** OG image path under `public/`. */
  ogImage: string;
  /** Twitter handle. */
  twitter: string;
}

export const brand: Brand = {
  name: "Helix",
  mark: "H",
  tagline: "Atomic work-breakdown for AI coding agents",
  description:
    "Helix decomposes every prompt into atomic, reviewable units, executes them in order with explicit dependencies, and verifies each unit against your repo — producing small, reviewable PRs instead of one sprawling diff.",
  url: "https://helix-landing.vercel.app",
  referenceUrl: "https://helix-ai-orchestrator.vercel.app",
  repoUrl: "https://github.com/gadkaridarshan/Helix",
  email: "hello@helix.dev",
  ogImage: "/og.svg",
  twitter: "@helix_dev",
};