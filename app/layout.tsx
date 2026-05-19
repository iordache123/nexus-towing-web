import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";
import FilmGrain from "../components/FilmGrain";

export const metadata: Metadata = {
  title: "Nexus Towing | Tractări Auto Non-Stop",
  description: "Servicii premium de tractări auto și asistență rutieră 24/7 în București și Ilfov. Intervenție rapidă în sub 30 minute.",
  metadataBase: new URL("https://nexus-towing-web.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-50 antialiased relative">
        <Navbar />

        <div className="pt-20 pb-24 md:pb-0">
          {children}
        </div>

        <Footer />
        <MobileCTA />
        <FilmGrain />
      </body>
    </html>
  );
}
