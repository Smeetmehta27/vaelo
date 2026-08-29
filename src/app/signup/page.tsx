"use client";

import { useState } from "react";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/animations/Reveal";

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    // Web3Forms access key
    formData.append("access_key", "d582d9cb-6cd5-48f8-aaea-4d7db36f1c8f");
    formData.append("subject", "New Early Access Signup for Vaelo");

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
      <section className="bg-paper py-24 border-b border-stone-line">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-stone-line pb-8">
            <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">Start your free workspace</h1>
            <p className="text-xl text-ink-soft leading-relaxed">
              Join Vaelo pre-launch to secure early access to the platform and lock in our foundational pricing.
            </p>
          </div>

          {success ? (
            <div className="bg-paper-dim border-2 border-bronze p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-bronze-tint text-bronze-deep rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-ink mb-2">You're on the list</h3>
              <p className="text-ink-soft text-lg">
                Thanks for your interest. We will be in touch shortly with early access details.
              </p>
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
                    className="w-full px-4 py-3 bg-paper border border-stone-line text-ink focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="firm" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Firm Name *</label>
                  <input
                    type="text"
                    name="firm"
                    id="firm"
                    required
                    className="w-full px-4 py-3 bg-paper border border-stone-line text-ink focus:outline-none focus:border-bronze transition-colors"
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
                    className="w-full px-4 py-3 bg-paper border border-stone-line text-ink focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="clients" className="block text-sm font-medium text-ink mb-1 font-mono uppercase tracking-wider">Number of Active Clients</label>
                  <input
                    type="text"
                    name="clients"
                    id="clients"
                    placeholder="Optional"
                    className="w-full px-4 py-3 bg-paper border border-stone-line text-ink focus:outline-none focus:border-bronze transition-colors placeholder:text-ink-soft/50"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-paper bg-bronze hover:bg-bronze-deep hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isSubmitting ? "Submitting..." : "Join Early Access"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </main>
  );
}
