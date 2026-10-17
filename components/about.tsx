"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BigArrow, FadeUp, MaskReveal, useSafeReducedMotion } from "@/components/motion";

const stats = [
  { value: 9, suffix: "+", label: "applications livrées en production" },
  { value: 2022, suffix: "", label: "développeur depuis" },
  { value: 2, suffix: "", label: "produits à moi : Dri Valé et Mon Djossi" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useSafeReducedMotion();
  const [n, setN] = useState(to > 1000 ? to - 40 : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(to > 1000 ? to - 40 : 0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);
  return (
    <span ref={ref}>
      {reduce ? to : n}
      {suffix}
    </span>
  );
}

/** Section noire « /À PROPOS » : titre géant, flèche qui tourne, chiffres qui comptent. */
export const About = () => (
  <section id="about" className="relative overflow-hidden bg-ink px-5 py-24 text-ink-foreground sm:px-10 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <div className="flex items-start justify-between">
        <h2 className="display-xl text-[clamp(5rem,18vw,15rem)]">
          <MaskReveal lines={["/À propos"]} />
        </h2>
        <span className="mt-4 text-xs font-semibold tracking-[0.2em] text-ink-foreground/40">01 / 04</span>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <BigArrow className="h-32 w-32 text-ink-muted sm:h-52 sm:w-52" />
        <div>
          <FadeUp>
            <p className="text-lg leading-relaxed text-ink-foreground/85 sm:text-xl">
              Je suis développeur full-stack à Abidjan. Chez <strong className="font-semibold text-ink-foreground">LUNION-LAB</strong>,
              je livre des applications que des entreprises utilisent tous les jours : un ERP de livraison, une plateforme de
              commande en ligne, des sites immobiliers, une plateforme paroissiale et la gestion de flotte de la SATE.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-foreground/85 sm:text-xl">
              À côté, j&apos;ai construit <strong className="font-semibold text-ink-foreground">Dri Valé</strong>, la boutique en ligne,
              la caisse et le stock d&apos;un magasin de streetwear de Yopougon. Cet outil est devenu{" "}
              <strong className="font-semibold text-ink-foreground">Mon Djossi</strong>, ouvert à toutes les boutiques du pays.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/45">
              Stack principale : Next.js · NestJS · PostgreSQL · Prisma
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-t border-ink-foreground/15 pt-10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.1}>
            <p className="display-xl text-6xl sm:text-7xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 max-w-[16rem] text-sm text-ink-foreground/60">{s.label}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
