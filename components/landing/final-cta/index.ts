// helix: components/landing/final-cta/index.ts
/**
 * @helix:story USER-303000
 *
 * Re-export the canonical FinalCTA implementation so the
 * `components/landing/final-cta` alias resolves from both the
 * `app/` and root-level section trees.
 */
export { FinalCTA } from "@/components/landing/final-cta/FinalCTA";
export { default } from "@/components/landing/final-cta/FinalCTA";
export type { FinalCTAProps } from "@/components/landing/final-cta/FinalCTA";