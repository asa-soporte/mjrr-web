import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MethodologySection } from './components/MethodologySection';
import { TaxCalculator } from './components/TaxCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('servicios');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    setContactInitialMessage(`Deseo solicitar información y presupuesto detallado para el servicio: ${serviceTitle}.`);
    scrollToContact();
  };

  const handleTransferCalculatorData = (summary: {
    entityType: string;
    revenue: number;
    expenses: number;
    employees: number;
    planSuggested: string;
    estimatedFee: number;
  }) => {
    setContactInitialService('Pack Integral Pyme (Contabilidad NIIF + ATV)');
    setContactInitialMessage(
      `Estimación realizada desde la calculadora tributaria para Costa Rica:\n- Personería: ${summary.entityType}\n- Ingresos brutos estimados: ₡${summary.revenue.toLocaleString('es-CR')}\n- Gastos deducibles con comprobante electrónico: ₡${summary.expenses.toLocaleString('es-CR')}\n- Colaboradores en planilla (CCSS/INS): ${summary.employees}\n- Plan sugerido: ${summary.planSuggested}\n\nMe gustaría coordinar una reunión (online o presencial) para evaluar mi caso.`
    );
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Strict 3-zone Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenContact={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* Core Services Section with Bento Grid */}
        <ServicesSection
          onOpenServiceModal={(service) => setSelectedServiceModal(service)}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Methodology: 4-step process */}
        <MethodologySection />

        {/* Interactive Tax & Fee Calculator */}
        <TaxCalculator onTransferToContact={handleTransferCalculatorData} />

        {/* Real Quantified Case Studies */}
        <CaseStudiesSection onOpenContact={scrollToContact} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High-conversion Contact Form */}
        <ContactFormSection
          initialService={contactInitialService}
          initialMessage={contactInitialMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Floating Action Button (Speed Dial) & Scroll to Top */}
      <FloatingActions />
    </div>
  );
}
