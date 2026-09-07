/**
 * @helix:story USER-604000
 *
 * Faq — re-export shim so `@/app/components/sections/Faq` resolves
 * to the canonical implementation.
 */
export { FAQ as Faq, FAQ } from "@/components/Faq";
export { FAQ as default } from "@/components/Faq";