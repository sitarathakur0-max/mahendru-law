import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedCategoryForContact, setSelectedCategoryForContact] = useState<string | undefined>(undefined);

  // Sync route with browser history / hash
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['services', 'about', 'faq', 'contact'].includes(hash)) {
        setActivePage(hash as PageId);
      } else {
        setActivePage('home');
      }
    };

    // Initial check on load
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title dynamically
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Mahendru Law Chamber – Legal Services | Kamalia, Punjab',
      services: 'Legal Practice Directory – Mahendru Law Chamber | Kamalia',
      about: 'About the Chamber – Mahendru Law Chamber | Kacheri Road, Kamalia',
      faq: 'Frequently Asked Questions – Mahendru Law Chamber | Kamalia',
      contact: 'Contact & Legal Enquiry – Mahendru Law Chamber | Kamalia',
    };
    document.title = titles[activePage] || titles.home;
  }, [activePage]);

  const handleNavigate = (page: PageId, category?: string) => {
    setActivePage(page);
    if (category) {
      setSelectedCategoryForContact(category);
    }
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 font-sans selection:bg-[#C5A880]/30 selection:text-slate-900">
      {/* 3-Zone Top Bar Header */}
      <Header activePage={activePage} onNavigate={(p) => handleNavigate(p)} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {activePage === 'contact' && (
          <ContactPage
            initialCategory={selectedCategoryForContact}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Minimal Footer with Verified Facts Only */}
      <Footer onNavigate={(p) => handleNavigate(p)} />

      {/* Exactly ONE Floating WhatsApp Button, strictly bottom-left corner */}
      <FloatingWhatsApp />
    </div>
  );
}
