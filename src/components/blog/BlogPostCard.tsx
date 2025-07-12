"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { Post } from "@/config/blog";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Muestra una tarjeta de vista previa para una publicación del blog.
 * @param {object} props - Propiedades del componente.
 * @param {Post} props.post - El objeto de la publicación a mostrar.
 * @returns Un componente de tarjeta de publicación de blog.
 */
export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-gray-900/50 group rounded-lg overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-300 h-full flex flex-col">
          <div className="relative w-full aspect-video">
            <Image
              src={post.coverImage}
              alt={`Imagen de portada para ${post.title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-400 mb-2">
              {post.publishDate} • {post.author}
            </p>
            <h3 className="text-2xl font-serif-brand text-white mb-3 group-hover:text-brand-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-300 leading-relaxed flex-grow">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Mostrar un tiempo de lectura estimado (ej. "Lectura de 5 min").
// - Añadir animaciones hover más complejas a los elementos internos de la tarjeta.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
