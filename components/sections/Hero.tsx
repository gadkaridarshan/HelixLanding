// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-773000
 * @helix:story USER-303000
 *
 * Hero — above-the-fold section. Bold headline positioning Helix as the
 * AI orchestrator, a supporting subheadline, and two CTAs:
 *
 *   • Primary   — "Get Started" (anchors to FinalCTA / early-access form).
 *   • Secondary — "See How It Works" (anchors to the HowItWorks section).
 *
 * Also surfaces a tertiary GitHub link for developer credibility.
 *
 * Self-contained: imports only the shared Container + cn helper + the
 * HeroVisual decoration. Fully typed, responsive, theme-token driven.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import { HeroVisual } from "@/components/sections/HeroVisual";

import styles from "@/components/sections/Hero.module.css";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps): React.ReactElement {
  return (
    <section
      id="hero"
      className={cn(styles.root, className)}
      aria-labelledby="hero-headline"
    >
      <Container className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Atomic work-breakdown for AI coding agents
            </span>

            <h1 id="hero-headline" className={styles.headline}>
              Ship AI code you can actually{" "}
              <span className={styles.headlineAccent}>review</span>.
            </h1>

            <p className={styles.subheadline}>
              Helix decomposes every prompt into atomic, reviewable units —
              executes them in order with explicit dependencies, verifies each
              one against your repo, and ships small, mergeable PRs instead of
              one sprawling diff.
            </p>

            <div className={styles.ctaRow}>
              <a className={cn(styles.cta, styles.ctaPrimary)} href="#cta">
                Get Started
                <svg
                  className={styles.ctaIcon}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className={cn(styles.cta, styles.ctaSecondary)}
                href="#how-it-works"
              >
                See How It Works
              </a>
            </div>

            <a
              className={styles.githubLink}
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={styles.githubIcon}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              <span>
                <span className={styles.githubLabel}>Open source</span>
                <span className={styles.githubHandle}>github.com/gadkaridarshan/Helix</span>
              </span>
            </a>
          </div>

          <div className={styles.visual}>
            <HeroVisual className={styles.visualInner} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;