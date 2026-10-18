export type PageId = 'home' | 'services' | 'about' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  categoryKey: string;
  number: string;
  title: string;
  factualScope: string;
  typicalDocumentation: string[];
  proceduralNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Enquiry Process' | 'Documentation' | 'Consultation & Fees' | 'Confidentiality';
}

export interface EnquirySubmission {
  fullName: string;
  phone: string;
  email?: string;
  category: string;
  description: string;
  preferredMethod: 'phone' | 'sms';
  website_url_check?: string; // Honeypot field
}

export interface EnquiryResponse {
  success: boolean;
  referenceNumber?: string;
  message?: string;
  timestamp?: string;
  instructions?: string;
  error?: string;
}
