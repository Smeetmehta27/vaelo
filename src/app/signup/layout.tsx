import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | Vaelo",
  description: "Join Vaelo pre-launch to secure early access to the platform and lock in our foundational pricing.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
