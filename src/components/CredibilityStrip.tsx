import { Reveal } from './animations/Reveal';

export function CredibilityStrip() {
  const facts = [
    { label: "Pipeline Tests", value: "69 passing", detail: "CMA · Feasibility · Health" },
    { label: "Architecture", value: "Deterministic", detail: "Auditable, formula-driven — no black-box ML" },
    { label: "Status", value: "Early Access", detail: "Recruiting founding CA practices" },
  ];

  return (
    <section className="bg-paper-dim border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-line">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4 sm:py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium mb-1">{fact.label}</p>
                <p className="font-serif font-[560] text-xl text-ink leading-tight">{fact.value}</p>
                <p className="font-sans text-sm text-ink-soft mt-1">{fact.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
