"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "LUNION-LAB",
    role: "Stage Développeur Web",
    location: "Abidjan, Cocody",
    duration: "6 mois",
    period: "2025-2026",
    tasks: [
      "Développement d'APIs REST robustes avec Nest.js pour la gestion des données de multiples modules métiers",
      "Réalisation du site officiel de l'entreprise avec Next.js et React.js, optimisé SEO (score Lighthouse > 90)",
      "Configuration et intégration de TPE (Terminal de Paiement Électronique) pour les transactions en ligne",
      "Développement et maintenance de 9+ applications web professionnelles pour des clients aux secteurs variés",
      "Modélisation de bases de données PostgreSQL et MongoDB selon les contraintes et besoins métiers",
      "Travail en équipe avec Git, participation aux code reviews et déploiement continu sur Vercel",
    ],
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST","MongoDB","Express.js"],
    projects: [
      {
        name: "Turbo ERP",
        description: "Système de gestion intégré pour les entreprises",
        link: "https://admin-erp.turbodeliveryapp.com/analystics",
      },
      {
        name: "Turbo Finance",
        description: "Application de gestion financière et comptabilité",
        link: "#",
      },
      {
        name: "Chicken-Nation",
        description: "Site officiel de du fast food et l'application de gestion web de commandes de Chicken-Nation",
        link: "#",
      },
      {
        name: "Lunion-Lab-Website",
        description: "Site officiel de Lunion-Lab",
        link: "https://www.lunion-lab.com/",
      },
      {
        name: "Sidi Immobilier",
        description: "Plateforme immobilière pour Sidi Immobilier",
        link: "https://sidi.lunion-lab.com/fr",
      },
      {
        name: "Luxury Home Abidjan",
        description: "Site immobilier pour les logements de luxe à Abidjan",
        link: "https://lha.lunion-lab.com/",
      },
      {
        name: "Catholikia",
        description: "Application pour la communauté catholique",
        link: "#",
      },
      {
        name: "OSA FC",
        description: "Site officiel du club de football OSA FC",
        link: "#",
      },
      {
        name: "Paroisse St Sauveur",
        description: "Site web pour la paroisse Saint Sauveur",
        link: "#",
      },
    ],
  },
  {
    company: "SIEGE DE LA SOTRA",
    role: "Stage Développeur Web",
    location: "Abidjan, Vridi",
    duration: "4 mois",
    period: "2024-2025",
    tasks: [
      "Installation de l'infrastructure réseau et fibre optique pour les caméras de surveillance du PCA",
      "Analyse des besoins métiers et conception d'une application de gestion avec la méthode MERISE (MCD, MLD, MPD)",
      "Développement de l'application de gestion interne avec WinDev et base de données SQL",
      "Tests fonctionnels, documentation technique et formation des utilisateurs sur le système développé",
    ],
    technologies: ["WinDev", "MERISE", "SQL", "Système de gestion"],
    projects: [
      {
        name: "Application de gestion SOTRA",
        description: "Système de gestion interne avec base de données",
        link: "#",
      },
    ],
  },
];

export const Experience = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 lg:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={titleRef}
            className="text-center mb-12 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 font-heading">
              Expérience <span className="gradient-text">Professionnelle</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Mon parcours professionnel et les projets sur lesquels j&apos;ai travaillé
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-accent/30 to-transparent" />

            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/30 z-10 mt-6" />

                  {/* Card — alternating sides on large screens */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}>
                    <motion.div
                      className="glass-card rounded-2xl overflow-hidden"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header accent bar */}
                      <div className="h-1 w-full bg-linear-to-r from-primary via-accent to-secondary" />

                      <div className="p-6 lg:p-8">
                        {/* Top row */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Briefcase className="w-4 h-4 text-primary shrink-0" />
                              <h3 className="text-lg lg:text-xl font-bold text-foreground font-heading">{exp.role}</h3>
                            </div>
                            <p className="text-primary font-semibold text-base font-heading">{exp.company}</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground font-body">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.duration} · {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Tasks */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3 font-heading">Missions</h4>
                          <ul className="space-y-2">
                            {exp.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Projects */}
                        {exp.projects && exp.projects.length > 0 && (
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3 font-heading">Projets réalisés</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {exp.projects.map((project, idx) => (
                                <div key={idx} className="rounded-xl bg-muted/30 border border-border/20 p-3 hover:border-primary/30 transition-colors">
                                  <div className="flex items-start justify-between gap-2">
                                    <p className="text-xs font-semibold text-primary font-body">{project.name}</p>
                                    {project.link !== "#" && (
                                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary transition-colors shrink-0" />
                                      </a>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-0.5 font-body">{project.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs font-body text-primary border-primary/40 bg-primary/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
