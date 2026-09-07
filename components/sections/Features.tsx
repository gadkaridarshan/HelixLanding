// helix: components/sections/Features.tsx
/**
 * @helix:story USER-507000
 *
 * Features — section-level re-export shim so
 * `@/components/sections/Features` resolves to the section barrel at
 * `@/components/sections/features`, which in turn resolves to the
 * canonical implementation at `@/components/Features`.
 */
export {
  Features,
  default,
} from "@/components/sections/features";