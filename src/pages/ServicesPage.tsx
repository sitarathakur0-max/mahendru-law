import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_FRAMEWORK, CHAMBER_INFO } from '../data/chamberData';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, category?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_FRAMEWORK
    : SERVICES_FRAMEWORK.filter((s) => s.categoryKey === selectedCategory);

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      
      {/* Page Header (Zero Images, Typography & CSS Borders) */}
      <section className="bg-[#0B1528] text-white pt-16 pb-20 border-b border-[#C5A880]/20 relative overflow-hidden">
        <div className="absolute inset-0 css-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C5A880] mb-4">
              <span>Legal Services Directory</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Kamalia, Punjab</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Legal Services & Inquiry Directory
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              A structured procedural framework outlining legal matters and documentation handled by legal counsel. Review the matter scope and required preliminary paperwork before initiating an enquiry.
            </p>

            {/* Statutory Disclaimer Box */}
            <div className="mt-8 p-4 bg-[#0F1C36] border-l-2 border-[#C5A880] text-xs text-slate-300 leading-relaxed">
              <span className="text-white font-medium">Important Regulatory Notice: </span>
              Under the legal ethics of the Bar Council in Pakistan, legal counsel does not solicit clients or guarantee judicial outcomes. The categories below represent factual inquiry areas for prospective clients seeking preliminary procedural evaluation.
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs (Zero-pill, clean segmented controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E6E3D8] text-xs font-medium">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'border-[#0B1528] text-[#0B1528] font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              All Practice Categories ({SERVICES_FRAMEWORK.length})
            </button>
            {SERVICES_FRAMEWORK.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.categoryKey)}
                className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === item.categoryKey
                    ? 'border-[#0B1528] text-[#0B1528] font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.categoryKey}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="space-y-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-[#E6E3D8] hover:border-[#C5A880]/80 transition-colors p-8 sm:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number and Title */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="font-serif text-sm font-bold text-[#896F4B]">
                      Practice Category {service.number}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1528] leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.factualScope}
                    </p>
                    
                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('contact', service.categoryKey)}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#0B1528] text-white hover:bg-[#162646] transition-colors rounded-sm cursor-pointer shadow-sm"
                      >
                        <span>Enquire Regarding This Matter</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Typical Documentation & Procedural Note */}
                  <div className="lg:col-span-7 bg-[#FAF9F5] p-6 border border-[#E6E3D8] space-y-5">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <span>Preliminary Documents Recommended for Review</span>
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {service.typicalDocumentation.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#896F4B] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#E6E3D8] text-xs text-slate-500 flex items-start gap-2">
                      <span className="font-semibold text-slate-700 shrink-0">Procedural Note:</span>
                      <span>{service.proceduralNote}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Need Direct Advice Banner */}
          <div className="mt-16 bg-[#0B1528] text-white p-8 sm:p-12 border border-[#C5A880]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-serif text-2xl font-bold text-white">
                Unsure Which Category Applies to Your Matter?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You can submit a general enquiry describing your situation or call the chamber at <span className="text-white font-medium tabular-nums">{CHAMBER_INFO.phone}</span>. An advocate will review your facts to determine the relevant judicial or administrative procedure.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact', 'General Legal Advisory')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] hover:bg-[#DFCBAB] transition-colors rounded-sm cursor-pointer shrink-0"
            >
              <span>Submit General Enquiry</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
