import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from '@/components/animations/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Invest | Vaelo",
  description: "Vaelo investor relations and pre-seed opportunity.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function InvestPage() {
  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="py-24 border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-bronze"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">For Investors</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-serif font-[560] text-ink mb-6">
              The one workspace a Chartered Accountant opens every morning.
            </h1>
            <p className="font-sans text-xl text-ink-soft leading-[1.65]">
              Institutional-grade financial analysis, built specifically for the independent CA practice in India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Opportunity (Stats Grid) */}
      <section className="py-16 bg-paper-dim border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-8 border-b border-stone-line pb-4">The Market Opportunity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="font-serif font-[560] text-4xl text-ink mb-2">4–5L</span>
                <span className="font-sans text-sm text-ink-soft leading-[1.65]">Practicing Chartered Accountants in India (ICAI, 2025)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-[560] text-4xl text-ink mb-2">1,00,000+</span>
                <span className="font-sans text-sm text-ink-soft leading-[1.65]">Registered CA firms nationwide</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-[560] text-4xl text-ink mb-2">72%</span>
                <span className="font-sans text-sm text-ink-soft leading-[1.65]">Are single-partner independent practices (ICAI data, via ETCFO)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Shipped & Business Model */}
      <section className="py-24 border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealItem>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-6 border-b border-stone-line pb-4">Vaelo Today (What's Shipped)</h2>
              <ul className="space-y-4 font-sans text-sm text-ink leading-[1.65]">
                <li className="flex gap-4">
                  <span className="text-bronze font-medium pt-0.5">—</span>
                  <span className="text-ink-soft">Three deterministic, audited report pipelines running live: CMA, Deal Feasibility, and Financial Health Snapshot.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-bronze font-medium pt-0.5">—</span>
                  <span className="text-ink-soft">69 passing automated tests validating the core financial engine.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-bronze font-medium pt-0.5">—</span>
                  <span className="text-ink-soft">Multi-format output support: PDF, DOCX, and XLSX export.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-bronze font-medium pt-0.5">—</span>
                  <span className="text-ink-soft">Client & Practice Management, Document Collection, Review & Approval workflows, and a secure Client Timeline.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-bronze font-medium pt-0.5">—</span>
                  <span className="text-ink-soft">Compliance Calendar, Notice Management, and integrated Billing & Collections.</span>
                </li>
              </ul>
            </RevealItem>

            <RevealItem>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-6 border-b border-stone-line pb-4">Business Model</h2>
              <div className="font-sans text-sm text-ink-soft leading-[1.65] space-y-6">
                <p>
                  Vaelo operates on a transparent, practice-friendly model without feature gating or per-seat limits:
                </p>
                <div className="p-6 bg-paper-dim border border-stone-line rounded-[16px]">
                  <p className="font-serif font-[560] text-2xl text-ink mb-1">₹2,000</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft mb-4">One-time setup fee</p>
                  
                  <p className="font-serif font-[560] text-2xl text-ink mb-1">₹300–500</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">Per month (scaled by usage)</p>
                </div>
                <p>
                  View the complete breakdown on our <Link href="/pricing" className="text-stone hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Pricing page</Link>.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* The Ask */}
      <section className="py-24 bg-paper-dim border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-serif font-[560] text-ink mb-8">The Ask</h2>
            <p className="font-sans text-lg text-ink-soft leading-[1.65] mb-8 max-w-2xl">
              Vaelo is raising a pre-seed round to accelerate our go-to-market motion and scale the platform's core infrastructure. We are actively seeking:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-paper border border-stone-line rounded-[20px] p-8">
                <h3 className="font-serif font-[560] text-xl text-ink mb-3">Capital</h3>
                <p className="font-sans text-sm text-ink-soft leading-[1.65]">To support Phase 2–3 build velocity and engineering scale.</p>
              </div>
              <div className="bg-paper border border-stone-line rounded-[20px] p-8">
                <h3 className="font-serif font-[560] text-xl text-ink mb-3">Mentorship</h3>
                <p className="font-sans text-sm text-ink-soft leading-[1.65]">From operators who have successfully built and scaled B2B SaaS in India.</p>
              </div>
              <div className="bg-paper border border-stone-line rounded-[20px] p-8">
                <h3 className="font-serif font-[560] text-xl text-ink mb-3">Network Access</h3>
                <p className="font-sans text-sm text-ink-soft leading-[1.65]">To connect with and onboard our foundational founding-CA cohort for critical early validation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-32 bg-ink text-paper text-center">
        <Reveal className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-paper mb-6">Interested in investing?</h2>
          <p className="font-sans text-stone text-lg leading-[1.65] mb-12">
            Let's discuss how we can build the definitive financial OS for Indian accounting practices.
          </p>
          <a
            href="mailto:vaelo.team@gmail.com"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep transition-all duration-200 mb-8"
          >
            Get in touch
          </a>
          <p className="font-sans text-sm text-stone/80">
            Smeet Mehta, Founder
          </p>
        </Reveal>
      </section>
    </main>
  );
}
