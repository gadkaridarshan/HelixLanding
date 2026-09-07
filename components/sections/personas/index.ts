// helix: components/sections/personas/index.ts
/**
 * @helix:story USER-495000
 *
 * Barrel export for the Personas section. Resolves to the canonical
 * implementation in `@/components/sections/personas/Personas` and
 * re-exports the interactive tab island for direct use when needed.
 */
export { Personas, default } from "@/components/sections/personas/Personas";
export { PersonasTabs } from "@/components/sections/personas/PersonasTabs";