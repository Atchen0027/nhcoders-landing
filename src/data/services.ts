export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconSvg: string;
  badge: string;
  badgeColor: 'mint' | 'pink';
  features: string[];
  ctaText: string;
  ctaHash: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'android-apps',
    title: 'Desarrollo de Apps Android',
    subtitle: 'Nativas, rápidas y optimizadas para Google Play',
    description: 'Creación integral de aplicaciones Android desde el diseño de interfaz hasta la publicación en Google Play. Optimizadas para un consumo mínimo de batería y listas para monetización con AdMob.',
    badge: 'Especialidad',
    badgeColor: 'mint',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    features: [
      'Arquitectura 100% nativa y sin dependencias pesadas',
      'Integración con Google Play Console y AdMob',
      'Diseño UI/UX adaptado a Material You y modo oscuro',
      'Optimización de rendimiento y batería'
    ],
    ctaText: 'Pedir presupuesto de App',
    ctaHash: '#contacto'
  },
  {
    id: 'web-landing',
    title: 'Webs & Landings de Alto Impacto',
    subtitle: 'Velocidad extrema, conversión y diseño futurista',
    description: 'Desarrollo de páginas web y landing pages con tecnologías de última generación (Astro, React, Next.js). Estructuradas para cautivar a tus visitas y posicionar en los primeros puestos de Google.',
    badge: 'Ultra Rápido',
    badgeColor: 'pink',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    features: [
      'Puntuaciones 98-100 en Google PageSpeed',
      'Diseño responsive perfecto en todos los móviles',
      'SEO técnico integrado y marcado de datos Schema.org',
      'Efectos visuales modernos y micro-animaciones'
    ],
    ctaText: 'Crear mi Web / Landing',
    ctaHash: '#contacto'
  },
  {
    id: 'booking-crm',
    title: 'Sistemas de Reservas & Gestores ERP',
    subtitle: 'Automatización completa para negocios de servicios',
    description: 'Plataformas autogestionables con motor de reservas online 24/7, control de citas, base de datos de clientes, gestión de servicios y notificaciones automáticas.',
    badge: 'Automatización',
    badgeColor: 'mint',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    features: [
      'Reserva de citas directa sin comisiones de terceros',
      'Panel de control administrativo seguro e intuitivo',
      'Sincronización de calendario y disponibilidad',
      'Historial de clientes y analítica de reservas'
    ],
    ctaText: 'Automatizar mi Negocio',
    ctaHash: '#contacto'
  },
  {
    id: 'ecommerce',
    title: 'Tiendas Online & E-Commerce',
    subtitle: 'Vende tus productos por internet sin complicaciones',
    description: 'Tiendas electrónicas completas sobre WooCommerce o a medida, preparadas para recibir pagos con tarjeta (Stripe, Redsys, Bizum, PayPal) con gestión sencilla de stock y envíos.',
    badge: 'Ventas 24/7',
    badgeColor: 'pink',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    features: [
      'Configuración de pasarelas de pago seguras y Bizum',
      'Catálogo autogestionable fácil de actualizar',
      'Diseño orientado a la conversión y fidelización',
      'Cumplimiento RGPD y cookies legales'
    ],
    ctaText: 'Montar mi Tienda Online',
    ctaHash: '#contacto'
  }
];
