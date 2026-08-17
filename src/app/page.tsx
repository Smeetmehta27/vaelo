import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaelo | Institutional-grade financial analysis",
  description: "Equip your CA practice with deterministic valuation, deal feasibility, and financial health modeling.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Trust />
      <CtaSection />
    </main>
  );
}
