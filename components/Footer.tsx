// helix: components/Footer.tsx
/**
 * @helix:story USER-567000
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-633000
 * @helix:story USER-641000
 * @helix:story USER-868000
 *
 * Footer — root-level re-export of the canonical implementation so
 * `@/components/Footer` resolves to the same component consumed by
 * `app/page.tsx` via `app/components/sections/Footer`.
 *
 * Single source of truth: `components/landing/footer/Footer`.
 */
export { Footer } from "@/components/landing/footer/Footer";
export { default } from "@/components/landing/footer/Footer";