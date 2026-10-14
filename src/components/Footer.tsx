import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <span className="w-8 h-8 rounded-md bg-white text-slate-950 flex items-center justify-center font-bold text-xs tracking-wider">
                MJ
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                María José <span className="font-medium text-slate-400">Ramírez</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Servicios contables, tributarios y laborales en Costa Rica. Cumplimiento riguroso ante el Ministerio de Hacienda (ATV), CCSS e INS con modalidad de atención virtual nacional y citas presenciales en Cartago.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Colegio de Contadores de Costa Rica · DGT Hacienda</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios en CR
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  IVA Mensual (D-104-2)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Renta Anual (D-101)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Planillas CCSS & INS
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Sociedades & RTBF
                </a>
              </li>
            </ul>
          </div>

          {/* Practice (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Despacho
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-white transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Simulador de Renta
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Sede en Costa Rica
            </p>
            <p className="text-slate-300 leading-relaxed">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cartago,+Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline-offset-2 hover:underline inline-flex items-start gap-1"
                title="Ver ubicación en Google Maps en nueva pestaña"
              >
                <span>Cartago, Costa Rica</span>
              </a>
            </p>
            <p className="text-slate-300">
              Teléfono: <a href="tel:+50660911404" className="hover:text-white font-mono">+506 6091 1404</a><br />
              Email: <a href="mailto:contacto@mariajose-asesoria.cr" className="hover:text-white">contacto@mariajose-asesoria.cr</a>
            </p>
            <p className="text-[11px] text-slate-500">
              Atención presencial en Cartago previa cita y atención virtual a todo el país.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} María José Ramírez · Consultoría Contable y Tributaria Costa Rica.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Normativa Hacienda ATV</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Confidencialidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
