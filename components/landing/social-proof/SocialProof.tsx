// helix: components/landing/social-proof/SocialProof.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-349000
 *
 * SocialProof — trust strip rendered just below the Hero. Lightweight
 * "used at" wordmarks plus a single-line endorsement, keeping the
 * credibility signal fast and unobtrusive.
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
          className="text-center text-xs font-medium uppercase tracking-widest text-slate-400"
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
                "text-xl text-slate-200 opacity-70 transition hover:opacity-100",
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