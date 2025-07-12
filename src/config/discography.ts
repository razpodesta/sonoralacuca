// Tipamos los datos para asegurar la consistencia
export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  coverArt: string; // Ruta a la imagen en /public
  tracks: string[];
  streamingLinks: {
    spotify: string;
    appleMusic: string;
    youtubeMusic: string;
  };
}

export const discographyData: Album[] = [
  {
    id: "cumbias-del-corazon",
    title: "Cumbias del Corazón",
    releaseDate: "15 de Septiembre, 2024",
    coverArt: "/images/albums/album-1.jpg", // ASEGÚRATE DE TENER ESTA IMAGEN
    tracks: [
      "El Lamento del Cucarrón",
      "La Noche que te Fuiste",
      "Bailando en la Ramada",
      "Morena de Fuego",
      "Corazón de Melón",
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
      youtubeMusic: "https://music.youtube.com/",
    },
  },
  {
    id: "noches-de-fiesta",
    title: "Noches de Fiesta",
    releaseDate: "10 de Marzo, 2023",
    coverArt: "/images/albums/album-2.jpg", // ASEGÚRATE DE TENER ESTA IMAGEN
    tracks: [
      "La Reina del Mambo",
      "Zapateo en el Puerto",
      "Luces de la Ciudad",
      "Amanecer Contigo",
      "El Ritmo no Para",
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
      youtubeMusic: "https://music.youtube.com/",
    },
  },
];

// ===============================================================================================
// MEJORAS FUTURAS:
// - Conectar esto a un CMS (como Strapi o Sanity) para que la banda pueda actualizar su discografía
//   sin necesidad de tocar el código.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
