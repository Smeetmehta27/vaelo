import { Reveal } from './animations/Reveal';

export function Problem() {
  return (
    <section className="bg-paper border-b border-stone-line py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">The Disconnect</span>
            <span className="w-6 h-px bg-bronze sm:hidden"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink mb-8 leading-tight">
            You are their single point of contact, but disconnected systems hold you back.
          </h2>
          <div className="font-sans text-ink-soft text-lg leading-[1.65] space-y-6 max-w-[640px] mx-auto">
            <p>
              Clients rely on you for their financial truth, yet there is no shared, live system connecting your practice to their business. Everything happens through fragmented spreadsheets, email threads, and WhatsApp messages.
            </p>
            <p>
              Between meetings, clients have no visibility into the status of their requests, while you spend countless hours manually reconciling data rather than providing strategic advice. The disconnect drains your time and limits their insight.
            </p>
            <p className="text-ink font-medium">
              Vaelo bridges this gap. A unified financial workspace that brings your analysis and your clients into one live platform.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
