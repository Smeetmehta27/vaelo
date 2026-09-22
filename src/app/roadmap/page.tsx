import { Reveal, RevealGroup, RevealItem } from '@/components/animations/Reveal';
import { CtaSection } from '@/components/CtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roadmap | Vaelo",
  description: "Built in phases. Shipped honestly.",
};

export default function RoadmapPage() {
  const phases = [
    {
      id: "Foundation",
      status: "Shipped",
      description: "We have laid the massive foundational infrastructure required for a modern CA practice. This includes the complete Client Management module, Document Collection flows, the Client Timeline secure links, our deterministic Compliance Engine, Review Workflows, Notice Management, Billing, and Team Support.",
    },
    {
      id: "Next Up",
      status: "Next",
      description: "Our immediate focus is integrating AI-assisted automation to speed up tedious tasks without sacrificing control. We are building intelligent document parsing, automated WhatsApp reminders, and AI-driven notice triage. AI will always remain draft-and-confirm only—never autonomous.",
    },
    {
      id: "Looking Ahead",
      status: "Ahead",
      description: "As we scale, we will introduce predictive deadline-risk detection to automatically flag clients at risk of compliance failures. We are also exploring portal auto-fetch capabilities to pull data directly from government portals (feasibility-dependent based on API access).",
    },
  ];

  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="py-24 border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-bronze"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Where We Are</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-[560] text-ink mb-6">
              Built in phases. Shipped honestly.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Roadmap List */}
      <section className="py-24 bg-paper-dim border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="space-y-8">
            {phases.map((phase) => (
              <RevealItem key={phase.id} className="bg-paper border border-stone-line rounded-[16px] p-8 md:p-12 flex flex-col md:flex-row gap-8 shadow-sm">
                <div className="flex-shrink-0 md:w-56">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full ${
                      phase.status === 'Shipped' ? 'bg-bronze' :
                      phase.status === 'Next' ? 'bg-bronze/40' : 'bg-stone/30'
                    }`}></span>
                    <h3 className="font-serif font-[560] text-ink text-2xl">{phase.id}</h3>
                  </div>
                  <span className={`inline-block font-mono text-[11px] uppercase tracking-[0.16em] ${
                    phase.status === 'Shipped' ? 'text-bronze-deep' : 'text-stone font-medium'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                
                <div className={`flex-grow font-sans text-base leading-[1.65] ${
                  phase.status === 'Shipped' ? 'text-ink-soft' : 'text-stone'
                }`}>
                  {phase.description}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-16 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
              * This mirrors our actual delivery plan — nothing here is aspirational, it's what we're building next, in order.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
