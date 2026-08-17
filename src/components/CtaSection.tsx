import Link from 'next/link';
import { Reveal } from './animations/Reveal';

export function CtaSection() {
  return (
    <section className="bg-corporate-blue text-paper py-24">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6">
          Ready to elevate your advisory practice?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Request a sample report today to see the rigor of our analysis firsthand. First-time practices can commission their first client report at a discounted pilot rate.
        </p>
        <Link
          href="/contact"
          className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-corporate-blue bg-white hover:bg-slate-50 hover:-translate-y-[1px] hover:shadow-md transition-all duration-200"
        >
          Request a sample report
        </Link>
        <p className="mt-6 text-sm font-mono text-blue-200">
          No subscription required. Pay per report.
        </p>
      </Reveal>
    </section>
  );
}
