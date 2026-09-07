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
 *     site", "production", or "deployment".
 *
 * Tailwind @theme tokens in `app/globals.css` mirror these so
 * utility classes (`text-gradient-brand`, `bg-brand-ink`, etc.)
 * resolve without an extra `tailwind.config.ts` block.
 */

export interface Brand {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  /** Canonical LIVE site URL for this product (deployed from this repo). */
  readonly url: string;
  /** External Helix deployment used as a visual / brand reference. NOT live. */
  readonly referenceUrl: string;
  readonly github: string;
  readonly twitter: string;
}

export const brand: Brand = {
  name: "Helix",
  tagline: "Atomic Work-Breakdown Orchestrator",
  description:
    "Helix is the AI coding orchestrator that decomposes every request into reviewable units, executes them in order, and verifies each one against your repo before producing a small, reviewable PR.",
  url: "https://helix-landing.vercel.app",
  referenceUrl: "https://helix-ai-orchestrator.vercel.app",
  github: "https://github.com/gadkaridarshan/Helix",
  twitter: "https://twitter.com/helix_ai",
};

export default brand;