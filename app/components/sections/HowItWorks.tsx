// helix: app/components/sections/HowItWorks.tsx
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/**
 * @helix:story USER-347000
 * HowItWorks — 3-step numbered flow with simple SVG diagrams.
 * Server component. Imports only from components/ui.
 */

type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
  diagram: JSX.Element;
};

const steps: Step[] = [
  {
    id: "ingest",
    number: "01",
    title: "Ingest the requirement",
    description:
      "Drop a product spec, a Linear ticket, or a single sentence. Helix normalizes the input into a typed brief with the goals, constraints, and protected paths attached.",
    diagram: (
      <svg
        viewBox="0 0 320 200"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="20"
          y="20"
          width="180"
          height="160"
          rx="12"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.12)"
        />
        <text
          x="36"
          y="50"
          fill="rgba(255,255,255,0.7)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontSize="11"
        >
          $ helix plan
        </text>
        <text
          x="36"
          y="76"
          fill="rgba(255,255,255,0.9)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="14"
          fontWeight="600"
        >
          Add OAuth + billing
        </text>
        <rect
          x="36"
          y="92"
          width="140"
          height="10"
          rx="2"
          fill="rgba(139,92,246,0.4)"
        />
        <rect
          x="36"
          y="110"
          width="110"
          height="10"
          rx="2"
          fill="rgba(56,189,248,0.4)"
        />
        <rect
          x="36"
          y="128"
          width="130"
          height="10"
          rx="2"
          fill="rgba(236,72,153,0.4)"
        />
        <rect
          x="36"
          y="146"
          width="90"
          height="10"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        <circle
          cx="260"
          cy="100"
          r="36"
          fill="rgba(139,92,246,0.12)"
          stroke="rgba(139,92,246,0.6)"
          strokeWidth="1.5"
        />
        <path
          d="M244 100l12 12 24-24"
          stroke="rgba(139,92,246,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M205 100h18M290 100h10"
          stroke="rgba(255,255,255,0.2)"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "plan",
    number: "02",
    title: "Helix plans parallel atomic cards",
    description:
      "Helix decomposes the brief into atomic cards, draws the dependency graph, and groups them into parallel tracks. You see the plan before a single agent is dispatched.",
    diagram: (
      <svg
        viewBox="0 0 320 200"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="120"
          y="14"
          width="80"
          height="28"
          rx="6"
          fill="rgba(139,92,246,0.2)"
          stroke="rgba(139,92,246,0.6)"
        />
        <text
          x="160"
          y="33"
          fill="white"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          Brief
        </text>

        <path
          d="M160 42v18M100 90v18M160 90v18M220 90v18"
          stroke="rgba(255,255,255,0.25)"
          strokeLinecap="round"
        />

        <rect
          x="60"
          y="60"
          width="80"
          height="30"
          rx="6"
          fill="rgba(56,189,248,0.18)"
          stroke="rgba(56,189,248,0.6)"
        />
        <text
          x="100"
          y="79"
          fill="white"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          Track A
        </text>

        <rect
          x="120"
          y="60"
          width="80"
          height="30"
          rx="6"
          fill="rgba(236,72,153,0.18)"
          stroke="rgba(236,72,153,0.6)"
        />
        <text
          x="160"
          y="79"
          fill="white"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          Track B
        </text>

        <rect
          x="180"
          y="60"
          width="80"
          height="30"
          rx="6"
          fill="rgba(16,185,129,0.18)"
          stroke="rgba(16,185,129,0.6)"
        />
        <text
          x="220"
          y="79"
          fill="white"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          Track C
        </text>

        <rect
          x="20"
          y="108"
          width="56"
          height="26"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
        />
        <text
          x="48"
          y="125"
          fill="rgba(255,255,255,0.8)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="9"
          textAnchor="middle"
        >
          card 1
        </text>

        <rect
          x="82"
          y="108"
          width="56"
          height="26"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
        />
        <text
          x="110"
          y="125"
          fill="rgba(255,255,255,0.8)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="9"
          textAnchor="middle"
        >
          card 2
        </text>

        <rect
          x="144"
          y="108"
          width="56"
          height="26"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
        />
        <text
          x="172"
          y="125"
          fill="rgba(255,255,255,0.8)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="9"
          textAnchor="middle"
        >
          card 3
        </text>

        <rect
          x="206"
          y="108"
          width="56"
          height="26"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
        />
        <text
          x="234"
          y="125"
          fill="rgba(255,255,255,0.8)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="9"
          textAnchor="middle"
        >
          card 4
        </text>

        <rect
          x="80"
          y="156"
          width="160"
          height="26"
          rx="6"
          fill="rgba(139,92,246,0.12)"
          stroke="rgba(139,92,246,0.45)"
        />
        <text
          x="160"
          y="173"
          fill="rgba(255,255,255,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="10"
          fontWeight="600"
          textAnchor="middle"
        >
          12 cards · 3 parallel tracks
        </text>
      </svg>
    ),
  },
  {
    id: "execute",
    number: "03",
    title: "Agents execute in parallel",
    description:
      "Coding agents run on independent tracks with protected paths enforced. You get a stream of focused diffs, not a merge nightmare.",
    diagram: (
      <svg
        viewBox="0 0 320 200"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="20"
          y="30"
          width="84"
          height="50"
          rx="8"
          fill="rgba(56,189,248,0.1)"
          stroke="rgba(56,189,248,0.5)"
        />
        <circle cx="36" cy="46" r="4" fill="rgba(56,189,248,0.9)" />
        <text
          x="60"
          y="50"
          fill="rgba(255,255,255,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="10"
          fontWeight="600"
        >
          Agent A
        </text>
        <text
          x="36"
          y="68"
          fill="rgba(255,255,255,0.5)"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
        >
          provider.ts
        </text>

        <rect
          x="118"
          y="30"
          width="84"
          height="50"
          rx="8"
          fill="rgba(236,72,153,0.1)"
          stroke="rgba(236,72,153,0.5)"
        />
        <circle cx="134" cy="46" r="4" fill="rgba(236,72,153,0.9)" />
        <text
          x="158"
          y="50"
          fill="rgba(255,255,255,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="10"
          fontWeight="600"
        >
          Agent B
        </text>
        <text
          x="134"
          y="68"
          fill="rgba(255,255,255,0.5)"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
        >
          checkout.tsx
        </text>

        <rect
          x="216"
          y="30"
          width="84"
          height="50"
          rx="8"
          fill="rgba(16,185,129,0.1)"
          stroke="rgba(16,185,129,0.5)"
        />
        <circle cx="232" cy="46" r="4" fill="rgba(16,185,129,0.9)" />
        <text
          x="256"
          y="50"
          fill="rgba(255,255,255,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="10"
          fontWeight="600"
        >
          Agent C
        </text>
        <text
          x="232"
          y="68"
          fill="rgba(255,255,255,0.5)"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
        >
          webhook.ts
        </text>

        <path
          d="M62 80v22M160 82v20M258 80v22"
          stroke="rgba(255,255,255,0.2)"
          strokeLinecap="round"
        />
        <path
          d="M62 102l98 0M160 102l98 0"
          stroke="rgba(139,92,246,0.4)"
          strokeLinecap="round"
        />

        <rect
          x="40"
          y="124"
          width="240"
          height="56"
          rx="8"
          fill="rgba(139,92,246,0.08)"
          stroke="rgba(139,92,246,0.45)"
        />
        <text
          x="160"
          y="144"
          fill="rgba(255,255,255,0.9)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          Reviewable diff stream
        </text>
        <g
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          fill="rgba(255,255,255,0.55)"
        >
          <text x="56" y="162">
            + const billing = new Billing(...)
          </text>
          <text x="56" y="174">
            + const oauth = new OAuth(...)
          </text>
        </g>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-b border-white/5"
    >
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            From a vague prompt to a merged PR in three steps.
          </h2>
          <p className="mt-4 text-pretty text-base text-white/60 sm:text-lg">
            No bespoke glue. No babysitting. Just a deterministic pipeline that
            respects your codebase.
          </p>
        </div>

        <ol
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {steps.map((step) => (
            <li
              key={step.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 font-mono text-sm font-semibold text-violet-200">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              <div className="mt-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
                {step.diagram}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}