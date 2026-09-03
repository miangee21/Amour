// src/app/layout.tsx
import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Cormorant_Garamond,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { Providers } from "@/app/providers";
import { Toaster } from "@/shared/components/ui/sonner";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-letter-en",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-letter-ur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amour — Letters, the way they used to feel",
  description:
    "Write a love letter in English or Urdu, seal it, and share a link that unwraps like the real thing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable} ${notoNastaliqUrdu.variable}`}
      >
        <body className="antialiased">
          <Providers>
            {children}
            <Toaster richColors position="top-right" closeButton />
          </Providers>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
