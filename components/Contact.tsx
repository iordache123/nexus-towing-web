'use client';

import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Informații Contact B2B */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Programări & Colaborări</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Ai nevoie de transport programat pentru utilaje sau dorești un contract de asistență pentru flota companiei tale? Lasă-ne un mesaj și un dispecer te va contacta în cel mai scurt timp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 border border-amber-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email Corporate</h4>
                  <p className="text-slate-400">b2b@nexustowing.demo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 border border-blue-500/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Suport WhatsApp</h4>
                  <p className="text-slate-400">Disponibil pentru trimitere poze avarii</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formular UI */}
          <div className="lg:w-1/2 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nume / Companie</label>
                  <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Ion Popescu" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                  <input type="tel" id="phone" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="07XX XXX XXX" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Tip Serviciu</label>
                <select id="service" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none">
                  <option>Transport Utilaje (Programat)</option>
                  <option>Contract Flotă (B2B)</option>
                  <option>Tractare Externă (Internațional)</option>
                  <option>Altele</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Detalii Transport</label>
                <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Greutate estimativă, locație plecare/destinație..."></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 rounded-xl transition-colors">
                <Send size={20} />
                Trimite Solicitarea
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}