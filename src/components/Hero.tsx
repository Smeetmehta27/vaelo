import Link from 'next/link';
import { Reveal } from './animations/Reveal';
import { LiveModelPreview } from './LiveModelPreview';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Copy */}
          <Reveal className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink leading-[1.1] tracking-tight">
              The collaborative financial workspace for CAs and their clients.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Equip your CA practice with structured financial intelligence across CMA, financial health, and feasibility. Run pipelines on demand from a self-serve dashboard, while your clients log in to see the actual reports and analysis you've run for them.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep hover:-translate-y-[1px] hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                Start Free
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex justify-center items-center px-6 py-3 border border-ink text-base font-medium rounded-sm text-ink bg-transparent hover:bg-paper-dim hover:-translate-y-[1px] hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                See how it works
              </Link>
            </div>
          </Reveal>

          {/* Signature Visual Element: The Dynamic Ledger */}
          <LiveModelPreview />

        </div>
      </div>
    </section>
  );
}
