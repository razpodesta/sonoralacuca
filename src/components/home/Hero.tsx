"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Componente Hero de la página de inicio. Muestra una imagen de fondo a pantalla
 * completa con el logo, nombre y eslogan de la banda superpuestos y animados.
 * @returns La sección Hero para la página de inicio.
 */
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white text-center">
      {/* Imagen de Fondo (Personalizable) */}
      <Image
        src="/images/hero-background.jpg" // Asegúrate de tener esta imagen
        alt="Sonora La Cuca en el escenario"
        fill
        className="object-cover z-0"
        priority
        quality={85}
      />
      {/* Capa de Oscurecimiento */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido Superpuesto */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-sonora-la-cuca.png"
            alt="Logo Sonora La Cuca"
            width={150}
            height={150}
            className="h-20 w-auto md:h-28" // Logo más pequeño como en la referencia
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif-brand text-6xl md:text-8xl lg:text-9xl tracking-tighter my-4"
        >
          SONORA LA CUCA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="text-lg md:text-xl uppercase tracking-[0.2em]"
        >
          La Reina de la Cumbia
        </motion.p>
      </div>
    </section>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir un botón de scroll-down animado que invite a explorar el resto de la página.
// - Reemplazar la imagen de fondo estática con un video en bucle para un mayor impacto.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
