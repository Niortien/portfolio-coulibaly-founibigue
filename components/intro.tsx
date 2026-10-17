"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { EASE_OUT, useSafeReducedMotion } from "@/components/motion";

const WORDS = ["Développeur", "Full-Stack", "Abidjan"];

/* Petit store partagé : le hero attend la fin du rideau pour lancer son entrée. */
let introDone = false;
const listeners = new Set<() => void>();
function markIntroDone() {
  if (introDone) return;
  introDone = true;
  listeners.forEach((l) => l());
}
export function useIntroDone() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => introDone,
    () => false,
  );
}

/** Rideau noir d'ouverture : trois mots, puis il remonte et révèle la page (une fois par visite). */
export function Intro() {
  const reduce = useSafeReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
      sessionStorage.setItem("intro-seen", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen || reduce ? 0 : 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!show) {
      const t = setTimeout(markIntroDone, reduce ? 0 : 350);
      return () => clearTimeout(t);
    }
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-ink-foreground"
          exit={{ y: "-100%" }}
          transition={{ duration: reduce ? 0 : 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex gap-3 overflow-hidden font-body text-sm font-medium uppercase tracking-[0.3em] sm:text-base">
            {WORDS.map((w, i) => (
              <motion.span
                key={w}
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.15 + i * 0.18 }}
              >
                {w}
                {i < WORDS.length - 1 && <span className="ml-3 text-ink-foreground/40">·</span>}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
