"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FadeUp, MaskReveal, useSafeReducedMotion } from "@/components/motion";
import { experiences } from "@/lib/portfolio-data";

type Experience = (typeof experiences)[number];

/** Une étape de la frise : tout est visible d'un coup d'œil, rien à déplier. */
function Step({ exp, index }: { exp: Experience; index: number }) {
  const current = exp.period.includes("Aujourd'hui");
  const [start, end] = exp.period.split(" — ");
  return (
    <li className="relative grid gap-6 pb-16 pl-10 md:grid-cols-[13rem_1fr] md:gap-12 md:pl-0">
      {/* Repère sur la ligne (au milieu de l'espace entre date et carte) */}
      <span
        className="absolute left-0 top-1.5 grid h-[1.125rem] w-[1.125rem] -translate-x-1/2 place-items-center rounded-full border-2 border-foreground bg-paper md:left-[14.5rem]"
        aria-hidden="true"
      >
        {current && <span className="h-2 w-2 animate-pulse rounded-full bg-live" />}
      </span>

      <FadeUp className="md:text-right">
        <p className="display-xl text-5xl sm:text-6xl">{start}</p>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">→ {end}</p>
        {current && (
          <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-live/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#15803D] dark:text-live">
            En poste
          </span>
        )}
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} · {exp.location}
              </p>
              <h3 className="mt-2 font-body text-3xl font-bold tracking-tight sm:text-4xl">{exp.company}</h3>
              <p className="mt-1 text-lg font-medium">{exp.role}</p>
            </div>
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide text-background">{exp.duration}</span>
          </div>

          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/85">
            {exp.tasks.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {exp.technologies.map((t) => (
              <span key={t} className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 border-t border-foreground/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Projets livrés ({exp.projects.length})</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {exp.projects.map((p) =>
                p.link && p.link !== "#" ? (
                  <li key={p.name}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={p.description}
                      className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1.5 text-xs font-semibold ring-1 ring-foreground/10 transition-colors hover:bg-foreground hover:text-background"
                    >
                      {p.name} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ) : (
                  <li key={p.name} title={p.description} className="rounded-full bg-background px-3 py-1.5 text-xs font-semibold ring-1 ring-foreground/10">
                    {p.name}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </FadeUp>
    </li>
  );
}

/** Parcours professionnel en frise verticale : la ligne se trace au défilement. */
export const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="bg-paper px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-foreground" /> Parcours professionnel · 02 / 04
            </p>
            <h2 className="display-xl mt-4 text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[1]">
              <MaskReveal lines={["Mon parcours,", "étape par étape"]} />
            </h2>
          </div>
          <FadeUp>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Un stage à la SOTRA, puis LUNION-LAB, où je développe en équipe des applications utilisées chaque jour par des clients
              de secteurs très différents.
            </p>
            <a href="#contact" className="ink-link mt-4 inline-block font-semibold">
              Discutons de votre projet ↗
            </a>
          </FadeUp>
        </div>

        <ol ref={listRef} className="relative mt-20">
          {/* Ligne de fond, puis ligne pleine qui avance avec le défilement */}
          <span className="absolute bottom-16 left-0 top-2 w-px bg-foreground/15 md:left-[14.5rem]" aria-hidden="true" />
          <motion.span
            className="absolute bottom-16 left-0 top-2 w-px origin-top bg-foreground md:left-[14.5rem]"
            style={reduce ? undefined : { scaleY: line }}
            aria-hidden="true"
          />
          {experiences.map((exp, i) => (
            <Step key={exp.company} exp={exp} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
};
