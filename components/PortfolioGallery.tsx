import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/photographyData';
import { Maximize2, X, Camera, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectProjectForQuote: (title: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ['Todos', 'Retratos', 'Producto', 'Eventos'];

  const filteredItems = activeFilter === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  const activePhoto = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="portafolio" className="py-20 md:py-28 bg-neutral-950/80 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EF233C] uppercase mb-2">
              <span>PORTAFOLIO VISUAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              TRABAJOS RECIENTES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Explora nuestra galería de retratos editoriales urbanos, sesiones comerciales de producto deportivo y coberturas masivas en Caracas.
            </p>
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#EF233C] text-white shadow-md shadow-red-600/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const realIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(realIndex)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-850 hover:border-neutral-700 transition-all duration-300 cursor-pointer aspect-[3/4] flex flex-col justify-end"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Focus indicator icon on top right */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  <Maximize2 className="w-4 h-4 text-[#EF233C]" />
                </div>

                {/* Top category label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#EF233C] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EF233C] group-hover:underline">
                    <span>Ver en alta resolución</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
            aria-label="Cerrar vista ampliada"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-6 items-center max-h-[90vh] overflow-y-auto lg:overflow-visible">
            {/* Expanded Image */}
            <div className="w-full lg:w-2/3 max-h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Photo Info Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between bg-neutral-900/90 border border-neutral-800 p-6 rounded-2xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EF233C] bg-red-950/60 border border-red-800/60 px-2.5 py-1 rounded">
                    {activePhoto.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono-tech">Alta Resolución</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase mb-2">
                  {activePhoto.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#EF233C]" />
                  <span>{activePhoto.location}</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {activePhoto.description}
                </p>

                {/* Camera Technical Meta */}
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2 mb-6">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Detalles de Producción</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                    <div>
                      <span className="text-neutral-500 block">Equipo:</span>
                      <span className="font-semibold text-white">Canon EOS Rebel T7 + Lentes Prime</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Edición:</span>
                      <span className="font-semibold text-white">Color Grading 100% RAW</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-neutral-800">
                <button
                  onClick={() => {
                    onSelectProjectForQuote(activePhoto.title);
                    setLightboxIndex(null);
                  }}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#EF233C] hover:bg-red-600 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4" />
                  <span>Cotizar Sesión Similar</span>
                </button>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-neutral-400 hover:text-white bg-neutral-800 transition-colors cursor-pointer"
                >
                  Volver a la galería
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
