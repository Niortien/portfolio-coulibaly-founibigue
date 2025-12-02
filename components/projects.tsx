import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LUXTIME - E-commerce",
    description:
      "Application web e-commerce complète avec gestion de produits, panier d'achat, et système de paiement. Interface moderne et responsive.",
    technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce", "API"],
    image: "🛒",
    link: "https://luxtime-example.com",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "CHIKEN-NATION",
    description:
      "Refonte complète du site web d'entreprise avec amélioration de l'expérience utilisateur, optimisation des performances et design moderne.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "SEO"],
    image: "🍗",
    link: "https://chiken-nation-example.com",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Application SOTRA",
    description:
      "Système de gestion interne avec base de données SQL, conçu selon la méthode MERISE. Gestion complète des opérations et du personnel.",
    technologies: ["WinDev", "SQL", "MERISE", "Base de données"],
    image: "🚌",
    link: "#",
    type: "Professionnel",
  },
  {
    title: "Projets MERN Stack",
    description:
      "Développement d'applications full-stack utilisant MongoDB, Express.js, React.js et Node.js. APIs RESTful et interfaces utilisateur dynamiques.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "⚡",
    link: "https://your-mern-project.com",
    github: "https://github.com/your-username/mern-project",
    type: "Personnel",
  },
  {
    title: "Applications Nest.js",
    description:
      "Développement d'APIs backend avec Nest.js et MongoDB. Architecture modulaire et scalable avec authentification JWT.",
    technologies: ["Nest.js", "MongoDB", "TypeScript", "JWT"],
    image: "🔒",
    link: "https://your-nestjs-app.com",
    github: "https://github.com/your-username/nestjs-api",
    type: "Personnel",
  },
  {
    title: "Projets Flutter",
    description:
      "Applications mobiles cross-platform avec Flutter. Interfaces fluides et performantes pour iOS et Android.",
    technologies: ["Flutter", "Dart", "Mobile", "Cross-platform"],
    image: "📱",
    link: "https://your-flutter-app.com",
    github: "https://github.com/your-username/flutter-app",
    type: "Personnel",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets professionnels et personnels sur lesquels j&apos;ai travaillé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-32 lg:h-40 bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-6xl lg:text-7xl">
                  {project.image}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg font-lora lg:text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant={project.type === "Professionnel" ? "default" : "secondary"}>
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm font-lora lg:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap font-lora  gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.link && project.link !== "#" && (
                      <Button size="sm" variant="default" className="flex-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Voir en ligne
                        </a>
                      </Button>
                    )}
                    {project.github && project.github !== "#" && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="w-4 h-4" />
                          Code source
                        </a>
                      </Button>
                    )}
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
