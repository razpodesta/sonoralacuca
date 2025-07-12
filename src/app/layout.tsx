import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Guirnaldas from "@/components/decorations/Guirnaldas";
import WelcomeAudioPlayer from "@/components/audio/WelcomeAudioPlayer";
import Preloader from "@/components/layout/Preloader";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

/**
 * Metadatos estáticos para el sitio. Sirve como plantilla y valores por defecto.
 * Las páginas pueden sobreescribir o extender estos metadatos.
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Sonora La Cuca",
    default: "Sonora La Cuca - Sitio Web Oficial",
  },
  description:
    "El sitio oficial de la banda Sonora La Cuca. Descubre nuestra música, próximas fechas, biografía y más.",
};

/**
 * El layout raíz de la aplicación, como Componente de Servidor puro.
 * Define la estructura HTML principal y envuelve el contenido de la página
 * en el componente de cliente PageTransition para las animaciones.
 * @param children - El contenido de la página actual.
 * @returns La estructura HTML completa del sitio.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} bg-brand-dark text-white font-sans antialiased flex flex-col min-h-screen`}
      >
        <Preloader />
        <Guirnaldas />
        <Header />
        {/* Envolvemos el contenido en el componente de cliente para las animaciones */}
        <main className="flex-grow flex">
          <PageTransition>{children}</PageTransition>
        </main>
        <WelcomeAudioPlayer />
        <Footer />
      </body>
    </html>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Crear un sitemap dinámico para mejorar el rastreo de los motores de búsqueda.
// - Implementar un sistema de cookies con un banner de consentimiento para cumplir con GDPR.
// - Añadir datos estructurados (Schema.org) para optimizar el SEO de conciertos y discografía.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
