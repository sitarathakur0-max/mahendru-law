import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ_ITEMS, CHAMBER_INFO } from '../data/chamberData';
import { ChevronDown, ArrowRight, Search } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-submit-enquiry', 'faq-consultation-fees']);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', 'Enquiry Process', 'Documentation', 'Consultation & Fees', 'Confidentiality'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(id);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      
      {/* Header */}
      <section className="bg-[#0B1528] text-white pt-16 pb-20 border-b border-[#C5A880]/20 relative overflow-hidden">
        <div className="absolute inset-0 css-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C5A880] mb-4">
              <span>Client Guidance</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Kamalia, Punjab</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Standard procedural guidance regarding submitting enquiries, assembling legal instruments, conflict reviews, and scheduling appointments at the chamber.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search & Category Filter Controls */}
          <div className="mb-10 space-y-6">
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search legal enquiry questions..."
                className="w-full bg-white border border-[#E6E3D8] pl-11 pr-4 py-3 text-sm text-slate-900 rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E6E3D8] text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'border-[#0B1528] text-[#0B1528] font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat === 'all' ? 'All Questions' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white border border-[#E6E3D8] text-slate-500 text-sm">
              No questions found matching your search. Try adjusting the keywords or clear the filter.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="border border-[#E6E3D8] bg-white transition-all duration-150 shadow-2xs"
                  >
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      aria-controls={`faq-panel-${faq.id}`}
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#896F4B] font-semibold block">
                          {faq.category}
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-bold text-[#0B1528]">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#896F4B] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        className="px-6 pb-6 pt-2 text-sm text-slate-700 leading-relaxed border-t border-slate-100"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Help Box */}
          <div className="mt-14 p-8 bg-[#0B1528] text-white border border-[#C5A880]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-lg">
              <h3 className="font-serif text-xl font-bold text-white">
                Have a Question Not Listed Here?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact the chamber directly at <span className="text-white font-medium tabular-nums">{CHAMBER_INFO.phone}</span> or transmit a preliminary enquiry form.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] hover:bg-[#DFCBAB] transition-colors rounded-sm cursor-pointer shrink-0"
            >
              <span>Submit Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
