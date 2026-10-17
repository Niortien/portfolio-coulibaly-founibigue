"use client";

import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { EASE_OUT, FadeUp, MaskReveal, RotatingBadge, useMediaQuery, useSafeReducedMotion } from "@/components/motion";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

/* Les six projets mis en avant, dans l'ordre d'affichage ; les autres vont dans la grille. */
const FEATURED = ["Dri Valé", "Mon Djossi", "Chicken-Nation", "Turbo ERP", "Luxury Home Abidjan", "Paroisse St Sauveur"];
const shortTitle = (p: Project) => p.title.split(" — ")[0];
const featured = FEATURED.map((name) => projects.find((p) => shortTitle(p) === name)).filter((p): p is Project => Boolean(p));
const others = projects.filter((p) => !FEATURED.includes(shortTitle(p)));
const OTHERS_INITIAL = 6;

const isLive = (p: Project) => Boolean(p.link) && p.link !== "#";
const domainOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
/* Les logos (petites images) s'affichent entiers sur fond clair ; les captures remplissent le cadre. */
const isLogo = (p: Project) => p.image.includes("logo");

/** Cadre de navigateur : barre d'adresse avec le domaine, puis la photo du projet. */
function BrowserFrame({ project, imageScale, sizes }: { project: Project; imageScale?: MotionValue<number>; sizes: string }) {
  const logo = isLogo(project);
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#F3F4F6] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] font-medium text-[#5F6368]">
          {isLive(project) ? domainOf(project.link) : "Projet interne"}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <motion.div className="absolute inset-0" style={imageScale ? { scale: imageScale } : undefined}>
          <Image
            src={project.image}
            alt={`Capture du projet ${shortTitle(project)}`}
            fill
            sizes={sizes}
            className={logo ? "object-contain p-10" : "object-cover object-top"}
          />
        </motion.div>
      </div>
    </div>
  );
}

/** Une carte de la pile : elle reste collée en haut et rétrécit quand la suivante vient la recouvrir. */
function StackCard({ project, index, progress, stacked }: { project: Project; index: number; progress: MotionValue<number>; stacked: boolean }) {
  const total = featured.length;
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.035]);
  const imageScale = useTransform(progress, [index / total, (index + 1) / total], [1.12, 1]);
  const live = isLive(project);

  return (
    <div className={cn(stacked ? "sticky top-0 flex h-screen items-center" : "py-3")}>
      <motion.article
        style={stacked ? { scale, top: `${index * 22}px`, backgroundColor: project.accent } : { backgroundColor: project.accent }}
        className="relative w-full origin-top overflow-hidden rounded-[1.75rem] p-6 text-white sm:p-10"
        aria-label={shortTitle(project)}
      >
        {/* Lumière douce pour que la couleur ne soit pas un aplat */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(90%_70%_at_0%_100%,rgba(0,0,0,0.28),transparent_60%)]" />

        <div className="relative flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {project.code}
          </span>
          <span className="rounded-full border border-white/30 px-3 py-1">{project.type}</span>
        </div>

        <div className="relative mt-6 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <h3 className="display-xl text-[clamp(2.6rem,5.5vw,4.75rem)] leading-[0.95]">{shortTitle(project)}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/85">{project.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75">
              {project.tasks?.slice(0, 3).map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                  {t}
                </li>
              ))}
            </ul>
            {project.impact && <p className="mt-4 border-l-2 border-white/60 pl-4 text-sm font-semibold">{project.impact}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies?.map((t) => (
                <span key={t} className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                  {t}
                </span>
              ))}
            </div>
            {live ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-bold text-[#0B0B0C] transition-transform hover:-translate-y-0.5"
              >
                Voir le site en ligne
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0B0B0C] text-white transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <p className="mt-6 text-sm font-semibold text-white/70">Projet interne, pas de lien public</p>
            )}
          </div>
          <BrowserFrame project={project} imageScale={stacked ? imageScale : undefined} sizes="(max-width: 1024px) 100vw, 600px" />
        </div>
      </motion.article>
    </div>
  );
}

/** Carte compacte de la grille « Autres projets ». */
function OtherCard({ project }: { project: Project }) {
  const live = isLive(project);
  const Wrapper = live ? "a" : "div";
  return (
    <Wrapper
      {...(live ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block rounded-2xl bg-card p-3 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
        <BrowserFrame project={project} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
      </div>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <span>{project.code}</span>
          <span>{project.type}</span>
        </div>
        <h3 className="mt-2 font-body text-xl font-semibold tracking-normal">{shortTitle(project)}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <p className="mt-4 text-sm font-semibold">
          {live ? (
            <span className="inline-flex items-center gap-1.5">
              {domainOf(project.link)}
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">
                ↗
              </span>
            </span>
          ) : (
            <span className="text-muted-foreground">Projet interne</span>
          )}
        </p>
      </div>
    </Wrapper>
  );
}

/** Projets : pile de cartes collantes pour les six phares, puis la grille des autres. */
export const Projects = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
  const desktop = useMediaQuery("(min-width: 1024px) and (min-height: 700px)");
  const reduce = useSafeReducedMotion();
  const stacked = desktop && !reduce;
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? others : others.slice(0, OTHERS_INITIAL);

  return (
    <section id="projects" className="bg-background px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Projets sélectionnés · 03 / 04</p>
            <h2 className="display-xl mt-4 text-[clamp(3.5rem,10vw,8.5rem)]">
              <MaskReveal lines={["Mes projets"]} />
            </h2>
            <FadeUp>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Des applications en production, utilisées par des boutiques, des entreprises et des institutions. Chaque carte mène
                au site en ligne.
              </p>
            </FadeUp>
          </div>
          <RotatingBadge href="#contact" text="Me contacter" />
        </div>

        <div ref={stackRef} className="mt-14">
          {featured.map((p, i) => (
            <StackCard key={p.title} project={p} index={i} progress={scrollYProgress} stacked={stacked} />
          ))}
        </div>

        <div className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <h3 className="display-xl text-[clamp(2.5rem,6vw,4.5rem)]">
              <MaskReveal lines={["Autres projets"]} />
            </h3>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{others.length} projets</p>
          </div>
          <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {list.map((p) => (
                <motion.li
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: EASE_OUT }}
                >
                  <OtherCard project={p} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
          {others.length > OTHERS_INITIAL && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="rounded-full border-2 border-foreground px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                {showAll ? "Afficher moins" : `Voir les ${others.length - OTHERS_INITIAL} autres projets`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
