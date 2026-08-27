import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function ProcessDetail() {
  const steps = [
    {
      number: "01",
      title: "Data Connection & Ingestion",
      content: "Rigorous financial analysis starts with clean data. Connect direct exports from Tally and Zoho Books, or import standard P&L and Balance Sheet data via our structured Excel templates directly into your workspace. You provide the historical financials; the platform handles the structuring instantly.",
    },
    {
      number: "02",
      title: "Deterministic Financial Modeling",
      content: "Vaelo does not use generative AI to guess numbers. Every module—whether a CMA projection, a financial health diagnostic, or accretion/dilution logic for feasibility—is strictly formula-driven, deterministic, and entirely auditable. We apply Wall Street-standard methodologies that hold up under scrutiny.",
    },
    {
      number: "03",
      title: "Instant Results in Your Workspace",
      content: "Time kills deals. There is no waiting for a manual turnaround. The moment a pipeline runs, the results appear live in your dashboard. You have immediate access to the output, and you control whether your client can log in to see the work you've done for them.",
    },
    {
      number: "04",
      title: "Presentation & Live Iteration",
      content: "The workspace is white-labeled with your practice's branding—it is your advice, powered by our modeling. If you or your client want to see how a change in revenue growth assumptions or working capital ratios affects the output, simply adjust the assumption in the dashboard. The entire model updates instantly.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-ledger-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 border-b border-ledger-line pb-8">
          <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">How Vaelo works</h1>
          <p className="text-xl text-slate leading-relaxed">
            A closer look at our process—designed to support your professional judgment, not replace it.
          </p>
        </Reveal>

        <RevealGroup className="space-y-16">
          {steps.map((step) => (
            <RevealItem key={step.number} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block col-span-1">
                  <div className="w-12 h-12 border-2 border-corporate-blue text-corporate-blue font-mono font-bold flex items-center justify-center rounded-sm bg-white shadow-sm">
                    {step.number}
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="md:hidden w-12 h-12 border-2 border-corporate-blue text-corporate-blue font-mono font-bold flex items-center justify-center rounded-sm bg-white shadow-sm mb-4">
                    {step.number}
                  </div>
                  <h2 className="text-2xl font-serif text-ink mb-4">{step.title}</h2>
                  <p className="text-slate text-lg leading-relaxed">{step.content}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
