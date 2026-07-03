"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    code: "ERP",
    title: "Turbo ERP",
    description: "Système de gestion intégré (ERP) pour les entreprises. Centralise les opérations, ressources humaines et processus métiers en une seule plateforme.",
    tasks: [
      "Développement de modules ERP : RH, finances, logistique et reporting analytique",
      "Conception d'APIs REST robustes avec Nest.js et PostgreSQL",
      "Intégration d'un tableau de bord analytique avec visualisation de données en temps réel",
    ],
    impact: "Centralisation des données entreprise et réduction du temps de traitement des opérations internes",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB"],
    image: "/assets/image/turbo.png",
    link: "https://admin-erp.turbodeliveryapp.com/analystics",
    github: "#",
    type: "Professionnel",
    accent: "#24365E",
  },
  {
    code: "FINANCE",
    title: "Turbo Finance",
    description: "Application de gestion financière et comptabilité d'entreprise. Module financier intégré avec suivi des transactions et rapports comptables.",
    tasks: [
      "Développement des modules de comptabilité et suivi des transactions financières",
      "Création de tableaux de bord financiers avec indicateurs clés (KPIs)",
      "Intégration avec le système ERP principal via des APIs sécurisées",
    ],
    impact: "Traçabilité complète des flux financiers et automatisation des rapports comptables",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST"],
    image: "/assets/image/turbo.png",
    link: "https://admin-erp.turbodeliveryapp.com/analystics",
    github: "#",
    type: "Professionnel",
    accent: "#1F6E5C",
  },
  {
    code: "RESTAURATION",
    title: "Chicken-Nation",
    description: "Site officiel et application web de gestion de commandes pour la chaîne de restauration rapide Chicken-Nation.",
    tasks: [
      "Développement du site vitrine et du système de commande en ligne",
      "Création d'un back-office de gestion des commandes en temps réel",
      "Optimisation UI/UX et responsive design pour mobile et desktop",
    ],
    impact: "Digitalisation complète du processus de commande et amélioration de l'expérience client en ligne",
    technologies: ["Next.js", "React.js", "Nest.js", "PostgreSQL", "API REST"],
    image: "/assets/image/logo_chiken.png",
    link: "https://www.chicken-nation.com/fr",
    github: "#",
    type: "Professionnel",
    accent: "#B54B1F",
  },
  {
    code: "IMMOBILIER",
    title: "Sidi Immobilier",
    description: "Plateforme immobilière complète pour Sidi Immobilier. Solution numérique de gestion et de présentation des biens immobiliers.",
    tasks: [
      "Développement d'un système de listing et de recherche avancée de biens",
      "Conception de fiches détaillées avec galeries d'images et formulaires de contact",
      "Interface d'administration pour la gestion des annonces immobilières",
    ],
    impact: "Digitalisation du processus de vente immobilière et réduction des délais de traitement des demandes clients",
    technologies: ["Next.js", "React.js", "Nest.js", "PostgreSQL", "API REST"],
    image: "/assets/image/sidi_logo.png",
    link: "https://sidi.lunion-lab.com/fr",
    github: "#",
    type: "Professionnel",
    accent: "#5B4636",
  },
  {
    code: "IMMOBILIER",
    title: "Luxury Home Abidjan",
    description: "Site immobilier haut de gamme pour les logements de luxe à Abidjan. Plateforme élégante dédiée aux biens immobiliers premium.",
    tasks: [
      "Design UI/UX haut de gamme avec animations et transitions soignées",
      "Développement d'un catalogue de propriétés avec filtres et galeries photos",
      "Optimisation des performances (Lighthouse > 90) et du référencement SEO",
    ],
    impact: "Présence digitale premium attirant une clientèle haut de gamme et augmentant les leads qualifiés",
    technologies: ["Next.js", "React.js", "Nest.js", "PostgreSQL", "API REST"],
    image: "/assets/image/lhaa_logo.png",
    link: "https://lha.lunion-lab.com/",
    github: "#",
    type: "Professionnel",
    accent: "#8A6D3B",
  },
  {
    code: "VITRINE",
    title: "Lunion-Lab Website",
    description: "Site officiel corporate de Lunion-Lab, présentant l'entreprise, ses services et l'ensemble de ses réalisations.",
    tasks: [
      "Conception et développement complet du site vitrine de l'entreprise",
      "Intégration des sections services, portfolio et formulaire de contact",
      "Optimisation SEO et performance pour une meilleure visibilité en ligne",
    ],
    impact: "Renforcement de l'image de marque et augmentation de la visibilité digitale de l'entreprise",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Vercel"],
    image: "/assets/image/logo_lunion.png",
    link: "https://www.lunion-lab.com/",
    github: "#",
    type: "Professionnel",
    accent: "#3D4F7D",
  },
  {
    code: "ASSOCIATIF",
    title: "Catholikia",
    description: "Application numérique complète pour la communauté catholique. Plateforme centralisant les activités, services et événements paroissiaux.",
    tasks: [
      "Développement d'un espace communautaire avec gestion des membres",
      "Création d'un système de gestion des événements et annonces paroissiales",
      "Mise en place d'un back-office d'administration complet et intuitif",
    ],
    impact: "Digitalisation des services paroissiaux, améliorant la communication et l'engagement communautaire",
    technologies: ["Next.js", "React.js", "Nest.js", "PostgreSQL", "MongoDB"],
    image: "/assets/image/catholikia.png",
    link: "https://catholikia.com/fr",
    github: "#",
    type: "Professionnel",
    accent: "#2C5F7C",
  },
  {
    code: "SPORT",
    title: "OSA FC",
    description: "Site officiel du club de football OSA FC. Plateforme sportive moderne présentant le club, les matchs et les actualités.",
    tasks: [
      "Développement des sections équipe, actualités et calendrier des matchs",
      "Design responsive optimisé pour tous les appareils",
      "Intégration d'un système de gestion des événements et résultats sportifs",
    ],
    impact: "Présence digitale officielle renforçant l'image du club et l'engagement des supporters",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "API REST"],
    image: "/assets/image/osa_logo.png",
    link: "https://osa-website-alpha.vercel.app/",
    github: "#",
    type: "Professionnel",
    accent: "#2F6B3A",
  },
  {
    code: "ASSOCIATIF",
    title: "Paroisse St Sauveur",
    description: "Back-office de gestion administrative pour la paroisse Saint Sauveur. Système complet de gestion des activités et services paroissiaux.",
    tasks: [
      "Développement d'un système de gestion des membres et groupes paroissiaux",
      "Création de modules de suivi des activités et événements",
      "Interface intuitive adaptée au personnel non-technique",
    ],
    impact: "Automatisation de la gestion administrative, réduisant significativement la charge de travail du personnel",
    technologies: ["Next.js", "React.js", "Nest.js", "PostgreSQL", "Back-office"],
    image: "/assets/image/logo-paroise.png",
    link: "https://back-office-paroisse-st-sauveur-mis.vercel.app",
    github: "#",
    type: "Professionnel",
    accent: "#64645C",
  },
  {
    code: "COMMERCE",
    title: "Dri Valé — Gestion Boutique",
    description: "Système complet de gestion pour une boutique de vêtements à Yopougon, Abidjan : caisse, stock, entrées/sorties et vitrine en ligne unifiés.",
    tasks: [
      "Backend Nest.js (CQRS, Prisma, PostgreSQL) : produits, variantes, stock, caisse, entrées/sorties, boutiques et rapports",
      "Frontend Next.js avec espace vitrine (catalogue, lookbook, marque) et back-office multi-boutiques (caisse, stock, promotions, activité)",
      "Intégration Cloudinary pour la gestion des médias produits et génération de rapports",
    ],
    impact: "Caisse, stock en temps réel et vitrine en ligne réunis sur une seule plateforme pour la boutique",
    technologies: ["Nest.js", "Next.js", "Prisma", "PostgreSQL", "CQRS", "TypeScript"],
    image: "/assets/image/drivale_logo.jpeg",
    link: "https://dri-vale.online",
    github: "#",
    type: "Personnel",
    accent: "#8A5A34",
  },
  {
    code: "STOCK",
    title: "Stock-Pro",
    description: "Application de gestion de stock moderne et intuitive. Solution complète pour le suivi des inventaires et la gestion des produits.",
    tasks: [
      "Développement d'un dashboard de suivi des stocks en temps réel",
      "Création de modules d'entrée/sortie de stock avec historique complet",
      "Génération de rapports et alertes automatiques de stock minimum",
    ],
    impact: "Optimisation de la gestion des inventaires et réduction des ruptures de stock pour les entreprises",
    technologies: ["Next.js", "React.js", "Vercel", "Dashboard", "Inventaire"],
    image: "/assets/image/stock.jpg",
    link: "https://stock-pro-six.vercel.app/stock",
    github: "#",
    type: "Personnel",
    accent: "#3E7A6D",
  },
  {
    code: "ÉDUCATION",
    title: "Biblio UPB — Plateforme Universitaire",
    description: "Plateforme numérique complète pour l'Université Polytechnique de Bingerville. Système multi-rôles (Admin, Étudiant, Professeur) couvrant la gestion documentaire, la scolarité, les notes et le transport.",
    tasks: [
      "Backend Nest.js avec 10 modules métiers : documents, filières, niveaux, matières, scolarité, transport, notes, professeurs, utilisateurs et authentification JWT",
      "3 espaces dédiés côté Next.js : dashboard Admin, espace Étudiant et espace Professeur",
      "Système de gestion documentaire classé par filière, niveau et matière",
    ],
    impact: "Centralisation de la vie universitaire, réduisant la charge administrative et améliorant l'accès aux ressources pédagogiques",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "JWT", "TypeScript", "Prisma"],
    image: "/assets/image/upb.jpg",
    link: "https://univeriste-polytechnique-de-bingerville.vercel.app/",
    github: "#",
    type: "Personnel",
    accent: "#2E4A7D",
  },
  {
    code: "TRANSPORT",
    title: "Application SOTRA",
    description: "Système de gestion interne pour la SOTRA (Société de Transport Abidjanais). Conçu selon la méthode MERISE avec WinDev et SQL.",
    tasks: [
      "Analyse des besoins et modélisation avec la méthode MERISE (MCD, MLD, MPD)",
      "Conception du schéma de base de données SQL normalisé",
      "Développement de l'application de gestion métier avec WinDev",
    ],
    impact: "Digitalisation et optimisation des processus de gestion interne de la SOTRA",
    technologies: ["WinDev", "SQL", "MERISE"],
    image: "/assets/image/Logo_sotra_2009.png",
    link: "#",
    github: "#",
    type: "Professionnel",
    accent: "#5C6169",
  },
  {
    code: "FORMATION",
    title: "Projets MERN Stack",
    description: "Ensemble d'applications full-stack développées avec le stack MERN. APIs RESTful et interfaces utilisateur dynamiques.",
    tasks: [
      "Développement d'APIs RESTful complètes avec Express.js et Node.js",
      "Conception d'interfaces utilisateur réactives avec React.js",
      "Gestion et modélisation des données avec MongoDB",
    ],
    impact: "Maîtrise complète du développement full-stack JavaScript end-to-end",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    image: "/assets/image/logo_lunion.png",
    link: "#",
    github: "#",
    type: "Personnel",
    accent: "#4B6B2C",
  },
  {
    code: "E-COMMERCE",
    title: "LUXTIME",
    description: "Application web e-commerce complète avec gestion de produits, panier d'achat et système de paiement intégré.",
    tasks: [
      "Conception et développement de l'interface produits et du panier d'achat",
      "Intégration de passerelles de paiement et gestion des commandes",
      "Optimisation des performances et du SEO pour maximiser la visibilité",
    ],
    impact: "Interface e-commerce moderne améliorant le taux de conversion et l'expérience d'achat en ligne",
    technologies: ["Next.js", "React", "Tailwind CSS", "API REST"],
    image: "/assets/image/logo_lunion.png",
    link: "#",
    github: "#",
    type: "Professionnel",
    accent: "#8C3B5E",
  },
  {
    code: "FLOTTE",
    title: "Maintenance Pro — SATE",
    description: "Système complet de gestion de maintenance de flotte de véhicules pour SATE. Application full-stack avec rôles admin et responsable de site, couvrant véhicules, techniciens, interventions et rapports.",
    tasks: [
      "Backend Nest.js avec Prisma ORM et PostgreSQL : véhicules, techniciens (6 spécialités), interventions, sites et rapports",
      "Frontend Next.js multi-rôles (Admin, Responsable de site) avec dashboards de suivi en temps réel",
      "Suivi complet des interventions : types de pannes, priorités, statuts et temps d'intervention",
    ],
    impact: "Réduction des pannes non traitées, traçabilité totale des interventions et optimisation de la disponibilité des véhicules",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "Prisma", "JWT", "TypeScript"],
    image: "/assets/image/mainteance.png",
    link: "https://maintenance-indol.vercel.app/",
    github: "#",
    type: "Professionnel",
    accent: "#1F6E5C",
  },
  {
    code: "HOTELLERIE",
    title: "Gestion Hôtel",
    description: "Système de gestion hôtelière complet : chambres, réservations, clients et suivi financier pour un établissement.",
    tasks: [
      "Dashboard temps réel et gestion des chambres avec planning de réservations en drag & drop",
      "Gestion des clients, des dépenses et génération de rapports exportables en PDF",
      "État global avec Zustand et synchronisation des données via TanStack Query",
    ],
    impact: "Centralisation de la gestion des réservations, des chambres et des finances de l'hôtel sur une seule interface",
    technologies: ["Next.js", "React", "Zustand", "TanStack Query", "React Hook Form", "Zod", "TypeScript"],
    image: "/assets/image/hotel.png",
    link: "https://gestion-hotel-delta.vercel.app/dashboard",
    github: "#",
    type: "Personnel",
    accent: "#6B4A9C",
  },
  {
    code: "SECU",
    title: "Lunion Sécure Parcours",
    description: "Plateforme de gestion du personnel pour les entreprises de sécurité privée : back-office web, SaaS multi-tenant et application desktop pour le suivi des agents.",
    tasks: [
      "Back-office Next.js pour la gestion du personnel, des présences, des demandes et de la messagerie interne",
      "Version SaaS multi-tenant avec espace public et dashboard protégé (architecture multilingue)",
      "Application desktop Windows pour la supervision du back-office sur site",
    ],
    impact: "Centralisation du suivi des agents de sécurité (présences, demandes, communication) sur une seule plateforme",
    technologies: ["Next.js", "Nest.js", "TypeScript", "SaaS", "Multi-tenant"],
    image: "/assets/image/logo_secure.png",
    link: "#",
    github: "#",
    type: "Professionnel",
    accent: "#7A3B3B",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-14 lg:mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">03 — Dossier de projets</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mt-3 mb-4">
              Systèmes livrés en production
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground">
              {projects.length} projets — plateformes de gestion, back-offices et sites livrés pour des entreprises, commerces et institutions.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="dossier-card flex flex-col"
                style={{ borderTopWidth: "3px", borderTopColor: project.accent }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 p-4 border-b border-border">
                  <div className="w-11 h-11 shrink-0 border border-border bg-muted flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={44}
                      height={44}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="eyebrow" style={{ color: project.accent }}>{project.code}</span>
                      <Badge variant={project.type === "Professionnel" ? "default" : "secondary"}>
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="font-display font-semibold text-base leading-snug mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-4 gap-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <span className="eyebrow block mb-2">Contributions</span>
                    <ul className="space-y-1.5">
                      {project.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                          <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: project.accent }}>→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pl-3 border-l-2 text-xs leading-relaxed" style={{ borderColor: project.accent }}>
                    <span className="font-mono text-[10px] tracking-wide uppercase" style={{ color: project.accent }}>Impact — </span>
                    <span className="text-muted-foreground">{project.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    {project.link && project.link !== "#" ? (
                      <Button size="sm" variant="outline" className="flex-1 gap-1.5" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          Voir en ligne
                        </a>
                      </Button>
                    ) : (
                      <div className="flex-1 flex items-center justify-center text-xs text-muted-foreground py-1.5 border border-dashed border-border">
                        Projet interne
                      </div>
                    )}
                    {project.github && project.github !== "#" && (
                      <Button size="sm" variant="ghost" className="gap-1.5" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Code source">
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
