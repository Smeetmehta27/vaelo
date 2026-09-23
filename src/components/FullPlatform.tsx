import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function FullPlatform() {
  const modules = [
    {
      title: "Client & Practice Management",
      status: "Live",
      description: "Every client, every engagement, one record.",
    },
    {
      title: "Document Collection",
      status: "Live",
      description: "Stop chasing. Request once, track status, done.",
    },
    {
      title: "Compliance Calendar",
      status: "Live",
      description: "GST, TDS, and ITR deadlines tracked automatically.",
    },
    {
      title: "Review & Approval",
      status: "Live",
      description: "Every report routes through structured review before reaching a client.",
    },
    {
      title: "Notice Management",
      status: "Live",
      description: "GST, Income-Tax, and TDS notices in one inbox, sorted by response deadline.",
    },
    {
      title: "Client Timeline",
      status: "Live",
      description: "Clients see what's outstanding and what's done via a secure link — no phone call required.",
    },
    {
      title: "Billing & Collections",
      status: "Live",
      description: "Invoicing tied directly to completed work.",
    },
    {
      title: "Audited Report Core",
      status: "Live",
      description: "CMA, Feasibility, and Financial Health, every figure traced to its formula.",
    },
    {
      title: "AI-Assisted Automation",
      status: "Planned",
      description: "Document parsing, WhatsApp reminders, and notice triage, always human-confirmed before anything is sent or filed.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">The Full Picture</span>
          </div>
          <h2 className="text-[clamp(1.875rem,3vw,3rem)] font-serif font-[560] text-ink mb-6">
            Vaelo isn't a report tool. It's the operating system a CA's practice runs on.
          </h2>
          <p className="text-ink-soft text-lg font-sans max-w-3xl leading-[1.65]">
            Report generation was the wedge. The full platform brings every part of practice work into one place.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod) => (
            <RevealItem key={mod.title} className="bg-paper-dim border border-stone-line rounded-[16px] p-6 flex flex-col h-full">
              <div className="mb-4">
                <span className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                  mod.status === 'Live' 
                    ? 'bg-bronze-tint text-bronze-deep' 
                    : 'bg-stone/10 text-stone font-medium'
                }`}>
                  {mod.status}
                </span>
              </div>
              <h3 className="text-lg font-serif font-[560] text-ink mb-3">{mod.title}</h3>
              <p className="font-sans text-ink-soft text-sm leading-[1.65] flex-grow">
                {mod.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="border-t border-stone-line pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            AI stays assistive throughout — draft-and-confirm only, never autonomous filing or unsupervised client messaging.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
