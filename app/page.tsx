import Image from 'next/image';
import { PhoneCall, Wrench, Truck, ShieldCheck } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import FadeIn from '../components/FadeIn';
import Fleet from '../components/Fleet';
import TrustMarquee from '../components/TrustMarquee';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500 selection:text-white overflow-hidden">
      
      <section className="relative min-h-[calc(100svh-8rem)] flex flex-col justify-center overflow-hidden border-b border-zinc-800 py-20 md:py-24">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner-nexus.png"
            alt="Platformă auto generată digital pe șosea, noaptea"
            fill
            priority
            sizes="100vw"
            unoptimized
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/82 to-zinc-950/52 z-10 pointer-events-none"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12 mt-16">
          <header className="mb-10 pointer-events-auto max-w-3xl relative">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold tracking-widest uppercase text-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Disponibil 24/7 în București & Ilfov
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <FadeIn direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                <span className="text-white">Asistență</span>{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Non-Stop.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-medium leading-relaxed">
                Tractări auto premium și asistență rutieră în București și Ilfov. 
                Intervenție garantată în sub <span className="text-amber-500 font-bold">30 de minute</span>.
              </p>
            </FadeIn>
            
          </header>

          <div className="pointer-events-auto flex flex-col sm:flex-row gap-4 mt-8 w-full md:w-auto">
            
            <a 
              href="tel:+40700123456" 
              className="hidden md:flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] transition-transform hover:scale-105"
            >
              <PhoneCall size={24} className="animate-pulse" />
              URGENȚĂ: 0700 123 456
            </a>

            <a 
              href="#servicii" 
              className="flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-md border border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all w-full md:w-auto"
            >
              Vezi Serviciile
            </a>
            
          </div>
        </div>
      </section>

      <TrustMarquee />

      <section id="servicii" className="scroll-mt-24 py-24 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Serviciile Noastre</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Soluții complete de mobilitate și asistență rutieră. Echipamente de ultimă generație pentru orice situație de urgență.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group md:col-span-2 relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 backdrop-blur-md border border-zinc-700/50 hover:border-amber-500/30 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] flex flex-col justify-center overflow-hidden min-h-[300px]">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                <Truck size={280} />
              </div>
              
              <div className="relative z-10 md:w-3/4">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 mb-8 group-hover:bg-amber-500/20 transition-all duration-500">
                  <Truck size={32} className="text-amber-500" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Tractare Auto Simplă</h3>
                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                  Platforme moderne, hidraulice, perfecte pentru autoturisme și SUV-uri avariate sau defecte. 
                  Manipulare cu grijă maximă și ancorare profesională în 4 puncte.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 backdrop-blur-md border border-zinc-700/50 hover:border-blue-500/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden min-h-[300px]">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 group-hover:opacity-5 transition-all duration-700 pointer-events-none">
                <Wrench size={200} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-8">
                  <Wrench size={28} className="text-blue-400" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-white mb-3">Asistență Rutieră</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Pană de cauciuc, baterie descărcată, diagnoză rapidă la fața locului sau alimentare eronată.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 backdrop-blur-md border border-zinc-700/50 hover:border-emerald-500/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden min-h-[300px]">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 group-hover:opacity-5 transition-all duration-700 pointer-events-none">
                <ShieldCheck size={200} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-8">
                  <ShieldCheck size={28} className="text-emerald-400" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-white mb-3">Asigurare Cargo</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Vehiculul tău este acoperit de asigurare completă CMR pe toată durata procesului de transport.
                  </p>
                </div>
              </div>
            </div>

            <div className="group md:col-span-2 relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 backdrop-blur-md border border-zinc-700/50 hover:border-amber-500/30 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] flex flex-col justify-center overflow-hidden min-h-[300px]">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                <Truck size={280} />
              </div>
              
              <div className="relative z-10 md:w-3/4">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 mb-8 transition-all duration-500">
                  <Truck size={32} className="text-amber-500" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Tractare Utilaje & Flote</h3>
                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                  Dispunem de echipamente heavy-duty capabile să transporte dubițe lungi, utilaje agricole (până la 5.0t) și echipamente de construcții la locația dorită în siguranță absolută.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FadeIn direction="up" delay={0.2}>
        <HowItWorks />
      </FadeIn>
      
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
