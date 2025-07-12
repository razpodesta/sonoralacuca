import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/contact/ContactForm";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Sonora La Cuca. Contrataciones, prensa o simplemente para saludar. ¡Queremos saber de ti!",
};

export default function ContactoPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif-brand text-center mb-12">
          Ponte en Contacto
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Columna del Formulario */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Columna de Información Adicional */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-3">
                Contrataciones
              </h3>
              <p className="text-gray-300">
                Para eventos públicos, privados y festivales, escríbenos a:
              </p>
              <a
                href={`mailto:${siteConfig.contact.bookingEmail}`}
                className="text-lg font-semibold hover:underline"
              >
                {siteConfig.contact.bookingEmail}
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-3">
                Síguenos
              </h3>
              <p className="text-gray-300 mb-4">
                No te pierdas ninguna novedad en nuestras redes sociales:
              </p>
              <div className="flex items-center gap-5">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-7 h-7" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-7 h-7" />
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TikTokIcon className="w-7 h-7" />
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <YouTubeIcon className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir un mapa de Google Maps con la ubicación del estudio o un punto de referencia.
// - Crear un FAQ (Preguntas Frecuentes) para responder dudas comunes sobre contrataciones.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
