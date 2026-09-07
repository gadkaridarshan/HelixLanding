// helix: components/UseCases.tsx
/**
 * @helix:story USER-303000
 *
 * UseCases — Use Cases band showcasing representative scenarios and
 * quotes across the user types served by the Helix AI orchestrator
 * (developers, indie hackers, startups, enterprise teams,
 * researchers). Self-contained server component that renders a
 * glass-card grid with role, headline, scenario, outcome, and a
 * testimonial quote + attribution per use case.
 *
 * Section chrome is provided by the parent composition root
 * (`components/landing/Sections.tsx`); this component only owns
 * the inner grid + card content so it stays portable across the
 * page surface.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/components/ui/cn";

type UseCaseId =
  | "developer"
  | "indie-hacker"
  | "startup"
  | "enterprise"
  | "researcher";

interface UseCase {
  readonly id: UseCaseId;
  readonly role: string;
  readonly headline: string;
  readonly scenario: string;
  readonly outcome: string;
  readonly quote: string;
  readonly attribution: string;
  readonly accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
}

const USE_CASES: ReadonlyArray<UseCase> = [
  {
    id: "developer",
    role: "Developers",
    headline: "Ship features, not 2,000-line AI PRs.",
    scenario:
      "You're a senior engineer at a fast-moving team. You ask Helix to add a billing webhook. Helix plans the units, executes them in order, and verifies each one against the existing repo before merging.",
    outcome:
      "A feature ships in an afternoon — every PR is atomic, every diff stays under review.",
    quote:
      "I stopped dreading AI-generated PRs. Helix hands me changes I can actually merge.",
    attribution: "Staff engineer, series-B SaaS",
    accent: "cyan",
  },
  {
    id: "indie-hacker",
    role: "Indie hackers",
    headline: "Move from idea to MVP without burning out.",
    scenario:
      "You're building your second product on nights and weekends. You point Helix at the repo, give it a roadmap, and walk away while it executes the boring parts.",
    outcome:
      "Auth, billing, and onboarding ship in days instead of months — solo.",
    quote:
      "Helix is the cofounder I couldn't afford. It just keeps shipping while I sleep.",
    attribution: "Solo founder, productivity SaaS",
    accent: "violet",
  },
  {
    id: "startup",
    role: "Startups",
    headline: "Predictable velocity for investors and hiring.",
    scenario:
      "You're a 5-person startup that needs to ship a platform rewrite before the next board meeting. Helix orchestrates the migration in verifiable units so progress is traceable end-to-end.",
    outcome:
      "A migration that would have taken a quarter finishes in three weeks — with a paper trail.",
    quote:
      "Our burn dropped because we stopped re-doing AI's mistakes. Helix is leverage.",
    attribution: "CTO, seed-stage dev-tools startup",
    accent: "emerald",
  },
  {
    id: "enterprise",
    role: "Enterprise teams",
    headline: "Governance, by construction.",
    scenario:
      "You're an engineering leader at a regulated enterprise. Every change must clear review, tests, and policy gates. Helix orchestrates the loop so each unit is verified before merge.",
    outcome:
      "AI-generated code ships at startup speed without breaking compliance.",
    quote:
      "Helix gave us AI velocity with the audit trail our security team actually accepts.",
    attribution: "VP Engineering, Fortune 500 financial services",
    accent: "amber",
  },
  {
    id: "researcher",
    role: "Researchers",
    headline: "Reproducible AI experiments, end-to-end.",
    scenario:
      "You're a research engineer building agents that need to call real tools in a real repo. Helix orchestrates each experiment as a sequence of verified units, so results are reproducible.",
    outcome:
      "Experiments that used to take a weekend run overnight, with full provenance.",
    quote:
      "Helix turned my agent benchmarks into something I can actually rerun and share.",
    attribution: "Research engineer, academic AI lab",
    accent: "rose",
  },
];

const ACCENT_RING: Record<UseCase["accent"], string> = {
  cyan: "before:bg-cyan-400/70",
  violet: "before:bg-violet-400/70",
  emerald: "before:bg-emerald-400/70",
  amber: "before:bg-amber-400/70",
  rose: "before:bg-rose-400/70",
};

export interface UseCasesProps {
  className?: string;
  headingId?: string;
}

export function UseCases({
  className,
  headingId = "use-cases-heading",
}: UseCasesProps): React.ReactElement {
  return (
    <section
      id="use-cases"
      aria-labelledby={headingId}
      className={cn("relative isolate section-pad", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.08),transparent_70%)]"
      />
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          heading="One orchestrator. Every team that ships software."
          description="From solo founders to Fortune 500 engineering orgs, Helix turns AI-generated code into a verifiable, mergeable, auditable workflow."
        />

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {USE_CASES.map((useCase) => (
            <li
              key={useCase.id}
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]",
                "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:opacity-80 before:content-['']",
                ACCENT_RING[useCase.accent]
              )}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                {useCase.role}
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {useCase.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {useCase.scenario}
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Outcome
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  {useCase.outcome}
                </p>
              </div>

              <figure className="mt-5 border-t border-white/10 pt-4">
                <blockquote className="text-sm italic leading-relaxed text-white/80">
                  &ldquo;{useCase.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs text-white/50">
                  — {useCase.attribution}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default UseCases;