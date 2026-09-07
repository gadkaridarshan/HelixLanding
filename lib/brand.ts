// helix: lib/brand.ts
/**
 * @helix:story USER-303000
 *
 * Brand constants — single source of truth for naming, tagline,
 * description, and canonical URLs used across the landing surface
 * (metadata, layout, sections, social proof).
 *
 * NOTE on `url`: this is the canonical landing site URL that Vercel
 * will deploy to for THIS workspace's product. It is intentionally
 * distinct from any reference / upstream Helix demo URL. Update this
 * once the production deployment domain is known; for local + preview
 * builds, Vercel derives the absolute URL from the request host.
 *
 * Tailwind @theme tokens in `app/globals.css` mirror these so
 * utility classes (`text-gradient-brand`, `bg-brand-ink`, etc.)
 * resolve without an extra `tailwind.config.ts` block.
 */

export interface Brand {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly github: string;
  readonly twitter: string;
}

export const brand: Brand = {
  name: "Helix",
  tagline: "Atomic Work-Breakdown Orchestrator",
  description:
    "Helix is the AI coding orchestrator that decomposes every request into reviewable units, executes them in order, and ships atomic PRs — so autonomous agents stay coherent on real codebases.",
  url: "https://helix-landing.vercel.app",
  github: "https://github.com/gadkaridarshan/Helix",
  twitter: "https://twitter.com/helix",
} as const;