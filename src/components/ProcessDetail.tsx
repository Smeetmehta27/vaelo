import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function ProcessDetail() {
  const steps = [
    {
      number: "01",
      title: "Data Connection & Ingestion",
      content: "Rigorous financial analysis starts with clean data. Import standard P&L and Balance Sheet data via our structured Excel templates directly into your workspace. You provide the historical financials; the platform handles the structuring instantly.",
    },
    {
      number: "02",
      title: "Deterministic Financial Modeling",
      content: "Vaelo does not use generative AI to guess numbers. Every module—whether a CMA projection, a financial health diagnostic, or accretion/dilution logic for feasibility—is strictly formula-driven, deterministic, and entirely auditable. We apply Wall Street-standard methodologies that hold up under scrutiny.",
    },
    {
      number: "03",
      title: "Instant Results in Your Workspace",
      content: "Time kills deals. There is no waiting for a manual turnaround. The moment a pipeline runs, the results appear live in your dashboard. You have immediate access to the output, and you control when to share project status updates with your client via their secure timeline.",
    },
    {
      number: "04",
      title: "Presentation & Live Iteration",
      content: "The workspace is white-labeled with your practice's branding—it is your advice, powered by our modeling. When you need to stress-test your client's financials, you can quickly compare Base, Downside, and Severe scenarios to see how adverse conditions impact the output. The platform handles the complex scenario modeling for you.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-stone-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-20 border-b border-stone-line pb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Process</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-[560] text-ink mb-6">How Vaelo works</h1>
          <p className="font-sans text-xl text-ink-soft leading-[1.65]">
            A closer look at our process—designed to support your professional judgment, not replace it.
          </p>
        </Reveal>

        <RevealGroup className="space-y-16 relative">
          {/* Vertical Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 bottom-10 left-[1.18rem] w-[1px] bg-stone-line z-0"></div>
          
          {steps.map((step) => (
            <RevealItem key={step.number} className="relative pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative z-10">
                <div className="hidden md:block col-span-1 bg-paper py-2 -my-2">
                  <div className="w-10 h-10 bg-bronze-tint text-bronze-deep font-mono font-medium flex items-center justify-center rounded-full relative z-10">
                    {step.number}
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="md:hidden w-10 h-10 bg-bronze-tint text-bronze-deep font-mono font-medium flex items-center justify-center rounded-full mb-6">
                    {step.number}
                  </div>
                  <h2 className="text-2xl font-serif font-[560] text-ink mb-4">{step.title}</h2>
                  <p className="font-sans text-ink-soft text-lg leading-[1.65]">{step.content}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
