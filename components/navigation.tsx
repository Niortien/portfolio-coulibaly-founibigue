"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { EASE_OUT } from "@/components/motion";

const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Parcours", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
];

/** Barre en pilule blanche (style « Design by Matthew ») : se cache en descendant, revient en remontant. */
export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 160 && y > prev && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/95 px-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur sm:h-16 sm:px-4"
        >
          <a href="#hero" className="flex items-center gap-3" aria-label="Retour en haut">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground font-display text-sm text-background">CN</span>
            <span className="hidden text-sm tracking-wide sm:block">
              PORTFOLIO DE <strong className="font-bold">NIORTIEN</strong>
            </span>
          </a>

          <ul className="hidden items-center gap-3 text-[13px] font-semibold uppercase tracking-wide md:flex">
            {navItems.map((item, i) => (
              <Fragment key={item.href}>
                {i > 0 && <li aria-hidden="true" className="text-muted-foreground">/</li>}
                <li>
                  <a href={item.href} className="ink-link text-foreground/80 transition-colors hover:text-foreground">
                    {item.name}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-xl border border-foreground px-4 py-2 text-[13px] font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background sm:block"
            >
              Me contacter
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-28 text-ink-foreground md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-2">
              {[...navItems, { name: "Contact", href: "#contact" }].map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display-xl block text-6xl"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 + i * 0.07 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-ink-foreground/60">niortiencoulibaly2001@gmail.com</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
