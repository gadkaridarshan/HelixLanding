// helix: components/sections/Features.tsx
/**
 * @helix:story USER-507000
 *
 * Features — section-level re-export shim so `@/components/sections/Features`
 * resolves to the canonical implementation at `@/components/sections/features`
 * without producing a circular import alias.
 *
 * This file uses a relative-path import (not the `@/components/sections/Features`
 * alias) so the TypeScript module resolver does not bind the local `Features`
 * export back to itself.
 */
export { Features, default } from "./features";