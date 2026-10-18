import { ServiceItem, FaqItem } from '../types';

export const CHAMBER_INFO = {
  name: 'Mahendru Law Chamber',
  category: 'Legal Services',
  location: 'Thana Mor, Kacheri Road, Kamalia, Punjab, Pakistan',
  phone: '+92 300 2941990',
  phoneTel: '+923002941990',
  whatsappRaw: '923002941990',
  locality: 'Kamalia',
  district: 'Toba Tek Singh',
  province: 'Punjab',
  country: 'Pakistan',
  corridor: 'Kacheri Road (Judicial & Administrative Complex corridor)',
  legalNotice: 'Legal information provided on this website is for general informational and preliminary enquiry purposes only and does not constitute formal legal advice or create an advocate-client relationship. Representation and advisory services are confirmed only upon direct engagement and conflict check.',
};

export const SERVICES_FRAMEWORK: ServiceItem[] = [
  {
    id: 'civil-matters',
    categoryKey: 'Civil Legal Matters',
    number: '01',
    title: 'Civil Legal Matters & Dispute Advisory',
    factualScope: 'Preliminary evaluation of civil disputes, title issues, monetary recovery claims, declaratory suits, and injunction proceedings under the Code of Civil Procedure and relevant Punjab provincial statutes.',
    typicalDocumentation: [
      'Original or certified copies of disputable agreements or instruments',
      'Relevant correspondence and notices exchanged between parties',
      'Prior court orders or interim injunction copies, if already instituted',
    ],
    proceduralNote: 'All civil dispute enquiries are subject to formal conflict assessment prior to advocate appointment.',
  },
  {
    id: 'property-revenue',
    categoryKey: 'Property & Land Records',
    number: '02',
    title: 'Land Records, Revenue Matters & Property Inquiries',
    factualScope: 'Scrutiny of land title documentation, Jamabandi (record of rights), Fard Malkiat, mutation (inteqal) verification, partition proceedings, and revenue court representations under the Punjab Land Revenue Act.',
    typicalDocumentation: [
      'Certified copy of Fard Malkiat or latest Jamabandi excerpt',
      'Registered sale deed (Bainama) or transfer documents',
      'Demarcation receipts or local patwari mutation entry notes',
    ],
    proceduralNote: 'Revenue inquiries require scrutiny of current Arazi Record Center (ARC) verified records.',
  },
  {
    id: 'legal-drafting',
    categoryKey: 'Legal Drafting & Documentation',
    number: '03',
    title: 'Legal Drafting, Instruments & Formal Notices',
    factualScope: 'Drafting of formal legal notices, affidavits, power of attorney instruments, settlement covenants, commercial agreements, and formal applications to administrative and judicial bodies.',
    typicalDocumentation: [
      'Clear statement of terms, obligations, and involved parties',
      'Copies of prior notices or disputed instruments',
      'Identification details of executing parties',
    ],
    proceduralNote: 'Formal instruments require in-person verification and execution in accordance with statutory witnessing rules.',
  },
  {
    id: 'court-proceedings',
    categoryKey: 'Court Proceedings & Representation',
    number: '04',
    title: 'Court Proceedings & Judicial Representation',
    factualScope: 'Professional assistance concerning cases instituted before the Civil Courts, Courts of the Senior Civil Judge, Additional District & Sessions Courts, and relevant judicial forums in the jurisdiction.',
    typicalDocumentation: [
      'Complete case file including plaint (Arzi Daawa) or written statement',
      'Next hearing date sheet and order sheets of previous proceedings',
      'Vakalatnama status and party particulars',
    ],
    proceduralNote: 'Court appearance and representation requires formal Vakalatnama execution following conflict check.',
  },
  {
    id: 'commercial-contracts',
    categoryKey: 'Commercial & Contractual Inquiries',
    number: '05',
    title: 'Commercial, Contractual & Business Inquiries',
    factualScope: 'General legal review of business transactions, partnership undertakings, vendor obligations, rent covenants, and commercial dispute mitigation under the Contract Act and Partnership Act.',
    typicalDocumentation: [
      'Executed memorandum of understanding or drafted agreement',
      'Invoices, payment delivery proofs, or balance confirmation letters',
      'Default notices or breach communications',
    ],
    proceduralNote: 'Commercial advisory is provided following review of underlying contractual documentation.',
  },
  {
    id: 'family-succession',
    categoryKey: 'Family & Succession Inquiries',
    number: '06',
    title: 'Family Law & Succession Matters',
    factualScope: 'General legal guidance on succession certificates, letters of administration, inheritance distribution under Islamic and civil law, and family court matter procedures in Punjab.',
    typicalDocumentation: [
      'Family Registration Certificate (FRC) or death certificate of predecessor',
      'List of movable and immovable assets with valuation documents',
      'Details and consents of all legal heirs',
    ],
    proceduralNote: 'Succession proceedings follow statutory publication and citation procedures in the relevant court.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-submit-enquiry',
    category: 'Enquiry Process',
    question: 'How can a prospective client submit a preliminary legal enquiry?',
    answer: 'Preliminary enquiries may be initiated by telephone at +92 300 2941990 or by submitting the contact form on this website. Enquiries should outline the general subject matter without disclosing sensitive passwords, confidential banking numbers, or privileged matter details.',
  },
  {
    id: 'faq-documentation',
    category: 'Documentation',
    question: 'What information and documents should be prepared before an initial consultation?',
    answer: 'Prospective clients should assemble chronologically ordered copies of relevant contracts, title instruments (such as Fard Malkiat or sale deeds), notices, previous court orders, and a concise summary of key dates and events. Having documents organized enables counsel to accurately determine procedural requirements.',
  },
  {
    id: 'faq-initial-handling',
    category: 'Enquiry Process',
    question: 'How is an initial enquiry handled after submission?',
    answer: 'Once an enquiry is received, the chamber verifies whether any conflict of interest exists regarding the opposing parties. Following conflict clearance, communication is initiated via your preferred method to discuss whether an in-person meeting at the chamber on Kacheri Road is appropriate.',
  },
  {
    id: 'faq-consultation-fees',
    category: 'Consultation & Fees',
    question: 'How are consultation fees and legal costs confirmed?',
    answer: 'Mahendru Law Chamber does not publish generic fee schedules online, as legal fees depend strictly upon the complexity of the matter, the forum of jurisdiction, and the required scope of legal work. All professional fee terms are discussed and agreed upon directly with legal counsel during the consultation.',
  },
  {
    id: 'faq-in-person-meetings',
    category: 'Consultation & Fees',
    question: 'How are in-person consultation appointments arranged?',
    answer: 'In-person consultations at the chamber situated near Thana Mor on Kacheri Road, Kamalia, are scheduled following preliminary telephone or form contact. Because court commitments during morning judicial hours vary, appointments ensure counsel is available to review your documents in detail.',
  },
  {
    id: 'faq-third-party',
    category: 'Enquiry Process',
    question: 'Can an enquiry be submitted on behalf of a family member or business associate?',
    answer: 'Yes, an initial informational enquiry can be submitted by an authorized representative. However, formal legal representation, Vakalatnama execution, and instructions must ultimately be confirmed directly with the actual litigant or lawfully appointed attorney holding a valid Power of Attorney.',
  },
  {
    id: 'faq-confidentiality',
    category: 'Confidentiality',
    question: 'How is client confidentiality maintained during the initial inquiry stage?',
    answer: 'Information shared with legal counsel is treated with professional confidence under the standards of the legal profession. Prospective clients are nonetheless advised to use standard caution and avoid submitting sensitive credentials or unredacted financial access codes via unsecured electronic transmissions.',
  },
];

export const ENQUIRY_CATEGORIES = [
  'Civil Legal Matters',
  'Property & Land Records',
  'Legal Drafting & Documentation',
  'Court Proceedings & Representation',
  'Commercial & Contractual Inquiries',
  'Family Law & Succession Matters',
  'General Legal Advisory',
];
