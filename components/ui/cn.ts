// helix: components/ui/cn.ts
/**
 * @helix:story USER-616000
 *
 * `cn` — a tiny class-name joiner that combines `clsx` and
 * `tailwind-merge` so conditional Tailwind utilities compose
 * correctly (e.g. `cn("p-2", isActive && "p-6")` keeps `p-6`).
 *
 * Pure function, no runtime cost beyond the two underlying libs.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;