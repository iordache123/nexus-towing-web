'use client';

import { Truck, Car, Wrench } from 'lucide-react';
import { fleetData } from '../lib/data';
import FadeIn from './FadeIn';

export default function Fleet() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car size={40} className="text-amber-500" />;
      case 'Truck': return <Truck size={40} className="text-blue-400" />;
      case 'Wrench': return <Wrench size={40} className="text-green-400" />;
      default: return <Truck size={40} className="text-amber-500" />;
    }
  };

  return (
    <section id="flota" className="scroll-mt-24 py-24 bg-zinc-900 border-t border-zinc-800/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Flota Noastră de Intervenție</h2>
            <p className="text-zinc-400 text-lg">
              Nu facem compromisuri când vine vorba de siguranța mașinii tale. Operăm doar autospeciale omologate, inspectate tehnic la zi și asigurate CMR.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleetData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.2}>
              <div className="group relative bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 hover:bg-zinc-800/80 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)]">
                
                <div className="absolute top-6 right-6 bg-zinc-900/80 border border-zinc-700 text-xs font-bold px-3 py-1.5 rounded-full text-zinc-300">
                  {item.tag}
                </div>

                <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700/50 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {getIcon(item.icon)}
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="inline-block bg-amber-500/10 text-amber-500 font-semibold px-3 py-1 rounded-lg text-sm mb-4">
                    Capacitate: {item.capacity}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
