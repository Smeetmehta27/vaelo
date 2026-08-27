import { PricingCards } from "@/components/PricingCards";
import { PricingFaq } from "@/components/PricingFaq";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vaelo",
  description: "Simple, transparent pricing for CMA, financial health, and feasibility pipelines. One setup fee, one monthly subscription.",
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
