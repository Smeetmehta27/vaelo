"use client";

import { useState } from "react";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/animations/Reveal";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key
    // NOTE: Replace this placeholder with your real access key from https://web3forms.com/
    formData.append("access_key", "d582d9cb-6cd5-48f8-aaea-4d7db36f1c8f");

    // Optional: Make it redirect back to form on error, though we handle UI in JS
    formData.append("subject", "New Inquiry from Vaelo Contact Form");

    try {
      let response;
      try {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      } catch (networkErr) {
        throw new Error("Network error: Could not reach the submission server.");
      }

      let data;
      try {
        data = await response.json();
      } catch (parseErr) {
        throw new Error(`Server returned an invalid response (Status: ${response.status}).`);
      }

      // Check both the HTTP status AND the success boolean in the payload
      if (!response.ok || !data.success) {
        throw new Error(data.message || `Submission failed with status ${response.status}. Please try again or email us directly.`);
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <section className="bg-paper py-24 border-b border-ledger-line">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-ledger-line pb-8">
            <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">Contact Vaelo</h1>
            <p className="text-xl text-slate leading-relaxed">
              Request a sample report, ask about our methodology, or inquire about a pilot engagement for your practice.
            </p>
          </div>

          {success ? (
            <div className="bg-white border-2 border-precision-green p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-precision-green/10 text-precision-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-ink mb-2">Message received</h3>
              <p className="text-slate text-lg">
                Thanks for reaching out. We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-8 text-sm font-mono text-corporate-blue hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="firm" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Firm Name *</label>
                  <input
                    type="text"
                    name="firm"
                    id="firm"
                    required
                    className="w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">What are you looking for? *</label>
                <div className="relative">
                  <select
                    name="inquiryType"
                    id="inquiryType"
                    required
                    className="appearance-none w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors"
                  >
                    <option value="" disabled selected>Select an option...</option>
                    <option value="Sample report">Request a sample report</option>
                    <option value="Pilot engagement">Start a pilot engagement</option>
                    <option value="General inquiry">General inquiry</option>
                    <option value="Something else">Something else</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-ledger-line text-ink focus:outline-none focus:border-corporate-blue transition-colors resize-y"
                  placeholder="Tell us a bit about your practice or specific requirements..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-paper bg-corporate-blue hover:bg-corporate-blue/90 hover:-translate-y-[1px] hover:shadow-md focus:outline-none transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </section>
      <CtaSection />
    </main>
  );
}
