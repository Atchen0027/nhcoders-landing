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
    id: 'atchendev',
    title: 'Atchen.dev - Suite Estética & Bienestar',
    category: 'booking',
    categoryLabel: 'Gestor & Reservas',
    description: 'Solución digital especializada para negocios de belleza y bienestar. Landing de alto impacto con sistema de reservas inteligente y panel de administración ERP/CRM integrado.',
    image: '/portfolio/atchendev.png',
    demoUrl: 'https://atchendev.es',
    tags: ['Next.js', 'ERP/CRM', 'Booking System', 'Full Stack'],
    featured: true
  },
  {
    id: 'plan-basico',
    title: 'Landing Page Luxury & Conversión',
    category: 'landings',
    categoryLabel: 'Landing Page',
    description: 'Diseño de alto impacto visual donde el estilo se une al arte. Una experiencia de lujo pensada para negocios que valoran el detalle y la máxima conversión.',
    image: '/portfolio/plan-basico.png',
    demoUrl: 'https://planbasico.atchenvalladares.es',
    tags: ['React', 'Luxury Design', 'Conversión', 'Tailwind/CSS'],
    featured: true
  },
  {
    id: 'plan-pro',
    title: 'Plan Pro - Orquesta Tajinaste CMS',
    category: 'landings',
    categoryLabel: 'Web & CMS',
    description: 'Plataforma autogestionable optimizada para el sector del ocio y espectáculos. Control total sobre contenidos, eventos, agenda y multimedia con interfaz dinámica.',
    image: '/portfolio/plan-pro.png',
    demoUrl: 'https://planpro.atchenvalladares.es',
    tags: ['Next.js', 'Admin Panel', 'Eventos CMS', 'Multimedia'],
    featured: true
  },
  {
    id: 'plan-gestor',
    title: 'Plan Gestor Citas & Clientes',
    category: 'booking',
    categoryLabel: 'Gestor & Reservas',
    description: 'Solución integral con sistema avanzado de gestión de citas y panel de control personalizado. Ideal para clínicas, barberías y negocios de servicios.',
    image: '/portfolio/plan-gestor.png',
    demoUrl: 'https://plangestiontotal.atchenvalladares.es',
    tags: ['Full Stack', 'Booking Engine', 'Admin Dashboard'],
    featured: false
  },
  {
    id: 'ecommerce-wp',
    title: 'E-commerce WooCommerce Pro',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    description: 'Tienda online robusta y escalable diseñada para pequeños y medianos comercios. Gestión intuitiva de catálogo, pagos digitales seguros y pedidos.',
    image: '/portfolio/ecommerce.png',
    demoUrl: 'https://tienda.atchenvalladares.es/',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'Pasarela Pagos'],
    featured: false
  },
  {
    id: 'landing-wp',
    title: 'Landing Page Corporativa WP',
    category: 'landings',
    categoryLabel: 'Landing Page',
    description: 'Sitio web enfocado en la captación rápida de leads. Organización limpia de identidad de marca, portfolio y servicios para generar ventas.',
    image: '/portfolio/landing-wp.png',
    demoUrl: 'https://landing.atchenvalladares.es/',
    tags: ['WordPress', 'Elementor', 'MySQL', 'SEO'],
    featured: false
  },
  {
    id: 'tienda2',
    title: 'Tienda Online Moda & Catálogo',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    description: 'E-commerce dinámico con inventario en tiempo real, múltiples divisas/métodos de pago y experiencia de compra optimizada para móviles.',
    image: '/portfolio/tienda2.png',
    demoUrl: 'https://tienda2.atchenvalladares.es',
    tags: ['WooCommerce', 'Mobile First', 'Pasarela Stripe'],
    featured: false
  },
  {
    id: 'musica',
    title: 'Plataforma Musical Interactiva',
    category: 'apps',
    categoryLabel: 'Web App',
    description: 'Espacio interactivo para streaming de audio y listas de reproducción personalizadas con visualización de ondas sonoras y diseño vanguardista.',
    image: '/portfolio/musica.png',
    demoUrl: 'https://musica.atchenvalladares.es',
    tags: ['React', 'Web Audio API', 'Modern UI'],
    featured: false
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
