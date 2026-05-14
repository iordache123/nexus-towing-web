import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importăm componentele noastre globale
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Nexus Towing | Tractări Auto Non-Stop",
  description: "Servicii premium de tractări auto și asistență rutieră 24/7 în București și Ilfov. Intervenție rapidă în sub 30 minute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-50 antialiased`}>
        <Navbar />
        {/* Adăugăm un padding-top pentru a nu ascunde conținutul sub navbar-ul fixed */}
        <div className="pt-20"> 
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}