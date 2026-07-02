import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Licence 3 MIAGE",
    field: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    institution: "Université Polytechnique de Bingerville",
    period: "2021 — 2024",
    description: "Formation en développement logiciel, gestion de bases de données et systèmes d'information.",
  },
  {
    degree: "Baccalauréat série D",
    field: "Sciences Exactes",
    institution: "Lycée Moderne 1 Abobo",
    period: "2021",
    description: "Diplôme scientifique avec mention.",
  },
];

const certifications = [
  {
    title: "Certification Java — Programmation Orientée Objet",
    organization: "Formation en cours",
    period: "2026 — Présent",
    description: "Concepts fondamentaux du langage Java, design patterns, gestion de la mémoire (JVM) et bonnes pratiques de développement logiciel.",
    technologies: ["Java", "POO", "JVM", "Design Patterns", "Collections"],
    status: "En cours",
  },
  {
    title: "Développement Full-Stack — Next.js & Nest.js",
    organization: "Lunion-Lab",
    period: "Février 2025 — Juillet 2025",
    description: "Maîtrise de Nest.js pour la création d'APIs robustes et scalables, couplé à Next.js pour le front-end.",
    technologies: ["Nest.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "React.js"],
  },
  {
    title: "Full-Stack Bootcamp JavaScript",
    organization: "GOMYCODE",
    period: "Juin 2023 — Mars 2024",
    description: "Formation intensive de 9 mois sur le stack MERN (MongoDB, Express.js, React.js, Node.js).",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
  },
  {
    title: "Python pour l'Analyse de Données",
    organization: "GOMYCODE",
    period: "Août 2022 — Décembre 2022",
    description: "Formation de 3 mois sur les bases de Python pour l'analyse de données.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 lg:mb-16 max-w-2xl">
            <span className="eyebrow">05 — Formation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mt-3">
              Formation &amp; certifications
            </h2>
          </div>

          <div className="space-y-14">
            {/* Education */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-5">Diplômes</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="dossier-card p-5 lg:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="text-lg lg:text-xl font-display font-semibold">{edu.degree}</h4>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/85 mb-1">{edu.field}</p>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-5">Certifications &amp; formations</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="dossier-card p-5 lg:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base lg:text-lg font-display font-semibold">{cert.title}</h4>
                      {cert.status && (
                        <Badge className="shrink-0">{cert.status}</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/85">{cert.organization}</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
