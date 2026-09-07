// helix: components/landing/index.ts
/**
 * @helix:story USER-986000
 *
 * Composition root for the `components/landing` landing-page tree.
 * Every section module re-exports its default export here so callers can
 * import from a single, stable surface (`@/components/landing`).
 */
export * from "@/components/landing/hero";
export * from "@/components/landing/how-it-works";
export * from "@/components/landing/features";
export * from "@/components/landing/personas";
export * from "@/components/landing/social-proof";
export * from "@/components/landing/stats-bar";
export * from "@/components/landing/faq";
export * from "@/components/landing/final-cta";