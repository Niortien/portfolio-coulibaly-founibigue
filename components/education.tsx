"use client";

import { FadeUp, MaskReveal } from "@/components/motion";
import { certifications, education } from "@/lib/portfolio-data";

/** Formation et certifications, en lignes pointillées comme le reste de la page. */
export const Education = () => (
  <section id="education" className="bg-paper px-5 py-24 sm:px-10 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <h2 className="display-xl text-[clamp(3.5rem,9vw,7.5rem)]">
        <MaskReveal lines={["Formation"]} />
      </h2>

      <div className="mt-12 grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Diplômes</p>
          <ul className="mt-4">
            {education.map((e, i) => (
              <FadeUp key={e.degree} delay={i * 0.08}>
                <li className="py-6">
                  <div className="dash-rule mb-6" />
                  <p className="text-sm text-muted-foreground">{e.period}</p>
                  <p className="mt-1 text-2xl font-semibold">{e.degree}</p>
                  <p className="mt-1 text-sm">{e.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.field}</p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Certifications et formations</p>
          <ul className="mt-4">
            {certifications.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.08}>
                <li className="py-6">
                  <div className="dash-rule mb-6" />
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm text-muted-foreground">{c.period}</p>
                    {"status" in c && c.status && (
                      <span className="rounded-full border border-foreground/25 px-2.5 py-0.5 text-[11px] font-semibold uppercase">{c.status}</span>
                    )}
                  </div>
                  <p className="mt-1 text-xl font-semibold">{c.title}</p>
                  <p className="mt-1 text-sm">{c.organization}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.technologies?.map((t) => (
                      <span key={t} className="rounded-full bg-card px-2.5 py-1 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
