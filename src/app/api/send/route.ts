import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactTemplate } from '@/components/emails/ContactTemplate';

// 1. Inicialización Segura: Se instancia Resend usando la clave de API
//    desde las variables de entorno, no directamente en el código.
const resend = new Resend(process.env.RESEND_API_KEY);

// Se obtiene el email de destino desde las variables de entorno.
const toEmail = process.env.RESEND_TO_EMAIL;

/**
 * Maneja las peticiones POST para enviar un correo electrónico desde el formulario de contacto.
 * Esta es una API Route de Next.js que se ejecuta en el servidor.
 * @param request - El objeto de la petición HTTP que contiene los datos dinámicos del formulario.
 * @returns Una respuesta JSON estandarizada indicando el éxito o el fracaso de la operación.
 */
export async function POST(request: Request) {
  // Verificación de seguridad del servidor
  if (!toEmail || !process.env.RESEND_API_KEY) {
    console.error("Error de configuración del servidor: Las variables de entorno de Resend no están configuradas.");
    return NextResponse.json({ error: 'Error de configuración en el servidor. Contacte al administrador.' }, { status: 500 });
  }

  try {
    // 2. Obtención de Datos Dinámicos: Se extraen los datos del formulario enviado por el usuario.
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Validación de campos.
    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    // 3. Adaptación del envío de email con datos dinámicos y plantilla profesional.
    const { data, error } = await resend.emails.send({
      from: 'Sonora La Cuca Web <onboarding@resend.dev>',
      to: [toEmail],
      subject: `Nuevo Mensaje desde la Web: ${subject}`, // Asunto dinámico
      // SOLUCIÓN: Se pasa el componente React como un elemento JSX (<Componente />), no como una función.
      react: <ContactTemplate name={name} email={email} subject={subject} message={message} />,
      // Se provee una versión de texto plano como fallback para clientes de correo sin HTML.
      text: `Nuevo mensaje de ${name} (${email}).\nAsunto: ${subject}.\n\nMensaje: ${message}`
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: 'Error al enviar el correo a través del servicio.' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Ha ocurrido un error inesperado en el servidor.';
    console.error("Catch Block Server Error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Implementar validación de datos más robusta con una librería como Zod para asegurar que los
//   tipos y formatos de los datos (especialmente el email) sean correctos.
// - Añadir un sistema de "rate limiting" para prevenir el spam, limitando el número de envíos
//   desde una misma IP en un período de tiempo.
// - Integrar un sistema de logging más avanzado (ej. Sentry, Logtail) para monitorear errores
//   en producción de forma proactiva.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================