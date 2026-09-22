import Link from 'next/link';
import { Reveal } from './animations/Reveal';

export function RoadmapTeaser() {
  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">Where We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-[560] text-ink mb-6">
            Built in phases. Shipped honestly.
          </h2>
          <p className="text-ink-soft text-lg font-sans leading-[1.65] mb-8">
            We've shipped the foundation of the workspace. AI-assisted automation is up next.
          </p>
          <Link href="/roadmap" className="inline-block font-sans text-base text-bronze-deep font-medium hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">
            See our roadmap &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
