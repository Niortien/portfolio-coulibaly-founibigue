"use client";

import { FadeUp, MaskReveal, Marquee } from "@/components/motion";
import { skillCategories } from "@/lib/portfolio-data";

const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

/** Une bande par famille : les pastilles défilent, une ligne sur deux en sens inverse. */
function CategoryBand({ title, code, skills, reverse }: { title: string; code: string; skills: string[]; reverse: boolean }) {
  // Assez d'éléments pour remplir la largeur d'un grand écran avant la boucle
  const items = skills.length < 6 ? [...skills, ...skills] : skills;
  return (
    <div className="grid items-center gap-3 border-t border-ink-foreground/10 py-5 md:grid-cols-[13rem_1fr] md:gap-8">
      <p className="px-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50 sm:px-10 md:pr-0">
        {code} · {title}
      </p>
      <Marquee speed={26 + skills.length * 2} reverse={reverse} className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="mx-2 inline-flex items-center gap-3 rounded-full border border-ink-foreground/20 px-5 py-2.5 text-base font-semibold text-ink-foreground sm:text-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {s}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/** Ma stack : titres géants qui défilent, puis une bande animée par famille, sans notes. */
export const Skills = () => (
  <section id="skills" className="overflow-hidden bg-ink pb-20 pt-24 text-ink-foreground sm:pb-28 sm:pt-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="display-xl text-[clamp(3.5rem,10vw,8.5rem)]">
          <MaskReveal lines={["Ma stack"]} />
        </h2>
        <FadeUp>
          <p className="max-w-sm text-base leading-relaxed text-ink-foreground/70">
            Les outils avec lesquels je conçois, code et mets en ligne des applications, du schéma de base de données jusqu&apos;à
            l&apos;écran du client.
          </p>
        </FadeUp>
      </div>
    </div>

    {/* Deux grandes lignes de noms, en plein et en contour, qui se croisent */}
    <div className="mt-14 space-y-4 select-none">
      <Marquee speed={60}>
        {allSkills.map((s) => (
          <span key={s} className="display-xl px-5 text-6xl sm:text-8xl">
            {s} <span className="text-accent">✦</span>
          </span>
        ))}
      </Marquee>
      <Marquee speed={70} reverse>
        {allSkills.map((s) => (
          <span key={s} className="display-xl px-5 text-6xl text-transparent [-webkit-text-stroke:1px_var(--ink-foreground)] sm:text-8xl">
            {s} <span className="text-ink-muted [-webkit-text-stroke:0]">✦</span>
          </span>
        ))}
      </Marquee>
    </div>

    <div className="mt-16 border-b border-ink-foreground/10">
      {skillCategories.map((cat, i) => (
        <CategoryBand key={cat.title} title={cat.title} code={cat.code} skills={cat.skills.map((s) => s.name)} reverse={i % 2 === 1} />
      ))}
    </div>
    <p className="sr-only">Compétences : {allSkills.join(", ")}.</p>
  </section>
);
