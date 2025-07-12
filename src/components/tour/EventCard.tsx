"use client";

import { motion } from "framer-motion";
import { MapPinIcon, TicketIcon } from "@/components/icons/TourIcons";

/**
 * Propiedades para el componente EventCard.
 */
interface EventCardProps {
  date: Date;
  city: string;
  venue: string;
  ticketLink: string | null;
  status: "Vendido" | "Disponible" | "Cancelado" | "Pasado";
}

/**
 * Determina el color de fondo para la etiqueta de estado del evento.
 * @param status - El estado actual del evento.
 * @returns Una cadena de clases de Tailwind CSS.
 */
const getStatusClass = (status: EventCardProps["status"]) => {
  switch (status) {
    case "Vendido":
      return "bg-red-500/80";
    case "Cancelado":
      return "bg-gray-500/80";
    case "Disponible":
      return "bg-green-500/80";
    default:
      return "bg-blue-500/80";
  }
};

/**
 * Muestra una tarjeta con la información de un único evento de la gira.
 * @param props - Las propiedades del evento (fecha, ciudad, lugar, etc.).
 * @returns Un componente que representa una tarjeta de evento.
 */
export default function EventCard({
  date,
  city,
  venue,
  ticketLink,
  status,
}: EventCardProps) {
  const isPast = status === "Pasado";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-lg border border-white/10 ${isPast ? "bg-gray-800/20 text-gray-500" : "bg-gray-900/50"}`}
    >
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="text-center flex-shrink-0 w-20">
          <p
            className={`font-bold text-3xl ${isPast ? "text-gray-600" : "text-brand-accent"}`}
          >
            {date.getDate()}
          </p>
          <p
            className={`text-sm uppercase ${isPast ? "text-gray-600" : "text-white"}`}
          >
            {date.toLocaleString("es-CL", { month: "short" })}
          </p>
        </div>
        <div>
          <h3
            className={`text-xl font-bold ${isPast ? "text-gray-400" : "text-white"}`}
          >
            {venue}
          </h3>
          <p className="flex items-center gap-2 text-sm">
            <MapPinIcon className="w-4 h-4 flex-shrink-0" />
            {city}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full text-white ${getStatusClass(status)}`}
        >
          {status}
        </span>
        {ticketLink && !isPast && (
          <a
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-colors"
          >
            <TicketIcon className="w-5 h-5" />
            <span>Tickets</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Al hacer clic en un evento, podría abrirse un modal con más detalles y un mapa.
// - Añadir botones para "Añadir a Google Calendar" o "Añadir a iCal".
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
