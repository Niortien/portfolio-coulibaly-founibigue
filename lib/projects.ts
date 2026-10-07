export type ProjectKind = "g" | "s";

export interface IndexedProject {
  name: string;
  sector: string;
  context: "Professionnel" | "Freelance" | "Stage" | "Formation";
  stack: string;
  url: string;
  /** g = gestion et back-office, s = sites et plateformes. */
  kind: ProjectKind;
}

/** Tous les projets livrés, dans l'ordre d'affichage de l'index. `url` vide = projet interne. */
export const PROJECTS: readonly IndexedProject[] = [
  { name: "Turbo ERP", sector: "ERP", context: "Professionnel", stack: "NestJS · Next.js · PostgreSQL", url: "https://admin-erp.turbodeliveryapp.com/analystics", kind: "g" },
  { name: "Turbo Finance", sector: "Finance", context: "Professionnel", stack: "NestJS · Next.js · PostgreSQL", url: "https://admin-erp.turbodeliveryapp.com/analystics", kind: "g" },
  { name: "Chicken-Nation", sector: "Restauration", context: "Professionnel", stack: "Next.js · NestJS · PostgreSQL", url: "https://www.chicken-nation.com/fr", kind: "s" },
  { name: "Sidi Immobilier", sector: "Immobilier", context: "Professionnel", stack: "Next.js · NestJS · PostgreSQL", url: "https://sidi.lunion-lab.com/fr", kind: "s" },
  { name: "Luxury Home Abidjan", sector: "Immobilier haut de gamme", context: "Professionnel", stack: "Next.js · NestJS · PostgreSQL", url: "https://luxuryhomeabidjan.com/", kind: "s" },
  { name: "Lunion-Lab Website", sector: "Site corporate", context: "Professionnel", stack: "Next.js · TypeScript · Tailwind", url: "https://www.lunion-lab.com/", kind: "s" },
  { name: "Catholikia", sector: "Plateforme communautaire", context: "Professionnel", stack: "Next.js · NestJS · MongoDB", url: "https://catholikia.com/fr", kind: "s" },
  { name: "OSA FC", sector: "Sport", context: "Professionnel", stack: "Next.js · Tailwind · API REST", url: "https://osa-website-alpha.vercel.app/", kind: "s" },
  { name: "Paroisse St Sauveur", sector: "Back-office associatif", context: "Professionnel", stack: "Next.js · NestJS · PostgreSQL", url: "https://paroisse-st-sauveur-mis-ricordieux.vercel.app/", kind: "g" },
  { name: "Dri Valé — Gestion boutique", sector: "Commerce", context: "Freelance", stack: "NestJS · Prisma · CQRS", url: "https://dri-vale.online", kind: "g" },
  { name: "Stock-Pro", sector: "Gestion de stock", context: "Freelance", stack: "Next.js · React · Vercel", url: "https://stock-pro-six.vercel.app/stock", kind: "g" },
  { name: "Biblio UPB", sector: "Éducation", context: "Freelance", stack: "NestJS · Next.js · Prisma", url: "https://univeriste-polytechnique-de-bingerville.vercel.app/", kind: "g" },
  { name: "Application SOTRA", sector: "Transport", context: "Stage", stack: "WinDev · SQL · MERISE", url: "", kind: "g" },
  { name: "Projets MERN Stack", sector: "Formation", context: "Formation", stack: "MongoDB · Express · React · Node", url: "", kind: "s" },
  { name: "LUXTIME", sector: "E-commerce", context: "Professionnel", stack: "Next.js · Tailwind · API REST", url: "", kind: "s" },
  { name: "Maintenance Pro — SATE", sector: "Flotte de véhicules", context: "Professionnel", stack: "NestJS · Prisma · PostgreSQL", url: "https://maintenance-indol.vercel.app/", kind: "g" },
  { name: "Gestion Hôtel", sector: "Hôtellerie", context: "Freelance", stack: "Next.js · Zustand · TanStack Query", url: "https://gestion-hotel-delta.vercel.app/dashboard", kind: "g" },
  { name: "Lunion Sécure Parcours", sector: "Sécurité privée · SaaS", context: "Professionnel", stack: "Next.js · NestJS · Flutter", url: "", kind: "g" },
  { name: "Ephrata", sector: "Établissement scolaire", context: "Freelance", stack: "Next.js · GSAP · Framer Motion", url: "https://site-ephrata.vercel.app/", kind: "s" },
  { name: "Salam", sector: "Lieu de culte", context: "Freelance", stack: "Next.js · API REST · Tailwind", url: "https://salam-taupe.vercel.app/", kind: "s" },
  { name: "Hôtel Poro — Korhogo", sector: "Hôtellerie", context: "Freelance", stack: "Next.js · TanStack Query · Zod", url: "https://hotel-korhogo.vercel.app/", kind: "s" },
];
