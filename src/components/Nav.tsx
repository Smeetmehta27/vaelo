"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { VaeloLogo } from './VaeloLogo';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-stone-line bg-paper sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <VaeloLogo variant="full" colorMode="dark" symbolSize={28} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-sm font-medium text-ink-soft hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">
              How it works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-ink-soft hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-ink-soft hover:text-ink hover:underline hover:decoration-bronze hover:underline-offset-4 transition-all duration-200">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-ink-soft group-hover:text-ink transition-all duration-200 focus:outline-none">
                More
                <svg className="w-3.5 h-3.5 text-stone group-hover:text-ink transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-40 bg-paper border border-stone-line rounded-sm shadow-sm py-2 flex flex-col">
                  <Link href="/platform" className="px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">Platform</Link>
                  <Link href="/roadmap" className="px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">Roadmap</Link>
                  <Link href="/invest" className="px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">Invest</Link>
                  <Link href="/contact" className="px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">Contact</Link>
                </div>
              </div>
            </div>
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              Join the waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink-soft hover:text-ink focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-stone-line bg-paper"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/how-it-works"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-paper-dim border-b border-stone-line/50"
              >
                How it works
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-paper-dim border-b border-stone-line/50"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-paper-dim border-b border-stone-line/50"
              >
                About
              </Link>
              <div className="pt-2 pb-2">
                <span className="block px-3 py-2 text-sm font-mono uppercase tracking-[0.16em] text-stone font-medium">More</span>
                <div className="pl-4 border-l border-stone-line ml-4 mt-1 space-y-1">
                  <Link
                    href="/platform"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-ink-soft hover:text-ink hover:bg-paper-dim rounded-sm transition-colors"
                  >
                    Platform
                  </Link>
                  <Link
                    href="/roadmap"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-ink-soft hover:text-ink hover:bg-paper-dim rounded-sm transition-colors"
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/invest"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-ink-soft hover:text-ink hover:bg-paper-dim rounded-sm transition-colors"
                  >
                    Invest
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-ink-soft hover:text-ink hover:bg-paper-dim rounded-sm transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                >
                  Join the waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
