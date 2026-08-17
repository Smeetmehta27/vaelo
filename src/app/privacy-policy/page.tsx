import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vaelo",
  description: "Learn how Vaelo protects your data and complies with the DPDP Act.",
};
import { CtaSection } from "@/components/CtaSection";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyContent />
      <CtaSection />
    </main>
  );
}
