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
    <section className="bg-paper py-24 border-b border-ledger-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-ink">Why CAs trust Vaelo</h2>
          <p className="mt-4 text-slate text-lg">We understand the reality of running a professional practice in India.</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {points.map((point) => (
            <RevealItem key={point.title} className="flex flex-col">
              <h3 className="text-lg font-semibold text-ink mb-3">{point.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-3">
                {point.description}
              </p>
              {point.link && (
                <Link href={point.link} className="text-corporate-blue text-sm font-medium hover:text-ink transition-colors duration-200 relative group inline-flex max-w-max">
                  <span>{point.linkText} &rarr;</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-ink transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
