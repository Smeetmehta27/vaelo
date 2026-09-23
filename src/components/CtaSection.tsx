import Link from 'next/link';
import { Reveal } from './animations/Reveal';
import { VaeloMark } from './VaeloMark';

export function CtaSection() {
  return (
    <section className="relative bg-ink text-paper py-24 overflow-hidden border-t border-stone-line">
      {/* Subtle Oversized Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <VaeloMark className="w-[120%] max-w-[800px] text-paper" />
      </div>

      <Reveal className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-6 h-px bg-bronze"></span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze font-medium">Get Started</span>
          <span className="w-6 h-px bg-bronze sm:hidden"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-paper mb-6">
          Ready to elevate your advisory practice?
        </h2>
        <p className="font-sans text-stone text-lg mb-10 max-w-[640px] mx-auto leading-[1.65]">
          Join the waitlist today to secure your spot in our founding-CA cohort and see the rigor of our analysis firsthand.
        </p>
        <Link
          href="/signup"
          className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
        >
          Join the waitlist
        </Link>
        <div className="mt-8">
          <Link href="/roadmap" className="inline-flex items-center text-sm font-medium text-stone hover:text-paper hover:underline hover:decoration-stone hover:underline-offset-4 transition-all duration-200 group">
            See what's live today <span className="ml-1 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.16em] font-mono text-stone/80">
          ₹2,000 one-time setup · ₹300–500/month · Full platform access
        </p>
      </Reveal>
    </section>
  );
}
