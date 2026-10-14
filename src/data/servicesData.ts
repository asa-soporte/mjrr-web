import { ServiceItem, CaseStudy } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fiscal',
    number: '01',
    title: 'Asesoría Fiscal & Tributación en Costa Rica',
    subtitle: 'Cumplimiento riguroso ante el Ministerio de Hacienda (ATV) y optimización tributaria legal',
    description: 'Gestionamos todas tus obligaciones tributarias en la plataforma ATV de la Dirección General de Tributación (DGT). Diseñamos estrategias preventivas para aprovechar créditos fiscales de IVA, deducibilidad de gastos y pagos parciales sin contingencias ni multas.',
    highlights: [
      'Declaración mensual de IVA (Formulario D-104-2) con correcta prorrata y acreditación',
      'Declaración Anual del Impuesto sobre la Renta (Formulario D-101) para personas jurídicas y físicas',
      'Cálculo y seguimiento de los 3 Pagos Parciales de Renta (marzo, junio, setiembre)',
      'Declaración de Registro de Transparencia y Beneficiarios Finales (RTBF) ante el BCCR',
      'Atención técnica ante requerimientos, estudios y fiscalizaciones de la DGT de Hacienda'
    ],
    taxModels: ['D-104-2 (IVA)', 'D-101 (Renta Anual)', 'D-151 (Clientes/Proveedores)', 'D-125 (Rentas Capital)', 'RTBF Central Directo', 'Impuesto Personas Jurídicas Ley 9428'],
    deliverables: [
      'Calendario tributario de Costa Rica con avisos preventivos a tu correo y WhatsApp',
      'Revisión previa al día 15 de cada mes con estimación exacta de IVA por pagar',
      'Comprobantes oficiales de presentación y recibos D-110 de pago en ATV',
      'Asesoría técnica continua por contadora colegiada disponible en línea y en citas presenciales'
    ],
    idealFor: 'Pymes, sociedades (S.A. / S.R.L.), profesionales independientes y empresas en Costa Rica que desean cero multas y orden total en Hacienda.'
  },
  {
    id: 'contable',
    number: '02',
    title: 'Contabilidad Financiera & Normas NIIF',
    subtitle: 'Estados financieros confiables conforme a las NIIF adoptadas en Costa Rica',
    description: 'Mantenemos tu contabilidad al día bajo las Normas Internacionales de Información Financiera (NIIF / NIIF para Pymes) aprobadas por los colegios profesionales de Costa Rica. Gestionamos operaciones multimoneda en Colones (₡) y Dólares (USD $).',
    highlights: [
      'Registro continuo de comprobantes electrónicos (facturas, notas de crédito/débito en XML 4.3)',
      'Conciliaciones bancarias en cuentas en colones y dólares',
      'Elaboración de Estados Financieros: Balance de Situación, Estado de Resultados y Flujo',
      'Legalización y foliación de libros contables y de actas societarias'
    ],
    taxModels: ['Libro Diario', 'Libro Mayor', 'Libro de Balances e Inventarios', 'Libro de Actas y Accionistas'],
    deliverables: [
      'Reporte mensual de pérdidas y ganancias con desglose analítico de rentabilidad',
      'Estados financieros firmados por contador para solicitudes de crédito bancario en Costa Rica',
      'Carpeta digital en la nube con acceso permanente a balances y respaldos',
      'Control de activos fijos y tablas de depreciación autorizadas por Hacienda'
    ],
    idealFor: 'Negocios comerciales, empresas de servicios y proyectos que requieren estados financieros rigurosos para bancos, inversionistas o auditorías.'
  },
  {
    id: 'laboral',
    number: '03',
    title: 'Planillas CCSS, SICERE & Póliza INS',
    subtitle: 'Administración de nóminas y cargas sociales conforme al Código de Trabajo costarricense',
    description: 'Nos encargamos de toda la gestión patronal y laboral: reportes mensuales en el sistema SICERE de la Caja Costarricense de Seguro Social, control de la póliza de Riesgos del Trabajo del INS y cálculo exacto de prestaciones laborales.',
    highlights: [
      'Inscripción patronal y reporte mensual de planilla en la plataforma SICERE de la CCSS',
      'Cálculo de cargas sociales (cuota patronal ~26.67% y retención obrera ~10.67%)',
      'Emisión mensual y reporte de planilla ante el Instituto Nacional de Seguros (INS)',
      'Cálculo riguroso de liquidaciones laborales: preaviso, cesantía, vacaciones y aguinaldo'
    ],
    taxModels: ['SICERE (CCSS)', 'Facturación INS RT', 'Comprobantes de Pago Salarial', 'Fórmulas Código de Trabajo'],
    deliverables: [
      'Colillas de pago de salario para cada colaborador en formato digital',
      'Facturas de cobro mensual de CCSS e INS validadas antes de fecha de vencimiento',
      'Finiquitos y cartas de despido o renuncia con respaldo legal laboral',
      'Asesoría en contratos de trabajo por servicios profesionales vs relación de subordinación'
    ],
    idealFor: 'Empresas con personal a cargo que necesitan mitigar riesgos ante inspecciones del Ministerio de Trabajo, CCSS e INS.'
  },
  {
    id: 'mercantil',
    number: '04',
    title: 'Constitución de Sociedades & Factura Electrónica',
    subtitle: 'Puesta en marcha societaria, registro en ATV y configuración de sistemas electrónicos 4.3',
    description: 'Acompañamos a emprendedores y empresas en la constitución de Sociedades Anónimas (S.A.) o de Responsabilidad Limitada (S.R.L.), su inscripción en el Registro Único Tributario (RUT) de Hacienda y la puesta en marcha de su facturación electrónica.',
    highlights: [
      'Constitución y asesoría en figuras jurídicas: S.A. vs S.R.L. vs Persona Física con Actividad Lucrativa',
      'Inscripción y actualización en el Registro Único Tributario (Formulario D-140 en ATV)',
      'Gestión de llave criptográfica y credenciales de Factura Electrónica versión 4.3',
      'Declaración obligatoria de Registro de Transparencia y Beneficiarios Finales (RTBF)'
    ],
    deliverables: [
      'Cédula jurídica expedida por el Registro Nacional y personería vigente',
      'Configuración de sistema de facturación electrónica validado con Hacienda',
      'Asesoría sobre elección de régimen: Tradicional vs Tributación Simplificada',
      'Guía paso a paso para apertura de cuentas bancarias corporativas en Costa Rica'
    ],
    idealFor: 'Nuevos emprendimientos, inversionistas extranjeros o profesionales que formalizan su operación en Costa Rica.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-1',
    clientType: 'Pyme Tecnológica & Servicios B2B',
    industry: 'Desarrollo de Software & Consultoría Cloud',
    annualRevenue: '₡145.000.000 anuales (~$275k USD)',
    challenge: 'Manejaban facturación en dólares y tenían dudas en la aplicación del IVA transfronterizo, acumulando saldos a favor no aprovechados y temores por inspecciones de la DGT.',
    solution: 'Auditoría integral en ATV, parametrización adecuada de la prorrata de IVA en el Formulario D-104-2 y correcta aplicación de retenciones en la fuente.',
    metric: '₡8.400.000',
    metricLabel: 'En créditos fiscales y optimización deducible',
    quote: 'La atención de María José es impecable: nos atiende tanto por Teams como en reuniones en Cartago. Nos dio total tranquilidad tributaria ante Hacienda.',
    author: 'Ing. Randall Chinchilla',
    role: 'Gerente General, NovaCloud Costa Rica'
  },
  {
    id: 'caso-2',
    clientType: 'Empresa Comercial y Distribuidora',
    industry: 'Importación y Venta en el Gran Área Metropolitana',
    annualRevenue: '₡380.000.000 anuales',
    challenge: 'Atrasos continuos en la declaración de IVA, descontrol en el cálculo de pagos parciales de renta y contingencias acumuladas con la planilla de la CCSS.',
    solution: 'Implementación de contabilidad analítica, conciliación de inventarios conforme a NIIF y sincronización de las planillas en SICERE de la CCSS y el INS.',
    metric: '₡14.200.000',
    metricLabel: 'Prevenidos en multas, recargos y ajustes de la DGT',
    quote: 'Pasamos del caos contable a tener nuestros cierres y estados financieros listos los primeros 8 días de cada mes. Un servicio profesional de primer nivel.',
    author: 'Karla Barrientos',
    role: 'Directora Financiera, Distribuidora del Valle S.A.'
  },
  {
    id: 'caso-3',
    clientType: 'Profesional Independiente',
    industry: 'Servicios de Salud & Consulta Médica Privada',
    annualRevenue: '₡48.000.000 anuales',
    challenge: 'Tributaba como persona física con tarifas de renta del 25% y no aplicaba adecuadamente la deducción de gastos indispensables ni las tarifas reducidas de IVA médico.',
    solution: 'Revisión y reclasificación de gastos de actividad, aplicación de la tarifa del 4% en servicios de salud con comprobante electrónico y planificación fiscal anual.',
    metric: '₡4.150.000',
    metricLabel: 'Ahorro impositivo neto en el primer período fiscal',
    quote: 'La claridad para explicar las normativas fiscales de Costa Rica y la facilidad de gestionar todo de forma digital me ahorran horas de tiempo cada mes.',
    author: 'Dr. Alejandro Monge',
    role: 'Especialista Médico, Cartago'
  }
];

export const FAQS = [
  {
    question: '¿Cómo funciona la atención: atienden en línea o de forma presencial?',
    answer: 'Atendemos bajo modalidad mixta en todo Costa Rica: ofrecemos asesoría 100% digital con reuniones por Google Meet/Microsoft Teams, comunicación ágil por WhatsApp y acceso a carpetas compartidas en la nube para clientes de cualquier provincia. Asimismo, contamos con sede para sesiones presenciales y firmas en Cartago, Costa Rica.'
  },
  {
    question: '¿Qué declaraciones de impuestos deben presentarse mensualmente ante el Ministerio de Hacienda?',
    answer: 'La principal es la declaración del Impuesto sobre el Valor Agregado (IVA) mediante el formulario D-104-2 en el portal ATV, la cual vence los primeros 15 días naturales de cada mes. También se gestionan retenciones en la fuente si aplica y se coordinan los 3 Pagos Parciales del Impuesto sobre la Renta (marzo, junio y setiembre).'
  },
  {
    question: '¿Cómo se gestiona el Impuesto sobre la Renta anual (D-101) en Costa Rica?',
    answer: 'El período fiscal del Impuesto sobre las Utilidades abarca del 1 de enero al 31 de diciembre. La declaración jurada D-101 se presenta en ATV y se cancela a más tardar el 15 de marzo del año siguiente. Aplicamos los tramos de renta progresivos para personas físicas o las escalas de pymes/personas jurídicas según la Ley de Fortalecimiento de las Finanzas Públicas.'
  },
  {
    question: '¿Qué es el Registro de Transparencia y Beneficiarios Finales (RTBF)?',
    answer: 'Es una declaración obligatoria anual que deben presentar todas las personas jurídicas activas o inactivas ante el Banco Central de Costa Rica (BCCR) a través de la plataforma Central Directo durante el mes de abril. Se requiere firma digital emitida en Costa Rica. Nosotros brindamos asesoramiento y acompañamiento completo para su debido cumplimiento.'
  },
  {
    question: '¿Qué incluye la gestión de planillas con la CCSS y la póliza del INS?',
    answer: 'Incluye el alta y baja de colaboradores, el envío mensual de la planilla a través del sistema SICERE de la CCSS (con desglose de cargas patronales y obreras), la liquidación ante el INS para la póliza de Riesgos del Trabajo, y la confección de colillas de salario digitales para cada empleado.'
  },
  {
    question: '¿Cómo se coordina el envío de facturas electrónicas?',
    answer: 'Trabajamos con los sistemas de facturación electrónica estándar de Costa Rica (versión 4.3 de Hacienda). Solo debes enviar tus archivos XML o habilitar el acceso a tu software emisor, y nosotros nos encargamos de la descarga, validación contable y registro tributario de todas tus compras y ventas.'
  }
];
