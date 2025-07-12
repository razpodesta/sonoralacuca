"use client";

import WelcomeAudioPlayer from "@/components/audio/WelcomeAudioPlayer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} bg-brand-dark text-white font-sans antialiased flex flex-col min-h-screen`}
      >
        <Preloader />
        {/* Las guirnaldas ahora están comentadas para no sobrecargar el diseño, se pueden reactivar si se desea */}
        {/* <Guirnaldas /> */}
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <WelcomeAudioPlayer />
        <Footer />
      </body>
    </html>
  );
}
