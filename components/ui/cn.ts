// helix: components/ui/cn.ts
/**
 * @helix:story USER-604000
 *
 * cn — tiny class-name joiner built on `clsx` + `tailwind-merge`.
 *
 * `clsx` handles conditional joining; `tailwind-merge` reconciles
 * conflicting Tailwind utilities so the last-wins class wins.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;