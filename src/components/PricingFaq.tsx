import { Reveal } from './animations/Reveal';

export function PricingFaq() {
  return (
    <section className="bg-white py-24 border-b border-ledger-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="border border-ledger-line p-10 lg:p-16 text-center">
          <h2 className="text-3xl font-serif text-ink mb-6">Why per-report, not a monthly platform fee?</h2>
          <div className="text-slate text-lg leading-relaxed max-w-2xl mx-auto space-y-6">
            <p>
              Most enterprise finance software forces you into an expensive annual seat license, regardless of how often you use the tool. But your practice's advisory needs aren't always linear. 
            </p>
            <p>
              Vaelo is built for the moments that matter—a crucial loan application, a potential sale, or a strategic merger—not for day-to-day bookkeeping monitoring. 
            </p>
            <p className="text-ink font-medium">
              We believe you should only pay for institutional-grade rigor when you actually need it. Our pricing matches how independent practices actually operate.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
