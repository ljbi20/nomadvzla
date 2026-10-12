import React, { useState } from 'react';
import { PACKAGES, SERVICE_CATEGORIES, PackageItem, CONTACT_INFO } from '../data/photographyData';
import { Check, Clock, Zap, Camera, Package, Flame, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesAndPackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const ServicesAndPackages: React.FC<ServicesAndPackagesProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'retratos' | 'producto' | 'eventos'>('all');

  const filteredPackages = selectedCategory === 'all'
    ? PACKAGES
    : PACKAGES.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'retratos':
        return <Camera className="w-5 h-5 text-[#EF233C]" />;
      case 'producto':
        return <Package className="w-5 h-5 text-[#EF233C]" />;
      case 'eventos':
        return <Flame className="w-5 h-5 text-[#EF233C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#EF233C]" />;
    }
  };

  const getCategoryImage = (pkgId: string) => {
    switch (pkgId) {
      case 'start':
        return '/package_start_1791748638480.jpg';
      case 'plus':
        return '/regenerated_image_1791749385471.png';
      case 'express':
        return '/portrait_urban_1791742847864.jpg';
      case 'esencial':
        return '/package_esencial_IMG_2968.jpg';
      case 'ecommerce':
        return '/package_ecommerce_1791751976818.jpg';
      case 'lifestyle-prod':
        return '/product_sneaker_1791742856482.jpg';
      case 'on-the-go':
        return '/event_marathon_1791742866318.jpg';
      case 'all-day':
        return '/brand_activation_1791742876676.jpg';
      default:
        return '/hero_photographer_1791742838768.jpg';
    }
  };

  return (
    <section id="paquetes" className="py-20 md:py-28 bg-neutral-950 relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EF233C] uppercase mb-3">
            <span>PAQUETES & COBERTURAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            ELIGE EL PLAN PERFECTO PARA TU PROYECTO
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Planes diseñados con la máxima calidad técnica, tiempos de entrega garantizados y edición profesional. Solicita tu cotización personalizada sin compromiso.
          </p>
        </div>

        {/* Categories Overview Banner */}
        <div id="servicios" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-neutral-900/90 border-[#EF233C] shadow-lg shadow-red-600/10'
                  : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{cat.title}</h3>
                  <p className="text-xs text-neutral-400 font-medium">{cat.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#EF233C] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Todos los Paquetes ({PACKAGES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('retratos')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === 'retratos'
                  ? 'bg-[#EF233C] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Retratos (4)
            </button>
            <button
              onClick={() => setSelectedCategory('producto')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === 'producto'
                  ? 'bg-[#EF233C] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Foto Producto (2)
            </button>
            <button
              onClick={() => setSelectedCategory('eventos')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === 'eventos'
                  ? 'bg-[#EF233C] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              Eventos (2)
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isFeatured = pkg.id === 'express' || pkg.id === 'on-the-go';

            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-300 relative group ${
                  isFeatured
                    ? 'bg-neutral-900 border-red-500/70 shadow-2xl shadow-red-900/20'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/90'
                }`}
              >
                {/* Visual Header Image Preview */}
                <div className={`relative ${pkg.id === 'start' || pkg.id === 'express' || pkg.id === 'plus' || pkg.id === 'esencial' || pkg.id === 'ecommerce' || pkg.id === 'lifestyle-prod' || pkg.id === 'on-the-go' || pkg.id === 'all-day' ? 'h-[330px]' : 'h-44'} overflow-hidden bg-neutral-950`}>
                  <img
                  src={getCategoryImage(pkg.id)}
                  alt={pkg.name}
                  style={{ height: '330px' }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
              </div>

                  {/* Category and badge indicator */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {pkg.category === 'retratos' ? 'Retratos' : pkg.category === 'producto' ? 'Producto' : 'Eventos'}
                    </span>
                    {pkg.badge && (
                      <span className="text-xs font-bold uppercase tracking-wider text-[#EF233C] bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-red-500/40">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase group-hover:text-red-400 transition-colors">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Package Main Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Key stats banner */}
                    <div className="space-y-2 pb-4 mb-4 border-b border-neutral-800">
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <Camera className="w-4 h-4 text-[#EF233C] shrink-0" />
                        <span>{pkg.photos}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                        <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                        <Zap className="w-3.5 h-3.5 shrink-0" />
                        <span>{pkg.deliveryTime}</span>
                      </div>
                      {pkg.sneakPeek && (
                        <div className="p-2 rounded-lg bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-200">
                          {pkg.sneakPeek}
                        </div>
                      )}
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 mb-6 text-xs text-neutral-300">
                      {pkg.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#EF233C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended usage */}
                  <div>
                    <p className="text-[11px] text-neutral-400 italic mb-5 border-t border-neutral-800/60 pt-3">
                      {pkg.recommendedFor}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isFeatured
                            ? 'bg-[#EF233C] hover:bg-red-600 text-white shadow-lg shadow-red-600/30 active:scale-98'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-white active:scale-98'
                        }`}
                      >
                        <span>Cotizar {pkg.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20estoy%20interesado%20en%20cotizar%20el%20${encodeURIComponent(
                          pkg.name
                        )}%20(${encodeURIComponent(pkg.photos)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl font-medium text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/20 border border-emerald-900/40 flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Consultar por WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dotted watermark decoration inspired by user's flyers */}
                <div className="absolute bottom-2 right-2 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="grid grid-cols-4 gap-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">
              ¿Requieres un paquete personalizado o producción especial?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Adaptamos número de fotos, horas de cobertura, locaciones y entregas urgentes a la medida de tu marca o evento.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20tengo%20un%20proyecto%20especial%20y%20necesito%20una%20propuesta%20personalizada.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear Ahora</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl text-xs font-bold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
