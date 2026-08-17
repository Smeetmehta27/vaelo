import Link from 'next/link';
import Image from 'next/image';
import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ink text-paper border-t border-ledger-line/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <RevealItem className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="bg-paper p-1.5 rounded-sm shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Image src="/branding/vaelo-icon.svg" alt="Vaelo Icon" width={28} height={28} className="w-7 h-7" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-paper transition-opacity duration-200 group-hover:opacity-90">Vaelo</span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 max-w-xs leading-relaxed">
              Institutional-grade financial analysis, purpose-built for independent Chartered Accountants in India.
            </p>
          </RevealItem>
          
          <RevealItem>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">How It Works</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </RevealItem>
        </RevealGroup>
        
        <Reveal className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 font-mono">
            &copy; {currentYear} Vaelo. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-4 md:mt-0 font-mono">
            Encrypted & DPDP Act Conscious
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
