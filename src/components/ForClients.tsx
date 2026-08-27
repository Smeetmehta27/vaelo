import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function ForClients() {
  const points = [
    {
      title: "Full Visibility Into Your Work",
      description: "When you bring a client onto Vaelo, they see the actual reports and analysis you've generated for them — CMA data, financial health diagnostics, feasibility models — accessible anytime, not just at your annual meeting.",
    },
    {
      title: "Powered by Trusted Models",
      description: "Your clients see the exact same deterministic, auditable numbers you rely on. It's not a separate consumer app with less rigorous math—it's a direct window into the financial pipelines you manage for them.",
    },
    {
      title: "Permission-Scoped Access",
      description: "You remain in complete control. Decide exactly which models, pipelines, and scenarios your client can see, ensuring they only view finalized, CA-approved insights.",
    },
    {
      title: "Strengthen Your Advisory",
      description: "Use this continuous visibility to move from reactive year-end reporting to proactive, ongoing strategic advisory.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-ledger-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-ink">A powerful window for your clients</h2>
          <p className="mt-4 text-slate text-lg">Give your clients direct access to their financial truth, securely powered by your practice.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {points.map((point) => (
            <RevealItem key={point.title} className="flex flex-col">
              <h3 className="text-lg font-semibold text-ink mb-3">{point.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-3">
                {point.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
