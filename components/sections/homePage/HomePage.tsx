// helix: components/sections/homePage/HomePage.tsx
/**
 * @helix:story USER-303000
 *
 * HomePage — lightweight anchor/landmark element that complements
 * the narrative sections. Renders a "deployable anywhere" footer
 * band so the landing surface closes cleanly before the global
 * footer chrome.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface HomePageProps {
  className?: string;
}

export function HomePage({ className }: HomePageProps): React.ReactElement {
  return (
    <section
      id="deploy"
      aria-labelledby="deploy-heading"
      className={
        "relative border-t border-white/5 bg-white/[0.02] py-16 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2
              id="deploy-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Deployable anywhere.
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              One-click deploy to Vercel, Netlify, or any static host. Bring
              your own brand, model, and CI.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Vercel</Pill>
            <Pill>Netlify</Pill>
            <Pill>Cloudflare</Pill>
            <Pill>Self-host</Pill>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

export default HomePage;