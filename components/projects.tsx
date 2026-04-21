"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle2, TrendingUp } from "lucide-react";
import Image from "next/image";

const projects = [
  {
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
    accent: "#06B6D4",
  },
  {
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
    accent: "#10B981",
  },
  {
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
    accent: "#F97316",
  },
  {
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
    accent: "#6366F1",
  },
  {
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
    accent: "#F59E0B",
  },
  {
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
    accent: "#8B5CF6",
  },
  {
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
    accent: "#0EA5E9",
  },
  {
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
    accent: "#22C55E",
  },
  {
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
    accent: "#64748B",
  },
  {
    title: "Stock-Pro",
    description: "Application de gestion de stock moderne et intuitive. Solution complète pour le suivi des inventaires et la gestion des produits.",
    tasks: [
      "Développement d'un dashboard de suivi des stocks en temps réel",
      "Création de modules d'entrée/sortie de stock avec historique complet",
      "Génération de rapports et alertes automatiques de stock minimum",
    ],
    impact: "Optimisation de la gestion des inventaires et réduction des ruptures de stock pour les entreprises",
    technologies: ["Next.js", "React.js", "Vercel", "Dashboard", "Inventaire"],
    image: "/assets/image/tubo_system.png",
    link: "https://stock-pro-six.vercel.app/stock",
    github: "#",
    type: "Personnel",
    accent: "#14B8A6",
  },
  {
    title: "Biblio UPB — Plateforme Universitaire",
    description: "Plateforme numérique complète pour l'Université Polytechnique de Bingerville. Système multi-rôles (Admin, Étudiant, Professeur) couvrant la gestion documentaire, la scolarité, les notes et le transport.",
    tasks: [
      "Développement du backend Nest.js avec 10 modules métiers : documents (cours/TD/TP/examens), filières, niveaux, matières, scolarité, transport, notes, professeurs, utilisateurs et authentification JWT",
      "Création des 3 espaces dédiés côté Next.js : dashboard Admin, espace Étudiant (inscription, scolarité, notes, documents) et espace Professeur",
      "Mise en place d'un système de gestion documentaire permettant aux étudiants de consulter les cours classés par filière, niveau et matière",
    ],
    impact: "Centralisation de la vie universitaire sur une seule plateforme, réduisant la charge administrative et améliorant l'accès aux ressources pédagogiques",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "JWT", "TypeScript", "Prisma"],
    image: "/assets/image/upb.jpg",
    link: "https://univeriste-polytechnique-de-bingerville.vercel.app/",
    github: "#",
    type: "Personnel",
    accent: "#3B82F6",
  },
  {
    title: "Application SOTRA",
    description: "Système de gestion interne pour la SOTRA (Société de Transport Abidjanais). Conçu selon la méthode MERISE avec WinDev et SQL.",
    tasks: [
      "Analyse des besoins et modélisation avec la méthode MERISE (MCD, MLD, MPD)",
      "Conception du schéma de base de données SQL normalisé",
      "Développement de l'application de gestion métier avec WinDev",
    ],
    impact: "Digitalisation et optimisation des processus de gestion interne de la SOTRA",
    technologies: ["WinDev", "SQL", "MERISE", "Base de données"],
    image: "/assets/image/Logo_sotra_2009.png",
    link: "#",
    github: "#",
    type: "Professionnel",
    accent: "#94A3B8",
  },
  {
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
    accent: "#84CC16",
  },
  {
    title: "LUXTIME - E-commerce",
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
    accent: "#EC4899",
  },
  {
    title: "Maintenance Pro — SATE",
    description: "Système complet de gestion de maintenance de flotte de véhicules pour SATE. Application full-stack avec rôles admin et responsable de site, couvrant véhicules, techniciens, interventions et rapports.",
    tasks: [
      "Conception et développement du backend Nest.js avec Prisma ORM et PostgreSQL : modules véhicules, techniciens (6 spécialités), interventions, sites et rapports",
      "Développement du frontend Next.js multi-rôles (Admin, Responsable de site) avec dashboards de suivi en temps réel",
      "Implémentation du suivi complet des interventions : types de pannes (Mécanique, Électricité, Hydraulique…), priorités (Faible → Urgente), statuts et temps d'intervention",
    ],
    impact: "Digitalisation complète de la gestion de flotte : réduction des pannes non traitées, traçabilité totale des interventions et optimisation de la disponibilité des véhicules",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "Prisma", "JWT", "TypeScript"],
    image: "/assets/image/mainteance.png",
    link: "#",
    github: "#",
    type: "Professionnel",
    accent: "#10B981",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets professionnels et personnels livrés en production
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-card shadow-md hover:shadow-2xl transition-shadow duration-300"
                style={{
                  boxShadow: `0 0 0 0 ${project.accent}00`,
                }}
                whileFocus={{ outline: "none" }}
              >
                {/* Glow border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: `inset 0 0 0 1.5px ${project.accent}60`,
                  }}
                />

                {/* Image header */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.accent}40 0%, ${project.accent}15 50%, ${project.accent}05 100%)` }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20" style={{ background: project.accent }} />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-10" style={{ background: project.accent }} />

                  {/* White image frame */}
                  <motion.div
                    className="relative z-10 w-28 h-28 rounded-xl bg-card border border-border/50 flex items-center justify-center shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={112}
                      height={112}
                      className="w-20 h-20 object-contain"
                    />
                  </motion.div>

                  {/* Type badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <Badge
                      variant={project.type === "Professionnel" ? "default" : "secondary"}
                      className="text-xs font-medium shadow"
                    >
                      {project.type}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Title */}
                  <div>
                    <h3 className="font-bold text-base lg:text-lg font-lora group-hover:text-primary transition-colors duration-200 leading-snug mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-lora leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tasks */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Contributions</p>
                    <ul className="space-y-1.5">
                      {project.tasks.map((task, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground font-lora"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 + index * 0.05 }}
                        >
                          <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" style={{ color: project.accent }} />
                          <span>{task}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div
                    className="flex items-start gap-2 p-2.5 rounded-lg text-xs font-lora"
                    style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}30` }}
                  >
                    <TrendingUp className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: project.accent }} />
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold" style={{ color: project.accent }}>Impact : </span>
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px] px-2 py-0.5 font-lora">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-1">
                    {project.link && project.link !== "#" && (
                      <Button
                        size="sm"
                        className="flex-1 text-xs gap-1.5 h-8"
                        style={{ background: project.accent, color: "#fff" }}
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Voir en ligne
                        </a>
                      </Button>
                    )}
                    {project.github && project.github !== "#" && (
                      <Button size="sm" variant="outline" className="flex-1 text-xs gap-1.5 h-8" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </Button>
                    )}
                    {(!project.link || project.link === "#") && (!project.github || project.github === "#") && (
                      <div className="flex-1 flex items-center justify-center text-xs text-muted-foreground py-1">
                        Projet interne
                      </div>
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
