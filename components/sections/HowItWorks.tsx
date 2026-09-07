// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-507000
 *
 * HowItWorks — section-level re-export shim so
 * `@/components/sections/HowItWorks` resolves to the section barrel at
 * `@/components/sections/how-it-works`, which in turn resolves to the
 * canonical implementation at `@/components/HowItWorks`.
 */
export {
  HowItWorks,
  default,
} from "@/components/sections/how-it-works";