// helix: components/sections/hero/HeroCopy.tsx
/**
 * @helix:story USER-495000
 *
 * HeroCopy — the text column for the above-the-fold Hero.
 *
 * Renders an eyebrow chip, brand-led headline, subhead, dual CTAs,
 * and four social-proof bullets. Content is sourced from
 * `@/content/hero.json` so the marketing copy can evolve without
 * touching the component tree.
 *
 * Pure server component.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";

import heroData from "@/content/hero.json";

export interface HeroCopyProps {
  className?: string;
}

interface HeroBullet {
  text: string;
}

interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; external: boolean };
  bullets: ReadonlyArray<HeroBullet>;
}

const content: HeroContent = heroData as HeroContent;

export function HeroCopy({ className }: HeroCopyProps): React.ReactElement {
  return (
    <div className={(className ?? "") + " max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
        {content.eyebrow}
      </span>

      <h1
        id="hero-heading"
        className="mt-6 text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl lg:text-6xl"
      >
        {content.headline}{" "}
        <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
          {content.headlineAccent}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-ink-300 sm:text-lg">
        {content.subhead}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button variant="primary" size="lg" href={content.primaryCta.href}>
          {content.primaryCta.label}
        </Button>
        <Button
          variant="secondary"
          size="lg"
          href={content.secondaryCta.href}
          external={content.secondaryCta.external}
        >
          {content.secondaryCta.label}
        </Button>
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {content.bullets.map((bullet) => (
          <li
            key={bullet.text}
            className="flex items-start gap-2 text-sm text-ink-300"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 flex-none text-brand-400"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroCopy;