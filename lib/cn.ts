/**
 * Tiny class-name combiner. Avoids adding a dependency on clsx/cn
 * for this scaffold — keeps the install footprint minimal.
 */
export function cn(
  ...inputs: Array<string | number | boolean | null | undefined>
): string {
  return inputs.filter(Boolean).join(" ");
}