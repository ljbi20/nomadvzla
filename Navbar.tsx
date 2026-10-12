import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/photographyData';
import { Phone, MessageCircle, Menu, X, Instagram, Camera } from 'lucide-react';
import logoImg from '../assets/images/logo-04.png';

interface NavbarProps {
  onQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Sobre Leonardo', href: '#sobre-mi' },
    { label: 'Contacto & Cotización', href: '#cotizacion' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#cotizacion' && onQuoteClick) {
      onQuoteClick();
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl shadow-black/60'
          : 'bg-neutral-950/60 backdrop-blur-sm border-b border-neutral-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand / Botón de inicio */}
          <a
            href="#"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1 transition-opacity hover:opacity-95"
            aria-label="nomad.vzla - Inicio"
          >
            <img
              src={logoImg}
              alt="nomad.vzla"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF233C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Direct CTA desktop buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/60 rounded-full transition-colors"
              title="Instagram @nomad.vzla"
              aria-label="Instagram @nomad.vzla"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors"
              aria-label={`Llamar a ${CONTACT_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#EF233C]" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>

            <a
              href="#cotizacion"
              onClick={() => handleLinkClick('#cotizacion')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#EF233C] hover:bg-red-600 rounded-full transition-all duration-200 shadow-lg shadow-red-600/25 active:scale-95"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Cotizar Sesión</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20deseo%20cotizar%20un%20servicio%20fotogr%C3%A1fico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-400 hover:bg-neutral-850 rounded-full active:scale-95 transition-transform"
              aria-label="Escribir por WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#EF233C]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-neutral-950/98 border-b border-neutral-800 backdrop-blur-xl px-5 py-6 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-neutral-900 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#EF233C] font-bold">Servicios Fotográficos</p>
                <p className="text-base font-semibold text-white">Leonardo Briceño</p>
              </div>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
              >
                <Instagram className="w-4 h-4 text-[#EF233C]" />
                <span>@nomad.vzla</span>
              </a>
            </div>

            <nav className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-base font-semibold text-neutral-200 hover:text-[#EF233C] py-2 transition-colors border-b border-neutral-900/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hola%20Leonardo,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20una%20sesi%C3%B3n%20fotogr%C3%A1fica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl font-semibold text-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 text-[#EF233C]" />
                <span>Llamar al {CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
