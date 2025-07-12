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

export const metadata: Metadata = {
  title: {
    template: "%s | Sonora La Cuca",
    default: "Sonora La Cuca - Sitio Web Oficial",
  },
  description:
    "El sitio oficial de la banda Sonora La Cuca. Descubre nuestra música, próximas fechas, biografía y más.",
};

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
        <main className="flex-grow flex">
          <PageTransition>{children}</PageTransition>
        </main>
        <WelcomeAudioPlayer />
        <Footer />
      </body>
    </html>
  );
}
