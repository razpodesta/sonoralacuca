"use client";

import { motion } from "framer-motion";
import { discographyData } from "@/config/discography";
import AlbumCard from "@/components/music/AlbumCard";

// Variantes para la animación del contenedor (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Cada tarjeta aparecerá con 0.3s de diferencia
    },
  },
};

export default function MusicaPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
          Nuestra Música
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 max-w-5xl mx-auto"
        >
          {discographyData.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir filtros para ver por "Álbumes", "Sencillos", "EPs".
// - Implementar una barra de búsqueda para encontrar canciones o álbumes específicos.
// - Cargar más álbumes al hacer scroll hacia el final de la página (infinite scroll).
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
