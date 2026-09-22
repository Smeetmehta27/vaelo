import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function BuildProgress() {
  const phases = [
    {
      id: "Foundation",
      status: "Shipped",
      description: "Client management, document collection, client timeline, compliance engine, review workflow, notice management, billing, team support",
    },
    {
      id: "Next Up",
      status: "Next",
      description: "AI-assisted document parsing, WhatsApp reminders, notice triage — always human-confirmed",
    },
    {
      id: "Looking Ahead",
      status: "Ahead",
      description: "Predictive deadline-risk detection, portal auto-fetch (feasibility-dependent)",
    },
  ];

  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Where We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink">
            Built in phases. Shipped honestly.
          </h2>
        </Reveal>

        <RevealGroup className="space-y-6 max-w-4xl">
          {phases.map((phase, index) => (
            <RevealItem key={phase.id} className="bg-paper border border-stone-line rounded-[16px] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
              <div className="flex-shrink-0 sm:w-48">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    phase.status === 'Shipped' ? 'bg-bronze' :
                    phase.status === 'Next' ? 'bg-bronze/40' : 'bg-stone/30'
                  }`}></span>
                  <h3 className="font-serif font-[560] text-ink text-xl">{phase.id}</h3>
                </div>
                <span className={`inline-block font-mono text-[11px] uppercase tracking-[0.16em] ${
                  phase.status === 'Shipped' ? 'text-bronze-deep' : 'text-stone font-medium'
                }`}>
                  {phase.status}
                </span>
              </div>
              
              <div className={`flex-grow font-sans text-sm leading-[1.65] ${
                phase.status === 'Shipped' ? 'text-ink-soft' : 'text-stone'
              }`}>
                {phase.description}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            * This mirrors our actual delivery plan — nothing here is aspirational, it's what we're building next, in order.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
