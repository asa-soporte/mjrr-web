import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Phone, Mail, MessageCircle, X, MessageSquareText } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactOptions = [
    {
      label: 'WhatsApp',
      subtitle: '+506 6091 1404',
      href: 'https://wa.me/50660911404?text=Hola%20Mar%C3%ADa%20Jos%C3%A9,%20deseo%20consultar%20sobre%20servicios%20contables%20en%20Costa%20Rica.',
      target: '_blank',
      icon: <MessageCircle className="w-4 h-4 text-emerald-600" />,
      bgHover: 'hover:bg-emerald-50',
      borderHover: 'hover:border-emerald-200',
    },
    {
      label: 'Llamar por Teléfono',
      subtitle: '+506 6091 1404',
      href: 'tel:+50660911404',
      icon: <Phone className="w-4 h-4 text-blue-600" />,
      bgHover: 'hover:bg-blue-50',
      borderHover: 'hover:border-blue-200',
    },
    {
      label: 'Enviar Correo',
      subtitle: 'contacto@mariajose-asesoria.cr',
      href: 'mailto:contacto@mariajose-asesoria.cr?subject=Consulta%20Servicios%20Contables%20Costa%20Rica',
      icon: <Mail className="w-4 h-4 text-amber-600" />,
      bgHover: 'hover:bg-amber-50',
      borderHover: 'hover:border-amber-200',
    },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
      role="region"
      aria-label="Acciones flotantes de navegación y contacto"
    >
      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`pointer-events-auto p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white text-slate-700 shadow-md border border-slate-200/90 hover:bg-slate-50 hover:text-slate-950 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Subir al inicio de la página"
        title="Subir al inicio"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating Contact Speed Dial Menu */}
      <div className="relative pointer-events-auto flex flex-col items-end">
        {/* Dropup Options Card */}
        {isMenuOpen && (
          <div className="mb-2.5 sm:mb-3 w-[calc(100vw-2.5rem)] max-w-[270px] bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Canales de Contacto</span>
              <span className="text-[10px] text-slate-500 font-mono">Costa Rica</span>
            </div>

            {contactOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.target}
                rel={opt.target ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-start gap-3 p-2.5 rounded-xl border border-transparent transition-all group min-h-[44px] ${opt.bgHover} ${opt.borderHover}`}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {opt.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-slate-950">
                    {opt.label}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate font-mono">
                    {opt.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-12 sm:h-13 px-3.5 sm:px-4 rounded-full shadow-lg border flex items-center gap-2.5 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 min-h-[44px] ${
            isMenuOpen
              ? 'bg-slate-900 text-white border-slate-800'
              : 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800'
          }`}
          aria-expanded={isMenuOpen}
          aria-label="Abrir opciones de contacto directo: Teléfono, WhatsApp o Correo"
        >
          {isMenuOpen ? (
            <>
              <X className="w-5 h-5 text-white" />
              <span className="text-xs font-semibold whitespace-nowrap">Cerrar</span>
            </>
          ) : (
            <>
              <div className="relative">
                <MessageSquareText className="w-5 h-5 text-emerald-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                Contactar
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
