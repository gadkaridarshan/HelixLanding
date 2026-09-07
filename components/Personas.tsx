// helix: components/Personas.tsx
/**
 * @helix:story USER-567000
 *
 * Personas — root-level re-export of the canonical implementation so
 * `@/components/Personas` resolves to the same component consumed by
 * `app/page.tsx` via `app/components/sections/Personas`.
 *
 * Single source of truth: `components/landing/personas/Personas`.
 */
export { Personas } from "@/components/landing/personas/Personas";
export { default } from "@/components/landing/personas/Personas";