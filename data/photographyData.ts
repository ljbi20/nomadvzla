xport interface PackageItem {
  id: string;
  category: 'retratos' | 'producto' | 'eventos';
  name: string;
  badge?: string;
  photos: string;
  duration: string;
  deliveryTime: string;
  sneakPeek?: string;
  features: string[];
  recommendedFor: string;
  flyerImage?: string;
}

export interface ServiceCategory {
  id: 'retratos' | 'producto' | 'eventos';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'retratos',
    title: 'Retratos',
    subtitle: 'Lifestyle & Street Editorial',
    description: 'Sesiones fotográficas urbanas, personales y para marcas personales en exteriores de Caracas o locaciones seleccionadas.',
    iconName: 'Camera',
  },
  {
    id: 'producto',
    title: 'Foto Producto',
    subtitle: 'Comercial & E-Commerce',
    description: 'Fotografía comercial de alta definición para calzado, ropa, accesorios y marcas que buscan impacto visual en sus ventas digitales.',
    iconName: 'Package',
  },
  {
    id: 'eventos',
    title: 'Eventos',
    subtitle: 'Cobertura Dinámica & Activaciones',
    description: 'Cobertura enérgica de carreras, maratones, activaciones comerciales de marca, festivales y eventos deportivos con entrega express.',
    iconName: 'Flame',
  },
];

export const PACKAGES: PackageItem[] = [
  // RETRATOS
  {
    id: 'start',
    category: 'retratos',
    name: 'Paquete Start',
    badge: 'Popular Inicial',
    photos: '5 Fotos editadas de Alta Resolución',
    duration: '30 min a 1 Hora de sesión',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      '5 Fotos digitales en máxima calidad',
      'Edición y corrección de color profesional',
      'Sesión de 30 min a 1 hora en exteriores',
      'Entrega digital lista para redes sociales y perfiles',
      'Asesoría en poses y locación'
    ],
    recommendedFor: 'Ideal para fotos de perfil, actualización rápida de redes y retratos personales.',
  },
  {
    id: 'express',
    category: 'retratos',
    name: 'Paquete Express',
    badge: 'Más Solicitado',
    photos: '10 Fotos editadas de Alta Resolución',
    duration: '1 Hora de sesión',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      '10 Fotos digitales editadas en alta resolución',
      '1 Hora completa de shooting fotográfico',
      'Cambio de outfit / estilo permitido',
      'Edición artística cinematográfica',
      'Entrega digital en 48 horas hábiles'
    ],
    recommendedFor: 'Perfecto para creadores de contenido, modelos e influencers urbanos.',
  },
  {
    id: 'plus',
    category: 'retratos',
    name: 'Paquete Plus',
    badge: 'Recomendado',
    photos: '15 Fotos editadas de Alta Resolución',
    duration: '1 Hora de sesión',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      '15 Fotos digitales editadas en alta resolución',
      '1 Hora de sesión fotográfica dinámica',
      'Múltiples ángulos, planos y encuadres',
      'Edición y retoque digital de alta fidelidad',
      'Ideal para lookbook y contenido de marca personal'
    ],
    recommendedFor: 'Excelente para campañas de redes, marcas personales y books fotográficos.',
  },
  {
    id: 'esencial',
    category: 'retratos',
    name: 'Paquete Esencial',
    badge: 'Completo',
    photos: '20 Fotos editadas de Alta Resolución',
    duration: '1½ Hora de sesión',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      '20 Fotos digitales editadas de alta resolución',
      '1 Hora y media (90 minutos) de sesión',
      'Varias locaciones o fondos en la misma zona',
      'Hasta 3 cambios de outfit',
      'Entrega estimada en 2 días con galería online'
    ],
    recommendedFor: 'La sesión definitiva para portafolios completos, artistas y campañas de temporada.',
  },

  // FOTO PRODUCTO
  {
    id: 'ecommerce',
    category: 'producto',
    name: 'Paquete E-Commerce',
    badge: 'Catálogo & Web',
    photos: '15 Fotos producto (Mínimo) editadas de Alta Resolución',
    duration: 'Sesión por lote de productos',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      'Mínimo 15 Fotos de producto de alta resolución',
      'Fondo limpio, iluminación controlada y nitidez comercial',
      'Enfoque en detalles de textura, marca y acabados',
      'Optimización de imagen para tiendas web e Instagram Shop',
      'Entrega estimada en 2 días hábiles'
    ],
    recommendedFor: 'Tiendas online, catálogos en MercadoLibre, Shopify, Instagram y WhatsApp Business.',
  },
  {
    id: 'lifestyle-prod',
    category: 'producto',
    name: 'Paquete Lifestyle',
    badge: 'Publicidad & Impacto',
    photos: '20 Fotos producto editadas de Alta Resolución',
    duration: 'Sesión contextual en exteriores / urbano',
    deliveryTime: 'Estimado de entrega: 2 días',
    features: [
      '20 Fotos de producto en contexto real de uso',
      'Escenarios urbanos, deportivos y de estilo de vida',
      'Composiciones de alto impacto visual con modelos o manos',
      'Color grading publicitario adaptado al manual de marca',
      'Entrega en alta resolución para impresos y digital'
    ],
    recommendedFor: 'Marcas de calzado (sneakers), streetwear, ropa deportiva y accesorios.',
  },

  // EVENTOS
  {
    id: 'on-the-go',
    category: 'eventos',
    name: 'On The Go',
    badge: 'Eventos Dinámicos',
    photos: '80 Fotos editadas de Alta Resolución',
    duration: 'Tarifa por hora · Mínimo: 2 Horas',
    deliveryTime: 'Entrega final en días hábiles',
    sneakPeek: 'Sneak Peek de 10 fotos editadas en < 24 hrs',
    features: [
      'Tarifa por hora (Mínimo de contratación: 2 Horas)',
      '80 Fotos editadas en alta resolución incluidas',
      '⚡ SNEAK PEEK: 10 fotos editadas en MENOS DE 24 HORAS para tus redes',
      'Cobertura documental completa de momentos clave',
      'Entrega rápida en enlace digital privado'
    ],
    recommendedFor: 'Lanzamientos de productos, carreras cortas, activaciones de marcas y eventos de networking.',
  },
  {
    id: 'all-day',
    category: 'eventos',
    name: 'All-Day Content',
    badge: 'Cobertura Integral',
    photos: '120 Fotos editadas de Alta Resolución',
    duration: 'Tarifa por hora · Máximo: 8 Horas',
    deliveryTime: 'Entrega final completa en alta definición',
    sneakPeek: 'Sneak Peek de 20 fotos editadas en < 24 hrs',
    features: [
      'Tarifa por hora (Máximo de contratación: 8 Horas)',
      '120 Fotos editadas en alta resolución incluidas',
      '⚡ SNEAK PEEK: 20 fotos editadas en MENOS DE 24 HORAS para prensa y live feed',
      'Cobertura de jornada completa (maratones, festivales, ferias y expos)',
      'Captura de asistentes, atletas, stands, momentos cumbre y atmósfera'
    ],
    recommendedFor: 'Maratones, exposiciones comerciales, festivales musicales y activaciones de marcas deportivas.',
  },
];

export const CONTACT_INFO = {
  photographer: 'Leonardo Briceño',
  brand: 'nomad.vzla',
  role: 'Fotógrafo Profesional',
  status: 'Disponible para nuevos proyectos',
  tagline: "Let's work together",
  phoneFormatted: '0412-9605300',
  phoneRaw: '04129605300',
  whatsappNumber: '584129605300',
  whatsappUrl: 'https://wa.me/584129605300',
  email: 'leojb53@gmail.com',
  instagramHandle: '@nomad.vzla',
  instagramUrl: 'https://instagram.com/nomad.vzla',
  location: 'Caracas, Venezuela',
};

export const GALLERY_ITEMS = [
  {
    id: 'gallery-1',
    title: 'Retrato Urbano',
    category: 'Retratos',
    location: 'Caracas, Venezuela',
    image: '/src/assets/images/portrait_urban_1791742847864.jpg',
    tag: 'Sesión Nocturna',
    description: 'Fotografía en la Avenida Bolívar con bokeh urbano',
  },
  {
    id: 'gallery-2',
    title: 'Commercial Sneaker Shot',
    category: 'Producto',
    location: 'Urban Streetwear',
    image: '/src/assets/images/product_sneaker_1791742856482.jpg',
    tag: 'Calzado & Moda',
    description: 'Composición capturando el zapato en el aire',
  },
  {
    id: 'gallery-3',
    title: 'Maratón & Running Event',
    category: 'Eventos',
    location: 'Circuito Capital',
    image: '/src/assets/images/event_marathon_1791742866318.jpg',
    tag: 'Deporte & Acción',
    description: 'Acción deportiva masiva en punto de salida con energía de atletas y marcas aliadas.',
  },
  {
    id: 'gallery-4',
    title: 'Activación de Marca & Expo',
    category: 'Eventos',
    location: 'Expo Deportiva',
    image: '/src/assets/images/brand_activation_1791742876676.jpg',
    tag: 'Brand Experience',
    description: 'Captura espontánea de participantes recibiendo premios en stands de marcas deportivas.',
  },
  {
    id: 'gallery-5',
    title: 'Leonardo Briceño en Acción',
    category: 'Sobre Mí',
    location: 'En el lente',
    image: '/src/assets/images/hero_photographer_1791742838768.jpg',
    tag: 'Equipo & Visión',
    description: 'Capturando la esencia visual y espontaneidad de cada proyecto en el corazón de la ciudad.',
  },
];
