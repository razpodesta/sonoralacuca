import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Press Kit (EPK)",
  description:
    "Recursos oficiales para prensa y promotores. Descarga nuestra biografía, logos y fotos en alta resolución.",
};

const DownloadButton = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    download
    className="inline-block bg-brand-accent text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105"
  >
    {label}
  </a>
);

/**
 * Página de Press Kit (EPK) que centraliza todos los recursos de prensa de la banda.
 * Está diseñada para ser clara, concisa y funcional para profesionales de la industria.
 * @returns La página de Press Kit.
 */
export default function PressKitPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
          Press Kit (EPK)
        </h1>
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-brand-accent pl-4">
              Biografía Oficial
            </h2>
            <p className="text-lg leading-relaxed">
              Sonora La Cuca es una agrupación musical chilena que ha
              revitalizado la escena de la cumbia con su energía contagiosa y un
              sonido que fusiona lo clásico y lo moderno. Nacidos en el corazón
              de Valparaíso, la banda captura la esencia de la fiesta popular
              chilena, llevando alegría y baile a cada rincón del país.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-brand-accent pl-4">
              Recursos Descargables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif-brand mb-4">
                  Biografía Completa
                </h3>
                <DownloadButton
                  href="/downloads/sonora-la-cuca-bio.pdf"
                  label="Descargar PDF"
                />
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif-brand mb-4">
                  Fotos de Prensa
                </h3>
                <DownloadButton
                  href="/downloads/sonora-la-cuca-fotos-alta.zip"
                  label="Descargar ZIP"
                />
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif-brand mb-4">
                  Logos Oficiales
                </h3>
                <DownloadButton
                  href="/downloads/sonora-la-cuca-logo.zip"
                  label="Descargar ZIP"
                />
              </div>
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-brand-accent pl-4 inline-block">
              Contacto de Prensa
            </h2>
            <p className="text-lg mt-4">
              Para entrevistas, colaboraciones y consultas de medios, por favor
              contactar a:
            </p>
            <a
              href={`mailto:${siteConfig.contact.pressEmail}`}
              className="text-2xl font-bold text-brand-accent hover:underline"
            >
              {siteConfig.contact.pressEmail}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir un rider técnico descargable en formato PDF.
// - Incrustar un par de videos destacados de YouTube directamente en esta página.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
