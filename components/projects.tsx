import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ProjectImage } from "@/components/project-image";

const projects = [
  {
    title: "LUXTIME - E-commerce",
    description:
      "Application web e-commerce complète avec gestion de produits, panier d'achat, et système de paiement. Interface moderne et responsive.",
    technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce", "API"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://luxtime-example.com",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "CHIKEN-NATION",
    description:
      "Refonte complète du site web d'entreprise avec amélioration de l'expérience utilisateur, optimisation des performances et design moderne.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "SEO"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://chiken-nation-example.com",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Application SOTRA",
    description:
      "Système de gestion interne avec base de données SQL, conçu selon la méthode MERISE. Gestion complète des opérations et du personnel.",
    technologies: ["WinDev", "SQL", "MERISE", "Base de données"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "#",
    type: "Professionnel",
  },
  {
    title: "Projets MERN Stack",
    description:
      "Développement d'applications full-stack utilisant MongoDB, Express.js, React.js et Node.js. APIs RESTful et interfaces utilisateur dynamiques.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://your-mern-project.com",
    github: "https://github.com/your-username/mern-project",
    type: "Personnel",
  },
  {
    title: "Applications Nest.js",
    description:
      "Développement d'APIs backend avec Nest.js et MongoDB. Architecture modulaire et scalable avec authentification JWT.",
    technologies: ["Nest.js", "MongoDB", "TypeScript", "JWT"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://your-nestjs-app.com",
    github: "https://github.com/your-username/nestjs-api",
    type: "Personnel",
  },
  {
    title: "Projets Flutter",
    description:
      "Applications mobiles cross-platform avec Flutter. Interfaces fluides et performantes pour iOS et Android.",
    technologies: ["Flutter", "Dart", "Mobile", "Cross-platform"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://your-flutter-app.com",
    github: "https://github.com/your-username/flutter-app",
    type: "Personnel",
  },
  {
    title: "Université Polytechnique de Bingerville",
    description:
      "Site officiel de l'université Polytechnique de Bingerville. Plateforme moderne et responsive pour présenter l'établissement et ses formations.",
    technologies: ["Next.js", "React.js", "Vercel", "Web Design", "Éducation"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://univeriste-polytechnique-de-bingerville.vercel.app/",
    github: "#",
    type: "Personnel",
  },
  {
    title: "Stock-Pro",
    description:
      "Application de gestion de stock complète. Solution moderne pour le suivi des inventaires, la gestion des produits et les opérations de stock.",
    technologies: ["Next.js", "React.js", "Vercel", "Gestion de stock", "Inventaire", "Dashboard"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://stock-pro-six.vercel.app/stock",
    github: "#",
    type: "Personnel",
  },
  {
    title: "Turbo ERP",
    description:
      "Système de gestion intégré (ERP) pour les entreprises. Solution complète pour la gestion des opérations, des ressources et des processus métiers.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://admin-erp.turbodeliveryapp.com/analystics",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Turbo Finance",
    description:
      "Application de gestion financière et comptabilité. Solution complète pour la gestion des finances, des comptes et des transactions.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://admin-erp.turbodeliveryapp.com/analystics",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Chicken-Nation",
    description:
      "Site officiel du fast food et l'application de gestion web de commandes de Chicken-Nation. Plateforme complète pour la restauration.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://www.chicken-nation.com/fr",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Lunion-Lab-Website",
    description:
      "Site officiel de Lunion-Lab. Plateforme corporate présentant l'entreprise, ses services et ses réalisations.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://www.lunion-lab.com/",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Sidi Immobilier",
    description:
      "Plateforme immobilière pour Sidi Immobilier. Solution complète pour la gestion des biens immobiliers et des transactions.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://sidi.lunion-lab.com/fr",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Luxury Home Abidjan",
    description:
      "Site immobilier pour les logements de luxe à Abidjan. Plateforme élégante pour les biens immobiliers haut de gamme.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://lha.lunion-lab.com/",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Catholikia",
    description:
      "Application pour la communauté catholique. Plateforme numérique pour les activités et services de la communauté.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://catholikia.com/fr",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "OSA FC",
    description:
      "Site officiel du club de football OSA FC. Plateforme sportive présentant le club, les actualités et les événements.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://osa-website-alpha.vercel.app/",
    github: "#",
    type: "Professionnel",
  },
  {
    title: "Paroisse St Sauveur",
    description:
      "Back-office pour la paroisse Saint Sauveur. Système de gestion administrative pour les activités et services paroissiaux.",
    technologies: ["Nest.js", "Next.js", "React.js", "PostgreSQL", "API REST", "MongoDB", "Express.js", "Back-office"],
    image: "/assets/image/téléchargement (3).jpg",
    link: "https://back-office-paroisse-st-sauveur-mis.vercel.app",
    github: "#",
    type: "Professionnel",
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
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up overflow-hidden bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-32 lg:h-56 overflow-hidden">
                  <ProjectImage 
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                  />
                </div>

                <div className="flex flex-col gap-6 px-6 py-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="leading-none font-semibold text-lg font-lora lg:text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </div>
                      <Badge variant={project.type === "Professionnel" ? "default" : "secondary"}>
                        {project.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground font-lora lg:text-base">
                      {project.description}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap font-lora gap-2">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
