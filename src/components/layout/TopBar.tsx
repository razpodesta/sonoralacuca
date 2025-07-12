import { siteConfig } from "@/config/site";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

/**
 * Muestra la barra superior del sitio con información de contacto y redes sociales.
 * Es altamente personalizable a través del archivo de configuración del sitio.
 * @returns El componente de la barra superior.
 */
export default function TopBar() {
  return (
    <div className="bg-[#1e2d3b] text-gray-300 text-xs py-2 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Información de Contacto (Personalizable) */}
        <div>
          <a
            href={`mailto:${siteConfig.contact.bookingEmail}`}
            className="hover:text-white transition-colors"
          >
            {siteConfig.contact.bookingEmail}
          </a>
        </div>

        {/* Iconos de Redes Sociales (Personalizable) */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-white transition-colors"
          >
            <TikTokIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-white transition-colors"
          >
            <YouTubeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir selectores de idioma o de tema (claro/oscuro).
// - Mostrar un mensaje o promoción especial en esta barra.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
