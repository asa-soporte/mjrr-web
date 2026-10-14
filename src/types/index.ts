export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  taxModels?: string[];
  deliverables: string[];
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  annualRevenue: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
}

export interface CalculatorState {
  entityType: 'persona_juridica' | 'persona_fisica';
  annualRevenue: number;
  annualExpenses: number;
  employees: number;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  cedula: string;
  email: string;
  phone: string;
  serviceInterest: string;
  annualRevenueTier: string;
  modality: 'online' | 'presencial' | 'mixta';
  message: string;
  acceptTerms: boolean;
}
