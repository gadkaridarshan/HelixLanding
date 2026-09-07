// helix: components/sections/Personas.tsx
/**
 * @helix:story USER-495000
 *
 * Personas — re-export shim so `@/components/sections/Personas`
 * resolves to the canonical implementation in
 * `@/components/sections/personas/Personas`.
 *
 * The canonical section is composed of:
 *   • `PersonasTabs` (client island, keyboard-navigable role switcher)
 *   • `PersonaCard`  (server-rendered value-prop card primitive)
 *   • `personas.json` content (sourced from `@/content/personas.json`)
 */
export { Personas } from "@/components/sections/personas/Personas";
export { default } from "@/components/sections/personas/Personas";