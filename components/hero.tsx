import { ArrowUpRight } from "@/components/icons";

const TITLE = ["Je", "conçois", "et", "livre", "des", "systèmes", "de", "gestion", "qui", "tournent"];
const TITLE_END = ["en", "production."];

const CONSOLE_LINES = [
  { label: "build", cmd: "next build", delay: 1.4 },
  { label: "api", cmd: "nest start --prod", delay: 1.8 },
  { label: "db", cmd: "prisma migrate deploy", delay: 2.2 },
  { label: "proxy", cmd: "nginx -s reload", delay: 2.6 },
  { label: "process", cmd: "pm2 reload all", delay: 3 },
];

/** Ouverture : promesse en une phrase, coordonnées, et une console qui « déploie » en direct. */
export function Hero() {
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" aria-hidden="true" />
      <div
        className="wrap"
        style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px, 5vw, 64px)", paddingTop: "clamp(56px, 9vw, 120px)", paddingBottom: "clamp(56px, 8vw, 104px)" }}
      >
        <div style={{ flex: "1 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          <div className="fade">
            <span className="pill">
              <span className="dot" />
              Disponible — ouvert à un CDI ou à des missions
            </span>
          </div>
          <div className="fade" style={{ display: "flex", alignItems: "center", gap: 16, animationDelay: ".1s" }}>
            <span className="avatar" aria-hidden="true">CF</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 17, lineHeight: 1.3 }}>Coulibaly Founibigue Issa</div>
              <div style={{ fontSize: 14.5, color: "#93A0B0", lineHeight: 1.4 }}>Développeur Full-Stack · Abidjan, Côte d&rsquo;Ivoire</div>
            </div>
          </div>
          <h1 className="disp" style={{ margin: 0, fontSize: "clamp(40px, 6.2vw, 82px)", lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.04em" }}>
            {TITLE.map((w, i) => (
              <span key={w + i}>
                <span className="w" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>{w}</span>{" "}
              </span>
            ))}
            <span className="hl">
              {TITLE_END.map((w, i) => (
                <span key={w}>
                  <span className="w" style={{ animationDelay: `${0.7 + i * 0.08}s` }}>{w}</span>
                  {i === 0 ? " " : null}
                </span>
              ))}
            </span>
          </h1>
          <p className="fade" style={{ margin: 0, maxWidth: 580, fontSize: "clamp(17px, 1.6vw, 19px)", color: "#93A0B0", animationDelay: "1s" }}>
            ERP, caisses, back-offices et plateformes web pour des entreprises, commerces et institutions — du modèle de données jusqu&rsquo;au déploiement.
          </p>
          <div className="fade" style={{ display: "flex", flexWrap: "wrap", gap: 12, animationDelay: "1.15s" }}>
            <a className="btn btn-p" href="#projets">
              Voir mes projets
              <ArrowUpRight />
            </a>
            <a className="btn btn-g" href="mailto:niortiencoulibaly2001@gmail.com">niortiencoulibaly2001@gmail.com</a>
          </div>
          <div className="fade mono" style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", fontSize: 13.5, color: "#7D8A9B", animationDelay: "1.3s" }}>
            <span>Cocody Faya, Abidjan</span>
            <a href="tel:+2250767543571" style={{ color: "#93A0B0", textDecoration: "none" }}>+225 07 67 54 35 71</a>
            <a href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer" style={{ color: "#93A0B0", textDecoration: "none" }}>github.com/Niortien</a>
          </div>
        </div>

        <div className="fade" style={{ flex: "1 1 400px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16, animationDelay: ".45s" }}>
          <div className="console mono" role="img" aria-label="Console de déploiement : build, API, base de données, proxy et processus en ligne, 17 applications en production">
            <div className="console-h">
              <span>deploy.log — production</span>
              <span className="live" style={{ color: "#93A0B0" }}><i />live</span>
            </div>
            <div className="console-b" aria-hidden="true">
              <div className="ln" style={{ gridTemplateColumns: "auto minmax(0, 1fr)", animationDelay: ".9s" }}>
                <span style={{ color: "var(--accent)" }}>~/projets $</span>
                <span>git push origin main</span>
              </div>
              {CONSOLE_LINES.map((l) => (
                <div key={l.label} className="ln" style={{ animationDelay: `${l.delay}s` }}>
                  <span className="dim">{l.label}</span>
                  <span>{l.cmd}</span>
                  <span className="ok">ok</span>
                </div>
              ))}
              <div className="ln" style={{ gridTemplateColumns: "auto minmax(0, 1fr)", animationDelay: "3.5s", marginTop: 6 }}>
                <span className="ok">✓ en ligne</span>
                <span>17 applications en production</span>
              </div>
              <div className="ln" style={{ gridTemplateColumns: "auto", animationDelay: "3.9s" }}>
                <span><span style={{ color: "var(--accent)" }}>~/projets $</span><span className="caret" /></span>
              </div>
            </div>
          </div>
          <div className="chain mono" aria-label="Stack principale : Next.js, NestJS, PostgreSQL, VPS">
            <span className="node">Next.js</span><span className="wire" />
            <span className="node">NestJS</span><span className="wire d2" />
            <span className="node">PostgreSQL</span><span className="wire d3" />
            <span className="node">VPS Linux</span>
          </div>
        </div>
      </div>
    </header>
  );
}
