// helix: components/landing/faq/index.ts
/**
 * @helix:story USER-303000
 *
 * Re-export the canonical FAQ implementation so the
 * `components/landing/faq` alias resolves from both the `app/` and
 * root-level section trees.
 */
export { FAQ } from "@/components/landing/faq/FAQ";
export { default } from "@/components/landing/faq/FAQ";
export type { FAQProps, FaqItem } from "@/components/landing/faq/FAQ";