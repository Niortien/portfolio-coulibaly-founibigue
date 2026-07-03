"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Lunion-Lab",
    role: "Développeur Full-Stack",
    location: "Abidjan, Cocody",
    duration: "CDI",
    period: "Août 2025 — Aujourd'hui",
    tasks: [
      "Développement d'APIs REST robustes avec Nest.js pour la gestion des données de multiples modules métiers",
      "Réalisation du site officiel de l'entreprise avec Next.js et React.js, optimisé SEO (score Lighthouse > 90)",
      "Configuration et intégration de TPE (Terminal de Paiement Électronique) pour les transactions en ligne",
      "Développement et maintenance de 9+ applications web professionnelles pour des clients aux secteurs variés",
      "Modélisation de bases de données PostgreSQL et MongoDB selon les contraintes et besoins métiers",
      "Travail en équipe avec Git, participation aux code reviews et déploiement continu sur Vercel",
    ],
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    projects: [
      { name: "Turbo ERP", description: "Système de gestion intégré pour les entreprises", link: "https://admin-erp.turbodeliveryapp.com/analystics" },
      { name: "Turbo Finance", description: "Application de gestion financière et comptabilité", link: "#" },
      { name: "Chicken-Nation", description: "Site officiel et gestion des commandes", link: "https://www.chicken-nation.com/fr" },
      { name: "Lunion-Lab Website", description: "Site officiel de Lunion-Lab", link: "https://www.lunion-lab.com/" },
      { name: "Sidi Immobilier", description: "Plateforme immobilière pour Sidi Immobilier", link: "https://sidi.lunion-lab.com/fr" },
      { name: "Luxury Home Abidjan", description: "Site immobilier pour les logements de luxe", link: "https://lha.lunion-lab.com/" },
      { name: "Catholikia", description: "Application pour la communauté catholique", link: "https://catholikia.com/fr" },
      { name: "OSA FC", description: "Site officiel du club de football OSA FC", link: "https://osa-website-alpha.vercel.app/" },
      { name: "Paroisse St Sauveur", description: "Back-office de gestion paroissiale", link: "https://back-office-paroisse-st-sauveur-mis.vercel.app" },
      { name: "Meet Lunion", description: "Plateforme de visioconférence interne de Lunion-Lab", link: "https://meet.lunion-lab.com/" },
    ],
  },
  {
    company: "Siège de la SOTRA",
    role: "Stage Développeur Web",
    location: "Abidjan, Vridi",
    duration: "4 mois",
    period: "2024 — 2025",
    tasks: [
      "Installation de l'infrastructure réseau et fibre optique pour les caméras de surveillance du PCA",
      "Analyse des besoins métiers et conception d'une application de gestion avec la méthode MERISE (MCD, MLD, MPD)",
      "Développement de l'application de gestion interne avec WinDev et base de données SQL",
      "Tests fonctionnels, documentation technique et formation des utilisateurs sur le système développé",
    ],
    technologies: ["WinDev", "MERISE", "SQL"],
    projects: [
      { name: "Application de gestion SOTRA", description: "Système de gestion interne avec base de données", link: "#" },
    ],
  },
];

export const Experience = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={titleRef}
            className="mb-14 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">02 — Parcours</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mt-3">
              Expérience professionnelle
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mt-4 max-w-2xl">
              Développeur depuis 2022, avec une expérience professionnelle construite à travers stages et poste actuel en CDI chez Lunion-Lab.
            </p>
          </motion.div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-10">
                  {/* Period column */}
                  <div className="flex md:flex-col md:items-start items-center gap-3 md:gap-1">
                    <span className="font-mono text-sm text-foreground/90">{exp.period}</span>
                    <span className="text-xs text-muted-foreground font-body">{exp.duration}</span>
                  </div>

                  {/* Content */}
                  <div className="border-l-2 border-primary/30 pl-6 md:pl-8">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-foreground">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 mb-6">
                      <span className="text-primary font-medium text-sm">{exp.company}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>

                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mb-6">
                        <span className="eyebrow block mb-3">Projets réalisés</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {exp.projects.map((project, idx) => (
                            <a
                              key={idx}
                              href={project.link !== "#" ? project.link : undefined}
                              target={project.link !== "#" ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className={`flex items-center justify-between gap-2 py-1.5 border-b border-border/70 text-sm ${project.link !== "#" ? "hover:border-primary/50 cursor-pointer group" : ""}`}
                            >
                              <span className="text-foreground/85 group-hover:text-primary transition-colors">{project.name}</span>
                              {project.link !== "#" && (
                                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
