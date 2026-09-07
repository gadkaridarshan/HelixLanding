// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-868000
 *
 * Hero — above-the-fold pitch with headline, dual CTAs, social-proof
 * bullets, and a decorative atom/orbit SVG visual.
 *
 * The reference-site link inside the Hero is explicitly labelled as
 * such (never as the live site).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import { HeroVisual } from "./HeroVisual";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";
const REFERENCE_SITE_LABEL =
  "Reference site — visual / brand reference only (not the live site)";

export function Hero(): React.ReactElement {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-24 sm:pt-28 lg:pb-28 lg:pt-32"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="hx-chip">
              <span className="hx-chip-dot" aria-hidden="true" />
              <span>Now in private beta</span>
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ship AI code as
              <span className="hx-text-gradient"> reviewable atoms</span>,
              <br className="hidden sm:block" /> not sprawling diffs.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {brand.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="hx-btn-primary">
                Request early access
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href={REFERENCE_SITE_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={REFERENCE_SITE_LABEL}
                title={REFERENCE_SITE_LABEL}
                className="hx-btn-secondary"
              >
                <span aria-hidden="true">↗</span>
                See reference site
                <span className="ml-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  Reference
                </span>
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Check /> Decomposed, atomic units
              </li>
              <li className="flex items-center gap-2">
                <Check /> Verified against your repo
              </li>
              <li className="flex items-center gap-2">
                <Check /> Small, reviewable PRs
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Check(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-cyan-400"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default Hero;