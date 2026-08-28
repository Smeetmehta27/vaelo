import Link from 'next/link';
import { Reveal } from './animations/Reveal';

export function CtaSection() {
  return (
    <section className="bg-ink text-paper py-24">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6">
          Ready to elevate your advisory practice?
        </h2>
        <p className="text-stone text-lg mb-10 max-w-2xl mx-auto">
          Sign up today to see the rigor of our analysis firsthand. First-time practices can secure our founding-member subscription rate.
        </p>
        <Link
          href="/signup"
          className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-ink bg-paper hover:bg-paper-dim hover:-translate-y-[1px] hover:shadow-md transition-all duration-200"
        >
          Start Free
        </Link>
        <p className="mt-6 text-sm font-mono text-stone">
          ₹2,000 one-time setup · ₹300–500/month · Full platform access.
        </p>
      </Reveal>
    </section>
  );
}
