import Link from 'next/link';
import { VaeloLogo } from './VaeloLogo';
import { Reveal, RevealGroup, RevealItem } from './animations/Reveal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ink text-paper border-t border-stone/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <RevealItem className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <VaeloLogo variant="full" colorMode="light" symbolSize={28} />
            </Link>
            <p className="mt-4 font-sans text-sm text-stone max-w-xs leading-[1.65]">
              Institutional-grade financial analysis in a live workspace, connecting independent Chartered Accountants to their clients.
            </p>
            <Link href="/contact" className="mt-6 inline-block font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">
              Get in touch →
            </Link>
          </RevealItem>
          
          <RevealItem>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">How It Works</Link>
              </li>
              <li>
                <Link href="/platform" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Platform</Link>
              </li>
              <li>
                <Link href="/roadmap" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Roadmap</Link>
              </li>
              <li>
                <Link href="/pricing" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/invest" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Invest</Link>
              </li>
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="font-sans text-sm text-stone hover:text-paper hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">Terms of Service</Link>
              </li>
            </ul>
          </RevealItem>
        </RevealGroup>
        
        <Reveal className="mt-12 pt-8 border-t border-stone/30 flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-[11px] text-stone/60">
            &copy; {currentYear} Vaelo. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-stone/60 mt-4 md:mt-0">
            Encrypted &amp; DPDP Act Conscious
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
