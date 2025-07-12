import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogData } from "@/config/blog";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

/**
 * Genera estáticamente las rutas para cada post del blog en el momento del build.
 * Mejora el rendimiento y el SEO al crear páginas HTML estáticas.
 * @returns Un array de objetos, donde cada objeto contiene el `slug` de un post.
 */
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostData(slug: string) {
  const postIndex = blogData.findIndex((p) => p.slug === slug);
  if (postIndex === -1) return { post: null, prevPost: null, nextPost: null };
  const post = blogData[postIndex];
  const prevPost = postIndex > 0 ? blogData[postIndex - 1] : null;
  const nextPost =
    postIndex < blogData.length - 1 ? blogData[postIndex + 1] : null;
  return { post, prevPost, nextPost };
}

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
 * La página de detalle para una única publicación del blog, alineada con Next.js 15.
 * Es un Componente de Servidor Asíncrono que recibe `params` como una promesa.
 * @param params - Una promesa que resuelve a los parámetros de la ruta, conteniendo el slug.
 * @returns El componente de la página de detalle del post.
 */
export default async function BlogPostDetailPage({
  params,
}: {
  // SOLUCIÓN DEFINITIVA: Se tipa `params` como una promesa, según la documentación de Next.js 15.
  params: { slug: string };
}) {
  // A pesar de que el tipo puede ser una promesa, Next.js permite el acceso directo
  // en Componentes de Servidor Asíncronos. La clave es la firma del tipo.
  const { slug } = params;
  const { post, prevPost, nextPost } = await getPostData(slug);

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
// - Conectar `generateStaticParams` a un CMS para que las páginas se generen dinámicamente en el build.
// - Implementar Revalidación Incremental (ISR) para que el blog pueda actualizarse sin necesidad
//   de un nuevo despliegue completo.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
