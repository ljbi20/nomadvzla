/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesAndPackages } from './components/ServicesAndPackages';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { MobileOptimizedContact } from './components/MobileOptimizedContact';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { PackageItem } from './data/photographyData';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [projectNote, setProjectNote] = useState<string>('');

  const scrollToQuote = () => {
    const el = document.getElementById('cotizacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPackages = () => {
    const el = document.getElementById('paquetes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    scrollToQuote();
  };

  const handleSelectProjectForQuote = (title: string) => {
    setProjectNote(`Inspirado en el trabajo "${title}" de la galería`);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Glass Navigation */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onQuoteClick={scrollToQuote}
          onExplorePackages={scrollToPackages}
        />

        {/* Packages & Services (Retratos, Producto, Eventos) */}
        <ServicesAndPackages onSelectPackage={handleSelectPackage} />

        {/* Portfolio Gallery */}
        <PortfolioGallery onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* About Photographer Leonardo Briceño */}
        <AboutSection onQuoteClick={scrollToQuote} />

        {/* Integrated Mobile-Optimized Quote & Contact System */}
        <MobileOptimizedContact
          initialPackage={selectedPackage}
          initialProjectNote={projectNote}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onQuoteClick={scrollToQuote} />
    </div>
  );
}
