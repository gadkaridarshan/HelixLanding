import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/**
 * @helix:story USER-347000
 * HowItWorks — 3-step numbered flow with simple SVG diagrams.
 * Server component. Imports only from components/ui.
 */

type Step = {
  number: string;
  title: string;
  description: string;
  diagram: (props: { className?: string }) => JSX.Element;
};

function DiagramIngest(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      className={props.className}
      role="img"
      aria-label="A requirement document is fed into Helix"
    >
      <defs>
        <linearGradient id="hw-ingest" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
      </defs>
      {/* Document */}
      <rect
        x="20"
        y="30"
        width="80"
        height="90"
        rx="8"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.2)"
      />
      <rect x="32" y="46" width="56" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
      <rect x="32" y="58" width="40" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="32" y="70" width="48" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="32" y="82" width="32" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      {/* Arrow */}
      <path
        d="M110 75 L150 75"
        stroke="url(#hw-ingest)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M144 70 L152 75 L144 80"
        stroke="url(#hw-ingest)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Helix node */}
      <circle cx="185" cy="75" r="28" fill="rgba(139,92,246,0.15)" stroke="rgba(167,139,250,0.6)" />
      <circle cx="185" cy="75" r="14" fill="rgba(139,92,246,0.35)" stroke="rgba(167,139,250,0.9)" />
      <text
        x="185"
        y="79"
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="white"
      >
        Helix
      </text>
    </svg>
  );
}

function DiagramPlan(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      className={props.className}
      role="img"
      aria-label="Helix plans the work into parallel cards"
    >
      <defs>
        <linearGradient id="hw-plan" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      {/* Source */}
      <circle cx="30" cy="70" r="18" fill="rgba(56,189,248,0.2)" stroke="rgba(56,189,248,0.7)" />
      <circle cx="30" cy="70" r="6" fill="rgba(56,189,248,0.9)" />
      {/* Cards */}
      <g>
        <rect x="90" y="20" width="60" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(129,140,248,0.6)" />
        <rect x="98" y="30" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="98" y="38" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="90" y="56" width="60" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(129,140,248,0.6)" />
        <rect x="98" y="66" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="98" y="74" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="90" y="92" width="60" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(129,140,248,0.6)" />
        <rect x="98" y="102" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="98" y="110" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
      </g>
      {/* Arrows */}
      <path d="M48 70 Q70 70 88 36" stroke="url(#hw-plan)" strokeWidth="1.5" fill="none" />
      <path d="M48 70 Q70 70 88 72" stroke="url(#hw-plan)" strokeWidth="1.5" fill="none" />
      <path d="M48 70 Q70 70 88 108" stroke="url(#hw-plan)" strokeWidth="1.5" fill="none" />
      {/* Dependency line */}
      <path d="M150 52 L150 56" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <path d="M150 88 L150 92" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      {/* Agents on the right */}
      <g>
        <circle cx="195" cy="36" r="9" fill="rgba(167,139,250,0.25)" stroke="rgba(167,139,250,0.7)" />
        <circle cx="195" cy="72" r="9" fill="rgba(167,139,250,0.25)" stroke="rgba(167,139,250,0.7)" />
        <circle cx="195" cy="108" r="9" fill="rgba(167,139,250,0.25)" stroke="rgba(167,139,250,0.7)" />
      </g>
    </svg>
  );
}

function DiagramExecute(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      className={props.className}
      role="img"
      aria-label="Agents execute in parallel and ship to Vercel"
    >
      <defs>
        <linearGradient id="hw-exec" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      {/* Agents */}
      <g>
        <rect x="20" y="30" width="50" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.6)" />
        <rect x="28" y="40" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="28" y="48" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="28" y="56" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />

        <rect x="20" y="78" width="50" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.6)" />
        <rect x="28" y="88" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="28" y="96" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
        <rect x="28" y="104" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
      </g>
      {/* Arrows */}
      <path d="M72 48 L110 60" stroke="url(#hw-exec)" strokeWidth="1.5" fill="none" />
      <path d="M72 96 L110 84" stroke="url(#hw-exec)" strokeWidth="1.5" fill="none" />
      {/* Merge node */}
      <circle cx="125" cy="72" r="14" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.8)" />
      <path
        d="M119 72 L124 77 L133 67"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow to deploy */}
      <path d="M139 72 L168 72" stroke="url(#hw-exec)" strokeWidth="2" fill="none" />
      <path d="M162 67 L170 72 L162 77" stroke="url(#hw-exec)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Deploy target */}
      <rect x="170" y="52" width="58" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(34,211,238,0.7)" />
      <path d="M186 78 L186 66 L194 66 L194 78 M186 78 L198 78" stroke="rgba(34,211,238,0.95)" strokeWidth="1.5" fill="none" />
      <text x="199" y="86" fontSize="9" fontWeight="600" fill="white">
        ▲ Vercel
      </text>
    </svg>
  );
}

const steps: Step[] = [
  {
    number: "01",
    title: "Ingest a requirement",
    description:
      "Paste a spec, link a ticket, or describe the change in plain English. Helix understands scope, constraints, and the files in play.",
    diagram: DiagramIngest,
  },
  {
    number: "02",
    title: "Helix plans parallel atomic cards",
    description:
      "Helix decomposes the work into dependency-safe cards, each scoped to a glob, with the right language and framework context baked in.",
    diagram: DiagramPlan,
  },
  {
    number: "03",
    title: "Agents execute in parallel",
    description:
      "Coding agents run side-by-side, protected paths are respected, and every change is reviewable. One click ships the result to Vercel.",
    diagram: DiagramExecute,
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-heading"
      eyebrow="How it works"
      title="From a single requirement to a deployed change in three steps"
      description="No orchestration scripts to maintain. No agents stepping on each other. Just a plan, a set of cards, and a clean deploy."
      className="border-b border-white/5"
    >
      <Container>
        <ol
          role="list"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {steps.map((step, index) => {
            const Diagram = step.diagram;
            const isLast = index === steps.length - 1;
            return (
              <li
                key={step.number}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                {/* Connector line (desktop) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="absolute left-full top-12 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent lg:block"
                  />
                )}

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-sm font-semibold text-white ring-1 ring-white/10">
                    {step.number}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Step {index + 1}
                  </span>
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-slate-950/50 p-3">
                  <Diagram className="h-32 w-full" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}