import React from 'react';
import { NomadLogo, NomadApertureIcon } from './NomadLogo';
import { CONTACT_INFO } from '../data/photographyData';
import { Phone, MessageCircle, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 text-xs pb-20 sm:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <NomadLogo size="md" />
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Servicios fotográficos profesionales por <strong className="text-white">Leonardo Briceño</strong> en Caracas, Venezuela. Retratos urbanos, fotografía comercial de producto y cobertura deportiva y de eventos.
            </p>
            <div className="flex items-center gap-2 text-neutral-300 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#EF233C]" />
              <span className="font-semibold text-white">{CONTACT_INFO.status}</span>
            </div>
          </div>

          {/* Categorías de Servicio */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#paquetes" className="hover:text-white transition-colors">
                  Retratos Urbanos & Lifestyle
                </a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-white transition-colors">
                  Fotografía de Producto & E-Commerce
                </a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-white transition-colors">
                  Cobertura On The Go (2h+)
                </a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-white transition-colors">
                  All-Day Content (Eventos & Expos)
                </a>
              </li>
              <li>
                <a href="#cotizacion" className="text-[#EF233C] hover:underline font-semibold">
                  Cotizaciones a la medida →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto Directo</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EF233C] shrink-0" />
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: +58 412-9605300</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#EF233C] shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>@nomad.vzla</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Caracas, Venezuela</span>
              </li>
            </ul>
          </div>

          {/* Working Philosophy */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Filosofía</h4>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              "Let's work together." Creemos en el valor de las imágenes nítidas, auténticas y con propósito comunicacional. Cada sesión incluye entrega digital protegida y soporte directo.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#EF233C]" />
              <span>Volver Arriba</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} <span className="text-neutral-300 font-semibold">nomad.vzla</span> · Leonardo Briceño. Todos los derechos reservados.
          </p>
          <p className="text-neutral-500 flex items-center justify-center gap-2">
            <span>Diseño optimizado para móviles</span>
            <span>·</span>
            <span>Alta Resolución RAW</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
