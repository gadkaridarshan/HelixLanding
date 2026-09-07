// helix: app/components/layout/Footer.tsx
/**
 * @helix:story USER-956000
 *
 * Re-export the canonical Footer implementation from
 * `components/landing/footer/Footer` so both
 * `@/app/components/layout/Footer` and
 * `@/components/layout/Footer` resolve to the same component.
 */
export { Footer } from "@/components/landing/footer/Footer";
export { default } from "@/components/landing/footer/Footer";