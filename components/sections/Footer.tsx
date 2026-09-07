// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — section-level re-export shim so `@/components/sections/Footer`
 * resolves to the canonical implementation at `@/components/sections/footer`
 * without producing a circular import alias.
 *
 * This file uses a relative-path import (not the
 * `@/components/sections/Footer` alias) so the TypeScript module
 * resolver does not bind the local `Footer` export back to itself.
 */
export { Footer, default } from "./footer";