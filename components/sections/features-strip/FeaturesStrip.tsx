// helix: components/sections/features-strip/FeaturesStrip.tsx
/**
 * @helix:story USER-742000
 *
 * FeaturesStrip — "Why Helix" 3-up feature strip rendered immediately
 * below the Hero. Surfaces three concrete differentiators:
 *
 *   1. Atomic work-breakdown
 *   2. Verified before it ships
 *   3. Dependency-aware orchestration
 *
 * Pure server component. Icon glyphs are inline SVGs (no runtime icon
 * dependency) so the strip is fully self-contained and tree-shakable.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import features from "@/content/features-strip.json";

type IconName = "Atom" | "ShieldCheck" | "GitBranch";

interface FeaturesStripItem {
  id: string;
  icon: IconName;
  title: string;
  body: string;
  proof: string;
}

const items = (features as { items: FeaturesStripItem[] }).items;

function Icon({ name }: { name: IconName }): React.ReactElement {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Atom":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "ShieldCheck":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "GitBranch":
      return (
        <svg {...common}>
          <circle cx="6" cy="5" r="2" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="9" r="2" />
          <path d="M6 7v10" />
          <path d="M18 11c0 4-6 4-6 8" />
        </svg>
      );
  }
}

export interface FeaturesStripProps {
  className?: string;
}

export function FeaturesStrip({
  className,
}: FeaturesStripProps): React.ReactElement {
  return (
    <section
      id="why-helix"
      aria-labelledby="why-helix-heading"
      className={
        "relative isolate -mt-8 sm:-mt-12 lg:-mt-16 pb-16 sm:pb-20 lg:pb-24 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
            Why Helix
          </p>
          <h2
            id="why-helix-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Built for the way senior engineers actually review code
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Helix turns vague prompts into a queue of small, verifiable
            units — so every commit is something you can actually merge.
          </p>
        </div>

        <ul
          role="list"
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] backdrop-blur transition hover:border-cyan-400/40 hover:bg-slate-900/80"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 60%)",
                }}
              />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <Icon name={item.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                {item.body}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-cyan-300/70">
                {item.proof}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default FeaturesStrip;