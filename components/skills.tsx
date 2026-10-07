const GROUPS = [
  { title: "Front-end", code: "FE", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Framer Motion", "GSAP"] },
  { title: "Back-end", code: "BE", items: ["NestJS", "Node.js", "Express.js", "Spring Boot", "Java", "API REST", "JWT", "CQRS"] },
  { title: "Données", code: "DB", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis", "Prisma", "TypeORM", "MERISE · UML"] },
  { title: "Infra & outils", code: "OPS", items: ["VPS Linux (Hostinger)", "Nginx", "PM2", "Vercel", "Docker", "Git · GitHub", "Jira", "Claude Code"] },
];

/** Stack technique en quatre blocs, séparés par des filets. */
export function Skills() {
  return (
    <section id="stack" className="sec" aria-labelledby="stack-titre">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">04 — Stack technique</div>
          <h2 id="stack-titre" className="h2">Les outils pour livrer, du schéma au serveur.</h2>
          <p className="lead">Ce que j&rsquo;utilise au quotidien pour concevoir, développer, déployer et maintenir des applications.</p>
        </div>
        <div className="stack rv">
          {GROUPS.map((g) => (
            <div key={g.title} className="sg">
              <div className="sg-h">
                <h3 className="sg-t" style={{ margin: 0 }}>{g.title}</h3>
                <span className="mono dim" style={{ fontSize: 12.5 }} aria-hidden="true">{g.code}</span>
              </div>
              <ul className="sg-items" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {g.items.map((t) => (
                  <li key={t} className="tech">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="rv" style={{ margin: "24px 0 0", color: "#93A0B0", fontSize: 15 }}>Également : Flutter (Dart), Laravel, Python pour l&rsquo;analyse de données, WinDev.</p>
      </div>
    </section>
  );
}
