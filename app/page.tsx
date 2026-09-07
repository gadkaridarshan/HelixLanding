// helix: app/page.tsx
/**
 * @helix:story USER-285000
 *
 * Landing-page composition root. Renders the full narrative of the
 * site — the Section wrapper used by every section card, plus the
 * final CTA at the bottom. Each section lives in its own file and
 * is mounted via the shared `<Section>` chrome for consistent
 * vertical rhythm and accessibility.
 *
 * As more section cards land, this file grows into the canonical
 * section order for the page (see `components/landing/Sections.tsx`
 * for the full composition used by other entry points).
 */
import * as React from "react";

import { Section } from "@/components/Section";

export default function HomePage(): React.ReactElement {
  return (
    <div id="top" className="relative isolate flex min-h-screen flex-col bg-slate-950 text-ink-50">
      <main className="flex-1">
        <Section
          id="hero"
          eyebrow="Helix · AI orchestrator"
          heading="Ship features, not diffs."
          description="Helix turns a single prompt into atomic, verified code units — so your main branch stays green and your team keeps velocity."
        >
          <p className="mx-auto max-w-2xl text-center text-ink-300">
            The marketing surface is being assembled section by section.
            This scaffold is the canvas every landing card paints into.
          </p>
        </Section>
      </main>
    </div>
  );
}