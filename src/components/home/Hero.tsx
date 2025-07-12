"use client"; // Directiva OBLIGATORIA para animaciones

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
      {/* Contenedor del logo con animación de entrada y efecto de brillo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        style={{
          filter: "drop-shadow(0px 0px 25px rgba(233, 69, 96, 0.4))",
        }}
      >
        <Image
          src="/images/logo-sonora-la-cuca.png"
          alt="Logo Sonora La Cuca"
          width={600}
          height={300}
          priority // Carga esta imagen primero
          className="w-auto h-auto max-w-[80vw] md:max-w-xl"
        />
      </motion.div>
    </section>
  );
}
