import { CtaSection } from "@/components/CtaSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vaelo",
  description: "The story behind Vaelo: Institutional rigor for independent practices.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-paper py-24 border-b border-ledger-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 border-b border-ledger-line pb-8">
            <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">The Story Behind Vaelo</h1>
            <p className="text-sm font-mono text-slate uppercase tracking-wider">
              Institutional rigor for independent practices
            </p>
          </Reveal>

          <RevealGroup className="space-y-8 text-lg text-ink leading-relaxed">
            <RevealItem>
              <p>
                Vaelo was built by a solo founder—Smeet Mehta, a B.Tech CSE AI/ML student at VIT Chennai—with a singular goal: to bring institutional-grade financial analysis down to a price point and workflow that works for India's smallest CA practices.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                Independent Chartered Accountants are increasingly asked for strategic advice—valuations, M&A feasibility, and health modeling. However, the tooling required to deliver this rigor is often locked behind expensive enterprise licenses, and building deterministic models from scratch takes time that working practices simply don't have.
              </p>
            </RevealItem>
            
            <RevealItem className="my-12 flex gap-4 bg-white border border-ledger-line p-8 shadow-sm">
              <div className="hidden sm:flex shrink-0 w-12 h-12 bg-corporate-blue text-white rounded-sm items-center justify-center font-mono font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-serif text-ink mb-2">A Registered Indian Enterprise</h3>
                <p className="text-base text-slate">
                  Vaelo is a proudly Indian venture, Udyam-registered in Gujarat. We operate with full transparency and are dedicated to serving the Indian CA community with secure, reliable tools.
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <h2 className="text-2xl font-serif text-ink mt-12 mb-6">What makes us different</h2>
              <p>
                Vaelo bridges the gap in the market by being built specifically for solo and small CA practices, not massive enterprise finance teams. We do not use "black-box" AI tools to guess numbers. Every model is entirely deterministic, strictly formula-driven, and fully auditable. The final output is delivered through your practice's own client relationship, empowering your advisory role rather than replacing it.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                Being an early-stage product built by one person is our greatest strength. It means you have direct access to the founder. We are hyper-responsive to feedback, and we build features based exactly on what your practice needs, without bureaucratic delays or enterprise bloat. 
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}
