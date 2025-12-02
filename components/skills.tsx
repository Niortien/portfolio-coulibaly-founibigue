import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: "Avancé" },
      { name: "Next.js", level: "Avancé" },
      { name: "Tailwind CSS", level: "Avancé" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "JavaScript", level: "Avancé" },
      { name: "TypeScript", level: "Intermédiaire" },
    ],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: [
      { name: "Node.js", level: "Avancé" },
      { name: "Express.js", level: "Avancé" },
      { name: "Nest.js", level: "Intermédiaire" },
      { name: "Python", level: "Intermédiaire" },
      { name: "WinDev", level: "Intermédiaire" },
    ],
  },
  {
    title: "Base de données",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Avancé" },
      { name: "SQL", level: "Avancé" },
      { name: "MERISE", level: "Intermédiaire" },
    ],
  },
  {
    title: "Mobile & Autres",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: "Intermédiaire" },
      { name: "Dart", level: "Intermédiaire" },
      { name: "Git", level: "Avancé" },
      { name: "API REST", level: "Avancé" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "Avancé":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "Intermédiaire":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Compétences <span className="gradient-text">Techniques</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications modernes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-lora">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                      <div className="p-2 lg:p-3 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-start gap-1 p-3 rounded-lg bg-background hover:bg-muted transition-colors"
                        >
                          <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
