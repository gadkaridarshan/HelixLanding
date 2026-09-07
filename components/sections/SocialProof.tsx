// helix: components/sections/SocialProof.tsx
/**
 * @helix:story USER-349000
 *
 * SocialProof section — trust strip rendered just below the Hero.
 * Shows lightweight "used at" logos + a one-line endorsement, then
 * a four-metric strip. Designed to build credibility fast.
 */

import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

interface LogoEntry {
  readonly label: string;
  readonly className?: string;
}

const LOGOS: ReadonlyArray<LogoEntry> = [
  { label: "Acme", className: "font-semibold tracking-tight" },
  { label: "Northwind", className: "font-semibold tracking-tight" },
  { label: "Globex", className: "font-semibold tracking-tight" },
  { label: "Initech", className: "font-semibold tracking-tight" },
  { label: "Hooli", className: "font-semibold tracking-tight" },
];

export function SocialProof(): ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="relative border-y border-white/5 bg-white/[0.02] py-12"
    >
      <Container>
        <h2
          id="social-proof-heading"
          className="text-center text-xs font-medium uppercase tracking-widest text-ink-400"
        >
          Trusted by teams shipping faster with Helix
        </h2>
        <ul
          aria-label="Customer logos"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {LOGOS.map((logo) => (
            <li
              key={logo.label}
              className={cn(
                "text-xl text-ink-200 opacity-70 transition hover:opacity-100",
                logo.className,
              )}
            >
              {logo.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SocialProof;