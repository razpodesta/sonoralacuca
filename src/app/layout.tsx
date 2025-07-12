import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

// SEO Optimizado: Usamos el objeto metadata para definir una plantilla de título.
export const metadata: Metadata = {
  title: {
    template: "%s | Sonora La Cuca", // Cada página agregará su título aquí
    default: "Sonora La Cuca - Sitio Web Oficial", // Título para la página de inicio
  },
  description:
    "El sitio oficial de la banda Sonora La Cuca. Descubre nuestra música, próximas fechas, biografía y más.",
  // Aquí podemos añadir más metadatos para SEO y redes sociales en el futuro
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} bg-brand-dark text-white font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
