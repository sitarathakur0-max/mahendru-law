import React, { useState } from 'react';
import { CHAMBER_INFO } from '../data/chamberData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Verified number format for WhatsApp API
  const whatsappUrl = `https://wa.me/${CHAMBER_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Mahendru Law Chamber, I would like to make a preliminary legal enquiry regarding a matter in Kamalia, Punjab.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      {/* Accessible Tooltip */}
      {isHovered && (
        <div
          role="tooltip"
          className="absolute left-16 bg-[#0B1528] text-white text-xs py-1.5 px-3 rounded shadow-lg border border-[#C5A880]/40 whitespace-nowrap pointer-events-none transition-opacity duration-200"
        >
          <span className="font-medium text-[#DFCBAB]">WhatsApp Contact</span>
          <span className="block text-[11px] text-slate-300 tabular-nums">{CHAMBER_INFO.phone}</span>
        </div>
      )}

      {/* Exactly ONE Floating WhatsApp Button on entire site */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Direct WhatsApp Enquiry with Mahendru Law Chamber at ${CHAMBER_INFO.phone}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Simple crisp SVG icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.507 14.307l-.009.075c-.338.903-1.47 1.66-2.392 1.849-.624.128-1.442.23-4.17-.905-3.486-1.45-5.74-5.004-5.914-5.237-.174-.233-1.417-1.89-1.417-3.606 0-1.716.897-2.557 1.217-2.906.32-.349.7-.436.933-.436.233 0 .466.002.668.012.213.01.498-.081.779.593.29.699.988 2.413 1.075 2.588.087.175.145.38.03.612-.116.233-.174.379-.348.583-.175.204-.367.457-.525.613-.174.175-.356.365-.153.714.203.35 1.054 1.74 2.26 2.817 1.554 1.388 2.864 1.82 3.272 2.023.407.204.647.175.88-.088.232-.262.988-1.164 1.25-1.572.262-.407.524-.349.88-.204.356.146 2.26 1.066 2.65 1.26.39.195.65.292.744.453.094.16.094.933-.244 1.836zM12.012 2.002C6.495 2.002 2.01 6.48 2.01 11.996c0 1.94.555 3.75 1.517 5.286L2 22l4.87-1.503a9.92 9.92 0 0 0 5.142 1.499c5.517 0 10.002-4.478 10.002-9.995 0-5.516-4.485-9.999-10.002-9.999z" />
        </svg>

        {/* Subtle status indicator */}
        <span className="sr-only">Chat on WhatsApp: {CHAMBER_INFO.phone}</span>
      </a>
    </div>
  );
};
