export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'todas' | 'productividad' | 'salud' | 'educacion' | 'ocio';
  categoryLabel: string;
  rating: number;
  reviewsCount?: string;
  badges: string[];
  icon: string;
  screenshots: string[];
  playStoreUrl: string;
  features: string[];
  featured?: boolean;
}

export const APPS: AppItem[] = [
  {
    id: 'com.nhc.fitkiva',
    name: 'FitKiva',
    tagline: 'Tu asistente diario de fitness, rutinas y salud integral',
    description: 'Diseñada para potenciar tus entrenamientos diarios, seguimiento corporal y metas deportivas con una interfaz ágil, moderna y sin distracciones.',
    category: 'salud',
    categoryLabel: 'Salud & Fitness',
    rating: 4.9,
    reviewsCount: '+500',
    badges: ['Fitness', 'Salud', 'Entrenamiento'],
    icon: '/apps/com.nhc.fitkiva/icon.png',
    screenshots: [
      '/apps/com.nhc.fitkiva/screenshots/screen_1.webp',
      '/apps/com.nhc.fitkiva/screenshots/screen_2.webp',
      '/apps/com.nhc.fitkiva/screenshots/screen_3.webp',
      '/apps/com.nhc.fitkiva/screenshots/screen_4.webp',
      '/apps/com.nhc.fitkiva/screenshots/screen_5.webp',
      '/apps/com.nhc.fitkiva/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhc.fitkiva',
    features: [
      'Planes de entrenamiento personalizados',
      'Registro de medidas y progreso corporal',
      'Temporizador de descansos y series',
      'Modo oscuro optimizado para ahorro de batería'
    ],
    featured: true
  },
  {
    id: 'com.nhcoders.gestorgastos',
    name: 'Control de Gastos Compartidos',
    tagline: 'Divide cuentas, registra pagos y gestiona finanzas grupales',
    description: 'La solución definitiva para viajes, pisos compartidos y salidas en grupo. Olvídate de cálculos complicados y reparte cuentas con total transparencia.',
    category: 'productividad',
    categoryLabel: 'Finanzas & Productividad',
    rating: 4.8,
    reviewsCount: '+1K',
    badges: ['Finanzas', 'Grupos', 'Ahorro'],
    icon: '/apps/com.nhcoders.gestorgastos/icon.png',
    screenshots: [
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_1.webp',
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_2.webp',
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_3.webp',
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_4.webp',
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_5.webp',
      '/apps/com.nhcoders.gestorgastos/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhcoders.gestorgastos',
    features: [
      'Reparto automático de deudas mínimas',
      'Categorización de gastos con gráficos',
      'Exportación de informes y balances',
      'Uso 100% offline y seguro'
    ],
    featured: true
  },
  {
    id: 'com.nhcoders.tdkapp',
    name: 'Taekwondo Master Quiz',
    tagline: 'Aprende Taekwondo, cinturones, terminología y pon a prueba tu nivel',
    description: 'El juego de trivia y formación más completo para estudiantes y apasionados del Taekwondo. Avanza desde cinturón blanco hasta maestro cinturón negro.',
    category: 'educacion',
    categoryLabel: 'Educación & Deportes',
    rating: 5.0,
    reviewsCount: '+300',
    badges: ['Artes Marciales', 'Quiz', 'Ranking'],
    icon: '/apps/com.nhcoders.tdkapp/icon.png',
    screenshots: [
      '/apps/com.nhcoders.tdkapp/screenshots/screen_1.webp',
      '/apps/com.nhcoders.tdkapp/screenshots/screen_2.webp',
      '/apps/com.nhcoders.tdkapp/screenshots/screen_3.webp',
      '/apps/com.nhcoders.tdkapp/screenshots/screen_4.webp',
      '/apps/com.nhcoders.tdkapp/screenshots/screen_5.webp',
      '/apps/com.nhcoders.tdkapp/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhcoders.tdkapp',
    features: [
      'Cuestionarios por niveles de cinturón',
      'Diccionario técnico coreano-español',
      'Modo contrarreloj y vidas',
      'Tabla de clasificación global'
    ],
    featured: true
  },
  {
    id: 'com.nhc.ebookplayer',
    name: 'EbookPlayer',
    tagline: 'Lector inteligente y reproductor de audiolibros interactivo',
    description: 'Combina la lectura inmersiva de libros electrónicos con narración por voz de alta calidad, marcadores sincronizados y personalización visual.',
    category: 'productividad',
    categoryLabel: 'Lectura & Multimedia',
    rating: 4.7,
    reviewsCount: '+450',
    badges: ['Audiolibros', 'Ebooks', 'Lector'],
    icon: '/apps/com.nhc.ebookplayer/icon.png',
    screenshots: [
      '/apps/com.nhc.ebookplayer/screenshots/screen_1.webp',
      '/apps/com.nhc.ebookplayer/screenshots/screen_2.webp',
      '/apps/com.nhc.ebookplayer/screenshots/screen_3.webp',
      '/apps/com.nhc.ebookplayer/screenshots/screen_4.webp',
      '/apps/com.nhc.ebookplayer/screenshots/screen_5.webp',
      '/apps/com.nhc.ebookplayer/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhc.ebookplayer',
    features: [
      'Soporte multipropósito (EPUB, PDF, TXT)',
      'Motor de lectura en voz alta TTS fluido',
      'Temporizador de apagado para dormir',
      'Ajustes de fuentes, espaciado y contraste'
    ]
  },
  {
    id: 'com.nhcoders.duermeenlacomunidad',
    name: 'Aquí no hay quien duerma',
    tagline: 'Generador de ruido blanco personalizado para ayudarte a dormir y descansar',
    description: 'Aplicación diseñada para ayudarte a conciliar el sueño profundo y mejorar tu descanso. Personaliza capas de ruido blanco, sonidos relajantes y frecuencias ambientales para bloquear distracciones y dormir toda la noche sin interrupciones.',
    category: 'salud',
    categoryLabel: 'Salud & Sueño',
    rating: 4.8,
    reviewsCount: '+2.5K',
    badges: ['Ruido Blanco', 'Sueño & Relax', 'Descanso'],
    icon: '/apps/com.nhcoders.duermeenlacomunidad/icon.png',
    screenshots: [
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_1.webp',
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_2.webp',
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_3.webp',
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_4.webp',
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_5.webp',
      '/apps/com.nhcoders.duermeenlacomunidad/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhcoders.duermeenlacomunidad',
    features: [
      'Generador de ruido blanco, rosa y marrón personalizable',
      'Mezclador de capas de sonidos ambientales relajantes',
      'Temporizador de apagado progresivo inteligente',
      'Reproducción en segundo plano y modo sin conexión'
    ]
  },
  {
    id: 'com.nhcoders.simplepdfedit',
    name: 'Simple PDF Editor',
    tagline: 'Editor, visualizador y conversor ágil de documentos PDF',
    description: 'Trabaja con tus documentos PDF de manera rápida, ligera y sin publicidad invasiva. Firma contratos, anota apuntes y gestiona páginas en segundos.',
    category: 'productividad',
    categoryLabel: 'Productividad & Herramientas',
    rating: 4.9,
    reviewsCount: '+800',
    badges: ['PDF', 'Herramientas', 'Oficina'],
    icon: '/apps/com.nhcoders.simplepdfedit/icon.png',
    screenshots: [
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_1.webp',
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_2.webp',
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_3.webp',
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_4.webp',
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_5.webp',
      '/apps/com.nhcoders.simplepdfedit/screenshots/screen_6.webp',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nhcoders.simplepdfedit',
    features: [
      'Visualizador PDF ultra-rápido y fluido',
      'Firma digital y herramientas de dibujo a mano',
      'Unión y división de hojas de documentos',
      'Procesamiento 100% local en tu dispositivo'
    ]
  }
];

export const DEVELOPER_INFO = {
  brandName: 'Noobs Hard Coders',
  shortName: 'NHCoders',
  legalName: 'Noobs Hard Coders Mobile Apps',
  location: 'Santa Cruz de Tenerife, Canarias, España',
  email: 'nhcoders@gmail.com',
  playStoreDeveloperUrl: 'https://play.google.com/store/apps/developer?id=NHCoders',
  tagline: 'Indie Mobile Studio • Creando apps y juegos Android con personalidad, rendimiento y cero rodeos',
  admobPublisherId: 'pub-XXXXXXXXXXXXXXXX'
};
