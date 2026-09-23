import { Reveal, RevealGroup, RevealItem } from '@/components/animations/Reveal';
import { CtaSection } from '@/components/CtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Platform | Vaelo",
  description: "Vaelo isn't a report tool. It's the operating system a CA's practice runs on.",
};

export default function PlatformPage() {
  const modules = [
    {
      title: "Client & Practice Management",
      status: "Live",
      description: "Every client, every engagement, one record. We've consolidated your entire client roster into a single pane of glass. Track engagement status, team assignments, and basic firmographic data without bouncing between Excel and email.",
    },
    {
      title: "Document Collection",
      status: "Live",
      description: "Stop chasing. Request once, track status, done. Vaelo generates secure upload links that clients can use to submit their financials directly into your workspace. The system automatically tracks what's received and what's missing.",
    },
    {
      title: "Compliance Calendar",
      status: "Live",
      description: "GST, TDS, and ITR deadlines tracked automatically. Never miss a statutory deadline again with our built-in compliance engine. It tracks the unique filing requirements of each client and alerts your team ahead of time.",
    },
    {
      title: "Review & Approval",
      status: "Live",
      description: "Every report routes through structured review before reaching a client. We've built maker-checker workflows directly into the platform. Staff can draft analysis, but partners must sign off before anything is finalized or shared.",
    },
    {
      title: "Notice Management",
      status: "Live",
      description: "GST, Income-Tax, and TDS notices in one inbox, sorted by response deadline. Centralize all departmental notices, assign them to team members, and track the resolution workflow to ensure nothing falls through the cracks.",
    },
    {
      title: "Client Timeline",
      status: "Live",
      description: "Clients see what's outstanding and what's done via a secure link — no phone call required. Instead of fielding constant status checks, you can share a live, tokenized timeline that keeps clients updated automatically as work progresses.",
    },
    {
      title: "Billing & Collections",
      status: "Live",
      description: "Invoicing tied directly to completed work. Generate invoices the moment an engagement is marked complete. Track outstanding balances and send automated reminders to ensure your practice gets paid on time.",
    },
    {
      title: "Audited Report Core",
      status: "Live",
      description: "CMA, Feasibility, and Financial Health, every figure traced to its formula. Our deterministic modeling engines ensure your advice is built on solid, auditable math, separating data from presentation so you never have to doubt the output.",
    },
    {
      title: "AI-Assisted Automation",
      status: "Planned",
      description: "Document parsing, WhatsApp reminders, and notice triage, always human-confirmed before anything is sent or filed. We are building AI to draft and summarize, not to autonomously execute. Every action will require explicit CA approval.",
    },
  ];

  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="py-24 border-b border-stone-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-bronze"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">The Full Picture</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-serif font-[560] text-ink mb-6 leading-tight">
              Vaelo isn't a report tool. It's the operating system a CA's practice runs on.
            </h1>
            <p className="font-sans text-xl text-ink-soft leading-[1.65]">
              Report generation was the wedge. The full platform brings every part of practice work into one place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 bg-paper-dim border-b border-stone-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <RevealItem key={mod.title} className="bg-paper border border-stone-line rounded-[16px] p-8 flex flex-col h-full shadow-sm">
                <div className="mb-6">
                  <span className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                    mod.status === 'Live' 
                      ? 'bg-bronze-tint text-bronze-deep' 
                      : 'bg-stone/10 text-stone font-medium'
                  }`}>
                    {mod.status}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-[560] text-ink mb-4">{mod.title}</h3>
                <p className="font-sans text-ink-soft text-sm leading-[1.65] flex-grow">
                  {mod.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-16 pt-8 border-t border-stone-line">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone text-center">
              AI stays assistive throughout — draft-and-confirm only, never autonomous filing or unsupervised client messaging.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
