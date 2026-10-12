import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, PACKAGES, PackageItem } from '../data/photographyData';
import { NomadLogo, NomadApertureIcon } from './NomadLogo';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode, 
  Calendar, 
  Clock, 
  MapPin, 
  Camera, 
  Sparkles, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface MobileOptimizedContactProps {
  initialPackage?: PackageItem | null;
  initialProjectNote?: string;
}

export const MobileOptimizedContact: React.FC<MobileOptimizedContactProps> = ({
  initialPackage,
  initialProjectNote,
}) => {
  // Form State
  const [selectedCategory, setSelectedCategory] = useState<'retratos' | 'producto' | 'eventos'>('retratos');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('express');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [locationPreference, setLocationPreference] = useState<string>('Caracas (Exteriores)');
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  // Update when external selection arrives
  useEffect(() => {
    if (initialPackage) {
      setSelectedCategory(initialPackage.category);
      setSelectedPackageId(initialPackage.id);
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialProjectNote) {
      setProjectNotes((prev) => (prev ? `${prev} - Referencia: ${initialProjectNote}` : `Referencia: ${initialProjectNote}`));
    }
  }, [initialProjectNote]);

  const currentPackages = PACKAGES.filter((p) => p.category === selectedCategory);
  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || currentPackages[0];

  const handleCategoryChange = (cat: 'retratos' | 'producto' | 'eventos') => {
    setSelectedCategory(cat);
    const firstOfCat = PACKAGES.find((p) => p.category === cat);
    if (firstOfCat) {
      setSelectedPackageId(firstOfCat.id);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const buildWhatsAppMessage = () => {
    const pkgName = activePackage?.name || 'Personalizado';
    const pkgDetails = activePackage ? `${activePackage.photos} (${activePackage.duration})` : '';
    
    let msg = `Hola Leonardo! 👋 Deseo solicitar una cotización con *nomad.vzla*:\n\n`;
    msg += `📸 *Servicio:* ${selectedCategory.toUpperCase()} - ${pkgName}\n`;
    if (pkgDetails) msg += `📋 *Detalle:* ${pkgDetails}\n`;
    if (clientName) msg += `👤 *Cliente:* ${clientName}\n`;
    if (clientPhone) msg += `📱 *Teléfono:* ${clientPhone}\n`;
    if (eventDate) msg += `📅 *Fecha estimada:* ${eventDate}\n`;
    if (locationPreference) msg += `📍 *Locación:* ${locationPreference}\n`;
    if (projectNotes) msg += `💬 *Notas:* ${projectNotes}\n`;
    msg += `\n¿Tienes disponibilidad para esta fecha? ¡Quedo atento!`;

    return encodeURIComponent(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cotizacion" className="py-20 md:py-28 bg-neutral-950 text-white relative border-b border-neutral-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EF233C] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EF233C] animate-pulse" />
            <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            PIDE TU COTIZACIÓN
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Sistema de cotización instantánea optimizado para móviles. Selecciona tu paquete o contáctame directamente por WhatsApp o llamada telefónica.
          </p>
        </div>

        {/* 1-Tap Quick Action Row for Mobile Users */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {/* WhatsApp One-Tap */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 flex flex-col items-center text-center justify-center transition-all duration-200 active:scale-95 group shadow-lg shadow-emerald-950/20"
          >
            <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp</span>
            <span className="text-[11px] text-emerald-300 font-mono-tech mt-0.5">{CONTACT_INFO.phoneFormatted}</span>
          </a>

          {/* Direct Call One-Tap */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="p-4 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 flex flex-col items-center text-center justify-center transition-all duration-200 active:scale-95 group shadow-lg"
          >
            <div className="w-11 h-11 rounded-full bg-[#EF233C] text-white flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Llamar Ahora</span>
            <span className="text-[11px] text-neutral-400 font-mono-tech mt-0.5">Atención Directa</span>
          </a>

          {/* Email One-Tap */}
          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Cotizaci%C3%B3n%20nomad.vzla`}
            className="p-4 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 flex flex-col items-center text-center justify-center transition-all duration-200 active:scale-95 group shadow-lg"
          >
            <div className="w-11 h-11 rounded-full bg-neutral-800 text-neutral-200 flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Correo</span>
            <span className="text-[11px] text-neutral-400 truncate max-w-[120px] mt-0.5">{CONTACT_INFO.email}</span>
          </a>

          {/* Instagram Profile */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 flex flex-col items-center text-center justify-center transition-all duration-200 active:scale-95 group shadow-lg"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Instagram</span>
            <span className="text-[11px] text-neutral-400 mt-0.5">@nomad.vzla</span>
          </a>
        </div>

        {/* Main Grid: Interactive Form vs Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Integrated Booking & Quote System */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight mb-2 flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-[#EF233C]" />
              <span>Configura tu Sesión</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Completa los datos para calcular y enviar tu propuesta de sesión directamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  1. Categoría de Servicio
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('retratos')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedCategory === 'retratos'
                        ? 'bg-[#EF233C] text-white border-[#EF233C] shadow-md shadow-red-600/30'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Retratos
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('producto')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedCategory === 'producto'
                        ? 'bg-[#EF233C] text-white border-[#EF233C] shadow-md shadow-red-600/30'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Producto
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('eventos')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedCategory === 'eventos'
                        ? 'bg-[#EF233C] text-white border-[#EF233C] shadow-md shadow-red-600/30'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Eventos
                  </button>
                </div>
              </div>

              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  2. Paquete Deseado
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedPackageId === pkg.id
                          ? 'bg-neutral-950 border-[#EF233C] ring-1 ring-red-500'
                          : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white uppercase">{pkg.name}</span>
                        {pkg.badge && (
                          <span className="text-[10px] text-[#EF233C] font-semibold">{pkg.badge}</span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400">{pkg.photos}</p>
                      <p className="text-[11px] text-neutral-500">{pkg.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Valentina Mendoza"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Ej. 0414-1234567"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Fecha Estimada de la Sesión
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Locación / Zona
                  </label>
                  <select
                    value={locationPreference}
                    onChange={(e) => setLocationPreference(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  >
                    <option value="Caracas (Exteriores / Urbana)">Caracas (Exteriores / Urbana)</option>
                    <option value="Caracas (Estudio / Indoor)">Caracas (Estudio / Indoor)</option>
                    <option value="Evento Deportivo / Maratón">Evento Deportivo / Maratón</option>
                    <option value="Sede Comercial / Tienda">Sede Comercial / Tienda</option>
                    <option value="Fuera de Caracas / Otra Ciudad">Fuera de Caracas / Otra Ciudad</option>
                  </select>
                </div>
              </div>

              {/* Project details */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Detalles del Proyecto o Referencias
                </label>
                <textarea
                  rows={3}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="Describe la idea, cantidad de personas/productos, o cualquier requerimiento específico..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirect}
                  className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 active:scale-98 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar por WhatsApp Inmediato</span>
                </button>

                <button
                  type="submit"
                  className="py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer border border-neutral-700"
                >
                  <Send className="w-4 h-4 text-[#EF233C]" />
                  <span>Guardar Solicitud</span>
                </button>
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">¡Solicitud generada con éxito!</h5>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Para garantizar la reserva más rápida de tu fecha, dale clic al botón verde de WhatsApp arriba para enviársela directamente a Leonardo Briceño.
                    </p>
                  </div>
                </div>
              )}

            </form>
          </div>

          {/* Right Column: Live Summary + Official Contact Details + QR Code Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Quote Summary Card */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono-tech">RESUMEN DE COTIZACIÓN</span>
                  <h4 className="text-xl font-extrabold text-white uppercase">{activePackage.name}</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-[#EF233C]" />
                </div>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Fotos Incluidas:</span>
                  <span className="text-white font-semibold">{activePackage.photos}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Duración Estimada:</span>
                  <span className="text-white font-semibold">{activePackage.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Tiempo de Entrega:</span>
                  <span className="text-emerald-400 font-semibold">{activePackage.deliveryTime}</span>
                </div>
                {activePackage.sneakPeek && (
                  <div className="flex justify-between py-1 border-b border-neutral-850">
                    <span className="text-red-400">Sneak Peek Express:</span>
                    <span className="text-red-300 font-semibold">{activePackage.sneakPeek}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Locación:</span>
                  <span className="text-white font-semibold">{locationPreference}</span>
                </div>
                {eventDate && (
                  <div className="flex justify-between py-1 border-b border-neutral-850">
                    <span className="text-neutral-400">Fecha Tentativa:</span>
                    <span className="text-white font-semibold">{eventDate}</span>
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 mb-6">
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  ✓ Incluye edición completa de color y alta resolución digital.<br />
                  ✓ Respaldado y entregado mediante enlace digital privado en alta calidad.
                </p>
              </div>

              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar y Enviar a WhatsApp</span>
              </button>
            </div>

            {/* Official Contact Details Card (from Page 5 of PDF) */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-white uppercase">{CONTACT_INFO.photographer}</h4>
                  <p className="text-xs text-neutral-400">{CONTACT_INFO.role} · {CONTACT_INFO.brand}</p>
                </div>
                <span className="text-xs text-[#EF233C] font-semibold bg-red-950/40 border border-red-800/40 px-2 py-0.5 rounded">
                  Caracas
                </span>
              </div>

              <div className="space-y-3 text-xs mb-6">
                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#EF233C]" />
                    <div>
                      <p className="text-[10px] text-neutral-400">Teléfono / WhatsApp</p>
                      <p className="text-xs font-bold text-white">{CONTACT_INFO.phoneFormatted}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.phoneFormatted, 'phone')}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    title="Copiar teléfono"
                  >
                    {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#EF233C]" />
                    <div>
                      <p className="text-[10px] text-neutral-400">Correo Electrónico</p>
                      <p className="text-xs font-bold text-white">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    title="Copiar correo"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Instagram Card & QR Code Trigger */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-950 to-neutral-900 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">@nomad.vzla</p>
                    <p className="text-[11px] text-neutral-400">Síguenos en Instagram</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowQrModal(true)}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Ver Código QR oficial"
                  >
                    <QrCode className="w-4 h-4 text-[#EF233C]" />
                    <span className="hidden sm:inline">Ver QR</span>
                  </button>

                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#EF233C] hover:bg-red-600 text-white text-xs transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Instagram QR Code Modal (Page 5 from user document) */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-4 flex justify-center">
              <Instagram size={48} className="text-[#EF233C]" />
            </div>

            <h4 className="text-xl font-extrabold text-white uppercase tracking-tight mb-1">
              Escanea el Código QR
            </h4>
            <p className="text-xs text-neutral-400 mb-6">
              Abre tu cámara móvil para conectar directamente con el perfil oficial de Instagram de <strong className="text-white">@nomad.vzla</strong>.
            </p>

            {/* Stylized QR representation */}
            <div className="bg-white p-5 rounded-2xl mx-auto inline-block shadow-inner mb-6">
              <div className="w-44 h-44 bg-neutral-100 border-2 border-neutral-900 p-2 flex flex-col items-center justify-center relative">
                <img
                  src="/nomad.vzla_qr.png"
                  alt="Código QR @nomad.vzla"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] font-bold text-neutral-900 mt-2">@NOMAD.VZLA</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#EF233C] hover:bg-red-600 text-white flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Abrir Perfil de Instagram</span>
              </a>

              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-2.5 rounded-xl font-medium text-xs text-neutral-400 hover:text-white bg-neutral-800 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
