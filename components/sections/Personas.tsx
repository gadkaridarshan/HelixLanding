// helix: components/sections/Personas.tsx
/**
 * @helix:story USER-495000
 *
 * Personas — re-export shim so `@/components/sections/Personas`
 * resolves to the canonical implementation in
 * `@/components/sections/personas/Personas`.
 *
 * The canonical section now lives at
 * `components/sections/personas/Personas.tsx` and is composed of
 * the `PersonasTabs` client island + the `PersonaCard` UI primitive.
 */
export { Personas } from "@/components/sections/personas/Personas";
export { default } from "@/components/sections/personas/Personas";