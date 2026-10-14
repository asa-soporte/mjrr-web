import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import heroAccountingImg from '../assets/images/hero_accounting_firm_1791986164533.jpg';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker (clean unboxed text, no pills) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-500 mb-4">
              <span>Educación</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Finanzas</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Servicios Contables en Costa Rica</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.15] tracking-tight mb-5 sm:mb-6"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Rigor contable, cumplimiento ante el Ministerio de Hacienda y tranquilidad tributaria en Costa Rica.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Gestionamos tus declaraciones en ATV (IVA D-104, Renta D-101), facturación electrónica 4.3, planillas en CCSS e INS y estados financieros NIIF para empresas, pymes y profesionales independientes con atención en línea y presencial.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm inline-flex items-center justify-center gap-2 group whitespace-nowrap active:scale-[0.99] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[48px]"
              >
                <span>Solicitar Diagnóstico Tributario</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors inline-flex items-center justify-center whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[48px]"
              >
                Explorar Servicios & ATV
              </button>
            </div>

            {/* Trust bullet markers (clean, unboxed text) */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-slate-600 pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Contadora colegiada en Costa Rica</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía de cumplimiento DGT / ATV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atención online en todo el país y sede en Cartago</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-16/10 sm:aspect-4/3">
              {!imageError ? (
                <img
                  src={heroAccountingImg}
                  alt="Despacho contable y asesoría tributaria en Costa Rica"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-slate-900 text-white text-center">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-3 text-xl font-bold">
                    MJ
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">María José Ramírez</h3>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Asesoría contable y tributaria en Costa Rica.
                  </p>
                </div>
              )}

              {/* Verified Trust Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900">Colegio de Contadores CR</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">Ministerio de Hacienda · CCSS</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[11px] sm:text-xs font-semibold text-emerald-700">Plataforma ATV</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500">Declaraciones al día</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums mb-0.5">
                +15 Años
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-normal">
                Experiencia en legislación fiscal de Costa Rica
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums mb-0.5">
                380+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-normal">
                Pymes, sociedades y profesionales activos
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums mb-0.5">
                100%
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-normal">
                Declaraciones en fecha en plataforma ATV
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums mb-0.5">
                ₡45M+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-tight sm:leading-normal">
                En créditos de IVA y deducciones legales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
