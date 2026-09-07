// helix: components/FAQ.tsx
/**
 * @helix:story USER-567000
 *
 * FAQ — root-level re-export of the canonical implementation so
 * `@/components/FAQ` resolves to the same accordion consumed by
 * `app/page.tsx` via `app/components/sections/FAQ`.
 *
 * Single source of truth: `components/landing/faq/FAQ`.
 */
export { FAQ } from "@/components/landing/faq/FAQ";
export { default } from "@/components/landing/faq/FAQ";