// helix: components/cta/FinalCtaBanner.tsx
/**
 * @helix:story USER-434000
 *
 * FinalCtaBanner — closing call-to-action panel above the FAQ/footer.
 * Server-rendered with a layered gradient backdrop, headline,
 * supporting line, and a primary CTA + secondary ghost link.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import styles from "./FinalCtaBanner.module.css";

export interface FinalCtaButton {
  label: string;
  href: string;
  external: boolean;
}

export interface FinalCtaContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: FinalCtaButton;
  secondaryCta: FinalCtaButton;
  footnote: string;
}

export interface FinalCtaBannerProps {
  content: FinalCtaContent;
  className?: string;
}

export function FinalCtaBanner({
  content,
  className,
}: FinalCtaBannerProps): React.ReactElement {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta, footnote } = content;

  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-title"
      className={cn("relative py-24 sm:py-32", className)}
    >
      <Container>
        <div className={styles.card}>
          <div aria-hidden="true" className={styles.backdrop} />
          <div aria-hidden="true" className={styles.grid} />

          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {eyebrow}
          </span>

          <h2 id="final-cta-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.actions}>
            <a
              href={primaryCta.href}
              className={styles.primary}
              {...(primaryCta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span>{primaryCta.label}</span>
              <Arrow />
            </a>
            <a
              href={secondaryCta.href}
              className={styles.secondary}
              {...(secondaryCta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <GithubIcon />
              <span>{secondaryCta.label}</span>
            </a>
          </div>

          <p className={styles.footnote}>{footnote}</p>
        </div>
      </Container>
    </section>
  );
}

function Arrow(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-5"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function GithubIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16.9-.25 1.86-.38 2.82-.38s1.92.13 2.82.38c2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.34.76 1.02.76 2.06v3.05c0 .3.21.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z"
      />
    </svg>
  );
}

export default FinalCtaBanner;