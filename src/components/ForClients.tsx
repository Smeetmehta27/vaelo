import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function ForClients() {
  const points = [
    {
      title: "Clear Visibility Into Status",
      description: "When you bring a client onto Vaelo, they receive a secure, token-based timeline showing exactly what documents have been received, what's outstanding, and when reports are finalized — keeping them updated without exposing complex analytical models.",
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
      description: "Use this structured timeline to move from reactive year-end reporting to proactive, ongoing strategic advisory.",
    },
  ];

  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">For Your Clients</span>
            <span className="w-6 h-px bg-bronze sm:hidden"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink">A powerful window for your clients</h2>
          <p className="mt-4 text-ink-soft text-lg font-sans max-w-[640px] mx-auto leading-[1.65]">Give your clients direct access to their financial truth, securely powered by your practice.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {points.map((point) => (
            <RevealItem key={point.title} className="flex flex-col">
              <h3 className="text-xl font-serif font-[560] text-ink mb-3">{point.title}</h3>
              <p className="font-sans text-ink-soft text-sm leading-[1.65] mb-3">
                {point.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
