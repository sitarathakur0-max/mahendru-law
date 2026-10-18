import React from 'react';
import { PageId } from '../types';
import { CHAMBER_INFO } from '../data/chamberData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D18] text-slate-300 border-t border-[#C5A880]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Chamber Identity */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
              {CHAMBER_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              Legal Services Practice
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing professional legal evaluation, formal documentation scrutiny, and court representation guidance from our chamber situated on Kacheri Road in Kamalia, Punjab.
            </p>
            
            {/* Pure CSS fine geometric accent */}
            <div className="w-16 h-0.5 bg-[#C5A880]/40 my-3" />
            <p className="text-xs text-slate-500">
              Jurisdiction: Sub-Division Kamalia · District Toba Tek Singh · Punjab
            </p>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Legal Services Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About the Chamber
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Legal Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Business Information */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Verified Business Particulars
            </h4>
            <div className="text-sm space-y-3 text-slate-400">
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Chamber Address</span>
                <span className="text-slate-200">{CHAMBER_INFO.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Telephone Inquiries</span>
                <a
                  href={`tel:${CHAMBER_INFO.phoneTel}`}
                  className="text-slate-200 hover:text-[#C5A880] transition-colors font-medium tabular-nums"
                >
                  {CHAMBER_INFO.phone}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Practice Category</span>
                <span className="text-slate-200">Legal Services / Law Practice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Statutory Non-Promissory Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400 font-medium">Statutory Notice: </strong>
            {CHAMBER_INFO.legalNotice}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 text-slate-500 text-[11px]">
            <p>
              © {new Date().getFullYear()} {CHAMBER_INFO.name}. All verified particulars published in accordance with professional legal standards.
            </p>
            <p className="text-slate-500">
              Kacheri Road, near Thana Mor, Kamalia, Punjab, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
