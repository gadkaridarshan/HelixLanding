// helix: app/components/sections/Footer.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-633000
 * @helix:story USER-868000
 *
 * Footer — re-export of the canonical implementation under
 * `components/sections/Footer` so the alias resolves from the `app/`
 * and root-level section trees alike. The reference-site link inside the
 * Footer is explicitly labelled as a reference site (never as the live
 * site) and makes clear that the live landing page is a different site.
 */
export { Footer } from "@/components/sections/Footer";
export { default } from "@/components/sections/Footer";