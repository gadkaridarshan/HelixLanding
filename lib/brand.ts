// helix: lib/brand.ts
/**
 * @helix:story USER-969000
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
 *     site", "deployed", or otherwise conflated with `brand.url`.
 *
 *   • `githubUrl` is the source repository. It is a build-time
 *     reference, not a destination for end-user conversion flows.
 */

export const brand = {
  /** Product / company name. */
  name: "Helix",

  /** Short, headline-friendly tagline used in metadata + hero. */
  tagline: "Atomic work-breakdown for AI coding agents",

  /**
   * One-sentence product description. Used in:
   *   • `metadata.description`
   *   • Open Graph + Twitter card
   *   • Hero sub-headline
   *
   * Keep under ~160 chars for SEO meta-description best practice.
   */
  description:
    "Helix decomposes every prompt into atomic, reviewable units, executes them in order with explicit dependencies, and verifies each against the rest of your repo — producing small, reviewable PRs instead of one sprawling diff.",

  /**
   * Live site URL — the canonical production URL that Vercel will
   * deploy this workspace to. This is THE URL for "this product's
   * live site". Sections and metadata that need to point visitors at
   * "this site, deployed" read this value.
   */
  url: "https://helix-landing.vercel.app",

  /**
   * Visual / brand reference site only. Externally hosted. NOT
   * deployed from this repo. Anywhere this is rendered on the live
   * site it must be explicitly labelled as a "reference site" link.
   */
  referenceSiteUrl: "https://helix-ai-orchestrator.vercel.app",

  /** Source repository. */
  githubUrl: "https://github.com/gadkaridarshan/Helix",

  /** Social handle (no leading @). */
  twitterHandle: "@helix_ai",

  /** Locale for metadata / OG tags. */
  locale: "en_US",

  /** Primary accent color used for theme-color meta + brand mark. */
  accent: "#22d3ee",
} as const;

export type Brand = typeof brand;