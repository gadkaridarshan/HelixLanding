// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — alternate re-export shim. Some callers reference the
 * section as "FinalCTA" rather than "Cta"; both resolve to the
 * canonical implementation in `components/Cta.tsx`.
 */
export { Cta as FinalCTA } from "@/components/Cta";
export { default } from "@/components/Cta";