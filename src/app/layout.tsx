import type { Metadata } from "next";
import { Inter, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaelo.co.in"),
  title: "Vaelo | Institutional-grade financial analysis",
  description: "Wall Street rigor, delivered through your CA practice.",
  openGraph: {
    title: "Vaelo | Institutional-grade financial analysis",
    description: "Institutional-grade financial analysis for independent CA practices",
    url: "https://vaelo.co.in",
    siteName: "Vaelo",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaelo | Institutional-grade financial analysis",
    description: "Institutional-grade financial analysis for independent CA practices",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style>{`
            /* Fallback for users with JS disabled: override framer-motion initial opacity: 0 */
            div, span, p, h1, h2, h3, h4, h5, h6, section, article {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink">
        <Nav />
        <div className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
