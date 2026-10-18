import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Legal Services' },
    { id: 'about', label: 'About the Chamber' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact & Enquiry' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B1528] text-white border-b border-[#C5A880]/20 shadow-md">
      {/* Top Bar: Exactly 3 Zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark in display serif */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded py-1"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#DFCBAB] transition-colors whitespace-nowrap shrink-0 block">
            Mahendru Law Chamber
          </span>
          <span className="text-[11px] font-sans tracking-widest uppercase text-[#C5A880]/80 block">
            Legal Services · Kamalia, Punjab
          </span>
        </button>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-[14px] cursor-pointer ${
                  isActive
                    ? 'text-white border-[#C5A880] font-semibold'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-[#C5A880]/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1528] bg-[#C5A880] hover:bg-[#DFCBAB] transition-colors duration-200 rounded-sm cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <span>Make an Enquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-slate-800/60 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D18] border-b border-[#C5A880]/30 px-6 py-6 transition-all duration-200 ease-in-out">
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2.5 px-3 text-base font-medium rounded transition-colors ${
                    isActive
                      ? 'bg-[#162646] text-[#DFCBAB] font-semibold border-l-2 border-[#C5A880]'
                      : 'text-slate-300 hover:bg-[#0F1C36] hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] rounded-sm hover:bg-[#DFCBAB]"
            >
              <span>Make an Enquiry</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-center text-slate-400">
              Kacheri Road, near Thana Mor, Kamalia, Punjab
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
