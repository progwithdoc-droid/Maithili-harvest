import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

/* ── Google Fonts ── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maithili Harvest — Artisan Food from Mithila",
  description:
    "Maithili Harvest brings the finest traditional and regional food products from Mithila, Bihar to your kitchen. Authentic flavours, honest sourcing.",
  icons: {
    icon: [{ url: "/Logo.jpg", type: "image/jpeg" }],
    apple: "/Logo.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen overflow-x-clip bg-[var(--color-cream)] pt-[var(--nav-height)] text-[var(--foreground)] antialiased"
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}