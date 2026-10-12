import React from 'react';
import { CONTACT_INFO } from '../data/photographyData';
import { NomadApertureIcon } from './NomadLogo';
import { Camera, Calendar, MessageCircle, Phone, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onExplorePackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuoteClick,
  onExplorePackages,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 border-b border-neutral-900 bg-camera-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top metadata pill / clean kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#EF233C]">
                <span className="w-2 h-2 rounded-full bg-[#EF233C] animate-pulse" />
                {CONTACT_INFO.status}
              </span>
              <span className="text-neutral-600">·</span>
              <span>Caracas, Venezuela</span>
            </div>

            {/* Main title */}
            <div className="space-y-1 mb-4">
              <h1
                style={{ width: '530px', maxWidth: '100%' }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]"
              >
                Haz tus sueños <br />
                <span
                  style={{ width: 'auto' }}
                  className="w-auto text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400"
                >
                  REALIDAD
                </span>
              </h1>
            </div>

            {/* Photographer subtitle & brand */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-semibold text-neutral-300 mb-6">
              <span className="text-white font-bold">{CONTACT_INFO.photographer}</span>
              <span className="text-[#EF233C]">•</span>
              <span className="text-neutral-400 font-normal">Fotógrafo</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-200 tracking-tight font-bold">{CONTACT_INFO.brand}</span>
            </div>

            {/* Narrative description */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed mb-8">
              Fotografía profesional de alto impacto para <strong className="text-neutral-200">retratos urbanos</strong>,{' '}
              <strong className="text-neutral-200">fotografía comercial de producto</strong> y{' '}
              <strong className="text-neutral-200">cobertura de eventos deportivos</strong> y corporativos en Caracas. Capturamos la energía auténtica de cada instante.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#EF233C] hover:bg-red-600 transition-all duration-200 shadow-xl shadow-red-600/30 active:scale-98 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>Pide tu Cotización</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20vi%20tu%20sitio%20web%20nomad.vzla%20y%20quiero%20cotizar%20un%20servicio%20fotogr%C3%A1fico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-lg shadow-emerald-600/20 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={onExplorePackages}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 transition-colors cursor-pointer"
              >
                <span>Ver Paquetes</span>
              </button>
            </div>

            {/* Trust highlights with no pills - clean typographic separators */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono-tech">100%</p>
                <p className="text-xs text-neutral-400 font-medium">Fotos Editadas en Alta Resolución</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#EF233C] font-mono-tech">2 Días</p>
                <p className="text-xs text-neutral-400 font-medium">Estimado de Entrega Rápida</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono-tech">&lt; 24h</p>
                <p className="text-xs text-neutral-400 font-medium">Sneak Peek para Eventos</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Viewfinder Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              
              {/* Camera Viewfinder Overlay Elements */}
              <div className="absolute inset-0 pointer-events-none z-20 p-5 flex flex-col justify-between">
                {/* Top Viewfinder Bar */}
                <div className="flex items-center justify-between text-xs font-mono-tech text-white/90 drop-shadow-md">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                    <span className="font-bold tracking-wider">REC ● [RAW]</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    <span>4K · 60 FPS</span>
                  </div>
                </div>

                {/* Center Crosshair Focus Mark */}
                <div className="self-center flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 border border-white/40 rounded-lg flex items-center justify-center relative">
                    <div className="w-2 h-2 rounded-full bg-[#EF233C]" />
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white/70" />
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white/70" />
                    <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-2 bg-white/70" />
                    <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-2 bg-white/70" />
                  </div>
                </div>

                {/* Bottom Viewfinder Bar with Lens Parameters */}
                <div className="flex items-center justify-between text-xs font-mono-tech text-white/90 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span>f / 1.8</span>
                  <span className="text-neutral-500">|</span>
                  <span>1/500s</span>
                  <span className="text-neutral-500">|</span>
                  <span>ISO 100</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[#EF233C] font-bold">AF-C</span>
                </div>
              </div>

              {/* Real Photographer Image */}
              <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-neutral-950">
                <img
                  src="/src/assets/images/hero_photographer_1791742838768.jpg"
                  alt="Leonardo Briceño - Fotógrafo nomad.vzla en Caracas"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Card Caption */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Leonardo Briceño</p>
                  <p className="text-xs text-neutral-400">Servicios Fotográficos Profesionales</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#EF233C] hover:underline flex items-center gap-1"
                  >
                    <span>@nomad.vzla</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
