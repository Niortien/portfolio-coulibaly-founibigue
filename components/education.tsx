interface Entry {
  year: string;
  title: string;
  detail: string;
  badge?: string;
}

const DIPLOMES: Entry[] = [
  { year: "2021 — 2024", title: "Licence 3 MIAGE", detail: "Méthodes Informatiques Appliquées à la Gestion des Entreprises · Université Polytechnique de Bingerville" },
  { year: "2021", title: "Baccalauréat série D", detail: "Sciences exactes, avec mention · Lycée Moderne 1 Abobo" },
];

const CERTIFICATIONS: Entry[] = [
  { year: "Sept. 2026", title: "Certification Java — Programmation orientée objet", detail: "Udemy · POO, JVM, design patterns, collections", badge: "Obtenue" },
  { year: "Fév. — Juil. 2025", title: "Développement Full-Stack Next.js & NestJS", detail: "Lunion-Lab · APIs NestJS robustes et front-end Next.js" },
  { year: "2023 — 2024", title: "Bootcamp Full-Stack JavaScript (MERN)", detail: "GOMYCODE · 9 mois · MongoDB, Express.js, React, Node.js" },
  { year: "2022", title: "Python pour l’analyse de données", detail: "GOMYCODE · 3 mois · Pandas, NumPy, Matplotlib" },
];

function Column({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <div className="rv">
      <h3 className="ed-h" style={{ margin: 0 }}>{heading}</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {entries.map((e) => (
          <li key={e.title} className="ed-item">
            <span className="ed-year">{e.year}</span>
            <div>
              <h4 className="ed-t">
                {e.title}
                {e.badge && <span className="badge">{e.badge}</span>}
              </h4>
              <p className="ed-s">{e.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Diplômes et certifications, en deux colonnes. */
export function Education() {
  return (
    <section id="formation" className="sec" aria-labelledby="formation-titre">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">05 — Formation</div>
          <h2 id="formation-titre" className="h2">Formation &amp; certifications</h2>
        </div>
        <div className="edu">
          <Column heading="Diplômes" entries={DIPLOMES} />
          <Column heading="Certifications & formations" entries={CERTIFICATIONS} />
        </div>
      </div>
    </section>
  );
}
