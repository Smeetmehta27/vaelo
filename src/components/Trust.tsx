import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function Trust() {
  const points = [
    {
      title: "Built for independent practices",
      description: "We aren't trying to sell enterprise software to corporate CFOs. We built Vaelo exclusively to empower solo and small CA firms with the tools they need to grow their advisory revenue.",
    },
    {
      title: "Auditable & Formula-Driven",
      description: "You stake your reputation on your advice. By separating our canonical financial engines from the presentation layer, every metric, ratio, and scenario is fully traceable back to its underlying formula. No black-box AI guesswork.",
    },
    {
      title: "DPDP Act-Conscious Privacy",
      description: "Client financial data is highly sensitive. Our infrastructure is encrypted at rest and in transit, with strict data isolation per client. We never use your data to train public models.",
      link: "/privacy-policy",
      linkText: "Read our Privacy Policy",
    },
    {
      title: "One Workspace, Not More Tools",
      description: "You already juggle Tally, Excel, emails, and WhatsApp. Vaelo consolidates client financial work into a single live workspace, giving both you and your client a unified view instead of bouncing reports across disconnected channels.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Trust & Security</span>
            <span className="w-6 h-px bg-bronze sm:hidden"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink">Why CAs trust Vaelo</h2>
          <p className="mt-4 text-ink-soft text-lg font-sans max-w-[640px] mx-auto leading-[1.65]">We understand the reality of running a professional practice in India.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((point) => (
            <RevealItem key={point.title} className="bg-paper-dim border border-stone-line rounded-[20px] p-8 flex flex-col h-full">
              <h3 className="text-xl font-serif font-[560] text-ink mb-4">{point.title}</h3>
              <p className="font-sans text-ink-soft text-sm leading-[1.65] flex-grow mb-6">
                {point.description}
              </p>
              {point.link && (
                <div className="mt-auto pt-4 border-t border-stone-line">
                  <Link href={point.link} className="font-sans text-bronze-deep text-sm font-medium hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200 inline-flex">
                    {point.linkText} &rarr;
                  </Link>
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
