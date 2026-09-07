// helix: components/sections/final-cta/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — section-level re-export shim so
 * `@/components/sections/final-cta/FinalCTA` resolves to the canonical
 * implementation at `@/components/FinalCTA` without producing a
 * circular import alias.
 */
export { FinalCTA, default } from "@/components/FinalCTA";
export type { FinalCTAProps } from "@/components/FinalCTA";