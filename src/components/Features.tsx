import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function Features() {
  const reports = [
    {
      name: "Valuation Report",
      description: "A comprehensive Discounted Cash Flow (DCF) model and comparable company analysis, complete with sensitivity tables. Perfect for M&A, capital raising, or dispute resolution.",
      for: "Client seeking investment or negotiating a sale.",
    },
    {
      name: "Deal Feasibility Report",
      description: "Accretion/dilution analysis, debt capacity modeling, and synergy evaluations. Helps your client understand if a proposed acquisition or merger makes financial sense.",
      for: "Client considering an acquisition or structural merger.",
    },
    {
      name: "Financial Health Snapshot",
      description: "A lightweight, recurring diagnostic that analyzes liquidity, solvency, and working capital cycles to flag potential distress before it becomes terminal.",
      for: "Quarterly or annual check-ins with key retainers.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-ledger-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-serif text-ink">What you get</h2>
          <p className="mt-4 text-slate text-lg">Institutional-grade deliverables, ready to be presented to your clients under your advisory banner.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report) => (
            <RevealItem key={report.name} className="border border-ledger-line p-8 flex flex-col h-full hover:border-corporate-blue/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 bg-white">
              <h3 className="text-xl font-serif font-medium text-ink mb-4">{report.name}</h3>
              <p className="text-slate text-sm leading-relaxed flex-grow mb-6">
                {report.description}
              </p>
              <div className="pt-6 border-t border-ledger-line/50 mt-auto">
                <span className="block text-xs font-mono uppercase tracking-wide text-slate mb-1">When to use:</span>
                <span className="text-sm font-medium text-ink">{report.for}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
