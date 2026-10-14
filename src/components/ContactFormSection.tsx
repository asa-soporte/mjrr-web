import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, ShieldCheck, Download, FileText, ArrowRight, ExternalLink, Laptop, Building } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactFormSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  initialService,
  initialMessage,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    cedula: '',
    email: '',
    phone: '',
    serviceInterest: initialService || 'Declaración Mensual de IVA (D-104-2)',
    annualRevenueTier: '15M - 40M',
    modality: 'online',
    message: initialMessage || '',
    acceptTerms: true,
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Introduce tu nombre y apellidos';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Introduce el nombre comercial, personería o especifica Profesional Independiente';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un correo electrónico válido';
    }

    const phoneRegex = /^[+0-9\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Introduce un teléfono o número de WhatsApp';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Introduce un número telefónico válido (ej. +506 8800-0000)';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y confidencialidad profesional';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'CR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);
      setIsSubmitted(true);
    }, 800);
  };

  const handleDownloadGuide = () => {
    const textContent = `MARÍA JOSÉ RAMÍREZ - CONSULTORÍA TRIBUTARIA Y CONTABLE EN COSTA RICA
========================================================================
Guía Tributaria Práctica 2026: Calendario ATV, IVA, Renta, CCSS y RTBF

1. CALENDARIO TRIBUTARIO EN HACIENDA (ATV)
- DÍA 15 DE CADA MES:
  * Formulario D-104-2: Declaración Jurada del Impuesto sobre el Valor Agregado (IVA).
  * Retenciones en la fuente y remesas al exterior.

- PAGOS PARCIALES DEL IMPUESTO SOBRE LA RENTA:
  * Primer pago parcial: Último día hábil de marzo.
  * Segundo pago parcial: Último día hábil de junio.
  * Tercer pago parcial: Último día hábil de setiembre.

- 15 DE MARZO (CIERRE DE PERÍODO FISCAL ORDINARIO):
  * Formulario D-101: Declaración Jurada del Impuesto sobre las Utilidades (Renta).
  * Pago del saldo resultante de Renta en bancos autorizados.

- ENERO:
  * Pago del Impuesto a las Personas Jurídicas (Ley 9428).

- ABRIL:
  * Declaración de Registro de Transparencia y Beneficiarios Finales (RTBF) ante el BCCR.

2. OBLIGACIONES PATRONALES Y LABORALES (CCSS & INS)
- Planilla mensual en SICERE de la CCSS: Presentación los primeros días hábiles del mes.
- Cargas patronales: ~26.67% sobre la masa salarial reportada.
- Deducción obrera: ~10.67% retenida al trabajador.
- Póliza de Riesgos del Trabajo (RT) ante el INS: Obligatoria para toda relación laboral.

3. REQUISITOS DE FACTURACIÓN ELECTRÓNICA V4.3
✓ Archivos XML válidos con llave criptográfica del Ministerio de Hacienda.
✓ Gastos deducibles deben contar con mensaje de aceptación del receptor en ATV.
✓ Criterio de necesidad y pertinencia para la generación de rentas gravadas.

ATENCIÓN EN LÍNEA & PRESENCIAL EN COSTA RICA
Teléfono / WhatsApp: +506 6091 1404 | Correo: contacto@mariajose-asesoria.cr
Sede: Cartago, Costa Rica.
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guia_Tributaria_Costa_Rica_2026_Maria_Jose_Ramirez.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Contact Value & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                <span>Atención Online & Presencial</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Cartago, Costa Rica</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Solicita tu diagnóstico tributario y cotización en Costa Rica.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Revisamos tu situación en la plataforma ATV del Ministerio de Hacienda, aclaramos tus dudas sobre IVA, Renta o CCSS y te presentamos una propuesta de cuota mensual fija adaptada a tu volumen.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <a
                href="tel:+50660911404"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Línea telefónica y WhatsApp</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors font-mono">
                    +506 6091 1404
                  </p>
                  <p className="text-[11px] text-slate-500">Lunes a Viernes 08:00 - 17:30 (Hora de Costa Rica)</p>
                </div>
              </a>

              <a
                href="mailto:contacto@mariajose-asesoria.cr"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Correo electrónico profesional</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    contacto@mariajose-asesoria.cr
                  </p>
                  <p className="text-[11px] text-slate-500">Respuesta ágil en menos de 24 horas</p>
                </div>
              </a>

              {/* Physical Location with Google Maps link to Cartago, Costa Rica */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cartago,+Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors group cursor-pointer"
                title="Abrir ubicación en Google Maps en una nueva pestaña"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs text-slate-400 font-medium">Sede Presencial en Costa Rica</p>
                    <span className="text-[11px] text-blue-400 flex items-center gap-1 group-hover:underline">
                      <span>Ver en Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Cartago, Costa Rica
                  </p>
                  <p className="text-xs text-slate-400">Atención presencial y virtual para todo el país</p>
                </div>
              </a>
            </div>

            {/* Modality Note */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 space-y-1.5">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-blue-400" />
                <span>¿Cómo prefieres atenderte?</span>
              </p>
              <p className="text-slate-400 text-[11px]">
                Brindamos atención <strong>100% virtual</strong> para clientes de todo Costa Rica (reuniones por Google Meet / Teams y soporte continuo por WhatsApp), así como <strong>sesiones presenciales</strong> en Cartago previa coordinación.
              </p>
            </div>

            {/* Privacy Trust Note */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Estricto secreto profesional y confidencialidad en datos contables y bancarios.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-7 sm:p-10 border border-slate-200 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Formulario de Consulta & Diagnóstico Tributario
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Completa los datos de tu actividad para preparar una propuesta específica para Costa Rica.
                    </p>
                  </div>

                  {/* Modality Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Modalidad de atención preferida
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'online' })}
                        className={`py-3 px-3 text-xs font-medium rounded-lg border text-center transition-all min-h-[44px] flex items-center justify-center ${
                          formData.modality === 'online'
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 active:bg-slate-200'
                        }`}
                      >
                        En Línea (Meet/Teams)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                        className={`py-3 px-3 text-xs font-medium rounded-lg border text-center transition-all min-h-[44px] flex items-center justify-center ${
                          formData.modality === 'presencial'
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 active:bg-slate-200'
                        }`}
                      >
                        Presencial (Cartago)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'mixta' })}
                        className={`py-3 px-3 text-xs font-medium rounded-lg border text-center transition-all min-h-[44px] flex items-center justify-center ${
                          formData.modality === 'mixta'
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 active:bg-slate-200'
                        }`}
                      >
                        Modalidad Mixta
                      </button>
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nombre y Apellidos *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Carlos Mora Vargas"
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-900 min-h-[44px] ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Empresa / Cédula / Profesional *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ej. Nova Soluciones S.A. o Profesional"
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-900 min-h-[44px] ${
                          errors.companyName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.cr"
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-900 min-h-[44px] ${
                          errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+506 6091 1404"
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-900 min-h-[44px] ${
                          errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection & Revenue Tier (₡) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Servicio Principal Requerido
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 bg-white min-h-[44px]"
                      >
                        <option value="Declaración Mensual de IVA (D-104-2)">Declaración Mensual de IVA (D-104-2)</option>
                        <option value="Declaración Anual de Renta (D-101)">Declaración Anual de Renta (D-101)</option>
                        <option value="Pack Integral Pyme (Contabilidad NIIF + ATV)">Pack Integral Pyme (Contabilidad NIIF + ATV)</option>
                        <option value="Planillas CCSS (SICERE) y Póliza INS">Planillas CCSS (SICERE) y Póliza INS</option>
                        <option value="Constitución de Sociedad (S.A. / S.R.L.)">Constitución de Sociedad (S.A. / S.R.L.)</option>
                        <option value="Declaración RTBF ante el BCCR">Declaración RTBF ante el BCCR</option>
                        <option value="Auditoría / Regularización en Hacienda">Auditoría / Regularización en Hacienda</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Facturación Anual Aproximada
                      </label>
                      <select
                        value={formData.annualRevenueTier}
                        onChange={(e) => setFormData({ ...formData, annualRevenueTier: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 bg-white min-h-[44px]"
                      >
                        <option value="Menos de ₡15.000.000">Menos de ₡15.000.000 / año</option>
                        <option value="15M - 40M">₡15.000.000 - ₡40.000.000 / año</option>
                        <option value="40M - 100M">₡40.000.000 - ₡100.000.000 / año</option>
                        <option value="100M - 300M">₡100.000.000 - ₡300.000.000 / año</option>
                        <option value="Más de ₡300.000.000">Más de ₡300.000.000 / año</option>
                        <option value="En proceso de constitución">En proceso de constitución / inicio</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Detalles de tu consulta o situación en Hacienda (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente si requieres orden en ATV, cambio de contador, confección de estados financieros o asesoría en IVA/Renta..."
                      className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        className="w-4 h-4 text-slate-900 rounded-sm border-slate-300 mt-0.5 focus:ring-slate-900"
                      />
                      <span className="text-xs text-slate-600 leading-tight">
                        Acepto el tratamiento confidencial de mis datos para recibir la propuesta de servicios contables y tributarios para Costa Rica.
                      </span>
                    </label>
                    {errors.acceptTerms && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.acceptTerms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm inline-flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-75 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validando expediente...</span>
                      </span>
                    ) : (
                      <>
                        <span>Solicitar Diagnóstico Tributario en Costa Rica</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success State */
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                      {submissionRef}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      ¡Solicitud Recibida Correctamente!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Muchas gracias, <strong className="text-slate-900">{formData.fullName}</strong>. María José Ramírez revisará la información de <strong className="text-slate-900">{formData.companyName}</strong> y se comunicará contigo vía WhatsApp o al correo <strong className="text-slate-900">{formData.email}</strong> en menos de 24 horas.
                    </p>
                  </div>

                  {/* Receipt Box */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Servicio solicitado:</span>
                      <span className="font-semibold text-slate-800">{formData.serviceInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Modalidad seleccionada:</span>
                      <span className="font-semibold text-slate-800 capitalize">
                        {formData.modality === 'online' ? 'En Línea (Meet/Teams)' : formData.modality === 'presencial' ? 'Presencial (Escazú)' : 'Modalidad Mixta'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contacto:</span>
                      <span className="font-semibold text-slate-800 font-mono">{formData.phone}</span>
                    </div>
                  </div>

                  {/* Download Resource CTA */}
                  <div className="p-5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-left flex flex-col sm:flex-row items-center justify-between gap-4 max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-blue-950">Guía Tributaria Costa Rica 2026</p>
                        <p className="text-[11px] text-blue-900 leading-tight">
                          Calendario de Hacienda (ATV), IVA mensual, Renta y planillas CCSS.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleDownloadGuide}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          cedula: '',
                          email: '',
                          phone: '',
                          serviceInterest: 'Declaración Mensual de IVA (D-104-2)',
                          annualRevenueTier: '15M - 40M',
                          modality: 'online',
                          message: '',
                          acceptTerms: true,
                        });
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
