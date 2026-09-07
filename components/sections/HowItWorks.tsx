// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-507000
 *
 * HowItWorks — section-level re-export shim so
 * `@/components/sections/HowItWorks` resolves to the canonical
 * implementation at `@/components/sections/how-it-works` without
 * producing a circular import alias.
 *
 * This file uses a relative-path import (not the
 * `@/components/sections/HowItWorks` alias) so the TypeScript
 * module resolver does not bind the local `HowItWorks` export
 * back to itself.
 */
export { HowItWorks, default } from "./how-it-works/HowItWorks";