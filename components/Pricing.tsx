import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="preturi" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparență Tarifară</h2>
            <p className="text-slate-400 max-w-xl">Prețuri corecte, fără costuri ascunse. Costul final se calculează transparent la telefon, pe baza distanței și a tipului de autovehicul.</p>
          </div>
          <p className="text-amber-500 font-medium text-sm px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
            *Asigurare CMR inclusă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Tractare Locală (Oraș)</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white">de la 150</span>
              <span className="text-slate-400">RON</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Autoturisme normale</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Intervenție sector/zonă</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Timp răspuns: ~30 min</li>
            </ul>
          </div>

          {/* Pricing Card 2 - Highlighted */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-amber-500/50 rounded-3xl p-8 relative shadow-[0_0_40px_-15px_rgba(245,158,11,0.3)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
              Cel mai solicitat
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Tractare Externă / Autostradă</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white">de la 200</span>
              <span className="text-slate-400">RON + km</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Ridicare de pe A1, A2, A3</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Transport interurban</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Preluare pasageri (max 2)</li>
            </ul>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">SUV / Dubițe / Utilaje</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white">de la 250</span>
              <span className="text-slate-400">RON</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Vehicule comerciale</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Tractare punte dublă</li>
              <li className="flex items-center gap-3"><Check size={18} className="text-amber-500" /> Extragere din șanț/noroi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}