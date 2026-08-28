import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${sourceSerif4.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
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
