// helix: app/components/sections/FAQ.tsx
/**
 * @helix:story USER-956000
 *
 * Re-export the canonical FAQ implementation from
 * `components/landing/faq/FAQ` so both `@/app/components/sections/FAQ`
 * and `@/components/sections/FAQ` resolve to the same component.
 */
export { FAQ } from "@/components/landing/faq/FAQ";
export { default } from "@/components/landing/faq/FAQ";