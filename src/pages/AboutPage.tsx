import React from 'react';
import { PageId } from '../types';
import { CHAMBER_INFO } from '../data/chamberData';
import { ArrowRight, MapPin, Phone, ShieldCheck, Scale, Building2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      
      {/* Editorial Header */}
      <section className="bg-[#0B1528] text-white pt-16 pb-20 border-b border-[#C5A880]/20 relative overflow-hidden">
        <div className="absolute inset-0 css-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C5A880] mb-4">
              <span>Verified Chamber Identity</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Kamalia, Punjab</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              About Mahendru Law Chamber
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Operating from Kacheri Road near Thana Mor in Kamalia, Mahendru Law Chamber provides structured legal services and dispute evaluation for individuals, property owners, and commercial entities within the district judicial corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fact vs General Practice Distinction Box */}
          <div className="mb-14 p-6 bg-white border border-[#E6E3D8] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-full bg-[#896F4B] shrink-0 self-stretch rounded-xs" />
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-900 uppercase tracking-wider text-xs block">
                  Chamber Disclosure & Editorial Principle
                </span>
                <p className="leading-relaxed">
                  In compliance with transparent legal practice standards, this publication distinguishes between verified institutional facts regarding Mahendru Law Chamber (its physical address, telephone contacts, and registered category) and the general statutory frameworks governing legal practice in the province of Punjab. Individual advocate credentials, bar affiliations, and specific representation terms are confirmed directly upon consultation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Editorial Column */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold">
                  Section 01 · Business Identity
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1528]">
                  Verified Business Registration & Identity
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A880]" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Mahendru Law Chamber is a recognized legal services practice based in Kamalia, Punjab. The practice operates under the legal services category, addressing civil, revenue, documentation, and court procedural matters arising in the sub-division and surrounding regions of District Toba Tek Singh.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Unlike promotional enterprises, legal practices in Pakistan operate subject to professional decorum and statutory canons of conduct. In keeping with these principles, the chamber focuses on procedural diligence, factual precision, and transparent counsel rather than promotional commercial assertions.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E6E3D8]">
                <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold">
                  Section 02 · Location & Geographic Context
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1528]">
                  The Kacheri Road Legal Corridor in Kamalia
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A880]" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  The chamber is situated near Thana Mor along Kacheri Road, Kamalia. In the administrative structure of the Punjab, Kacheri Road is the primary civic corridor housing sub-divisional administrative offices, revenue departments (Tehsil office, Arazi Record Center linkages, Patwari circles), police authorities, and the local court complexes.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  This central location provides clients with practical accessibility when coordinating revenue record verification, registering deeds, or attending scheduled judicial hearings in the local courts.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E6E3D8]">
                <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold">
                  Section 03 · Standards of Practice
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1528]">
                  Professional Integrity & Confidentiality
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A880]" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every legal enquiry received by the chamber is handled with professional care. Key operational commitments include:
                </p>
                
                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="p-4 bg-white border border-[#E6E3D8]">
                    <span className="font-semibold text-slate-900 block mb-1">Pre-Engagement Conflict Scrutiny</span>
                    <p className="leading-relaxed">
                      Ensuring that no prior engagement or confidential disclosure compromises our ability to act objectively for a client.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-[#E6E3D8]">
                    <span className="font-semibold text-slate-900 block mb-1">Evidentiary Reality</span>
                    <p className="leading-relaxed">
                      Advising prospective litigants frankly regarding the factual strength of documentary evidence under the Qanun-e-Shahadat Order and civil jurisprudence.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-[#E6E3D8]">
                    <span className="font-semibold text-slate-900 block mb-1">Formal Scope Confirmation</span>
                    <p className="leading-relaxed">
                      Executing formal Vakalatnama and establishing explicit representation milestones before initiating filings or court proceedings.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Verified Particulars & Contact Panel */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Particulars Card */}
              <div className="bg-[#0B1528] text-white p-8 border border-[#C5A880]/30 shadow-md">
                <div className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">
                  Chamber Factsheet
                </div>
                
                <div className="space-y-5 text-xs">
                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">Formal Title</span>
                    <span className="text-white font-serif text-lg font-bold">{CHAMBER_INFO.name}</span>
                  </div>

                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">Primary Activity</span>
                    <span className="text-slate-200">{CHAMBER_INFO.category}</span>
                  </div>

                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">Physical Address</span>
                    <span className="text-slate-200 leading-relaxed block">{CHAMBER_INFO.location}</span>
                  </div>

                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">Administrative Hierarchy</span>
                    <span className="text-slate-200 block">Sub-Division Kamalia</span>
                    <span className="text-slate-400 block text-[11px]">District Toba Tek Singh · Faisalabad Division · Punjab</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">Direct Telephone</span>
                    <a
                      href={`tel:${CHAMBER_INFO.phoneTel}`}
                      className="text-[#DFCBAB] hover:underline font-semibold tabular-nums text-sm block"
                    >
                      {CHAMBER_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] hover:bg-[#DFCBAB] transition-colors rounded-sm cursor-pointer shadow-sm"
                  >
                    <span>Initiate Legal Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="bg-white p-6 border border-[#E6E3D8] text-xs text-slate-600 space-y-2">
                <span className="font-semibold text-slate-900 block">In-Person Consultations</span>
                <p className="leading-relaxed">
                  Due to morning judicial cause lists and hearing attendances in court, in-person meetings at the chamber on Kacheri Road are arranged strictly following preliminary telephone or structured electronic enquiry.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
