import { Reveal } from './animations/Reveal';

export function Problem() {
  return (
    <section className="bg-paper-dim border-b border-stone-line py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-serif text-ink mb-6">
            You are their single point of contact, but disconnected systems hold you back.
          </h2>
          <div className="font-sans text-ink-soft text-lg leading-relaxed space-y-6">
            <p>
              Clients rely on you for their financial truth, yet there is no shared, live system connecting your practice to their business. Everything happens through fragmented spreadsheets, email threads, and WhatsApp messages.
            </p>
            <p>
              Between meetings, clients have no visibility into their own numbers, while you spend countless hours manually reconciling data rather than providing strategic advice. The disconnect drains your time and limits their insight.
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
