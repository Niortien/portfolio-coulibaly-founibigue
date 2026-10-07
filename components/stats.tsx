"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: 21, suffix: "", label: "projets livrés — gestion, back-offices et plateformes web" },
  { value: 17, suffix: "", label: "applications consultables en ligne" },
  { value: 2, suffix: "ans", label: "d’expérience professionnelle en entreprise" },
  { value: 90, suffix: "+", label: "score Lighthouse — sites Lunion-Lab et Luxury Home Abidjan" },
];

const DELAY = 700;
const DURATION = 1800;

/** Quatre chiffres qui montent une fois au chargement ; sans animation si l'utilisateur la refuse. */
export function Stats() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start: number | null = null;
    let last = -1;
    const tick = (now: number) => {
      start ??= now;
      const p = Math.min(1, Math.max(0, (now - start - DELAY) / DURATION));
      const q = Math.round(p * 60);
      if (q !== last) {
        last = q;
        setProgress(p);
      }
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const eased = 1 - Math.pow(1 - progress, 3);

  return (
    <section aria-label="Chiffres clés">
      <div className="wrap">
        <ul className="stats" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {STATS.map((s) => (
            <li key={s.label} className="stat">
              <div className="stat-v" aria-label={`${s.value}${s.suffix ? ` ${s.suffix}` : ""}`}>
                <span aria-hidden="true">{Math.round(s.value * eased)}</span>
                {s.suffix && <small aria-hidden="true">{s.suffix}</small>}
              </div>
              <div className="stat-l">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
