"use client";

import { useState } from "react";
import { PROJECTS, type IndexedProject } from "@/lib/projects";
import { ArrowUpRight } from "@/components/icons";

type FilterKey = "all" | "g" | "s" | "live";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "g", label: "Gestion & back-office" },
  { key: "s", label: "Sites & plateformes" },
  { key: "live", label: "En ligne" },
];

const matches = (key: FilterKey, p: IndexedProject) => (key === "all" ? true : key === "live" ? !!p.url : p.kind === key);

/** Index filtrable de tous les projets : numéro, nom, secteur, stack et lien. */
export function ProjectIndex() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const rows = PROJECTS.map((p, i) => ({ p, num: String(i + 1).padStart(2, "0") })).filter(({ p }) => matches(filter, p));

  return (
    <section id="index" className="sec" aria-labelledby="index-titre">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">02 — Index des projets</div>
          <h2 id="index-titre" className="h2">Tout ce que j&rsquo;ai livré.</h2>
          <p className="lead">Plateformes de gestion, back-offices et sites pour des entreprises, commerces et institutions en Côte d&rsquo;Ivoire.</p>
        </div>

        <div className="filters" role="group" aria-label="Filtrer les projets">
          {FILTERS.map((f) => (
            <button key={f.key} type="button" className={filter === f.key ? "fchip on" : "fchip"} aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.label}
              <span className="n">{PROJECTS.filter((p) => matches(f.key, p)).length}</span>
            </button>
          ))}
        </div>

        <ul className="list" style={{ padding: 0, listStyle: "none" }} aria-live="polite">
          {rows.map(({ p, num }, i) => (
            <li key={`${filter}-${p.name}`} className="row" style={{ animationDelay: `${i * 35}ms` }}>
              <span className="row-num">{num}</span>
              <div style={{ minWidth: 0 }}>
                <div className="row-title">{p.name}</div>
                <div className="row-sub">{p.sector} · {p.context}</div>
              </div>
              <span className="row-stack">{p.stack}</span>
              <div className="row-end">
                {p.url ? (
                  <a className="row-link" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir ${p.name} en ligne`}>
                    Voir en ligne
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="row-int">Projet interne</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
