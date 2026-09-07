// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-615000
 *
 * HowItWorks — 3–4 step walkthrough of the Helix atomic work-breakdown
 * flow: plan → execute → verify → review. Numbered cards make the
 * orchestration sequence scannable in seconds.
 *
 * Single source of truth: `components/landing/how-it-works/HowItWorks`.
 *
 * This file is a thin re-export so `@/components/HowItWorks` resolves
 * to the same component consumed by `app/page.tsx` via
 * `app/components/sections/HowItWorks`.
 *
 * Acceptance scope for USER-615000:
 *   • Numbered step cards for the Helix atomic work-breakdown flow.
 *   • Server-rendered, no client interactivity.
 *   • Renders standalone (independent of other sections).
 */
export { HowItWorks } from "@/components/landing/how-it-works/HowItWorks";
export { default } from "@/components/landing/how-it-works/HowItWorks";