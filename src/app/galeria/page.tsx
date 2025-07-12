import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Las mejores fotos y videos de Sonora La Cuca. Revive nuestros conciertos, sesiones de fotos y momentos detrás de cámaras.",
};

export default function GaleriaPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
          Galería de Fotos
        </h1>
        <GalleryGrid />
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir una sección de "Videos" separada con una cuadrícula de videos de YouTube.
// - Permitir a los usuarios descargar versiones en alta resolución de algunas imágenes.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
