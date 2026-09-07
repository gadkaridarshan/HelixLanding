// helix: app/page.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-969000
 *
 * Landing page entry for the scaffold card. This card only ships a
 * minimal placeholder so the shell builds and runs end-to-end;
 * section composition (Navbar, Hero, etc.) is owned by later cards.
 *
 * Replace this body with the real section tree in `app/page.tsx`
 * once the Hero / Features / HowItWorks / Personas / FAQ / FinalCTA /
 * Footer cards are merged.
 */
import * as React from "react";

export default function Page(): React.ReactElement {
  return (
    <main
      id="main"
      className="relative mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
    >
      <span className="hx-chip">
        <span className="hx-chip-dot" />
        Helix · scaffold
      </span>

      <h1 className="hx-heading mt-6">
        <span className="hx-text-gradient">Atomic work-breakdown</span>
        <br />
        for AI coding agents.
      </h1>

      <p className="hx-subheading mx-auto">
        Next.js 14 App Router shell is live. Theme tokens, fonts, and
        the polished background are wired up. Section components land
        in the next cards.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a className="hx-btn-primary" href="#main">
          Start here
        </a>
        <a
          className="hx-btn-secondary"
          href="https://github.com/gadkaridarshan/Helix"
          rel="noreferrer noopener"
          target="_blank"
        >
          Source
        </a>
      </div>
    </main>
  );
}