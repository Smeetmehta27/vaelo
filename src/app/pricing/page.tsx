import { PricingCards } from "@/components/PricingCards";
import { PricingFaq } from "@/components/PricingFaq";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vaelo",
  description: "Transparent, per-engagement pricing for DCF models, deal feasibility, and health snapshots.",
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
