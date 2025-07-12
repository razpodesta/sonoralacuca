"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Muestra una pantalla de carga animada al inicio de la sesión para mejorar la
 * experiencia de usuario y evitar saltos de contenido (layout shift).
 * @returns El componente Preloader que se desvanece tras un breve período.
 */
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga para asegurar que la animación se vea.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de duración

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <Image
              src="/images/logo-sonora-la-cuca.png"
              alt="Cargando el sitio de Sonora La Cuca"
              width={250}
              height={125}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Sincronizar el fin del preloader con la carga real de los assets principales de la página,
//   en lugar de usar un temporizador fijo.
// - Añadir una barra de progreso o una animación de onda al logo para una mayor sofisticación.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
