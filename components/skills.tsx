"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layers, Smartphone } from "lucide-react";

const levelToPercent: Record<string, number> = {
  Expert: 95,
  Avancé: 80,
  Intermédiaire: 55,
  "En cours": 25,
};

const levelColor: Record<string, string> = {
  Expert: "#22C55E",
  Avancé: "#4ADE80",
  Intermédiaire: "#84CC16",
  "En cours": "#86EFAC",
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "#22C55E",
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
    color: "#4ADE80",
    skills: [
      { name: "Node.js", level: "Avancé" },
      { name: "Express.js", level: "Avancé" },
      { name: "Nest.js", level: "Intermédiaire" },
      { name: "Java", level: "En cours" },
      { name: "Python", level: "Intermédiaire" },
      { name: "WinDev", level: "Intermédiaire" },
    ],
  },
  {
    title: "Base de données",
    icon: Database,
    color: "#84CC16",
    skills: [
      { name: "MongoDB", level: "Avancé" },
      { name: "SQL", level: "Avancé" },
      { name: "MERISE", level: "Intermédiaire" },
    ],
  },
  {
    title: "Mobile & Autres",
    icon: Smartphone,
    color: "#86EFAC",
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
    case "Expert": return "text-primary font-bold border-primary/40 bg-primary/15";
    case "Avancé": return "text-accent border-accent/30 bg-accent/10";
    case "Intermédiaire": return "text-muted-foreground border-border bg-muted/50";
    case "En cours": return "text-secondary border-secondary/30 bg-secondary/10";
    default: return "text-muted-foreground bg-muted border-border";
  }
};

const SkillBar = ({ name, level, color }: { name: string; level: string; color: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = levelToPercent[level] ?? 40;
  const barColor = levelColor[level] ?? color;

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground/90 font-body">{name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-body ${getLevelColor(level)}`}>{level}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${barColor}99, ${barColor})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-16 lg:py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-30 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={titleRef}
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 font-heading">
              Compétences <span className="gradient-text">Techniques</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Technologies et outils que je maîtrise pour créer des applications modernes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 lg:p-7"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{ background: `${category.color}18`, border: `1px solid ${category.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-foreground/90">{category.title}</h3>
                  </div>
                  {category.skills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} color={category.color} />
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
