import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Licence 3 MIAGE",
    field: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    institution: "Université Polytechnique de Bingerville",
    period: "2021 - 2024",
    description: "Formation en développement logiciel, gestion de bases de données et systèmes d'information",
  },
  {
    degree: "Baccalauréat série D",
    field: "Sciences Exactes",
    institution: "Lycée Moderne 1 Abobo",
    period: "2021",
    description: "Diplôme scientifique avec mention",
  },
];

const certifications = [
  {
    title: "Certification Java - Programmation Orientée Objet",
    organization: "Formation en cours",
    period: "2026 - Présent",
    description:
      "Formation en cours sur Java et la programmation orientée objet. Apprentissage des concepts fondamentaux du langage Java, des design patterns, de la gestion de la mémoire (JVM) et des bonnes pratiques de développement logiciel.",
    technologies: ["Java", "POO", "JVM", "Design Patterns", "Collections"],
    status: "En cours",
  },
  {
    title: "Développement Full-Stack avec Next.js front-end et  Nest.js back-end",
    organization: "LUNION-LAB",
    period: "Février 2025 - Juillet 2025",
    description:
      "Maîtrise du framework Nest.js pour la création d'APIs robustes et scalables avec Nest.js et Next.js pour le front-end.",
    technologies: ["Nest.js", "Next.js", "TypeScript","Node.js","PostgreSQL","React.js","JavaScript"],
  },
  {
    title: "Full-Stack Bootcamp JavaScript",
    organization: "GOMYCODE",
    period: "Juin 2023 - Mars 2024",
    description:
      "Formation intensive de 9 mois sur le stack MERN (MongoDB, Express.js, React.js, Node.js). Apprentissage du développement Full-Stack moderne avec JavaScript.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
  },
  {
    title: "Python pour l'Analyse de Données",
    organization: "GOMYCODE",
    period: "Août 2022 - Décembre 2022",
    description:
      "Formation de 3 mois sur les bases de Python pour l'analyse de données et la programmation.",
    technologies: ["Python", "Data Analysis", "Pandas","Numpy","Matplotlib","Pandas"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Formation & <span className="gradient-text font-lora">Certifications</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Mon parcours académique et mes certifications professionnelles
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                Diplômes
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl lg:text-2xl mb-2">{edu.degree}</CardTitle>
                          <CardDescription className="text-base lg:text-lg font-semibold text-foreground">
                            {edu.field}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center font-lora gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {edu.institution}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 font-lora">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm lg:text-base">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                Certifications & Formations
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${(index + education.length) * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1 font-lora">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <CardTitle className="text-lg lg:text-xl font-bold">{cert.title}</CardTitle>
                            {cert.status && (
                              <Badge variant="outline" className="shrink-0 text-xs border-amber-500/50 text-amber-600 bg-amber-500/10 whitespace-nowrap">
                                🎓 {cert.status}
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-base font-semibold text-foreground">
                            {cert.organization}
                          </CardDescription>
                          <div className="flex font-lora items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm lg:text-base">{cert.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm lg:text-base">Technologies :</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.technologies.map((tech, idx) => (
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
        </div>
      </div>
    </section>
  );
};
