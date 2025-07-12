// Tipamos los datos para las entradas del blog
export interface Post {
  slug: string; // URL amigable
  title: string;
  publishDate: string;
  author: string;
  coverImage: string; // Ruta a la imagen en /public
  excerpt: string; // Resumen corto para la tarjeta
  content: string; // Contenido completo en formato Markdown
}

export const blogData: Post[] = [
  {
    slug: "celebrando-el-lanzamiento-de-nuestro-nuevo-album",
    title: '¡Celebrando el Lanzamiento de "Cumbias del Corazón"!',
    publishDate: "16 de Septiembre, 2024",
    author: "La Banda",
    coverImage: "/images/blog/post-1.jpg", // ASEGÚRATE DE TENER ESTA IMAGEN
    excerpt:
      'Estamos increíblemente emocionados de compartir nuestro nuevo material con todos ustedes. "Cumbias del Corazón" es un viaje musical que...',
    content: `
## Un Sueño Hecho Realidad

Estamos increíblemente emocionados de compartir nuestro nuevo material con todos ustedes. "Cumbias del Corazón" es un viaje musical que hemos preparado con todo el cariño del mundo. Cada canción cuenta una historia, cada nota lleva un pedazo de nuestra alma.

### El Proceso Creativo

Nos encerramos durante meses en el estudio, buscando ese sonido que nos identifica. Fue un proceso lleno de risas, debates y, sobre todo, mucha música. Queríamos capturar la esencia de las fiestas populares, la alegría del baile y la nostalgia de los amores de verano.

*   **Inspiración:** Las calles de Valparaíso y las noches de fiesta en el litoral central.
*   **Sonido:** Una fusión de cumbia clásica con toques modernos.
*   **Colaboraciones:** Tuvimos el honor de contar con artistas invitados que pronto revelaremos.

¡Esperamos que lo disfruten tanto como nosotros disfrutamos creándolo! Vayan a escucharlo a su plataforma favorita.
    `,
  },
  {
    slug: "la-historia-detras-de-la-noche-que-te-fuiste",
    title: 'La Historia Detrás de "La Noche que te Fuiste"',
    publishDate: "10 de Agosto, 2024",
    author: "El Compositor",
    coverImage: "/images/blog/post-2.jpg", // ASEGÚRATE DE TENER ESTA IMAGEN
    excerpt:
      "Muchos nos han preguntado sobre la inspiración de esta canción. La verdad es que nació en una noche lluviosa, recordando un viejo amor de...",
    content: `
## Una Melodía Nostálgica

Muchos nos han preguntado sobre la inspiración de esta canción. La verdad es que nació en una noche lluviosa, recordando un viejo amor de juventud. La melodía principal apareció casi por arte de magia en una vieja guitarra.

La letra habla de esa melancolía que queda cuando alguien se va, pero también de la esperanza de volver a encontrar la felicidad. Es un tributo a esos amores que, aunque terminan, nos marcan para siempre.
    `,
  },
];

// ===============================================================================================
// MEJORAS FUTURAS:
// - Migrar el 'content' a un formato MDX para poder incluir componentes de React dentro del blog.
// - Implementar un sistema de categorías y etiquetas para filtrar las publicaciones.
// - Añadir una sección de comentarios usando servicios como Disqus o Giscus.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
