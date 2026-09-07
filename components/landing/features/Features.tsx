// helix: components/landing/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Canonical Features implementation. The `components/sections/Features.tsx`
 * and `app/components/sections/Features.tsx` shims both re-export from
 * here.
 */
import * as React from "react";

export { Features } from "@/components/sections/Features";
export { default } from "@/components/sections/Features";
export type {
  FeaturesProps,
  FeatureItem,
} from "@/components/sections/Features";