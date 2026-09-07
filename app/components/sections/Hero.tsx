// helix: app/components/sections/Hero.tsx
/**
 * @helix:story USER-993000
 *
 * Re-export the canonical Hero implementation from
 * `components/landing/hero/Hero` so both `@/app/components/sections/Hero`
 * and `@/components/sections/Hero` resolve to the same component.
 */
export { Hero, default } from "@/components/landing/hero/Hero";