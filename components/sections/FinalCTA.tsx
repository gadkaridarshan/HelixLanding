// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — section-level re-export shim so `@/components/sections/FinalCTA`
 * resolves to the canonical implementation at `@/components/sections/final-cta`
 * without producing a circular import alias.
 *
 * This file uses a relative-path import (not the
 * `@/components/sections/FinalCTA` alias) so the TypeScript module
 * resolver does not bind the local `FinalCTA` export back to itself.
 */
export { FinalCTA, default } from "./final-cta";