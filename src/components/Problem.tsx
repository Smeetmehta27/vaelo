import { Reveal } from './animations/Reveal';

export function Problem() {
  return (
    <section className="bg-white border-b border-ledger-line py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-serif text-ink mb-6">
            Strategic advice is expected. Producing it shouldn't drain your practice.
          </h2>
          <div className="font-sans text-slate text-lg leading-relaxed space-y-6">
            <p>
              Your clients are increasingly looking to you for strategic guidance during the moments that matter most—a critical loan application, an approaching acquisition, or negotiating with an investor.
            </p>
            <p>
              But producing investment-grade valuation or deal feasibility models manually demands hours of modeling that most small and solo practices simply don't have. Enterprise software is built and priced for large corporate finance teams, not independent Chartered Accountants.
            </p>
            <p className="text-ink font-medium">
              Vaelo bridges this gap. We provide the heavy quantitative lifting, so you can focus on advising your client with confidence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
