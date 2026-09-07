// helix: components/CTA.tsx
/**
 * @helix:story USER-567000
 *
 * CTA — root-level re-export of the canonical final-call-to-action
 * implementation so `@/components/CTA` resolves to the same component
 * consumed by `app/page.tsx`.
 *
 * Single source of truth: `components/landing/final-cta/FinalCTA`.
 */
export { CTA } from "@/components/landing/final-cta/FinalCTA";
export { default } from "@/components/landing/final-cta/FinalCTA";