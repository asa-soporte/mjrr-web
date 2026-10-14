import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Clock, Users, Laptop, FileSpreadsheet } from 'lucide-react';
import advisoryTeamImg from '../assets/images/advisory_team_meeting_1791986164702.jpg';

export const MethodologySection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Auditoría inicial en ATV y revisión contable',
      description: 'Revisamos tu expediente tributario en la plataforma ATV del Ministerio de Hacienda, historial de declaraciones D-104 y D-101, créditos fiscales pendientes y estado ante la CCSS.'
    },
    {
      num: '02',
      title: 'Atención personalizada: Online o Presencial',
      description: 'Coordinamos reuniones por Google Meet o Teams para clientes en cualquier provincia de Costa Rica, así como sesiones presenciales en Cartago para revisión estratégica y firmas.'
    },
    {
      num: '03',
      title: 'Integración de Factura Electrónica 4.3',
      description: 'Sincronizamos tus archivos XML de compras y ventas, conciliamos tus cuentas bancarias en colones y dólares, y mantenemos tus libros contables actualizados bajo NIIF.'
    },
    {
      num: '04',
      title: 'Presentaciones a tiempo antes de la fecha límite',
      description: 'Calculamos tus impuestos con anticipación al día 15 de cada mes. Validamos contigo el monto exacto por pagar en el banco y enviamos los comprobantes oficiales de ATV.'
    }
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Image & Advisory Certification */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-4/3">
              {!imageError ? (
                <img
                  src={advisoryTeamImg}
                  alt="Asesoría contable y tributaria presencial y online en Costa Rica"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-white text-center">
                  <FileSpreadsheet className="w-12 h-12 text-slate-400 mb-3" />
                  <p className="text-sm font-semibold">Revisión colegiada de cuentas</p>
                </div>
              )}

              {/* Inset Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-xs">
                <p className="text-xs font-bold text-slate-900">Normas NIIF & Colegio Profesional</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Protocolo riguroso de doble verificación antes de emitir y presentar declaraciones en ATV de Hacienda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Process */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                <span>Cómo Trabajamos</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Metodología de Acompañamiento</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Un método estructurado para que nunca tengas que preocuparte por Hacienda.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                Eliminamos las prisas de última hora y el caos administrativo mediante un calendario riguroso y comunicación proactiva durante los 365 días del año.
              </p>

              {/* 4 Steps */}
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/80">
                    <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md shrink-0 border border-blue-200/60">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
