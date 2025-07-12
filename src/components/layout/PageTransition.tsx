"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Componente de cliente que maneja las animaciones de transición entre páginas.
 * Usa AnimatePresence para detectar cambios de ruta y animar la entrada y salida de las páginas.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido de la página a animar.
 * @returns Un componente `main` animado.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex-grow"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Permitir que cada página defina su propia animación de transición a través de props.
// - Sincronizar esta animación con la del pre-loader para una transición aún más fluida.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
