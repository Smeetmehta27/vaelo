import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Onboard your practice",
      description: "Sign up and set up your firm's secure workspace. Establish your branding and operational defaults in minutes.",
    },
    {
      id: "02",
      title: "Add your clients",
      description: "Share progress with clients seamlessly. They receive a secure, tokenized timeline to track document requests and project status — keeping everyone aligned without the friction of creating accounts.",
    },
    {
      id: "03",
      title: "Run pipelines instantly",
      description: "Run CMA, Financial Health, or Feasibility pipelines on demand. Results appear in your dashboard instantly, built on deterministic, auditable modeling with no black-box AI.",
    },
    {
      id: "04",
      title: "Share and advise",
      description: "Review the formula-driven output live with your client. Export branded reports when needed, and track changes seamlessly as new financial data arrives.",
    },
  ];

  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">How it works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink">A seamless process</h2>
          <p className="mt-4 text-ink-soft text-lg font-sans max-w-[640px]">A straightforward process designed around the working rhythm of a CA practice.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <RevealItem key={step.id} className="relative group cursor-default">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-[1px] bg-stone-line -ml-4 z-0"></div>
              )}
              
              <div className="relative z-10 p-2 -m-2">
                <div className="w-10 h-10 bg-bronze-tint text-bronze-deep font-mono font-medium flex items-center justify-center rounded-full mb-6 relative z-10">
                  {step.id}
                </div>
                <h3 className="text-xl font-serif font-[560] text-ink mb-3">{step.title}</h3>
                <p className="font-sans text-ink-soft text-sm leading-[1.65]">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
