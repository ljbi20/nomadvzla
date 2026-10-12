import React from 'react';
import { CONTACT_INFO } from '../data/photographyData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onQuoteClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onQuoteClick }) => {
  return (
    <aside
      aria-label="Acciones rápidas de contacto"
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#EF233C] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Llamar</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20deseo%20cotizar%20un%20servicio%20fotogr%C3%A1fico%20con%20nomad.vzla.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold active:scale-95 transition-all shadow-md shadow-emerald-700/30"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Interactive Quote Trigger */}
        <button
          onClick={onQuoteClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EF233C] text-white font-bold active:scale-95 transition-all shadow-md shadow-red-700/30 cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Cotizar</span>
        </button>
      </div>
    </aside>
  );
};
