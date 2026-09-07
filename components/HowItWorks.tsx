// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-954000
 *
 * HowItWorks — root-level re-export of the canonical implementation so
 * `@/components/HowItWorks` resolves to the same component consumed by
 * `app/page.tsx` via `app/components/sections/HowItWorks`.
 *
 * Single source of truth: `components/landing/how-it-works/HowItWorks`.
 * Renders the three numbered steps (plan → execute → verify) that walk
 * a visitor through the atomic work-breakdown flow in seconds.
 */
export { HowItWorks } from "@/components/landing/how-it-works/HowItWorks";
export { default } from "@/components/landing/how-it-works/HowItWorks";