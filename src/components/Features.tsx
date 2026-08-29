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
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-serif text-ink">Structured financial intelligence, module by module</h2>
          <p className="mt-4 text-ink-soft text-lg">Three core pipelines that turn raw client financial data into reliable, explainable, decision-ready output—available on demand inside your workspace.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pipelines.map((pipeline) => (
            <RevealItem key={pipeline.name} className="border border-stone-line p-8 flex flex-col h-full hover:border-bronze/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 bg-paper">
              <h3 className="text-xl font-serif font-medium text-ink mb-4">{pipeline.name}</h3>
              <p className="text-ink-soft text-sm leading-relaxed flex-grow mb-6">
                {pipeline.description}
              </p>
              <div className="pt-6 border-t border-stone-line/50 mt-auto">
                <span className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1">When to run:</span>
                <span className="block text-sm font-medium text-ink mb-3">{pipeline.for}</span>
                <span className="block text-xs font-mono text-bronze-deep">✦ {pipeline.speed}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
