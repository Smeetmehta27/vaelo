import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function Features() {
  const pipelines = [
    {
      name: "Credit Monitoring Arrangement (CMA)",
      description: "Automate financial statement analysis, ratio computation, projections, covenant tracking, and funding requirement assessments. Every metric is strictly formula-driven and traceable.",
      for: "Run this to prepare comprehensive credit assessment data for bank loan submissions.",
      speed: "Generated in seconds."
    },
    {
      name: "Financial Health Snapshot",
      description: "A recurring diagnostic that analyzes liquidity, solvency, and working capital cycles to flag potential distress before it becomes terminal.",
      for: "Run this for quarterly or annual check-ins with your key retainers.",
      speed: "Calculated instantly."
    },
    {
      name: "Feasibility Analysis",
      description: "Accretion/dilution analysis, debt capacity modeling, and synergy evaluations. Helps your client understand if a proposed acquisition makes financial sense.",
      for: "Run this when your client is considering a strategic merger.",
      speed: "Live in your dashboard."
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">The Platform</span>
          </div>
          <h2 className="text-[clamp(1.875rem,3vw,3rem)] font-serif font-[560] text-ink">Structured financial intelligence, module by module</h2>
          <p className="mt-4 text-ink-soft text-lg font-sans max-w-[640px]">Three core pipelines that turn raw client financial data into reliable, explainable, decision-ready output—available on demand inside your workspace.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelines.map((pipeline) => (
            <RevealItem key={pipeline.name} className="border border-stone-line rounded-[20px] p-8 flex flex-col h-full bg-paper-dim">
              <h3 className="text-xl font-serif font-[560] text-ink mb-4">{pipeline.name}</h3>
              <p className="font-sans text-ink-soft text-sm leading-[1.65] flex-grow mb-6">
                {pipeline.description}
              </p>
              <div className="pt-6 border-t border-stone-line mt-auto">
                <span className="block text-[11px] font-mono uppercase tracking-[0.16em] text-ink-soft mb-1">When to run:</span>
                <span className="block font-sans text-sm text-ink mb-3">{pipeline.for}</span>
                <span className="block text-xs font-mono text-bronze-deep">✦ {pipeline.speed}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
