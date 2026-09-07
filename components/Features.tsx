// helix: components/Features.tsx
/**
 * @helix:story USER-954000
 *
 * Features — root-level re-export of the canonical implementation so
 * `@/components/Features` resolves to the same component consumed by
 * `app/page.tsx` via `app/components/sections/Features`.
 *
 * Single source of truth: `components/landing/features/Features`.
 * Renders a six-tile capability grid that makes Helix's value prop
 * immediately scannable above the fold of the capabilities section.
 */
export { Features } from "@/components/landing/features/Features";
export { default } from "@/components/landing/features/Features";