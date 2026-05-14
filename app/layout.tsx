import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importăm componentele noastre globale
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";
import FilmGrain from "../components/FilmGrain"; 

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
      {/* Am adăugat 'relative' pe body */}
      <body className={`${inter.className} bg-slate-900 text-slate-50 antialiased relative`}>
        <Navbar />
        
        {/* 2. MODIFICARE AICI: Am adăugat pb-24 md:pb-0 pentru a face loc butonului pe mobil */}
        <div className="pt-20 pb-24 md:pb-0"> 
          {children}
        </div>
        
        <Footer />
        
        {/* 3. INJECȚIA AICI: Componenta de urgență stă la nivelul layout-ului */}
        <MobileCTA />
        <FilmGrain /> 
      </body>
    </html>
  );
}