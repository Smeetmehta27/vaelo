import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Data Submission",
      description: "Submit your client's raw financials via a secure portal or email for a specific event—such as a loan application, potential sale, merger, or investor conversation.",
    },
    {
      id: "02",
      title: "Deterministic Modeling",
      description: "Vaelo runs rigorous valuation and feasibility modeling (including DCF, sensitivity analysis, and accretion/dilution). Every output is strictly formula-driven and auditable, never a black box.",
    },
    {
      id: "03",
      title: "Report Delivery",
      description: "Within 24 to 48 hours, you receive a beautifully formatted, client-ready PDF report branded with your firm's details, delivered directly via WhatsApp or secure email.",
    },
    {
      id: "04",
      title: "Iterative Refinement",
      description: "Review the model with your client. If variables change, simply request adjusted assumptions and we will generate an updated report for you immediately.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-ledger-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <h2 className="text-3xl font-serif text-ink">How it works</h2>
          <p className="mt-4 text-slate text-lg">A straightforward process designed around the working rhythm of a CA practice.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <RevealItem key={step.id} className="relative group cursor-default">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-ledger-line -ml-4 z-0"></div>
              )}
              
              <div className="relative z-10 bg-paper p-2 -m-2 rounded-md transition-all duration-200 group-hover:bg-white group-hover:shadow-sm group-hover:-translate-y-1">
                <div className="w-12 h-12 border-2 border-corporate-blue text-corporate-blue font-mono font-bold flex items-center justify-center rounded-sm mb-6 bg-white shadow-sm transition-colors duration-200 group-hover:bg-corporate-blue group-hover:text-white">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
