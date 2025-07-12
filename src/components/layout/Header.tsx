"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import MainNavigation from "./MainNavigation";

/**
 * Componente de encabezado principal que se vuelve fijo en la parte superior
 * de la pantalla cuando el usuario se desplaza hacia abajo.
 * @returns El componente Header completo.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se vuelve fijo después de desplazarse más de 50 píxeles.
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      w-full transition-all duration-300 z-30
      ${isScrolled ? "fixed top-0 shadow-lg" : "absolute top-0"}
    `}
    >
      <TopBar />
      <MainNavigation />
    </header>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Hacer que el Header se oculte al hacer scroll hacia abajo y aparezca al hacer scroll hacia arriba.
// - Personalizar la animación de aparición del Header fijo.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
