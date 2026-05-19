'use client';

import { Mail, MessageSquare, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-zinc-900 border-t border-zinc-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Programări & Colaborări</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Ai nevoie de transport programat pentru utilaje sau dorești un contract de asistență pentru flota companiei tale? Lasă-ne un mesaj și un dispecer te va contacta în cel mai scurt timp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 border border-amber-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email Corporate</h4>
                  <p className="text-zinc-400">b2b@nexustowing.demo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 border border-blue-500/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Suport WhatsApp</h4>
                  <p className="text-zinc-400">Disponibil pentru trimitere poze avarii</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-zinc-800/50 backdrop-blur-lg border border-zinc-700/50 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Nume / Companie</label>
                  <input type="text" id="name" name="name" required className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Ion Popescu" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">Telefon</label>
                  <input type="tel" id="phone" name="phone" required className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="07XX XXX XXX" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">Tip Serviciu</label>
                <select id="service" name="service" className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none">
                  <option>Transport Utilaje (Programat)</option>
                  <option>Contract Flotă (B2B)</option>
                  <option>Tractare Externă (Internațional)</option>
                  <option>Altele</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Detalii Transport</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Greutate estimativă, locație plecare/destinație..."></textarea>
              </div>
              {submitted && (
                <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                  Solicitarea demo a fost generată. Într-o implementare live, acest formular se conectează la dispecerat sau CRM.
                </p>
              )}
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 font-bold py-4 rounded-xl transition-colors">
                <Send size={20} />
                {submitted ? "Trimite Altă Solicitare" : "Trimite Solicitarea"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
