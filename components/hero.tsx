"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useIntroDone } from "@/components/intro";
import { EASE_OUT, Marquee, useSafeReducedMotion } from "@/components/motion";

/** Hero « nom géant derrière le portrait » : le nom défile, la photo détourée passe devant. */
export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();
  const reduce = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const show = ready || reduce;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden bg-paper"
      aria-label="Présentation"
    >
      {/* Cercles fins qui tournent lentement */}
      <motion.svg
        className="pointer-events-none absolute -left-40 -top-40 h-[640px] w-[640px] text-foreground/25"
        viewBox="0 0 100 100"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1, rotate: reduce ? 0 : 360 } : undefined}
        transition={{ opacity: { duration: 1 }, rotate: { duration: 90, ease: "linear", repeat: Infinity } }}
      >
        <circle cx="50" cy="50" r="49.6" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="0.6 1.4" />
      </motion.svg>
      <motion.svg
        className="pointer-events-none absolute -bottom-56 -right-48 h-[560px] w-[560px] text-foreground/25"
        viewBox="0 0 100 100"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1, rotate: reduce ? 0 : -360 } : undefined}
        transition={{ opacity: { duration: 1, delay: 0.2 }, rotate: { duration: 110, ease: "linear", repeat: Infinity } }}
      >
        <circle cx="50" cy="50" r="49.6" fill="none" stroke="currentColor" strokeWidth="0.15" />
      </motion.svg>

      {/* Le nom géant, derrière la photo */}
      <motion.div className="absolute inset-x-0 top-[30%] sm:top-[24%]" style={{ y: reduce ? undefined : nameY }}>
        <motion.div
          initial={{ x: "35%", opacity: 0 }}
          animate={show ? { x: "0%", opacity: 1 } : undefined}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        >
          <Marquee speed={38}>
            <span className="display-xl px-[0.15em] pt-[0.16em] text-[clamp(7rem,26vw,24rem)] text-foreground">
              Coulibaly Founibigué Issa Niortien<span aria-hidden="true" className="mx-[0.12em] inline-block h-[0.14em] w-[0.14em] translate-y-[-0.1em] rounded-full bg-current align-middle opacity-25" />
            </span>
          </Marquee>
        </motion.div>
      </motion.div>

      {/* Libellé haut gauche */}
      <motion.div
        className="absolute left-5 top-24 z-20 sm:left-10 sm:top-32"
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 }}
      >
        <p className="text-base font-medium leading-snug sm:text-xl">
          Développeur
          <br />
          Full-Stack · Next.js &amp; NestJS
        </p>
        <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          Disponible
        </p>
      </motion.div>

      {/* La photo détourée, devant le nom */}
      <motion.div
        className="relative z-10 mx-auto h-[78svh] w-full max-w-[560px] sm:h-[86svh]"
        style={{ y: reduce ? undefined : photoY }}
      >
        <motion.div
          className="relative h-full w-full"
          initial={{ y: 80, opacity: 0 }}
          animate={show ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.15 }}
        >
          <Image
            src="/assets/image/ma_photo_detouree.webp"
            alt="Coulibaly Founibigué Issa Niortien, développeur full-stack"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 560px"
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>

      {/* Bas : lieu et invitation à défiler */}
      <motion.div
        className="absolute inset-x-5 bottom-6 z-20 flex items-end justify-between sm:inset-x-10 sm:bottom-10"
        style={{ opacity: reduce ? 1 : fade }}
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ delay: 0.9 }}
        >
          Abidjan · Côte d&apos;Ivoire
        </motion.p>
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-sm font-medium sm:text-lg"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ delay: 1 }}
        >
          Défiler
          <motion.svg
            viewBox="0 0 24 40"
            className="h-9 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <path d="M12 2v34M3 27l9 9 9-9" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
};
