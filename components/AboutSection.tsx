import React from 'react';
import { CONTACT_INFO } from '../data/photographyData';
import { NomadLogo, NomadApertureIcon } from './NomadLogo';
import { Camera, Award, Clock, MapPin, Sparkles, CheckCircle2, ShieldCheck, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onQuoteClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onQuoteClick }) => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-neutral-950 relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              <img
                src="/leonardo_briceno_IMG_5201.jpg"
                alt="Leonardo Briceño - Fotógrafo profesional"
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-white tracking-tight">{CONTACT_INFO.photographer}</p>
                  <p className="text-xs text-neutral-400">Servicios Fotográficos</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#EF233C] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#EF233C] animate-pulse" />
                  <span>{CONTACT_INFO.brand}</span>
                </div>
              </div>
            </div>

            {/* Dotted corner accent like user's flyers */}
            <div className="absolute -bottom-4 -left-4 -z-10 opacity-30">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-[#EF233C]" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Methodology */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EF233C] uppercase mb-3">
              <Camera size={16} className="text-[#EF233C]" />
              <span>SOBRE EL FOTÓGRAFO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
              LEONARDO BRICEÑO
            </h2>

            <p className="text-lg text-neutral-300 font-medium italic mb-6">
              "Let's work together." — Enfoque dinámico, espontáneo y con la máxima precisión técnica en cada disparo.
            </p>

            <div className="space-y-4 text-sm text-neutral-400 leading-relaxed mb-8">
              <p>
                Detrás de <strong className="text-white">nomad.vzla</strong> está la pasión por retratar historias auténticas, la vibra urbana de Caracas y la adrenalina de los eventos deportivos y activaciones de marca más importantes.
              </p>
              <p>
                Trabajo con flujo de trabajo totalmente digital y profesional: desde la planificación y asesoría en locaciones y estilo, hasta la captura en alta resolución y la entrega en tiempos récord (incluyendo opciones de <strong className="text-white">Sneak Peek en menos de 24 horas</strong> para eventos que requieren difusión inmediata).
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                  <Camera className="w-4 h-4 text-[#EF233C]" />
                  <span>Equipo Profesional</span>
                </div>
                <p className="text-xs text-neutral-400">
                  DSLR Canon EOS Rebel T7 con sensor de 24.1 MP, captura RAW de alta definición y ópticas luminosas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-[#EF233C]" />
                  <span>Tiempos de Entrega</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Estimado de 2 días para sesiones de retratos y producto. Sneak Peek express de 24h en eventos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-[#EF233C]" />
                  <span>Edición de Alta Fidelidad</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Revelado digital y corrección cromática personalizada orientada a look editorial y publicitario.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-[#EF233C]" />
                  <span>Caracas & Nacional</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Disponibilidad para traslados y producciones en toda la Gran Caracas y el interior del país.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#EF233C] hover:bg-red-600 text-white shadow-lg shadow-red-600/25 active:scale-98 transition-all cursor-pointer"
              >
                Trabajemos Juntos
              </button>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-semibold text-xs text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center gap-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#EF233C]" />
                <span>Ver Instagram @nomad.vzla</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
