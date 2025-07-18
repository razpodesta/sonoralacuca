"use client";

import { motion, Variants } from "framer-motion";

/**
 * Componente que renderiza unas guirnaldas SVG animadas para dar un ambiente festivo.
 * La animación es un bucle suave y sutil.
 * @returns Un elemento SVG animado.
 */
export default function Guirnaldas() {
  const guirnaldaVariants: Variants = {
    initial: { rotate: 0, y: -5 },
    animate: {
      rotate: [0, 1, -1, 1, 0],
      y: [-5, 0, -5],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // Corregido: 'mirror' no es un valor válido, 'reverse' sí.
      },
    },
  };

  return (
    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none z-10 overflow-hidden">
      <motion.svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        variants={guirnaldaVariants}
        initial="initial"
        animate="animate"
      >
        <path
          d="M0 50 C 180 120, 360 0, 540 50 C 720 120, 900 0, 1080 50 C 1260 120, 1440 0, 1440 50"
          fill="none"
          stroke="#e94560"
          strokeWidth="2"
        />
        <path
          d="M0 60 C 180 130, 360 10, 540 60 C 720 130, 900 10, 1080 60 C 1260 130, 1440 10, 1440 60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
      </motion.svg>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Podríamos añadir pequeños banderines chilenos al SVG que también se animen individualmente.
// - Hacer que la animación sea más reactiva al movimiento del mouse.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
