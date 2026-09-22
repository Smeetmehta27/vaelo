import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function PricingCards() {
  return (
    <section className="bg-paper py-24 border-b border-stone-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 border-b border-stone-line pb-8 text-center md:text-left">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Pricing</span>
            <span className="w-6 h-px bg-bronze md:hidden"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-[560] text-ink mb-6">Simple, transparent pricing</h1>
          <p className="font-sans text-lg text-ink-soft leading-[1.65] max-w-3xl md:mx-0 mx-auto">
            One setup fee, one monthly subscription. Full access to every module, unlimited clients, no hidden costs.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* One-Time Setup */}
          <RevealItem className="border border-stone-line bg-paper-dim rounded-[20px] flex flex-col">
            <div className="p-8 border-b border-stone-line">
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft mb-4">One-Time Setup</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-serif font-[560] text-ink">₹2,000</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">one-time</span>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Full platform access from day one</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">All 3 core modules: CMA, Financial Health Snapshot, Feasibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Unlimited clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Your own branded workspace</span>
                </li>
              </ul>
            </div>
          </RevealItem>

          {/* Monthly Subscription */}
          <RevealItem className="border border-stone-line bg-paper-dim rounded-[20px] flex flex-col">
            <div className="p-8 border-b border-stone-line">
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft mb-4">Monthly Subscription</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-serif font-[560] text-ink">₹300–500</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">per month</span>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Scales with your usage — pay based on how many reports you run</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Always-on workspace for you and your clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Run pipelines on demand, as often as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronze mr-3 font-medium">—</span>
                  <span className="font-sans text-sm text-ink-soft leading-[1.65]">Direct founder support</span>
                </li>
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Notes Section */}
        <Reveal className="bg-paper-dim border border-stone-line rounded-[20px] p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-6 border-b border-stone-line pb-4">Why this pricing?</h4>
            <ul className="space-y-6 font-sans text-sm text-ink leading-[1.65]">
              <li className="flex gap-4">
                <span className="font-mono text-bronze-deep pt-0.5">01</span>
                <span className="text-ink-soft"><strong className="text-ink font-medium">No per-seat pricing:</strong> One subscription covers your entire practice and unlimited clients. Your cost scales with actual workload, not the length of your client roster.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-bronze-deep pt-0.5">02</span>
                <span className="text-ink-soft"><strong className="text-ink font-medium">Priced for reality:</strong> We price against the real cost of your time today—the manual hours spent chasing data on WhatsApp and wrestling with Excel—not against enterprise SaaS tools.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 bg-paper border border-stone-line rounded-[16px] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-bronze"></div>
            <h4 className="font-serif font-[560] text-xl text-ink mb-3">Early-Access Founder Offer</h4>
            <p className="font-sans text-sm text-ink-soft leading-[1.65] mb-6">
              Join Vaelo pre-launch to secure early access to the platform and lock in our foundational pricing. This offer is strictly limited to early adopting CA practices.
            </p>
            <Link
              href="/signup"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep transition-all duration-200"
            >
              Claim your spot
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <p className="font-mono text-[11px] text-ink-soft">
            * Indicative pricing — subject to change as we validate with our founding-CA cohort.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
