import { siteConfig } from "@/config/site";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

/**
 * Footer global del sitio. Muestra el copyright y los enlaces a redes sociales.
 * @returns El componente Footer.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/30 mt-16 py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Sonora La Cuca"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Sonora La Cuca"
            className="hover:text-white transition-colors"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de Sonora La Cuca"
            className="hover:text-white transition-colors"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube de Sonora La Cuca"
            className="hover:text-white transition-colors"
          >
            <YouTubeIcon className="w-6 h-6" />
          </a>
        </div>
        <p>© {currentYear} Sonora La Cuca. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Diseñado y Desarrollado por{" "}
          <a
            href="https://tu-sitio-web.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-white"
          >
            Tu Nombre o Agencia
          </a>
        </p>
      </div>
    </footer>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir un sitemap con enlaces a todas las páginas para mejorar el SEO.
// - Implementar un campo de suscripción a un newsletter.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
