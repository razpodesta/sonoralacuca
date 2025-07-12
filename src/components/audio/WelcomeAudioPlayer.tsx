"use client";

import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Ícono de volumen para el control de audio.
 * @param props - Propiedades estándar de un SVG.
 * @returns Un componente SVG.
 */
const VolumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    />
  </svg>
);

/**
 * Reproductor de audio que intenta reproducir un snippet de bienvenida al cargar la página.
 * Si el autoplay es bloqueado por el navegador, muestra un botón para que el usuario inicie el audio manualmente.
 * @returns Un botón flotante para activar el audio si es necesario, o nada si el audio se reproduce automáticamente.
 */
export default function WelcomeAudioPlayer() {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/intro-snippet.mp3"],
      volume: 0.5,
      html5: true,
      onplayerror: () => {
        sound.once("unlock", () => {
          setShowPlayButton(false);
          sound.play();
        });
        setShowPlayButton(true);
      },
    });

    soundRef.current = sound;

    // Correcto: Intentar reproducir y dejar que onplayerror maneje el fallo.
    // El método play() retorna un ID (number), no una promesa.
    sound.play();

    return () => {
      sound.unload();
    };
  }, []);

  const handleManualPlay = () => {
    if (soundRef.current) {
      soundRef.current.play();
      setShowPlayButton(false);
    }
  };

  return (
    <AnimatePresence>
      {showPlayButton && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <button
            onClick={handleManualPlay}
            className="bg-brand-accent text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition-colors"
            aria-label="Activar sonido del sitio"
          >
            <VolumeIcon className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Implementar un control de volumen y un botón de silencio/desilencio más completo.
// - Convertir esto en un reproductor de música global que pueda cambiar de canción.
// - Guardar la preferencia del usuario (silencio o no) en cookies o localStorage.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
