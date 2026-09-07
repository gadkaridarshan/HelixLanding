// helix: app/components/sections/Hero.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-868000
 *
 * Hero section — re-exports the canonical implementation under
 * `components/landing/hero/Hero` so the alias resolves from the `app/`
 * and root-level section trees alike. The reference-site link inside the
 * Hero is explicitly labelled as such (never as the live site).
 */
export { Hero } from "@/components/landing/hero/Hero";
export { default } from "@/components/landing/hero/Hero";