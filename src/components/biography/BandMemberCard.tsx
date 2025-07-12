"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { BandMember } from "@/config/site";

/**
 * Tarjeta de presentación para un miembro de la banda.
 * @param {object} props - Propiedades del componente.
 * @param {BandMember} props.member - El objeto del miembro a mostrar.
 * @returns Un componente de tarjeta de miembro de banda animada.
 */
export default function BandMemberCard({ member }: { member: BandMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-accent/50 shadow-lg mb-4">
        <Image
          src={member.imageUrl}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover"
          sizes="192px"
        />
      </div>
      <h3 className="text-2xl font-serif-brand text-white">{member.name}</h3>
      <p className="text-brand-accent">{member.role}</p>
    </motion.div>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Al hacer clic, podría abrir un modal con una biografía más extensa del miembro.
// - Añadir enlaces a las redes sociales personales de cada integrante si las tuvieran.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================
