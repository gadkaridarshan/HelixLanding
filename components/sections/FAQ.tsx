/**
 * @helix:story USER-63000
 *
 * FAQ — section-level re-export shim so `@/components/sections/FAQ`
 * resolves to the canonical implementation at `@/components/Faq`.
 */
export { FAQ, default } from "@/components/Faq";
export type { FAQProps } from "@/components/Faq";