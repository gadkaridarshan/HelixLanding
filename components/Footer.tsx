// helix: components/Footer.tsx
/**
 * @helix:story USER-567000
 *
 * Footer — root-level re-export of the canonical implementation so
 * `@/components/Footer` resolves to the same site-chrome component
 * consumed by `app/page.tsx`.
 *
 * Single source of truth: `components/sections/Footer`.
 */
export { Footer } from "@/components/sections/Footer";
export { default } from "@/components/sections/Footer";