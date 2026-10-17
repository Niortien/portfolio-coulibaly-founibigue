"use client";

import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { useRef, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Suit une media query ; vaut false au rendu serveur et pendant l'hydratation (pas d'écart serveur/client). */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Comme useReducedMotion de Framer, mais sans écart d'hydratation. */
export function useSafeReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** Chaque ligne monte depuis un masque, l'une après l'autre (titres et listes). */
export function MaskReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const reduce = useSafeReducedMotion();
  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="-mt-[0.08em] block overflow-hidden pb-[0.06em] pt-[0.18em]">
          <motion.span
            /* La clé change avec le réglage : en mouvement réduit, on remonte la ligne déjà en place,
               sinon Framer garde la position masquée reçue du rendu serveur. */
            key={reduce ? "still" : "anim"}
            className={cn("block", lineClassName)}
            initial={reduce ? false : { y: "110%" }}
            animate={inView || reduce ? { y: "0%" } : undefined}
            transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE_OUT, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Apparition douce au défilement. */
export function FadeUp({ children, delay = 0, className, ...rest }: HTMLMotionProps<"div"> & { delay?: number }) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      key={reduce ? "still" : "anim"}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE_OUT, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Bande qui défile sans fin (le contenu est doublé pour boucler sans raccord). */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("marquee flex overflow-hidden whitespace-nowrap", className)} aria-hidden="true">
      <div
        className="marquee-track flex shrink-0"
        data-reverse={reverse}
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
}

/** Badge rond au texte qui tourne, avec une flèche au centre. */
export function RotatingBadge({
  href,
  text,
  className,
  dark = false,
}: {
  href: string;
  text: string;
  className?: string;
  dark?: boolean;
}) {
  const reduce = useSafeReducedMotion();
  const label = `${text} • ${text} • `;
  return (
    <a
      href={href}
      aria-label={text}
      className={cn(
        "group relative grid h-32 w-32 shrink-0 place-items-center rounded-full border transition-colors duration-300",
        dark ? "border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink" : "border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-2"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-current text-[10.5px] font-semibold uppercase tracking-[0.22em]">
          <textPath href="#badge-circle">{label}</textPath>
        </text>
      </motion.svg>
      <svg viewBox="0 0 24 24" className="h-7 w-7 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

/** Grande flèche ↗ qui entre en tournant. */
export function BigArrow({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useSafeReducedMotion();
  return (
    <motion.svg
      key={reduce ? "still" : "anim"}
      ref={ref}
      viewBox="0 0 100 100"
      className={className}
      initial={reduce ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
      animate={inView || reduce ? { rotate: 0, opacity: 1, scale: 1 } : undefined}
      transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE_OUT }}
      fill="none"
      stroke="currentColor"
      strokeWidth="9"
      aria-hidden="true"
    >
      <path d="M18 82 82 18M30 18h52v52" strokeLinecap="square" />
    </motion.svg>
  );
}
