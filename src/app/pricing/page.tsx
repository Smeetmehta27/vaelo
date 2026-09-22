import { PricingCards } from "@/components/PricingCards";
import { PricingFaq } from "@/components/PricingFaq";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vaelo",
  description: "₹2,000 one-time setup fee + ₹300–500/month subscription. Full platform access to CMA, financial health, and feasibility pipelines — no hidden costs.",
  openGraph: {
    title: "Pricing | Vaelo",
    description: "₹2,000 one-time setup + ₹300–500/month. Full access to institutional-grade CMA, health scoring, and feasibility modeling.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <PricingCards />
      <PricingFaq />
      <CtaSection />
    </main>
  );
}
