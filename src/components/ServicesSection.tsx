import React from 'react';
import { ArrowUpRight, Calculator, FileText, Users, Building2, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenServiceModal: (service: ServiceItem) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenServiceModal,
  onSelectServiceForContact,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'fiscal':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'contable':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'laboral':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'mercantil':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>Servicios Profesionales</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Áreas de Práctica</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Servicios integrales de asesoría tributaria, contabilidad NIIF y planillas en Costa Rica.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Cada servicio está diseñado con procedimientos auditables, asignación de contadora responsable y cumplimiento estricto de la normativa del Ministerio de Hacienda (ATV), CCSS e INS.
          </p>
        </div>

        {/* Asymmetric Bento-Grid Layout:
            Card 1 (Fiscal): col-span-1 lg:col-span-7 (Marquee Capability)
            Card 2 (Contable): col-span-1 lg:col-span-5
            Card 3 (Laboral): col-span-1 lg:col-span-5
            Card 4 (Mercantil): col-span-1 lg:col-span-7
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Asesoría Fiscal (Marquee) */}
          {SERVICES_DATA[0] && (
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-7 md:p-9 border border-slate-200/90 hover:border-slate-300 transition-all duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(SERVICES_DATA[0].id)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {SERVICES_DATA[0].number}
                      </span>
                      <span className="block text-xs font-medium text-slate-500">
                        Práctica Principal
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenServiceModal(SERVICES_DATA[0])}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                    title="Ver ficha técnica completa"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  {SERVICES_DATA[0].title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-4">
                  {SERVICES_DATA[0].subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {SERVICES_DATA[0].description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-slate-200/80">
                  {SERVICES_DATA[0].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenServiceModal(SERVICES_DATA[0])}
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 underline underline-offset-4 text-left py-1"
                >
                  Ver formularios ATV y calendario oficial
                </button>
                <button
                  onClick={() => onSelectServiceForContact(SERVICES_DATA[0].title)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-2xs min-h-[44px] flex items-center justify-center text-center"
                >
                  Solicitar Presupuesto Tributario
                </button>
              </div>
            </div>
          )}

          {/* Card 2: Contabilidad Analítica */}
          {SERVICES_DATA[1] && (
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-7 md:p-8 border border-slate-200/90 hover:border-slate-300 transition-all duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(SERVICES_DATA[1].id)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {SERVICES_DATA[1].number}
                      </span>
                      <span className="block text-xs font-medium text-slate-500">
                        Cuentas Oficiales
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenServiceModal(SERVICES_DATA[1])}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                    title="Ver ficha técnica completa"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {SERVICES_DATA[1].title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-3">
                  {SERVICES_DATA[1].subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {SERVICES_DATA[1].description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                  {SERVICES_DATA[1].highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  onClick={() => onOpenServiceModal(SERVICES_DATA[1])}
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 underline underline-offset-4 text-left py-1"
                >
                  Detalles y entregables NIIF
                </button>
                <button
                  onClick={() => onSelectServiceForContact(SERVICES_DATA[1].title)}
                  className="w-full sm:w-auto px-3.5 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors min-h-[44px] flex items-center justify-center text-center"
                >
                  Cotizar Contabilidad
                </button>
              </div>
            </div>
          )}

          {/* Card 3: Gestión Laboral & Nóminas */}
          {SERVICES_DATA[2] && (
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-7 md:p-8 border border-slate-200/90 hover:border-slate-300 transition-all duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(SERVICES_DATA[2].id)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {SERVICES_DATA[2].number}
                      </span>
                      <span className="block text-xs font-medium text-slate-500">
                        Recursos Humanos
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenServiceModal(SERVICES_DATA[2])}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                    title="Ver ficha técnica completa"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {SERVICES_DATA[2].title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-3">
                  {SERVICES_DATA[2].subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {SERVICES_DATA[2].description}
                </p>

                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                  {SERVICES_DATA[2].highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenServiceModal(SERVICES_DATA[2])}
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 underline underline-offset-4"
                >
                  Detalles de nóminas
                </button>
                <button
                  onClick={() => onSelectServiceForContact(SERVICES_DATA[2].title)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cotizar Laboral
                </button>
              </div>
            </div>
          )}

          {/* Card 4: Constitución & Asesoría Mercantil */}
          {SERVICES_DATA[3] && (
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-7 md:p-9 border border-slate-200/90 hover:border-slate-300 transition-all duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(SERVICES_DATA[3].id)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {SERVICES_DATA[3].number}
                      </span>
                      <span className="block text-xs font-medium text-slate-500">
                        Estructura Societaria
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenServiceModal(SERVICES_DATA[3])}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                    title="Ver ficha técnica completa"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  {SERVICES_DATA[3].title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-4">
                  {SERVICES_DATA[3].subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {SERVICES_DATA[3].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-slate-200/80">
                  {SERVICES_DATA[3].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onOpenServiceModal(SERVICES_DATA[3])}
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 underline underline-offset-4"
                >
                  Ver trámites notariales y registro
                </button>
                <button
                  onClick={() => onSelectServiceForContact(SERVICES_DATA[3].title)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  Consultar Constitución de SL
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
