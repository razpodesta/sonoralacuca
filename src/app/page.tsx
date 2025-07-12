import Hero from "@/components/home/Hero";
import ChatWidget from "@/components/contact/ChatWidget";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChatWidget
        avatarSrc="/images/band/ana-gonzalez.jpg" // Usa la imagen de un miembro de la banda
        welcomeMessage="¡Hola! ¿Listo para bailar? Si tienes alguna consulta, déjanos un mensaje en la sección de contacto."
      />
      {/* Aquí es donde añadiríamos las demás secciones del home */}
      {/* <div className="h-screen bg-brand-dark"></div> */}
    </>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Construir y añadir los componentes para las demás secciones del home (próximas fechas, último lanzamiento, etc.).
// - Implementar "lazy loading" para las secciones que estén fuera de la vista inicial para mejorar el rendimiento.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
