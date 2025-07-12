"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/config/site"; // Importamos los links desde el archivo de configuración

// Ícono de Spotify en formato SVG para rendimiento y escalabilidad.
const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.669 11.538c-.173.28-.535.373-.815.2-1.935-1.18-4.38-1.453-7.258-.797-.333.078-.65-.138-.728-.47-.078-.333.138-.65.47-.728 3.14-.72 5.865-.413 8.015 1.018.28.173.373.535.2 815zM4.463 9.48c-.235.313-.64.41-1.025.268-2.585-1.58-5.32-1.28-7.072.56-.313.145-.71-.045-.855-.358-.145-.313.045-.71.358-.855 2.133-1.045 5.225-1.378 8.16.59.395.145.54.64.282 1.025zm-1.18 2.09c-.28.347-.793.442-1.14.163-2.31-1.8-4.493-1.573-6.195.408-.347.28-.85.06-1.03-.287s-.06-.85.287-1.03c1.98-1.98 4.61-2.273 7.28.163.348.28.443.793.162 1.14z" />
  </svg>
);

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 p-4 md:p-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="z-10" aria-label="Ir a la página de inicio">
          <Image
            src="/images/logo-sonora-la-cuca.png"
            alt="Logo Sonora La Cuca"
            width={120}
            height={60}
            className="w-24 md:w-32"
            priority
          />
        </Link>

        <div className="hidden md:flex">
          <ul className="flex items-center space-x-8 bg-black bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <motion.div
                    className="text-white hover:text-brand-accent transition-colors duration-300 uppercase tracking-wider text-xs font-semibold"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <motion.a
          href="https://open.spotify.com" // Reemplazar con el link real
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escuchar a Sonora La Cuca en Spotify"
          className="z-10 bg-green-500 text-white font-bold py-2 px-4 rounded-full text-sm hidden md:flex items-center gap-2"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgb(34 197 94)" }}
          transition={{ duration: 0.3 }}
        >
          <SpotifyIcon className="h-4 w-4" />
          {/* Este span es para mejorar la UX sin depender solo del ícono */}
          <span>Spotify</span>
        </motion.a>
      </nav>
    </header>
  );
}
