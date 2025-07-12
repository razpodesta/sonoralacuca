"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { Album } from "@/config/discography";
import {
  SpotifyIcon,
  AppleMusicIcon,
  YouTubeMusicIcon,
} from "@/components/icons/StreamingIcons";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Tarjeta de presentación para un álbum o sencillo en la discografía.
 * Muestra la carátula, lista de canciones y enlaces a plataformas de streaming.
 * @param {object} props - Propiedades del componente.
 * @param {Album} props.album - El objeto del álbum a mostrar.
 * @returns Un componente de tarjeta de álbum animada.
 */
export default function AlbumCard({ album }: { album: Album }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6 border border-white/10"
    >
      <div className="w-full md:w-1/3 flex-shrink-0">
        <Image
          src={album.coverArt}
          alt={`Carátula del álbum ${album.title}`}
          width={400}
          height={400}
          className="rounded-md object-cover w-full aspect-square"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl font-serif-brand text-white">{album.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{album.releaseDate}</p>

        <h4 className="font-bold text-lg mb-2 text-brand-accent">
          Lista de Canciones
        </h4>
        <ol className="list-decimal list-inside text-gray-300 space-y-1 mb-6">
          {album.tracks.map((track) => (
            <li key={track}>{track}</li>
          ))}
        </ol>

        <h4 className="font-bold text-lg mb-3 text-brand-accent">
          Escúchalo en
        </h4>
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={album.streamingLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escuchar ${album.title} en Spotify`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SpotifyIcon className="w-8 h-8" />
          </a>
          <a
            href={album.streamingLinks.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escuchar ${album.title} en Apple Music`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <AppleMusicIcon className="w-8 h-8" />
          </a>
          <a
            href={album.streamingLinks.youtubeMusic}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escuchar ${album.title} en YouTube Music`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <YouTubeMusicIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Al hacer clic en una canción, se podría reproducir un preview de 30 segundos usando howler.js.
// - Crear una página de detalle para cada álbum al hacer clic en la tarjeta.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
