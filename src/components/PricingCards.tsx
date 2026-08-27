import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function PricingCards() {
  return (
    <section className="bg-paper py-24 border-b border-ledger-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 border-b border-ledger-line pb-8 text-center md:text-left">
          <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-slate leading-relaxed max-w-3xl">
            One setup fee, one monthly subscription. Full access to every module, unlimited clients, no hidden costs.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* One-Time Setup */}
          <RevealItem className="border border-ledger-line bg-white flex flex-col hover:border-corporate-blue/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="p-8 border-b border-ledger-line">
              <span className="block text-xs font-mono uppercase tracking-widest text-slate mb-4">One-Time Setup</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-mono font-semibold text-corporate-blue tracking-tight">₹2,000</span>
              </div>
              <span className="text-sm font-mono text-slate uppercase tracking-wider">one-time</span>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Full platform access from day one</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">All 3 core modules: CMA, Financial Health Snapshot, Feasibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Unlimited clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Your own branded workspace</span>
                </li>
              </ul>
            </div>
          </RevealItem>

          {/* Monthly Subscription */}
          <RevealItem className="border border-ledger-line bg-white flex flex-col hover:border-corporate-blue/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="p-8 border-b border-ledger-line">
              <span className="block text-xs font-mono uppercase tracking-widest text-slate mb-4">Monthly Subscription</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-mono font-semibold text-corporate-blue tracking-tight">₹300–500</span>
              </div>
              <span className="text-sm font-mono text-slate uppercase tracking-wider">per month</span>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Scales with your usage — pay based on how many reports you run</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Always-on workspace for you and your clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Run pipelines on demand, as often as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-precision-green mr-3 font-mono">✦</span>
                  <span className="text-sm text-slate">Direct founder support</span>
                </li>
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Notes Section */}
        <Reveal className="bg-white border border-ledger-line p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h4 className="font-mono text-sm uppercase tracking-wider text-slate font-semibold mb-4 border-b border-ledger-line pb-2">Pricing Principles</h4>
            <ul className="space-y-4 text-sm text-ink leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-corporate-blue">01</span>
                <span><strong>No feature gating:</strong> Every practice gets the full platform — all three modules, unlimited clients, white-labeled workspace. The only variable is usage.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-corporate-blue">02</span>
                <span><strong>No hidden fees:</strong> ₹2,000 to get started, ₹300–500/month ongoing. That is the entire cost structure.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 bg-paper border border-ledger-line p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-precision-green"></div>
            <h4 className="font-serif text-lg text-ink mb-2">Early-Access Founder Offer</h4>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Join Vaelo pre-launch to secure early access to the platform and lock in our foundational pricing. This offer is strictly limited to early adopting CA practices.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center text-sm font-medium text-corporate-blue hover:text-ink transition-colors duration-200"
            >
              Claim your spot →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
