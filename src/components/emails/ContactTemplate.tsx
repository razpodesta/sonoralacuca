import * as React from "react";

/**
 * Propiedades para la plantilla del email de contacto.
 */
interface ContactTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Plantilla de React para el correo electrónico que se envía desde el formulario de contacto.
 * @param props - Datos del formulario.
 * @returns Un componente de email en formato HTML.
 */
export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div
    style={{
      fontFamily: "sans-serif",
      padding: "20px",
      backgroundColor: "#f4f4f4",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        Nuevo Mensaje de Contacto
      </h1>
      <h2 style={{ color: "#555" }}>Asunto: {subject}</h2>
      <p style={{ color: "#333", lineHeight: "1.6" }}>{message}</p>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ddd",
          margin: "20px 0",
        }}
      />
      <p style={{ color: "#555" }}>
        <strong>De:</strong> {name}
        <br />
        <strong>Email:</strong>{" "}
        <a href={`mailto:${email}`} style={{ color: "#1a1a2e" }}>
          {email}
        </a>
      </p>
    </div>
  </div>
);

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir el logo de la banda en la cabecera del email.
// - Incluir más información del remitente, como la fecha y hora del envío.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
