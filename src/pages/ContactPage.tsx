import React, { useState, useEffect } from 'react';
import { PageId, EnquirySubmission, EnquiryResponse } from '../types';
import { CHAMBER_INFO, ENQUIRY_CATEGORIES } from '../data/chamberData';
import { Phone, MapPin, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, Loader2, RotateCcw } from 'lucide-react';

interface ContactPageProps {
  initialCategory?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialCategory, onNavigate }) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    fullName: '',
    phone: '',
    email: '',
    category: initialCategory || ENQUIRY_CATEGORIES[0],
    description: '',
    preferredMethod: 'phone',
    website_url_check: '', // Honeypot anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EnquiryResponse | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full legal name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact telephone number is required.';
    } else {
      const clean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
      if (!/^\d{7,15}$/.test(clean)) {
        errs.phone = 'Please enter a valid telephone number (7 to 15 digits).';
      }
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email format (e.g. user@example.com).';
      }
    }

    if (!formData.category) {
      errs.category = 'Please select an enquiry category.';
    }

    if (!formData.description.trim()) {
      errs.description = 'Please provide a short description of the matter.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Description should be at least 15 characters to explain the general issue.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNetworkError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: EnquiryResponse = await response.json();

      if (!response.ok || !data.success) {
        setNetworkError(data.error || 'The server rejected the submission. Please review your entries.');
      } else {
        setSubmissionResult(data);
      }
    } catch (err: any) {
      console.error('Submission failed:', err);
      setNetworkError(
        'Unable to communicate with the chamber backend service. Please check your internet connection or call the chamber directly at ' +
          CHAMBER_INFO.phone +
          '.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      category: ENQUIRY_CATEGORIES[0],
      description: '',
      preferredMethod: 'phone',
      website_url_check: '',
    });
    setErrors({});
    setSubmissionResult(null);
    setNetworkError(null);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900">
      
      {/* Header */}
      <section className="bg-[#0B1528] text-white pt-16 pb-20 border-b border-[#C5A880]/20 relative overflow-hidden">
        <div className="absolute inset-0 css-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C5A880] mb-4">
              <span>Direct Inquiries</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Kamalia, Punjab</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Contact & Preliminary Legal Enquiry
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Submit details regarding your civil, revenue, documentation, or court matter. All submissions are processed through preliminary conflict review prior to consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Verified Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Verified Particulars & Mandatory Privacy Notice */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Verified Contact Details Card */}
              <div className="bg-white p-8 border border-[#E6E3D8] shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#896F4B] block mb-1">
                    Direct Contact
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#0B1528]">
                    Verified Chamber Office
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="pb-4 border-b border-slate-100">
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      Telephone
                    </span>
                    <a
                      href={`tel:${CHAMBER_INFO.phoneTel}`}
                      className="text-base font-bold text-[#0B1528] hover:text-[#896F4B] transition-colors tabular-nums"
                    >
                      {CHAMBER_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Direct voice calls for enquiries & appointments
                    </span>
                  </div>

                  <div className="pb-4 border-b border-slate-100">
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      Physical Location
                    </span>
                    <span className="text-slate-800 leading-relaxed block font-medium">
                      {CHAMBER_INFO.location}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Sub-Division Kamalia · District Toba Tek Singh · Punjab
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      Practice Status
                    </span>
                    <span className="text-slate-800 block">
                      Active Legal Services Practice
                    </span>
                  </div>
                </div>
              </div>

              {/* MANDATORY PRIVACY NOTICE BOX */}
              <div className="p-6 bg-[#0B1528] text-white border border-[#C5A880]/40 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFCBAB]">
                  <ShieldAlert className="w-4 h-4 text-[#C5A880]" />
                  <span>Confidentiality & Privacy Advisory</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Do <strong className="text-white font-medium">NOT</strong> submit confidential passwords, bank account details, scanned National Identity Cards (CNIC), or privileged trade secrets through an unsecured web form.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Please limit your online description to general facts (e.g., &ldquo;Title dispute regarding agricultural land in Tehsil Kamalia with opposing notice received&rdquo;). Detailed original documents should only be produced in person during consultation.
                </p>
              </div>

              {/* Consultation Scheduling Note */}
              <div className="p-5 bg-white border border-[#E6E3D8] text-xs text-slate-600">
                <strong className="text-slate-900 block mb-1">Consultation Scheduling:</strong>
                Chamber consultations are scheduled following preliminary matter review. Due to morning judicial court appearances, clients are encouraged to book in advance.
              </div>

            </div>

            {/* Right: Functional Form or Submission Success */}
            <div className="lg:col-span-7">
              
              {submissionResult ? (
                /* SUCCESS STATE */
                <div className="bg-white p-8 sm:p-10 border-2 border-[#896F4B] shadow-md space-y-6">
                  <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#896F4B] flex items-center justify-center text-[#896F4B]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#896F4B] font-semibold block mb-1">
                      Enquiry Registered
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1528]">
                      Your Legal Enquiry Has Been Received
                    </h3>
                  </div>

                  <div className="p-5 bg-[#FAF9F5] border border-[#E6E3D8] space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-[#E6E3D8]">
                      <span className="text-slate-500">Official Reference Number:</span>
                      <span className="font-bold text-[#0B1528] tabular-nums font-mono">
                        {submissionResult.referenceNumber}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#E6E3D8]">
                      <span className="text-slate-500">Timestamp:</span>
                      <span className="text-slate-700 tabular-nums">
                        {submissionResult.timestamp ? new Date(submissionResult.timestamp).toLocaleString() : 'Recorded'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Status:</span>
                      <span className="text-[#896F4B] font-semibold">Under Conflict Clearance</span>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                    <p>{submissionResult.instructions}</p>
                    <p className="text-slate-500">
                      Please retain your reference number <strong className="text-slate-800">{submissionResult.referenceNumber}</strong> when communicating with the chamber by phone.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#0B1528] text-white hover:bg-[#162646] transition-colors rounded-sm cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                    <button
                      onClick={() => onNavigate('home')}
                      className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors rounded-sm cursor-pointer"
                    >
                      <span>Return to Home</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FUNCTIONAL ENQUIRY FORM */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white p-8 sm:p-10 border border-[#E6E3D8] shadow-xs space-y-6"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#896F4B] block mb-1">
                      Preliminary Submission
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1528]">
                      Matter Registration Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
                    </p>
                  </div>

                  {networkError && (
                    <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Submission Error</span>
                        <span>{networkError}</span>
                      </div>
                    </div>
                  )}

                  {/* Honeypot Spam Field (Hidden from human users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url_check">Do not fill this field</label>
                    <input
                      type="text"
                      id="website_url_check"
                      name="website_url_check"
                      value={formData.website_url_check}
                      onChange={(e) => setFormData({ ...formData, website_url_check: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Muhammad Tariq"
                      className={`w-full px-4 py-2.5 text-sm bg-white border ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E6E3D8]'
                      } rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]`}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-red-600 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Two-column layout for Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Contact Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                        Contact Telephone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. +92 300 1234567"
                        className={`w-full px-4 py-2.5 text-sm bg-white border ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E6E3D8]'
                        } rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]`}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                        Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. name@domain.com"
                        className={`w-full px-4 py-2.5 text-sm bg-white border ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E6E3D8]'
                        } rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* General Enquiry Category */}
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                      General Enquiry Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => {
                        setFormData({ ...formData, category: e.target.value });
                        if (errors.category) setErrors({ ...errors, category: '' });
                      }}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#E6E3D8] rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] cursor-pointer"
                      aria-required="true"
                    >
                      {ENQUIRY_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-xs text-red-600 mt-1">{errors.category}</p>
                    )}
                  </div>

                  {/* Short Description */}
                  <div className="space-y-1.5">
                    <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                      Short Description of the Matter <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: '' });
                      }}
                      placeholder="Summarize the core facts or questions (e.g. 'Dispute regarding property boundary demarcation in Kamalia; opposing party has served a notice.') Do not include passwords or bank numbers."
                      className={`w-full px-4 py-2.5 text-sm bg-white border ${
                        errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E6E3D8]'
                      } rounded-sm focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]`}
                      aria-required="true"
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'desc-error' : undefined}
                    />
                    {errors.description && (
                      <p id="desc-error" className="text-xs text-red-600 mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                      Preferred Contact Method for Response
                    </span>
                    <div className="flex items-center gap-6 text-sm text-slate-700">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value="phone"
                          checked={formData.preferredMethod === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredMethod: 'phone' })}
                          className="text-[#0B1528] focus:ring-[#C5A880]"
                        />
                        <span>Telephone Call</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value="sms"
                          checked={formData.preferredMethod === 'sms'}
                          onChange={() => setFormData({ ...formData, preferredMethod: 'sms' })}
                          className="text-[#0B1528] focus:ring-[#C5A880]"
                        />
                        <span>SMS Text Message</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider bg-[#0B1528] text-white hover:bg-[#162646] transition-colors rounded-sm cursor-pointer shadow-sm disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                          <span>Transmitting to Chamber...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Legal Enquiry</span>
                          <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    By submitting this form, you acknowledge that transmission does not create a formal advocate-client relationship until conflict clearance and representation terms are confirmed in person.
                  </p>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
