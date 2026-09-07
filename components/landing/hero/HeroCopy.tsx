// helix: components/landing/hero/HeroCopy.tsx
/**
 * @helix:story USER-23000
 *
 * HeroCopy — the text column of the hero section: headline, subhead,
 * dual CTAs, and social-proof bullets. Pure server component.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

export interface HeroCopyProps {
  className?: string;
}

interface Bullet {
  id: string;
  text: string;
}

const bullets: ReadonlyArray<Bullet> = [
  { id: "atomic", text: "Atomic plans you can read and approve." },
  { id: "verified", text: "Type-checked, tested, and linted on every unit." },
  { id: "small-prs", text: "Small, dependency-ordered PRs — not one big diff." },
];

export function HeroCopy({ className }: HeroCopyProps): React.ReactElement {
  return (
    <div className={className}>
      <p className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
        />
        Now in early access
      </p>
      <h1
        id="hero-heading"
        className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {brand.tagline}.
      </h1>
      <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
        {brand.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-pill bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-slate-100"
        >
          Get early access
        </a>
        <a
          href={brand.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-pill border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          View on GitHub
        </a>
      </div>

      <ul className="mt-8 space-y-2 text-sm text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet.id} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
            />
            {bullet.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroCopy;