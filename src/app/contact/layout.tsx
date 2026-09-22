import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vaelo",
  description: "Get in touch with the Vaelo team — request a sample report, ask about our methodology, or start a pilot engagement for your CA practice.",
  openGraph: {
    title: "Contact Vaelo",
    description: "Reach out to learn how Vaelo can bring institutional-grade financial analysis to your CA practice.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
