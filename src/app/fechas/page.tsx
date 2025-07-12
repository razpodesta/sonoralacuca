import type { Metadata } from "next";
import { tourData } from "@/config/tour";
import EventCard from "@/components/tour/EventCard";

export const metadata: Metadata = {
  title: "Fechas y Gira",
  description:
    "Entérate de nuestros próximos conciertos y revisa dónde hemos estado. ¡No te pierdas la oportunidad de vernos en vivo!",
};

export default function FechasPage() {
  const today = new Date();
  // Se pone la hora a cero para comparar solo las fechas
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = tourData
    .map((event) => ({ ...event, dateObj: new Date(event.date) }))
    .filter((event) => event.dateObj >= today)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const pastEvents = tourData
    .map((event) => ({ ...event, dateObj: new Date(event.date) }))
    .filter((event) => event.dateObj < today)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
          Fechas de la Gira
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Sección de Próximos Conciertos */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-brand-accent pl-4">
              Próximos Conciertos
            </h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.date + event.venue}
                    date={event.dateObj}
                    city={event.city}
                    venue={event.venue}
                    ticketLink={event.ticketLink}
                    status={event.status}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No hay nuevas fechas anunciadas. ¡Vuelve pronto!
              </p>
            )}
          </section>

          {/* Sección de Fechas Pasadas */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-gray-600 pl-4">
              Fechas Pasadas
            </h2>
            {pastEvents.length > 0 ? (
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <EventCard
                    key={event.date + event.venue}
                    date={event.dateObj}
                    city={event.city}
                    venue={event.venue}
                    ticketLink={event.ticketLink}
                    status="Pasado"
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                Aún no hemos iniciado nuestra gira.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir un botón para que los usuarios puedan cambiar entre una vista de "lista" y una de "calendario".
// - Integrar un filtro por país o ciudad si la banda empieza a hacer giras internacionales.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
