// Tipamos los datos para cada imagen de la galería
export interface GalleryImage {
  id: number;
  src: string; // Ruta a la imagen en /public
  alt: string;
  category: "En Vivo" | "Sesión de Fotos" | "Backstage";
}

export const galleryData: GalleryImage[] = [
  // --- Fotos en Vivo ---
  {
    id: 1,
    src: "/images/gallery/live-1.jpg",
    alt: "Sonora La Cuca en concierto en Santiago",
    category: "En Vivo",
  },
  {
    id: 2,
    src: "/images/gallery/live-2.jpg",
    alt: "El público vibrando en el show de Valparaíso",
    category: "En Vivo",
  },
  {
    id: 3,
    src: "/images/gallery/live-3.jpg",
    alt: "Primer plano del vocalista en el escenario",
    category: "En Vivo",
  },
  {
    id: 4,
    src: "/images/gallery/live-4.jpg",
    alt: "Luces y energía en el show de Concepción",
    category: "En Vivo",
  },

  // --- Sesión de Fotos Oficial ---
  {
    id: 5,
    src: "/images/gallery/studio-1.jpg",
    alt: "Foto promocional de la banda completa",
    category: "Sesión de Fotos",
  },
  {
    id: 6,
    src: "/images/gallery/studio-2.jpg",
    alt: "Retrato del guitarrista",
    category: "Sesión de Fotos",
  },
  {
    id: 7,
    src: "/images/gallery/studio-3.jpg",
    alt: "La banda con una estética retro",
    category: "Sesión de Fotos",
  },

  // --- Backstage ---
  {
    id: 8,
    src: "/images/gallery/backstage-1.jpg",
    alt: "Momentos antes de salir al escenario",
    category: "Backstage",
  },
  {
    id: 9,
    src: "/images/gallery/backstage-2.jpg",
    alt: "La banda relajándose después del show",
    category: "Backstage",
  },
];

// Definimos las categorías para los botones de filtro
export const galleryCategories: GalleryImage["category"][] = [
  "En Vivo",
  "Sesión de Fotos",
  "Backstage",
];

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir una categoría de "Videos" que pueda mostrar videos de YouTube en el lightbox.
// - Cargar las imágenes desde un servicio de almacenamiento en la nube (como Cloudinary) para optimizarlas automáticamente.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
