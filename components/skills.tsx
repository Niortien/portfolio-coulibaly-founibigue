"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const levelToPercent: Record<string, number> = {
  Expert: 95,
  Avancé: 80,
  Intermédiaire: 55,
  "En cours": 25,
};

const skillCategories = [
  {
    title: "Frontend",
    code: "FE",
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
    code: "BE",
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
    code: "DB",
    skills: [
      { name: "MongoDB", level: "Avancé" },
      { name: "SQL", level: "Avancé" },
      { name: "MERISE", level: "Intermédiaire" },
    ],
  },
  {
    title: "Mobile & Outils",
    code: "OPS",
    skills: [
      { name: "Flutter", level: "Intermédiaire" },
      { name: "Dart", level: "Intermédiaire" },
      { name: "Git", level: "Avancé" },
      { name: "API REST", level: "Avancé" },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = levelToPercent[level] ?? 40;

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-foreground/90">{name}</span>
        <span className="eyebrow">{level}</span>
      </div>
      <div className="h-[3px] w-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 lg:py-28 px-4 border-y border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={titleRef}
            className="mb-14 lg:mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">04 — Compétences</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mt-3 mb-4">
              Stack technique
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground">
              Technologies et outils utilisés au quotidien pour concevoir et livrer des applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="dossier-card p-6 lg:p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <h3 className="text-lg font-display font-semibold">{category.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{category.code}</span>
                </div>
                {category.skills.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
