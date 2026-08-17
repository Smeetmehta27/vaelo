import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vaelo",
  description: "Request a sample report, ask about our methodology, or inquire about a pilot engagement.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
