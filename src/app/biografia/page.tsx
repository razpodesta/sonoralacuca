import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import BandMemberCard from "@/components/biography/BandMemberCard";

export const metadata: Metadata = {
  title: "Biografía",
  description:
    "Conoce la historia de la Sonora La Cuca, sus integrantes y su trayectoria musical.",
};

export default function BiografiaPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Sección de la Historia */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
            Nuestra Historia
          </h1>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              Aquí va el texto completo sobre la historia de Sonora La Cuca.
              Desde sus humildes comienzos en los barrios de Valparaíso, hasta
              convertirse en un referente de la cumbia chilena. Hablaremos de
              sus influencias, sus integrantes fundadores y cómo han
              evolucionado su sonido a lo largo de los años.
            </p>
            <p>
              Este es un párrafo de ejemplo. El contenido real deberá ser
              proporcionado para llenar esta sección con la biografía oficial de
              la banda.
            </p>
          </div>
        </section>

        {/* MEJORA IMPLEMENTADA: Sección de Integrantes */}
        <section>
          <h2 className="text-3xl md:text-5xl font-serif-brand text-center mb-12">
            Los Músicos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {siteConfig.bandMembers.map((member) => (
              <BandMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Implementar una línea de tiempo interactiva con los hitos más importantes de la banda.
// - Añadir una galería de fotos históricas dentro de la biografía.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
