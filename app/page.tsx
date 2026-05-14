'use client';

import dynamic from 'next/dynamic';
import { PhoneCall, Wrench, Truck, ShieldCheck } from 'lucide-react';
// Asigură-te că aceste componente există în folderul 'components'
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import FadeIn from '../components/FadeIn';
import Fleet from '../components/Fleet';
import TrustMarquee from '../components/TrustMarquee';

const SplineDynamic = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-0">
      <div className="w-8 h-8 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-amber-500 selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION 3D */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden border-b border-slate-800">
        {/* Container pentru modelul 3D cu overlay pentru contrast */}
        <div className="absolute inset-0 z-0">
          <SplineDynamic scene="https://prod.spline.design/Z0OSRghkI3zdtcWt/scene.splinecode" style={{ pointerEvents: 'none' }}  />
          <div className="absolute inset-0 bg-slate-900/65 z-10 pointer-events-none backdrop-blur-[1px]"></div>
        </div>


<div className="relative z-20 container mx-auto px-6 lg:px-12 mt-16">
          <header className="mb-10 pointer-events-auto max-w-3xl relative">
            
            {/* 1. Badge Disponibilitate */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Disponibil 24/7 în București & Ilfov
            </div>

            {/* 2. Ambient Glow (Acum este plasat semantic corect, în spatele textului) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* 3. Titlul Principal H1 (Gradient Premium) */}
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                <span className="text-white">Asistență</span>{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Non-Stop.
                </span>
              </h1>
            </FadeIn>

            {/* 4. Subtitlul (Promisiunea de Business) */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
                Tractări auto premium și asistență rutieră în București și Ilfov. 
                Intervenție garantată în sub <span className="text-amber-500 font-bold">30 de minute</span>.
              </p>
            </FadeIn>
            
          </header>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
              <span className="text-white">Asistență</span>{" "}
              {/* Gradient pe cuvântul cheie */}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Non-Stop.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
              Tractări auto premium și asistență rutieră în București și Ilfov. 
              Intervenție garantată în sub <span className="text-amber-500 font-bold">30 de minute</span>.
            </p>
          </FadeIn>

<div className="pointer-events-auto flex flex-col sm:flex-row gap-4 mt-8 w-full md:w-auto">
            
            {/* 1. Butonul Primar (Ascuns pe mobil folosind 'hidden md:flex', vizibil pe desktop) */}
            <a 
              href="tel:+40700123456" 
              className="hidden md:flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] transition-transform hover:scale-105"
            >
              <PhoneCall size={24} className="animate-pulse" />
              URGENȚĂ: 0700 123 456
            </a>

            {/* 2. Butonul Secundar (Afișat pe mobil lat cât tot ecranul 'w-full', normal pe desktop 'md:w-auto') */}
            <a 
              href="#servicii" 
              className="flex items-center justify-center bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all w-full md:w-auto"
            >
              Vezi Serviciile
            </a>
            
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID SERVICES SECTION */}
      <section id="servicii" className="py-24 bg-slate-950 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Serviciile Noastre</h2>
            <p className="text-slate-400 text-lg">Soluții complete de mobilitate și asistență pentru orice situație de urgență rutieră.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Card 1 - Span 2 cols */}
            <div className="md:col-span-2 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group hover:border-slate-600 transition-colors">
              <div className="absolute top-6 right-6 bg-amber-500/10 p-4 rounded-2xl text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 z-10">Tractare Auto Simplă</h3>
              <p className="text-slate-400 z-10 max-w-md leading-relaxed">Platforme moderne, hidraulice, perfecte pentru autoturisme și SUV-uri avariate sau defecte. Manipulare cu grijă maximă.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-end hover:border-slate-600 transition-colors group">
               <div className="mb-auto bg-blue-500/10 p-4 rounded-2xl text-blue-400 w-fit border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Asistență Rutieră</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pană de cauciuc, baterie descărcată, diagnoză rapidă sau lipsă carburant.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-end hover:border-slate-600 transition-colors group">
               <div className="mb-auto bg-green-500/10 p-4 rounded-2xl text-green-400 w-fit border border-green-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Asigurare Cargo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Vehiculul tău este acoperit de asigurare CMR pe toată durata transportului.</p>
            </div>

            {/* Card 4 - Span 2 cols */}
            <div className="md:col-span-2 bg-gradient-to-tr from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-end hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Tractare Utilaje & Flote</h3>
              <p className="text-slate-400 max-w-xl leading-relaxed">Dispunem de echipamente capabile să transporte dubițe lungi, utilaje agricole (până la 3.5t) și echipamente de construcții la locația dorită.</p>
            </div>
          </div>
        </div>
      </section>

{/* 3. EXTERNAL COMPONENTS (Modulele de Conversie Animate) */}
      <FadeIn direction="up" delay={0.2}>
        <HowItWorks />
      </FadeIn>
      
      {/* SECȚIUNEA NOUĂ FLOTA */}
      <FadeIn direction="up" delay={0.3}>
        <Fleet />
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <Pricing />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.6}>
        <Contact />
      </FadeIn>

    </main>
  );
}