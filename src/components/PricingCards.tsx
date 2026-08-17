import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function PricingCards() {
  const reports = [
    {
      name: "Valuation Report",
      price: "₹1,500 – 3,000",
      unit: "per report",
      features: [
        "Comprehensive DCF Model",
        "Comparable company analysis",
        "Sensitivity tables & grids",
        "White-labeled PDF export"
      ]
    },
    {
      name: "Deal Feasibility Report",
      price: "₹2,000 – 4,000",
      unit: "per report",
      features: [
        "Accretion/dilution analysis",
        "Debt capacity modeling",
        "Synergy evaluations",
        "Pre/Post-transaction structuring"
      ]
    },
    {
      name: "Financial Health Snapshot",
      price: "₹149 – 299",
      unit: "per snapshot",
      features: [
        "Liquidity & solvency ratios",
        "Working capital cycle analysis",
        "Distress flagging (Altman Z-score)",
        "Designed for recurring check-ins"
      ]
    }
  ];

  return (
    <section className="bg-paper py-24 border-b border-ledger-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 border-b border-ledger-line pb-8 text-center md:text-left">
          <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">Transparent, Per-Engagement Pricing</h1>
          <p className="text-xl text-slate leading-relaxed max-w-3xl">
            No mandatory subscriptions. No complex tiers. Pay only for the rigor you need, exactly when your client needs it.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {reports.map((report) => (
            <RevealItem key={report.name} className="border border-ledger-line bg-white flex flex-col hover:border-corporate-blue/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
              <div className="p-8 border-b border-ledger-line">
                <h3 className="text-xl font-serif font-medium text-ink mb-6">{report.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-mono font-semibold text-corporate-blue tracking-tight">{report.price}</span>
                </div>
                <span className="text-sm font-mono text-slate uppercase tracking-wider">{report.unit}</span>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {report.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-precision-green mr-3 font-mono">✦</span>
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Notes Section */}
        <Reveal className="bg-white border border-ledger-line p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h4 className="font-mono text-sm uppercase tracking-wider text-slate font-semibold mb-4 border-b border-ledger-line pb-2">Pricing Principles</h4>
            <ul className="space-y-4 text-sm text-ink leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-corporate-blue">01</span>
                <span><strong>No subscriptions:</strong> Pricing is strictly per-engagement. Start with a single report without any ongoing commitment.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-corporate-blue">02</span>
                <span><strong>No hidden fees:</strong> What you see is the final cost structure. A clean invoice is generated per request.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 bg-paper border border-ledger-line p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-precision-green"></div>
            <h4 className="font-serif text-lg text-ink mb-2">First-Report Pilot Offer</h4>
            <p className="text-sm text-slate leading-relaxed mb-4">
              We want to prove our rigorous modeling firsthand. Your first commissioned report is offered at a significant discount (or completely free) in exchange for your candid feedback on the output quality.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
