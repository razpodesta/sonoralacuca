"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Propiedades para personalizar el ChatWidget.
 */
interface ChatWidgetProps {
  avatarSrc: string;
  welcomeMessage: string;
}

/**
 * Un widget de chat flotante y personalizable.
 * @param {ChatWidgetProps} props - Propiedades para configurar el widget.
 * @returns El componente de widget de chat.
 */
export default function ChatWidget({
  avatarSrc,
  welcomeMessage,
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-2 p-4 bg-white text-black rounded-lg shadow-lg w-64"
          >
            <p>{welcomeMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white"
      >
        <Image
          src={avatarSrc}
          alt="Avatar de contacto"
          fill
          className="object-cover"
        />
      </motion.button>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Conectar esto a un servicio de chat real como Tawk.to, Crisp o Intercom.
// - Añadir un campo de texto para que el usuario pueda escribir directamente.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
