'use client';

export default function TrustMarquee() {
  const items = [
    "ASIGURARE CMR INCLUSĂ", "•",
    "DISPECERAT NON-STOP", "•",
    "FLOTĂ OMOLOGATĂ RAR", "•",
    "INTERVENȚIE ÎN 30 MIN", "•",
    "PERSONAL CALIFICAT", "•",
    "PLATA CASH SAU CARD", "•",
  ];

  return (
    <div className="w-full bg-amber-500 py-3 overflow-hidden flex relative z-20 border-y border-amber-600">
      {/* Containerul care se mișcă. Tailwind nu are animație de marquee by default, așa că folosim CSS inline pentru viteză */}
      <div 
        className="flex whitespace-nowrap items-center font-bold text-slate-900 text-sm tracking-widest"
        style={{
          animation: 'marquee 25s linear infinite',
        }}
      >
        {/* Generăm elementele de două ori pentru a crea iluzia de infinit */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-4">
            {item}
          </span>
        ))}
      </div>

      {/* Definim animația direct în componentă pentru a nu altera fișierele de configurare Tailwind */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}