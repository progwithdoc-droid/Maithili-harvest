import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Jost,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Google Fonts ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maithili Harvest — Artisan Food from Mithila",
  description:
    "Maithili Harvest brings the finest traditional and regional food products from Mithila, Bihar to your kitchen. Authentic flavours, honest sourcing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body style={{ paddingTop: "72px" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}