import type { Metadata } from "next";
import { Poppins, Libre_Baskerville, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "100"
});

const fontSerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "100"
});

export const metadata: Metadata = {
  title: "Maithili Harvest — Authentic Flavours of Mithila",
  description:
    "Maithili Harvest brings the finest traditional and regional food products from Mithila, Bihar to your kitchen. Authentic flavours, honest sourcing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}>
        <Navbar />
        <div style={{ paddingTop: "72px" }}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}