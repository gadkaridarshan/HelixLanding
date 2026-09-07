/**
 * @helix:story USER-63000
 *
 * FinalCTA — section-level re-export shim so `@/components/sections/FinalCTA`
 * resolves to the canonical implementation at `@/components/sections/final-cta`
 * without producing a circular import alias.
 */
export { FinalCTA, default } from "./final-cta";
export type { FinalCTAProps } from "./final-cta";