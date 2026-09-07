// helix: components/landing/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Canonical Personas implementation. The `components/sections/Personas.tsx`
 * and `app/components/sections/Personas.tsx` shims both re-export from
 * here.
 */
import * as React from "react";

export { Personas } from "@/components/sections/Personas";
export { default } from "@/components/sections/Personas";
export type {
  PersonasProps,
  PersonaItem,
} from "@/components/sections/Personas";