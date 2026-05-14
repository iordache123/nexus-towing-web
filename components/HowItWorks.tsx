import { PhoneCall, MapPin, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Ne Suni",
      description: "Apelezi dispeceratul nostru non-stop. Ne oferi detaliile problemei și ne spui ce fel de autovehicul conduci.",
      icon: <PhoneCall size={28} />,
    },
    {
      id: "02",
      title: "Localizare & Dispecerizare",
      description: "Îți trimitem un link prin SMS pentru localizare GPS exactă. Cel mai apropiat echipaj pleacă spre tine în sub 3 minute.",
      icon: <MapPin size={28} />,
    },
    {
      id: "03",
      title: "Intervenție Rapidă",
      description: "Ajungem la tine (în medie sub 30 min în București). Rezolvăm problema la fața locului sau încărcăm mașina în siguranță.",
      icon: <Truck size={28} />,
    }
  ];

  return (
    <section id="proces" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cum Funcționează</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Un proces simplificat, creat pentru a te scoate din încurcătură cât mai repede și mai sigur posibil.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Linie conectoare ascunsă pe mobil, vizibilă pe desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-800 via-amber-500/50 to-slate-800 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-slate-950 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:border-amber-500 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="text-amber-500 z-10">{step.icon}</div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-slate-900 font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}