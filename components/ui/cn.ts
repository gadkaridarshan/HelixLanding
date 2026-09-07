// helix: components/ui/cn.ts
/**
 * @helix:story USER-507000
 *
 * cn — tiny class-name composition helper built on `clsx` +
 * `tailwind-merge`. Lets us safely concatenate conditional classes
 * while letting later utilities win (e.g. `p-2` after `p-4`).
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}