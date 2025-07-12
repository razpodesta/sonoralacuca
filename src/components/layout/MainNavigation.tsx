"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";

/**
 * Renderiza la barra de navegación principal del sitio.
 * Resalta dinámicamente el enlace correspondiente a la ruta activa.
 * @returns El componente de navegación principal.
 */
export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/5 backdrop-blur-md">
      <ul className="container mx-auto flex justify-center items-center h-16">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link href={link.href}>
                <span
                  className={`
                  px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300
                  ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Implementar un menú desplegable para secciones con sub-páginas (ej. "Música > Álbumes").
// - Añadir un menú de hamburguesa para la vista en dispositivos móviles.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
