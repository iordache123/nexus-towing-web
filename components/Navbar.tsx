'use client';

import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-zinc-900 font-black text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Nexus<span className="text-amber-500">Towing</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicii" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Servicii</Link>
            <Link href="#flota" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Flota Noastră</Link>
            <Link href="#preturi" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Prețuri</Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+40700123456" className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-zinc-700 transition-all">
              <Phone size={16} className="text-amber-500" />
              0700 123 456
            </a>
          </div>

          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link href="#servicii" className="text-zinc-300 font-medium" onClick={closeMobileMenu}>Servicii</Link>
            <Link href="#flota" className="text-zinc-300 font-medium" onClick={closeMobileMenu}>Flotă</Link>
            <Link href="#preturi" className="text-zinc-300 font-medium" onClick={closeMobileMenu}>Prețuri</Link>
            <Link href="#contact" className="text-zinc-300 font-medium" onClick={closeMobileMenu}>Contact</Link>
            <a href="tel:+40700123456" onClick={closeMobileMenu} className="flex items-center justify-center gap-2 bg-amber-500 text-zinc-900 py-3 rounded-xl font-bold mt-2">
              <Phone size={20} />
              Urgență: 0700 123 456
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
