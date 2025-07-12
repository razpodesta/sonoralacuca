import { blogData } from "@/config/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

/**
 * Obtiene los datos de una publicación específica de forma asíncrona.
 * También encuentra la publicación anterior y la siguiente para la navegación.
 * @param slug - El identificador URL de la publicación.
 * @returns Una promesa que resuelve a un objeto con la publicación actual, la anterior y la siguiente.
 */
async function getPostData(slug: string) {
  const postIndex = blogData.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return { post: null, prevPost: null, nextPost: null };
  }

  const post = blogData[postIndex];
  const prevPost = postIndex > 0 ? blogData[postIndex - 1] : null;
  const nextPost =
    postIndex < blogData.length - 1 ? blogData[postIndex + 1] : null;

  return { post, prevPost, nextPost };
}

/**
 * Genera los metadatos dinámicos para el SEO de la página del post.
 * @param params - Los parámetros de la ruta, que contienen el slug.
 * @returns Una promesa que resuelve al objeto de metadatos.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { post } = await getPostData(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

/**
 * La página de detalle para una única publicación del blog.
 * Es un Componente de Servidor Asíncrono.
 * @param params - Los parámetros de la ruta, que contienen el slug.
 * @returns El componente de la página de detalle del post.
 */
export default async function BlogPostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post, prevPost, nextPost } = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-serif-brand mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400">
              {post.publishDate} • por {post.author}
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={`Portada de ${post.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-invert prose-lg max-w-none prose-h2:font-serif-brand prose-h2:text-brand-accent prose-a:text-brand-accent hover:prose-a:text-red-400">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="text-left">
                <p className="text-sm text-gray-400">Anterior</p>
                <p className="font-bold hover:text-brand-accent transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="text-right">
                <p className="text-sm text-gray-400">Siguiente</p>
                <p className="font-bold hover:text-brand-accent transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Añadir botones para compartir en redes sociales (Facebook, Twitter, WhatsApp).
// - Usar un paquete de syntax highlighting si el blog va a contener bloques de código.
// - Migrar el contenido de Markdown a MDX para permitir componentes interactivos dentro de los posts.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
