// helix: app/page.tsx
/**
 * @helix:story USER-303000
 *
 * Landing page entry — renders the Navbar, the full narrative
 * section sequence owned by `components/landing/Sections`, and the
 * global footer. Everything else (metadata, fonts, theme) is set
 * up by `app/layout.tsx`.
 */
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Sections } from "@/components/landing/Sections";

export default function Page(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Sections />
      <Footer />
    </>
  );
}