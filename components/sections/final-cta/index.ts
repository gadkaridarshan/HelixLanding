// helix: components/sections/final-cta/index.ts
/**
 * @helix:story USER-63000
 *
 * Barrel export for the FinalCTA section. Re-exports the canonical
 * component so callers can write:
 *
 *     import { FinalCTA } from "@/components/sections/final-cta";
 *
 * without leaking the internal file layout.
 */
export { FinalCTA, default } from "./FinalCTA";
export type { FinalCTAProps } from "./FinalCTA";