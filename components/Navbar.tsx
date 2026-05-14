'use client';

import { Phone, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-slate-900 font-black text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Nexus<span className="text-amber-500">Towing</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicii" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Servicii</Link>
            <Link href="#flota" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Flota Noastră</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:+40700123456" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-slate-700 transition-all">
              <Phone size={16} className="text-amber-500" />
              0700 123 456
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Simplificat) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link href="#servicii" className="text-slate-300 font-medium">Servicii</Link>
            <Link href="#flota" className="text-slate-300 font-medium">Flotă</Link>
            <a href="tel:+40700123456" className="flex items-center justify-center gap-2 bg-amber-500 text-slate-900 py-3 rounded-xl font-bold mt-2">
              <Phone size={20} />
              Urgență: 0700 123 456
            </a>
          </div>
        </div>
      )}
    </header>
  );
}