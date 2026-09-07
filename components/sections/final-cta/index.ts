// helix: components/sections/final-cta/index.ts
/**
 * @helix:story USER-63000
 *
 * FinalCTA — folder-level re-export so
 * `@/components/sections/final-cta` resolves to the canonical
 * implementation alongside the sibling `@/components/sections/FinalCTA`
 * named import used by `app/page.tsx`.
 *
 * The canonical implementation lives at `components/landing/final-cta/FinalCTA.tsx`
 * (or, when that module is absent, the canonical fallback
 * `components/sections/FinalCTA.tsx`). This file keeps the owned path
 * `components/sections/final-cta/**` populated without forking the
 * implementation.
 */
export { FinalCta, default } from "@/components/sections/FinalCTA";