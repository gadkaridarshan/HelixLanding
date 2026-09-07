// helix: components/ui/cn.ts
/**
 * @helix:story USER-445000
 *
 * cn — className concatenation helper. Combines `clsx` (for
 * conditional + array/object classnames) with `tailwind-merge`
 * (to dedupe conflicting Tailwind utilities so the last one wins,
 * e.g. `cn("px-2", "px-4")` → `"px-4"`).
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;