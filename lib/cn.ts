/**
 * Tiny class-name combiner. Avoids adding a dependency on clsx/cn
 * for this scaffold — keeps the install footprint minimal.
 */
export type ClassValue = string | number | boolean | null | undefined;

export function cn(...inputs: ReadonlyArray<ClassValue>): string {
  return inputs.filter(Boolean).join(" ");
}