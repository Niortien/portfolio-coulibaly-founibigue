import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "LUNION-LAB",
    role: "Stage Développeur Web",
    location: "Abidjan, Cocody",
    duration: "6 mois",
    period: "2025-2026",
    tasks: [
      "Réalisation et conception de l'application web e-commerce LUXTIME avec Next.js et Tailwind CSS",
      "Participation à la refonte du site CHIKEN-NATION de l'entreprise avec Next.js, React.js et Tailwind CSS",
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "E-commerce"],
    projects: [
      {
        name: "LUXTIME",
        description: "Application web e-commerce moderne et responsive",
        link: "#",
      },
      {
        name: "CHIKEN-NATION",
        description: "Refonte complète du site web de l'entreprise",
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
      "Installation de la fibre des caméras du PCA",
      "Conception d'une application web avec la méthode MERISE",
      "Développement d'une application web avec WinDev",
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
  return (
    <section id="experience" className="py-16 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Expérience <span className="gradient-text font-lora">Professionnelle</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Mon parcours professionnel et les projets sur lesquels j&apos;ai travaillé
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl lg:text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base lg:text-lg font-semibold text-foreground">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-base lg:text-lg">Missions et réalisations :</h4>
                    <ul className="space-y-2 text-sm lg:text-base">
                      {exp.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-muted-foreground font-lora">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.projects && exp.projects.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-base lg:text-lg">Projets réalisés :</h4>
                      <div className="space-y-3">
                        {exp.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <h5 className="font-semibold text-primary mb-1">{project.name}</h5>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-3 text-base lg:text-lg">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs lg:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
