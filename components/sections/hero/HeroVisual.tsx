// helix: components/sections/hero/HeroVisual.tsx
/**
 * @helix:story USER-303000
 *
 * HeroVisual — decorative visual that suggests the plan → execute →
 * verify loop. Pure server component, no client JS.
 */
import * as React from "react";

export interface HeroVisualProps {
  className?: string;
}

interface LoopStep {
  readonly label: string;
  readonly detail: string;
}

const STEPS: ReadonlyArray<LoopStep> = [
  { label: "Plan", detail: "Scope units" },
  { label: "Execute", detail: "Run agents" },
  { label: "Verify", detail: "Test · type · lint" },
];

export function HeroVisual({ className }: HeroVisualProps): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={
        "relative mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_80px_-30px_rgba(34,211,238,0.35)] " +
        (className ?? "")
      }
    >
      <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
        <span className="font-mono">helix · loop</span>
        <span className="font-mono text-brand-300">● live</span>
      </div>
      <ol className="space-y-3">
        {STEPS.map((step, idx) => (
          <li
            key={step.label}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/15 font-mono text-xs text-brand-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-ink-50">
                {step.label}
              </span>
            </div>
            <span className="text-xs text-slate-400">{step.detail}</span>
          </li>
        ))}
      </ol>
      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-400 via-cyan-300 to-brand-400" />
      </div>
    </div>
  );
}

export default HeroVisual;