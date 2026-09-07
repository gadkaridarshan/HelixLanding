// helix: components/sections/footer/index.ts
/**
 * @helix:story USER-63000
 *
 * Footer — folder-level re-export so
 * `@/components/sections/footer` resolves to the canonical
 * implementation alongside the sibling `@/components/sections/Footer`
 * named import used by `app/page.tsx`.
 *
 * The canonical implementation lives at `components/Footer.tsx`,
 * with `components/sections/Footer.tsx` acting as a named re-export
 * shim. This file keeps the owned path `components/sections/footer/**`
 * populated without forking the implementation.
 */
export { Footer, default } from "@/components/sections/Footer";