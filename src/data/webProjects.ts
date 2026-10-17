export interface WebProjectItem {
  id: string;
  title: string;
  category: 'landings' | 'booking' | 'ecommerce' | 'apps';
  categoryLabel: string;
  description: string;
  image: string;
  demoUrl: string;
  tags: string[];
  featured?: boolean;
}

export const WEB_PROJECTS: WebProjectItem[] = [
  {
    id: 'nubeterapia',
    title: 'Nubeterapia • Cosmética Artesanal & Jabones',
    category: 'landings',
    categoryLabel: 'Landing & Catálogo',
    description: 'Tienda online y catálogo interactivo de jabones artesanales de glicerina vegetal, exfoliantes naturales y cosmética botánica hecha a mano en Tenerife (Canarias). Cuenta con carrito de compra dinámico, pedidos directos por WhatsApp y panel de administración demo.',
    image: '/portfolio/jared-demo.webp',
    demoUrl: 'https://atchen0027.github.io/jared-demo/',
    tags: ['Astro', 'TypeScript', 'Carrito Interactivo', 'WhatsApp Checkout', 'Panel Gestión'],
    featured: true
  },
  {
    id: 'disvelmagic',
    title: 'Disvelmagic • Wax Melts, Velas & Mikados',
    category: 'ecommerce',
    categoryLabel: 'E-commerce Pro',
    description: 'Tienda online oficial especializada en aromaterapia artesanal, wax melts de diseño, velas aromáticas y literarias, ambientadores mikado y quemadores. Diseñada con catálogo por variantes de producto, pasarelas de pago seguras y gestión integral de pedidos.',
    image: '/portfolio/disvelmagic.webp',
    demoUrl: 'https://disvelmagic.com/',
    tags: ['WordPress', 'WooCommerce', 'Pasarela de Pago', 'Elementor', 'E-commerce'],
    featured: true
  }
];

export const CERTIFICATES = [
  {
    title: 'Certificado de Formación en Desarrollo Web',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-0-scaled.jpg'
  },
  {
    title: 'Certificación en JavaScript & Frontend Moderno',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-1-scaled.jpg'
  },
  {
    title: 'Desarrollo de Aplicaciones & Arquitectura Web',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-2-scaled.jpg'
  },
  {
    title: 'Especialización en React, Componentes & State Management',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-3-scaled.jpg'
  },
  {
    title: 'Sistemas Web, Bases de Datos & Backend Integration',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-4-scaled.jpg'
  },
  {
    title: 'Optimización, Rendimiento Web & Responsive Design',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-5-scaled.jpg'
  },
  {
    title: 'Certificado Avanzado de Desarrollo Full Stack',
    institution: 'Conquer Blocks & Academy',
    image: '/portfolio/787_acen0027@gmail-imagenes-6-scaled.jpg'
  }
];
