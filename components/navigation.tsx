const LINKS = [
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#stack", label: "Stack" },
  { href: "#formation", label: "Formation" },
];

/** Barre collante : monogramme, ancres de sections, bouton de contact. */
export function Navigation() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, height: 72 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#E9EDF2", minHeight: 44 }}>
          <span
            className="disp"
            style={{ width: 36, height: 36, borderRadius: 10, background: "var(--accent)", color: "#0B0F14", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em" }}
          >
            CF
          </span>
          <span style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>Coulibaly F. Issa</span>
        </a>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {LINKS.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="btn btn-p" href="#contact" style={{ minHeight: 44, padding: "0 18px", fontSize: 14.5 }}>
          Me contacter
        </a>
      </div>
    </nav>
  );
}
