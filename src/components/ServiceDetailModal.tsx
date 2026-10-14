import React, { useEffect } from 'react';
import { X, Check, FileSpreadsheet, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs font-bold text-slate-500">
              {service.number}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-600 uppercase tracking-wider">
              Ficha Técnica del Servicio
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-slate-900 mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {service.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            {service.description}
          </p>

          {/* Highlights & Specific Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span>Alcance y Cobertura Técnica</span>
              </h3>
              <ul className="space-y-2.5">
                {service.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Entregables & Documentación</span>
              </h3>
              <ul className="space-y-2.5">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tax Models if present */}
          {service.taxModels && service.taxModels.length > 0 && (
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Formularios Oficiales en ATV y Libros Legales
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.taxModels.map((model, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ideal for statement */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-blue-950">Perfil de cliente recomendado</p>
              <p className="text-xs text-blue-900 leading-relaxed mt-0.5">
                {service.idealFor}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 sm:px-6 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            Respuesta y propuesta personalizada en menos de 24 horas laborales
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors flex-1 sm:flex-none min-h-[44px]"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onSelectServiceForContact(service.title);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:bg-slate-950 transition-colors flex-1 sm:flex-none inline-flex items-center justify-center gap-2 group shadow-xs min-h-[44px]"
            >
              <span>Pedir Presupuesto</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
