"use client";

import { BigArrow, FadeUp, MaskReveal, Marquee } from "@/components/motion";

const links = [
  { label: "GitHub", href: "https://github.com/Niortien" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/founibigu%C3%A9-issa-niortien-coulibaly-512836216" },
  { label: "WhatsApp", href: "https://wa.me/2250767543571" },
  { label: "Mon Djossi", href: "https://mon-djossi.shop" },
];

/** Pied de page « Travaillons ensemble » : flèche, bouton, nom géant qui défile. */
export const Contact = () => (
  <footer id="contact" className="overflow-hidden bg-paper pt-24 sm:pt-32">
    <div className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-6 sm:gap-10">
          <BigArrow className="mt-2 h-16 w-16 shrink-0 sm:h-28 sm:w-28" />
          <h2 className="display-xl text-[clamp(3.5rem,9vw,8rem)]">
            <MaskReveal lines={["Travaillons", "ensemble"]} />
          </h2>
        </div>
        <FadeUp className="flex flex-col items-start gap-4 md:items-end">
          <a
            href="mailto:niortiencoulibaly2001@gmail.com"
            className="rounded-xl border-2 border-foreground px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            M&apos;écrire un message
          </a>
          <a href="tel:+2250767543571" className="ink-link text-sm font-medium">
            +225 07 67 54 35 71
          </a>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-6 border-t border-foreground/20 pt-8 text-sm sm:grid-cols-3">
        <a href="mailto:niortiencoulibaly2001@gmail.com" className="ink-link w-fit font-medium">
          niortiencoulibaly2001@gmail.com
        </a>
        <p className="text-muted-foreground">Cocody Faya, Abidjan · Côte d&apos;Ivoire</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="ink-link font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-12 select-none">
      <Marquee speed={30}>
        <span className="display-xl px-[0.12em] pt-[0.16em] text-[clamp(6rem,22vw,20rem)] leading-[0.8]">
          Coulibaly Founibigué Issa Niortien<span aria-hidden="true" className="mx-[0.12em] inline-block h-[0.14em] w-[0.14em] translate-y-[-0.1em] rounded-full bg-current align-middle opacity-25" />
        </span>
      </Marquee>
    </div>
    <p className="px-5 py-6 text-center text-xs text-muted-foreground sm:px-10">
      © {new Date().getFullYear()} Coulibaly Founibigué Issa Niortien · Développeur Full-Stack
    </p>
  </footer>
);
