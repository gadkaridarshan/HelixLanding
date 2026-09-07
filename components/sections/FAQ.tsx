// helix: components/sections/Faq.tsx
/**
 * @helix:story USER-607000
 *
 * Faq — re-export shim so `@/components/sections/Faq` resolves to
 * the canonical implementation. The named export is `FAQ`.
 */
export { FAQ as Faq, FAQ } from "@/components/Faq";
export { default } from "@/components/Faq";