'use client';

import { PhoneCall } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 pb-6 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent pointer-events-none">
      <a
        href="tel:+40700123456"
        className="pointer-events-auto flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_-10px_rgba(245,158,11,0.6)] active:scale-95 transition-transform"
        aria-label="Apelează de urgență"
      >
        <PhoneCall size={24} className="animate-pulse" />
        SUNĂ ACUM
      </a>
    </div>
  );
}