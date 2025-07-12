import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogData } from "@/config/blog";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function getPostData(slug: string) {
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { post } = getPostData(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post, prevPost, nextPost } = getPostData(params.slug);

  if (!post) notFound();

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

          {/* Mejora Implementada: Navegación entre Posts */}
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
