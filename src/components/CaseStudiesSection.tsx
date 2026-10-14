import React, { useState } from 'react';
import { TrendingUp, Quote, CheckCircle, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/servicesData';
import taxAuditDeskImg from '../assets/images/tax_audit_desk_1791986165415.jpg';

interface CaseStudiesSectionProps {
  onOpenContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenContact }) => {
  const [deskImageError, setDeskImageError] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const activeCase = CASE_STUDIES[activeTab];

  return (
    <section id="casos" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>Resultados Verificables</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Casos de Éxito</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Ahorro tributario demostrable y orden contable en situaciones reales.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Descubre cómo hemos solucionado contingencias tributarias complejas, saneado contabilidades y generado ahorros directos para nuestros clientes.
          </p>
        </div>

        {/* Interactive Segmented Case Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 mb-8 p-1.5 bg-slate-200/80 rounded-xl w-full sm:w-fit max-w-full">
          {CASE_STUDIES.map((c, index) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(index)}
              className={`px-3.5 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all min-h-[44px] flex items-center justify-center text-center ${
                activeTab === index
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c.clientType}
            </button>
          ))}
        </div>

        {/* Active Case Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Case Narrative (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 md:p-10 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{activeCase.clientType}</span>
                  <span className="text-xs text-slate-500">{activeCase.industry}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                    {activeCase.annualRevenue}
                  </span>
                </div>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2">
                    Situación Inicial & Riesgo
                  </h4>
                  <p className="text-xs text-rose-950/80 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                    Estrategia Implementada
                  </h4>
                  <p className="text-xs text-emerald-950/80 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 relative">
                <Quote className="w-5 h-5 text-slate-300 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-3">
                  "{activeCase.quote}"
                </p>
                <div className="text-xs">
                  <span className="font-bold text-slate-900">{activeCase.author}</span>
                  <span className="text-slate-500"> — {activeCase.role}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Auditoría y optimización tributaria realizada conforme a la Ley 9635 y NIIF en Costa Rica.
              </span>
              <button
                onClick={onOpenContact}
                className="text-xs font-semibold text-slate-900 hover:text-blue-600 inline-flex items-center gap-1 group whitespace-nowrap"
              >
                <span>Analizar mi caso similar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Metric & Desk Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Big Metric Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-center">
              <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                Impacto Cuantificado en Costa Rica
              </span>
              <div className="text-4xl sm:text-5xl font-bold font-mono text-white tabular-nums mb-2">
                {activeCase.metric}
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {activeCase.metricLabel}
              </p>
            </div>

            {/* Visual Desk Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white flex-1 min-h-[220px]">
              {!deskImageError ? (
                <img
                  src={taxAuditDeskImg}
                  alt="Documentación tributaria, declaraciones ATV y estados financieros NIIF"
                  referrerPolicy="no-referrer"
                  onError={() => setDeskImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 text-center text-xs text-slate-500">
                  Documentación auditada en Costa Rica
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-800 border border-slate-200">
                Expediente Tributario CR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
