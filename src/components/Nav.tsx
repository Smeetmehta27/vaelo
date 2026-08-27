"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-ledger-line bg-paper sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <Image src="/branding/vaelo-logo-lockup.svg" alt="Vaelo" width={120} height={36} priority />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-sm font-medium text-slate hover:text-corporate-blue transition-colors duration-200">
              How it works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-slate hover:text-corporate-blue transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate hover:text-corporate-blue transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate hover:text-corporate-blue transition-colors duration-200">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm text-paper bg-corporate-blue hover:bg-corporate-blue/90 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-200"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate hover:text-corporate-blue focus:outline-none p-2"
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
            className="md:hidden overflow-hidden border-t border-ledger-line bg-paper"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/how-it-works"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-slate-50 border-b border-ledger-line/50"
              >
                How it works
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-slate-50 border-b border-ledger-line/50"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-slate-50 border-b border-ledger-line/50"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-ink hover:bg-slate-50 border-b border-ledger-line/50"
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-paper bg-corporate-blue hover:bg-corporate-blue/90"
                >
                  Start Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
