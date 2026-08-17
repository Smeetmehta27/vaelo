import { ProcessDetail } from "@/components/ProcessDetail";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Vaelo",
  description: "Learn how our 4-step process delivers rigorous financial models in 24-48 hours.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <ProcessDetail />
      <Faq />
      <CtaSection />
    </main>
  );
}
