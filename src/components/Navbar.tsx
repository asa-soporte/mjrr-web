import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Preguntas', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: Brand — 4-5 Links — 1 Primary Action */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <span className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider">
              MJ
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
              María José <span className="font-medium text-slate-600">Ramírez</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-slate-950 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xs py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+50660911404"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+506 6091 1404</span>
            </a>
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs active:scale-[0.98] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[40px] items-center justify-center"
            >
              Solicitar Diagnóstico
            </button>

            {/* Mobile & Tablet Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-5 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-slate-800 py-3 px-3 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:+50660911404"
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200/80 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Llamar: +506 6091 1404</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-slate-900 rounded-lg text-center shadow-xs min-h-[44px] flex items-center justify-center"
              >
                Solicitar Diagnóstico Fiscal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
