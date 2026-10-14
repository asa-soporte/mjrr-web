import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/servicesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>Claridad & Transparencia</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Preguntas Frecuentes</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Resolvemos tus dudas antes de iniciar la colaboración.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Sin letra pequeña, sin ataduras artificiales y con el compromiso de un despacho profesional colegiado.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8 animate-in fade-in duration-150">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help prompt */}
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">¿Tienes una consulta específica sobre tu situación en Hacienda?</p>
            <p className="text-xs text-slate-500 mt-0.5">María José responde directamente a cualquier consulta técnica contable o tributaria.</p>
          </div>
          <a
            href="tel:+50660911404"
            className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Llamar al +506 6091 1404
          </a>
        </div>
      </div>
    </section>
  );
};
