import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function ProcessDetail() {
  const steps = [
    {
      number: "01",
      title: "Data Submission & Ingestion",
      content: "A rigorous valuation starts with clean data. We accept direct exports from Tally and Zoho Books, or you can submit standard manual P&L and Balance Sheet data via our structured Excel templates. You provide the historical financials; we handle the structuring.",
    },
    {
      number: "02",
      title: "Deterministic Financial Modeling",
      content: "Vaelo does not use generative AI to guess numbers. Every model—whether a Discounted Cash Flow (DCF) valuation, a sensitivity grid, or accretion/dilution logic for deal feasibility—is strictly formula-driven, deterministic, and entirely auditable. We apply Wall Street-standard methodologies that hold up under scrutiny.",
    },
    {
      number: "03",
      title: "Rapid Turnaround & Delivery",
      content: "Time kills deals. You can expect the first draft of the client-ready report within 24 to 48 hours. The final output is delivered securely via WhatsApp or email directly to you, so you never have to log into yet another dashboard to retrieve your work.",
    },
    {
      number: "04",
      title: "Presentation & Iterative Refinement",
      content: "The report is white-labeled with your practice's branding—it is your advice, powered by our modeling. If you or your client want to see how a 2% change in terminal growth or a different WACC affects the final value, simply request an adjustment. We regenerate the updated model immediately.",
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
