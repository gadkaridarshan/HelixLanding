// helix: components/CTA.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-434000
 *
 * CTA — canonical landing-page closing call-to-action banner.
 *
 *   • Polished, gradient-rich card with eyebrow, headline, copy.
 *   • Dual primary + secondary CTAs (live orchestrator + GitHub).
 *   • Bullet row removing last-mile friction.
 *
 * Pure server component. Content is colocated so the surface ships
 * independently of any in-flight `@/content/cta.json` refactor.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

export interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps): React.ReactElement {
  return (
    <section
      id="get-started"
      aria-labelledby="cta-heading"
      className={cn("relative py-24 sm:py-32", className)}
    >
      <Container size="md">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center sm:p-14"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 20% 0%, rgba(34,211,238,0.20), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(139,92,246,0.20), transparent 60%), linear-gradient(135deg, #0a0f1f 0%, #0b1020 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
            }}
          />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm">
            Ready when you are
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Ship the next feature like you planned it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            Helix turns one good prompt into a stack of atomic, reviewable
            pull requests. Start orchestrating your AI coding agents today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="https://helix-ai-orchestrator.vercel.app"
              variant="primary"
              size="lg"
              ariaLabel="Open the Helix live orchestrator"
            >
              Get early access
            </Button>
            <Button
              href="https://github.com/gadkaridarshan/Helix"
              variant="secondary"
              size="lg"
              ariaLabel="View Helix on GitHub"
            >
              View on GitHub
            </Button>
          </div>

          <ul
            role="list"
            className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3"
          >
            {[
              "One-line intent → dependency graph in seconds",
              "Isolated worktrees, auditable runs",
              "Review-ready PRs with full traces",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/75"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-cyan-300"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-white/50">
            Open source. Self-hosted. Built for teams that ship.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default CTA;