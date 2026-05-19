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
      <div 
        className="flex whitespace-nowrap items-center font-bold text-zinc-900 text-sm tracking-widest"
        style={{
          animation: 'marquee 25s linear infinite',
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-4">
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
