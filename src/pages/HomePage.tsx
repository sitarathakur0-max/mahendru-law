import React, { useState } from 'react';
import { PageId } from '../types';
import { CHAMBER_INFO, SERVICES_FRAMEWORK, FAQ_ITEMS } from '../data/chamberData';
import { ArrowRight, ChevronDown, Check, Phone, FileText, Scale } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-submit-enquiry');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION: Typography-led, Deep Navy & Antique Gold (ZERO IMAGES) */}
      <section className="relative bg-[#0B1528] text-white overflow-hidden border-b border-[#C5A880]/20 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* CSS-only architectural grid and subtle geometric accents */}
        <div className="absolute inset-0 css-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C5A880]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Metadata lead-in without pills */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C5A880] mb-6">
              <span>Legal Services Practice</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Kamalia, Punjab</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="tabular-nums">Est. Kacheri Road</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Clear Legal Guidance.{' '}
              <span className="text-[#DFCBAB] font-normal italic">Professional Representation.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Mahendru Law Chamber provides structured legal evaluation, procedural counsel, and court documentation assistance. Situated on Kacheri Road near Thana Mor, we assist clients with formal legal inquiries under applicable provincial and federal statutes.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] hover:bg-[#DFCBAB] transition-colors rounded-sm cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-200 border border-[#C5A880]/40 hover:border-[#C5A880] hover:text-white hover:bg-slate-800/40 transition-colors rounded-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <span>Explore Legal Services</span>
              </button>
            </div>

            {/* Verified Quick Particulars Bar */}
            <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-400">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                <div>
                  <span className="text-slate-200 font-medium block">Verified Location</span>
                  <span>{CHAMBER_INFO.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                <div>
                  <span className="text-slate-200 font-medium block">Public Inquiries Telephone</span>
                  <a href={`tel:${CHAMBER_INFO.phoneTel}`} className="text-slate-200 hover:text-[#C5A880] tabular-nums font-semibold">
                    {CHAMBER_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL INTRODUCTION & EDITORIAL OVERVIEW */}
      <section className="py-20 bg-[#FAF9F5] text-slate-900 border-b border-[#E6E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold">
                Chamber Orientation
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1528] leading-tight">
                Grounded Legal Services in Kamalia Judicial Corridor
              </h2>
              <div className="w-12 h-0.5 bg-[#C5A880]" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Mahendru Law Chamber operates as an independent legal services practice centrally positioned along Kacheri Road near Thana Mor in Kamalia. This location places the practice in immediate proximity to local administrative, revenue, and judicial facilities serving the sub-division.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E6E3D8] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0B1528]">
                Professional Approach to Client Inquiries
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Navigating legal matters requires meticulous examination of factual records, precise statutory interpretation, and adherence to established procedural rules in Pakistan. We approach every preliminary legal enquiry through systematic document scrutiny and candid assessment of procedural standing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 text-xs">
                <div className="space-y-1.5">
                  <span className="font-semibold text-slate-900 block">Conflict-Free Inquiries</span>
                  <p className="text-slate-500">
                    Prior to accepting any matter or representation, prospective parties are cleared for potential conflicts of interest.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-semibold text-slate-900 block">Fact-Based Scrutiny</span>
                  <p className="text-slate-500">
                    Recommendations are grounded strictly in evidentiary documents and verified records rather than speculative promises.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F3F1EB] border-l-2 border-[#C5A880] text-xs text-slate-700">
                <strong className="text-slate-900">Direct Engagement Principle: </strong>
                Advocate representation, court appearances, and formal fee arrangements are determined solely through direct advocate-client consultation.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: STRUCTURED SERVICES FRAMEWORK DIRECTORY */}
      <section className="py-20 bg-white border-b border-[#E6E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold mb-2">
                Practice Directory
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528]">
                Verified Legal Service Categories
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#896F4B] hover:text-[#0B1528] transition-colors cursor-pointer"
            >
              <span>View Comprehensive Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_FRAMEWORK.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF9F5] border border-[#E6E3D8] hover:border-[#C5A880] transition-colors p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-sm font-bold text-[#C5A880] mb-3">
                    {service.number}.
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B1528] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.factualScope}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E3D8] flex items-center justify-between text-xs">
                  <span className="text-slate-400">Formal Enquiry</span>
                  <button
                    onClick={() => onNavigate('contact', service.categoryKey)}
                    className="font-semibold text-[#896F4B] hover:text-[#0B1528] transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLEAR ENQUIRY PROCESS (3 STEPS) */}
      <section className="py-20 bg-[#0F1C36] text-white border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
              Procedure
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Legal Enquiry Process
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Clear steps followed from your initial contact to in-person consultation and formal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-[#0B1528] border border-[#C5A880]/20 p-8 relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-3">
                Step 01
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Preliminary Submission
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact the chamber by phone at <span className="text-white font-medium tabular-nums">+92 300 2941990</span> or complete the online enquiry form detailing the general nature of the legal inquiry and preferred communication method.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0B1528] border border-[#C5A880]/20 p-8 relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-3">
                Step 02
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Conflict & Jurisdiction Check
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The chamber conducts an internal conflict verification to confirm there is no opposing relationship, and reviews the statutory jurisdiction applicable to the matter (sub-division Kamalia or relevant district forum).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0B1528] border border-[#C5A880]/20 p-8 relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-3">
                Step 03
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Chamber Consultation & Scope
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                An in-person appointment is scheduled at the chamber on Kacheri Road. Original instruments are examined, legal recourse is objectively assessed, and representation terms are formally agreed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PROFESSIONAL STANDARDS (NON-PROMISSORY LANGUAGE) */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#E6E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold mb-2">
              Practice Discipline
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528]">
              Professional Standards & Practice Commitments
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Legal practice demands strict fidelity to ethics, procedural laws, and professional honesty. We adhere to established legal standards without promising speculative outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-[#E6E3D8]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#896F4B] mb-2">Standard 01</div>
              <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-2">Strict Confidentiality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Communications, case documents, and consultations are maintained with rigorous professional confidence in accordance with professional legal ethics.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E6E3D8]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#896F4B] mb-2">Standard 02</div>
              <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-2">Objective Evaluation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advice is provided on the merits of factual documentation and prevailing jurisprudence. No guarantees of judicial outcomes are ever made.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E6E3D8]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#896F4B] mb-2">Standard 03</div>
              <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-2">Procedural Rigor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All drafting, notices, and court submissions follow strict statutory formats and timeline requirements under the relevant procedural codes.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E6E3D8]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#896F4B] mb-2">Standard 04</div>
              <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-2">Clear Fee Terms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consultation charges and case engagement fees are confirmed directly in advance with clients based on matter complexity, without hidden ambiguities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS TEASER ACCORDION */}
      <section className="py-20 bg-white border-b border-[#E6E3D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold mb-2">
              Common Questions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528]">
              Frequently Asked Legal Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Key considerations regarding submitting enquiries, documents, and consultations.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.slice(0, 4).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E6E3D8] bg-[#FAF9F5] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#0B1528]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#896F4B] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#E6E3D8]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#896F4B] hover:text-[#0B1528] transition-colors cursor-pointer"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CONTACT & LOCATION BANNER */}
      <section className="py-20 bg-[#0B1528] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F1C36] border border-[#C5A880]/30 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                Direct Communication
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Submit an Enquiry or Call the Chamber
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need preliminary scrutiny of title documents, drafting of a statutory legal notice, or representation before the courts in Kamalia, get in touch to arrange an evaluation.
              </p>
              <div className="text-xs text-slate-400 space-y-1 pt-2">
                <div><strong>Location:</strong> {CHAMBER_INFO.location}</div>
                <div><strong>Telephone:</strong> <span className="text-slate-200 tabular-nums">{CHAMBER_INFO.phone}</span></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0B1528] hover:bg-[#DFCBAB] transition-colors rounded-sm cursor-pointer shadow-lg"
              >
                <span>Complete Contact Form</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <a
                href={`tel:${CHAMBER_INFO.phoneTel}`}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider border border-[#C5A880]/40 text-slate-200 hover:text-white hover:border-[#C5A880] transition-colors rounded-sm cursor-pointer"
              >
                <span>Call {CHAMBER_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
