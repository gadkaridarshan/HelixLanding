// helix: components/Features.tsx
/**
 * @helix:story USER-615000
 *
 * Features — capability grid highlighting the four pillars of Helix:
 *   1. Atomic planning — every prompt decomposes into reviewable units.
 *   2. Parallelization gating — explicit dependencies, ordered output.
 *   3. Language-aware protected paths — surgical edits, never destructive.
 *   4. Quality bar — each unit verified against types, tests, and lint.
 *
 * Single source of truth: `components/landing/features/Features`.
 * Renders a scannable grid of feature cards so a visitor understands
 * why Helix matters within seconds of landing.
 *
 * This file is a thin re-export so `@/components/Features` resolves to
 * the same component consumed by `app/page.tsx` via
 * `app/components/sections/Features`.
 *
 * Acceptance scope for USER-615000:
 *   • Four-tile grid covering atomic planning, parallelization gating,
 *     language-aware protected paths, and quality bar.
 *   • Server-rendered, no client interactivity.
 */
export { Features } from "@/components/landing/features/Features";
export { default } from "@/components/landing/features/Features";