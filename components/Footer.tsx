import { MapPin, Mail, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-zinc-900 font-black text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nexus<span className="text-amber-500">Towing</span></span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Servicii premium de asistență rutieră și tractări auto non-stop. Intervenim rapid și în siguranță, indiferent de condițiile meteo.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Shield size={16} className="text-green-500" />
              <span>Flotă asigurată CMR & CASCO integral.</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Servicii Rapide</h4>
            <ul className="space-y-4">
              <li><a href="#servicii" className="text-zinc-400 hover:text-amber-500 transition-colors">Tractare Auto</a></li>
              <li><a href="#flota" className="text-zinc-400 hover:text-amber-500 transition-colors">Platformă SUV & Dubițe</a></li>
              <li><a href="#proces" className="text-zinc-400 hover:text-amber-500 transition-colors">Asistență Pană / Baterie</a></li>
              <li><a href="#preturi" className="text-zinc-400 hover:text-amber-500 transition-colors">Extragere din Șanț</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact & Dispecerat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Phone size={20} className="text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">0700 123 456</strong>
                  <span className="text-sm">Disponibil 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin size={20} className="text-amber-500 shrink-0 mt-1" />
                <span className="text-sm">București (Sectoarele 1-6)<br />Județul Ilfov & A1/A2/A3</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">urgente@nexustowing.demo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nexus Towing. Toate drepturile rezervate. Produs de prezentare.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <span>Termeni demo</span>
            <span>Politică cookies demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
