import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { PlatformTeaser } from "@/components/PlatformTeaser";
import { RoadmapTeaser } from "@/components/RoadmapTeaser";
import { ForClients } from "@/components/ForClients";
import { Trust } from "@/components/Trust";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaelo | Institutional-grade financial analysis",
  description: "Equip your CA practice with deterministic CMA, financial health, and feasibility modeling.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <Problem />
      <HowItWorks />
      <PlatformTeaser />
      <RoadmapTeaser />
      <Features />
      <ForClients />
      <Trust />
      <CtaSection />
    </main>
  );
}
