export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1F2731" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, paddingTop: 28, paddingBottom: 28, fontSize: 14, color: "#7D8A9B" }}>
        <span>© 2026 Coulibaly Founibigue Issa — Développeur Full-Stack, Abidjan</span>
        <a href="#top" style={{ color: "#93A0B0", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>
          Haut de page ↑
        </a>
      </div>
    </footer>
  );
}
