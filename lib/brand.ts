// helix: lib/brand.ts
/**
 * @helix:story USER-349000
 *
 * Brand constants — single source of truth for naming, tagline,
 * description, and canonical URLs used across the landing surface
 * (metadata, layout, sections, social proof).
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
    "Helix is the AI coding orchestrator that decomposes every request into reviewable units, executes them in order, and pauses for review at every boundary.",
  url: "https://helix-ai-orchestrator.vercel.app",
  github: "https://github.com/gadkaridarshan/Helix",
  twitter: "@helix_ai",
};

export default brand;