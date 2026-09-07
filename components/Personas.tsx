// helix: components/Personas.tsx
/**
 * @helix:story USER-308000
 *
 * Personas — role-specific value-prop cards for Developer, Tech Lead,
 * AI Engineer, Product Manager, and Founder.
 *
 * Self-contained server component. No client interactivity. Each card
 * surfaces the role, a one-liner value prop, and three concrete bullets
 * that match the day-to-day of that role.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

export interface PersonasProps {
  className?: string;
}

interface Persona {
  role: string;
  icon: React.ReactElement;
  tagline: string;
  bullets: readonly string[];
}

const PERSONAS: readonly Persona[] = [
  {
    role: "Developer",
    tagline: "Ship features without babysitting the agent.",
    bullets: [
      "Get a clear diff per atomic unit instead of one sprawling change.",
      "Re-run any failed unit in isolation — no full retry from scratch.",
      "Review intent + verification evidence side-by-side in your editor.",
    ],
  },
  {
    role: "Tech Lead",
    tagline: "Keep architecture and review velocity at the same time.",
    bullets: [
      "Atomic units respect module boundaries — no cross-cutting drift.",
      "Per-unit verification (types, tests, lint) before any merge.",
      "Auditable trail of every prompt → decision → change.",
    ],
  },
  {
    role: "AI Engineer",
    tagline: "Run agents you can actually trust in production.",
    bullets: [
      "Plan-then-execute loop with explicit dependencies between units.",
      "Self-verifying units catch regressions against the live repo.",
      "Pluggable verification — drop in your own checks per unit.",
    ],
  },
  {
    role: "Product Manager",
    tagline: "Turn intent into shipped product, not stalled tickets.",
    bullets: [
      "Specify outcomes in plain language — Helix decomposes the work.",
      "Track progress per unit instead of per vague epic.",
      "Predictable cadence: no more 'almost done' for two weeks.",
    ],
  },
  {
    role: "Founder",
    tagline: "Build more with the team you have.",
    bullets: [
      "Multiply engineering throughput without doubling headcount.",
      "Onboard new contributors faster — the agent handles the rote work.",
      "Stay in flow: fewer context switches, fewer late-night rollbacks.",
    ],
  },
];

function RoleIcon({ role }: { role: string }): React.ReactElement {
  // Tiny inline glyph per role — purely decorative, aria-hidden below.
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (role) {
    case "Developer":
      return (
        <svg {...common} aria-hidden="true">
          <polyline points="8 6 2 12 8 18" />
          <polyline points="16 6 22 12 16 18" />
        </svg>
      );
    case "Tech Lead":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "AI Engineer":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
      );
    case "Product Manager":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 13h6M8 17h4" />
        </svg>
      );
    case "Founder":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 21l5-9 4 4 4-8 5 13z" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function PersonaCard({ persona }: { persona: Persona }): React.ReactElement {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-card border border-white/10 bg-white/[0.02] p-6",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] backdrop-blur-sm",
        "transition-colors duration-base hover:border-brand-400/40 hover:bg-white/[0.04]",
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20"
        >
          <RoleIcon role={persona.role} />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          For the {persona.role}
        </h3>
      </div>
      <p className="mb-4 text-base font-medium text-brand-200">
        {persona.tagline}
      </p>
      <ul className="mt-auto space-y-2 text-sm leading-relaxed text-neutral-300">
        {persona.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Personas({ className }: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={cn(
        "relative isolate py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]"
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            Built for every role on the team
          </p>
          <h2
            id="personas-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Whoever you are, Helix fits how you already work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Atomic work-breakdown adapts to the role you play — not the
            other way around.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-5">
          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.role} persona={persona} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Personas;