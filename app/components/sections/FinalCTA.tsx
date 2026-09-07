// helix: app/components/sections/FinalCTA.tsx
/**
 * @helix:story USER-956000
 *
 * Re-export the canonical FinalCTA implementation from
 * `components/landing/cta/FinalCTA` so both
 * `@/app/components/sections/FinalCTA` and
 * `@/components/sections/FinalCTA` resolve to the same component.
 */
export { FinalCTA } from "@/components/landing/cta/FinalCTA";
export { default } from "@/components/landing/cta/FinalCTA";