"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EASE_OUT, FadeUp, useSafeReducedMotion } from "@/components/motion";

const steps = [
  {
    word: "Définir",
    text: "Je pars du métier : j'écoute comment le travail se fait aujourd'hui, je liste les besoins et je modélise les données (MERISE, schéma PostgreSQL) avant d'écrire du code.",
    image: "/assets/image/mondjossi.webp",
  },
  {
    word: "Concevoir",
    text: "Je dessine l'architecture : une API NestJS découpée en modules, des écrans Next.js pensés pour le mobile, des rôles et des droits clairs.",
    image: "/assets/image/drivale_lookbook.webp",
  },
  {
    word: "Livrer",
    text: "Je mets en production, je teste avec les vrais utilisateurs et je reste derrière : corrections, nouvelles fonctions et suivi au quotidien.",
    image: "/assets/image/drivale_site.webp",
  },
];

/** Carte noire : les mots s'allument tour à tour, la photo change avec eux. */
export const Process = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useSafeReducedMotion();

  useEffect(() => {
    if (!inView || paused || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2800);
    return () => clearInterval(t);
  }, [inView, paused, reduce]);

  return (
    <section id="process" className="bg-background px-5 pb-24 sm:px-10 sm:pb-32" aria-label="Ma méthode">
      <FadeUp>
        <div
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-ink text-ink-foreground md:grid-cols-2"
        >
          <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/45">Ma méthode · 04 / 04</p>
            <div>
              {steps.map((s, i) => (
                <button
                  key={s.word}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="display-xl block text-left text-[clamp(3.5rem,8vw,6.5rem)] transition-colors duration-500"
                  style={{ color: active === i ? "var(--ink-foreground)" : "var(--ink-muted)" }}
                >
                  {s.word}
                </button>
              ))}
            </div>
            <div className="min-h-[6.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="max-w-md text-sm leading-relaxed text-ink-foreground/75 sm:text-base"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                >
                  {steps[active].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden md:min-h-[560px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: EASE_OUT }}
                >
                  <Image src={steps[active].image} alt={`Étape « ${steps[active].word} » : capture d'un projet livré`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-5 right-5 flex gap-2" aria-hidden="true">
              {steps.map((s, i) => (
                <span key={s.word} className="h-1 w-8 overflow-hidden rounded-full bg-ink-foreground/25">
                  {active === i && (
                    <motion.span
                      className="block h-full bg-ink-foreground"
                      initial={{ width: "0%" }}
                      animate={{ width: paused || reduce ? "100%" : "100%" }}
                      transition={{ duration: paused || reduce ? 0 : 2.8, ease: "linear" }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};
