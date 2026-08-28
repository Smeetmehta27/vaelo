import { Reveal } from './animations/Reveal';

export function PricingFaq() {
  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="border border-stone-line bg-paper p-10 lg:p-16 text-center">
          <h2 className="text-3xl font-serif text-ink mb-6">Why this pricing model?</h2>
          <div className="text-ink-soft text-lg leading-relaxed max-w-2xl mx-auto space-y-6">
            <p>
              Vaelo isn't just a report generator; it's a live, always-on financial workspace connecting you and your clients. A low one-time setup fee gets you on the platform immediately, and the monthly subscription keeps it running.
            </p>
            <p>
              Your monthly cost scales gently with usage — the more reports you run, the closer you are to the upper end of the ₹300–500 range. A quieter month costs less.
            </p>
            <p className="text-ink font-medium">
              This means you never pay for capacity you don't use, and you never hit a ceiling when your practice is busy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
