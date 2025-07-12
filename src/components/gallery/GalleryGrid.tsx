"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData, galleryCategories } from "@/config/gallery";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | (typeof galleryCategories)[number]
  >("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((image) => image.category === activeFilter);

  return (
    <>
      {/* Botones de Filtro */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-2 font-bold rounded-full transition-colors ${
            activeFilter === "All"
              ? "bg-brand-accent text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Todas
        </button>
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 font-bold rounded-full transition-colors ${
              activeFilter === category
                ? "bg-brand-accent text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cuadrícula de Imágenes */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox (Modal de Pantalla Completa) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={selectedImage}
              className="relative w-full h-full max-w-4xl max-h-[80vh]"
            >
              <Image
                src={selectedImage}
                alt="Imagen seleccionada en pantalla completa"
                fill
                className="object-contain"
              />
            </motion.div>
            {/* Botón para cerrar */}
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir botones de "anterior" y "siguiente" en el lightbox para navegar sin cerrar.
// - Implementar la capacidad de hacer zoom en la imagen dentro del lightbox.
// - Cargar imágenes de forma perezosa (lazy loading) para mejorar el rendimiento inicial.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
