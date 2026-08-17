import Link from 'next/link';
import { Reveal } from './animations/Reveal';
import { LiveModelPreview } from './LiveModelPreview';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-ledger-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Copy */}
          <Reveal className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink leading-[1.1] tracking-tight">
              Institutional-grade financial analysis for your SME clients.
            </h1>
            <p className="mt-6 text-lg text-slate leading-relaxed">
              Equip your CA practice with deterministic valuation, deal feasibility, and financial health modeling. Submit client financials and receive a rigorous, client-ready report delivered via WhatsApp or PDF in 24-48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-paper bg-corporate-blue hover:bg-corporate-blue/90 hover:-translate-y-[1px] hover:shadow-md transition-all duration-200"
              >
                Request a Sample Report
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex justify-center items-center px-6 py-3 border border-ledger-line text-base font-medium rounded-sm text-ink bg-white hover:bg-slate-50 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-200"
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
