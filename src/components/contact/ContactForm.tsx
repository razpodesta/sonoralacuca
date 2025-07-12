"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Formulario de contacto interactivo que envía los datos a una API interna.
 * Maneja los estados de envío, éxito y error.
 * @returns Un componente de formulario de contacto.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Algo salió mal.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Error desconocido."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="text-center p-8 bg-green-500/20 rounded-lg">
        <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
        <p className="text-gray-300">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="name"
          type="text"
          placeholder="Tu Nombre"
          required
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Tu Correo Electrónico"
          required
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none"
        />
      </div>
      <input
        name="subject"
        type="text"
        placeholder="Asunto"
        required
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tu Mensaje..."
        rows={6}
        required
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none"
      ></textarea>
      <div className="text-center">
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-accent text-white font-bold py-3 px-8 rounded-full transition-colors disabled:bg-gray-500"
        >
          {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
        </motion.button>
        {status === "error" && (
          <p className="text-red-500 mt-4">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir validación de campos más avanzada (ej. con la librería Zod).
// - Proteger el formulario contra spam con un servicio como Google reCAPTCHA.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
