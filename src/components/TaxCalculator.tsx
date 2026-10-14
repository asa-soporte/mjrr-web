import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface TaxCalculatorProps {
  onTransferToContact: (calculatedSummary: {
    entityType: string;
    revenue: number;
    expenses: number;
    employees: number;
    planSuggested: string;
    estimatedFee: number;
  }) => void;
}

export const TaxCalculator: React.FC<TaxCalculatorProps> = ({ onTransferToContact }) => {
  const [entityType, setEntityType] = useState<'persona_juridica' | 'persona_fisica'>('persona_juridica');
  const [revenue, setRevenue] = useState<number>(42000000);
  const [expenses, setExpenses] = useState<number>(18000000);
  const [employees, setEmployees] = useState<number>(2);

  // Renta Neta Gravable
  const taxableBase = Math.max(0, revenue - expenses);

  // Costa Rica Tax Calculation (Ley 9635)
  let estimatedTax = 0;
  let taxRateDescription = '';

  if (entityType === 'persona_juridica') {
    // Si ingresos brutos no superan ~₡122M se considera Pyme con escala especial
    if (revenue <= 122000000) {
      // Escala pyme: 5% primeros 5.7M, 10% siguientes 2.9M, 15% siguientes 2.9M, 20% sobre exceso
      let rem = taxableBase;
      let tax = 0;
      const b1 = Math.min(rem, 5700000);
      tax += b1 * 0.05;
      rem = Math.max(0, rem - 5700000);

      const b2 = Math.min(rem, 2900000);
      tax += b2 * 0.10;
      rem = Math.max(0, rem - 2900000);

      const b3 = Math.min(rem, 2900000);
      tax += b3 * 0.15;
      rem = Math.max(0, rem - 2900000);

      tax += rem * 0.20;
      estimatedTax = tax;
      const effectiveRate = taxableBase > 0 ? (estimatedTax / taxableBase) * 100 : 5;
      taxRateDescription = `~${effectiveRate.toFixed(1)}% (Escala Pyme Ley 9635 en D-101)`;
    } else {
      estimatedTax = taxableBase * 0.30;
      taxRateDescription = '30% (Tarifa General Sociedades en D-101)';
    }
  } else {
    // Persona Física con Actividad Lucrativa (tramos progresivos con tramo exento ~₡4.181.000)
    let rem = taxableBase;
    let tax = 0;
    // Tramo 1: hasta 4.181.000 -> 0%
    rem = Math.max(0, rem - 4181000);

    // Tramo 2: de 4.181.000 a 6.244.000 (~2.063.000 al 10%)
    const b2 = Math.min(rem, 2063000);
    tax += b2 * 0.10;
    rem = Math.max(0, rem - 2063000);

    // Tramo 3: de 6.244.000 a 10.414.000 (~4.170.000 al 15%)
    const b3 = Math.min(rem, 4170000);
    tax += b3 * 0.15;
    rem = Math.max(0, rem - 4170000);

    // Tramo 4: de 10.414.000 a 20.872.000 (~10.458.000 al 20%)
    const b4 = Math.min(rem, 10458000);
    tax += b4 * 0.20;
    rem = Math.max(0, rem - 10458000);

    // Tramo 5: sobre el exceso al 25%
    tax += rem * 0.25;
    estimatedTax = tax;
    const effectiveRate = taxableBase > 0 ? (estimatedTax / taxableBase) * 100 : 0;
    taxRateDescription = `~${effectiveRate.toFixed(1)}% (Tramos Progresivos Persona Física)`;
  }

  // Estimación de optimización fiscal legal en Costa Rica (crédito fiscal IVA, gastos deducibles comprobante electrónico)
  const estimatedOptimization = Math.round(taxableBase * 0.08);

  // Cuota mensual estimada en Colones costarricenses (₡)
  let planName = '';
  let monthlyFeeCRC = 0;
  let planFeatures: string[] = [];

  if (entityType === 'persona_fisica') {
    if (revenue <= 20000000 && employees === 0) {
      planName = 'Plan Profesional Básico';
      monthlyFeeCRC = 35000;
      planFeatures = [
        'Declaración mensual de IVA D-104-2 en ATV',
        'Declaración Anual de Renta D-101 de Persona Física',
        'Validación de facturas electrónicas de compras y ventas',
        'Soporte continuo vía WhatsApp y correo'
      ];
    } else {
      planName = 'Plan Profesional Plus';
      monthlyFeeCRC = 55000 + (employees * 7000);
      planFeatures = [
        'IVA mensual D-104-2 con cálculo de prorrata y acreditación',
        'Renta Anual D-101 y cálculo de los 3 Pagos Parciales',
        'Gestión de planilla en SICERE de la CCSS e INS',
        'Sesión trimestral de revisión de resultados por Meet/Teams'
      ];
    }
  } else {
    if (revenue <= 60000000 && employees <= 3) {
      planName = 'Plan Pyme Corporativo';
      monthlyFeeCRC = 85000 + (employees * 7000);
      planFeatures = [
        'Contabilidad completa conforme a NIIF para Pymes',
        'Declaraciones mensuales de IVA D-104-2 y retenciones en ATV',
        'Declaración de Renta D-101 e Impuesto a Personas Jurídicas',
        'Planilla mensual de CCSS (SICERE) y póliza de Riesgos INS'
      ];
    } else {
      planName = 'Plan Empresa Integral';
      monthlyFeeCRC = 145000 + (employees * 7000);
      planFeatures = [
        'Contabilidad analítica y control de costos multimoneda (₡ y $)',
        'Cierres contables mensuales y estados financieros oficiales',
        'Acompañamiento en la declaración anual RTBF ante el BCCR',
        'Defensa y atención directa ante notificaciones de la DGT de Hacienda'
      ];
    }
  }

  const handleApplyToContact = () => {
    onTransferToContact({
      entityType: entityType === 'persona_juridica' ? 'Sociedad Mercantil (S.A. / S.R.L.)' : 'Persona Física con Actividad Lucrativa',
      revenue,
      expenses,
      employees,
      planSuggested: `${planName} (~₡${monthlyFeeCRC.toLocaleString('es-CR')}/mes)`,
      estimatedFee: monthlyFeeCRC
    });
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>Simulador Tributario Costa Rica</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Hacienda ATV & Renta</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Calculadora de estimación de renta y cuota mensual en Costa Rica.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Ajusta los montos de tu actividad en colones (₡) para proyectar tu carga de impuesto sobre la renta (D-101) según la Ley de Fortalecimiento de las Finanzas Públicas y conoce tu cuota contable mensual.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
            {/* Entity Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Tipo de personería o régimen tributario
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setEntityType('persona_juridica')}
                  className={`py-3 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all min-h-[44px] flex items-center justify-center ${
                    entityType === 'persona_juridica'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Persona Jurídica (S.A. / S.R.L.)
                </button>
                <button
                  type="button"
                  onClick={() => setEntityType('persona_fisica')}
                  className={`py-3 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all min-h-[44px] flex items-center justify-center ${
                    entityType === 'persona_fisica'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Persona Física (Profesional / Servicios)
                </button>
              </div>
            </div>

            {/* Slider 1: Facturación Anual (₡) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-800">
                  Ingresos brutos anuales facturados (sin IVA)
                </label>
                <span className="font-mono text-sm font-bold text-slate-900 tabular-nums">
                  ₡{revenue.toLocaleString('es-CR')}
                </span>
              </div>
              <input
                type="range"
                min="6000000"
                max="150000000"
                step="1000000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-mono mt-1">
                <span>₡6M</span>
                <span>₡75M</span>
                <span>₡150M+</span>
              </div>
            </div>

            {/* Slider 2: Gastos Deducibles (₡) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-800">
                  Gastos anuales deducibles con factura electrónica válida
                </label>
                <span className="font-mono text-sm font-bold text-slate-900 tabular-nums">
                  ₡{expenses.toLocaleString('es-CR')}
                </span>
              </div>
              <input
                type="range"
                min="1000000"
                max={Math.max(5000000, revenue * 0.95)}
                step="500000"
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-mono mt-1">
                <span>₡1M</span>
                <span>50% facturación</span>
                <span>Hasta 95%</span>
              </div>
            </div>

            {/* Slider 3: Empleados en planilla CCSS */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-800">
                  Colaboradores en planilla (CCSS / INS)
                </label>
                <span className="font-mono text-sm font-bold text-slate-900 tabular-nums">
                  {employees === 0 ? 'Sin colaboradores' : `${employees} empleado${employees > 1 ? 's' : ''}`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-mono mt-1">
                <span>0</span>
                <span>10</span>
                <span>20+</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Estimación Proyectada
                </span>
                <span className="text-xs font-mono font-medium text-slate-500">
                  Período Fiscal Costa Rica
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {planName}
              </h3>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 py-4 border-y border-slate-200">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Renta Neta Gravable Estimada:</span>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  ₡{taxableBase.toLocaleString('es-CR')}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">{taxRateDescription}:</span>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  ₡{Math.round(estimatedTax).toLocaleString('es-CR')}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/80">
                <span className="text-emerald-900 font-medium">
                  Ahorro potencial en créditos de IVA y deducciones:
                </span>
                <span className="font-mono font-bold text-emerald-800 tabular-nums">
                  ~₡{estimatedOptimization.toLocaleString('es-CR')}
                </span>
              </div>
            </div>

            {/* Monthly Fee Box */}
            <div className="bg-slate-900 text-white p-5 rounded-xl">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
                  Cuota Mensual de Asesoría
                </span>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums">
                    ₡{monthlyFeeCRC.toLocaleString('es-CR')}
                  </span>
                  <span className="text-xs text-slate-300"> / mes + IVA</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Incluye presentación de declaraciones mensuales de IVA D-104 en ATV, Renta anual D-101 y asesoría continua en línea y presencial.
              </p>
            </div>

            {/* Plan deliverables included */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                Cobertura incluida en Costa Rica:
              </p>
              <ul className="space-y-2">
                {planFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct CTA to transfer into form */}
            <button
              onClick={handleApplyToContact}
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs flex items-center justify-center gap-2 group active:scale-[0.99] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Transferir datos a mi solicitud de diagnóstico</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
