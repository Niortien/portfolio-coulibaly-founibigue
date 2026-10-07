interface Job {
  period: string;
  kind: string;
  title: string;
  org: string;
  bullets: string[];
  chips: string[];
}

const JOBS: Job[] = [
  {
    period: "Août 2024 — Juillet 2026", kind: "Freelance, puis CDI", title: "Développeur Full-Stack", org: "Lunion-Lab · Abidjan, Cocody",
    bullets: [
      "Livraison et maintenance de plus de 10 applications web en production pour des clients de secteurs variés",
      "Conception d’APIs REST avec NestJS ; modélisation des bases PostgreSQL et MongoDB selon les besoins métiers",
      "Maintenance du back-end Spring Boot de Turbo Delivery, application de livraison en production",
      "Site officiel de l’entreprise en Next.js, optimisé SEO (Lighthouse supérieur à 90) ; intégration de TPE pour les paiements",
      "Travail en équipe avec Git, revues de code et déploiement continu sur Vercel",
    ],
    chips: ["Turbo ERP", "Turbo Finance", "Turbo Delivery", "Chicken-Nation", "Sidi Immobilier", "Luxury Home Abidjan", "Catholikia", "OSA FC", "Paroisse St Sauveur", "Meet Lunion"],
  },
  {
    period: "Missions indépendantes", kind: "Freelance", title: "Développeur Full-Stack indépendant", org: "Commerces, établissements scolaires, hôtels et lieux de culte",
    bullets: [
      "Projets menés de bout en bout : base de données, API, interfaces et mise en ligne",
      "Back-offices de gestion (caisse, stock, réservations, scolarité) et sites vitrines animés",
    ],
    chips: ["Dri Valé", "Biblio UPB", "Gestion Hôtel", "Hôtel Poro — Korhogo", "Stock-Pro", "Ephrata", "Salam"],
  },
  {
    period: "2024 — 2025 · 4 mois", kind: "Stage", title: "Stagiaire Développeur Web", org: "SOTRA — Siège · Abidjan, Vridi",
    bullets: [
      "Analyse des besoins et conception MERISE (MCD, MLD, MPD) d’une application de gestion interne",
      "Développement avec WinDev et une base SQL ; tests fonctionnels, documentation et formation des utilisateurs",
      "Installation de l’infrastructure réseau et fibre optique pour la vidéosurveillance du PCA",
    ],
    chips: ["WinDev", "SQL", "MERISE"],
  },
];

/** Parcours : frise verticale dont le trait se dessine au défilement. */
export function Experience() {
  return (
    <section id="parcours" className="sec" aria-labelledby="parcours-titre">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">03 — Parcours</div>
          <h2 id="parcours-titre" className="h2">Expérience professionnelle</h2>
          <p className="lead">Développeur depuis 2022 : un stage, deux ans en agence et des missions indépendantes.</p>
        </div>
        <ol className="tl" style={{ listStyle: "none", marginBottom: 0 }}>
          <div className="tl-rail" aria-hidden="true"><div className="tl-fill" /></div>
          {JOBS.map((j) => (
            <li key={j.title + j.period} className="tl-item rv">
              <span className="tl-node" aria-hidden="true" />
              <div className="tl-meta">
                <span>{j.period}</span>
                <span className="tag tag-o" style={{ fontFamily: "var(--font-body)" }}>{j.kind}</span>
              </div>
              <h3 className="tl-title">{j.title}</h3>
              <p className="tl-org">{j.org}</p>
              <ul className="bul">
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="chips" style={{ margin: 0, padding: 0, listStyle: "none" }} aria-label="Projets">
                {j.chips.map((c) => (
                  <li key={c} className="chip-s">{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
