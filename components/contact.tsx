import { ArrowUpRight } from "@/components/icons";

const MAIL = "niortiencoulibaly2001@gmail.com";

/** Appel final : l'e-mail en grand, trois boutons, coordonnées. L'anneau tourne derrière. */
export function Contact() {
  return (
    <section id="contact" className="sec" style={{ paddingBottom: "clamp(56px, 8vw, 96px)" }} aria-labelledby="contact-titre">
      <div className="wrap">
        <div className="contact rv">
          <div className="ring" aria-hidden="true">
            <svg className="spin" viewBox="0 0 128 128">
              <defs>
                <path id="ringpath" d="M64,64 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
              </defs>
              <text fontFamily="var(--font-mono), monospace" fontSize="10.5" letterSpacing="1.6" fill="#93A0B0">
                <textPath href="#ringpath">DISPONIBLE · FULL-STACK · ABIDJAN · </textPath>
              </text>
            </svg>
            <span className="ring-c"><ArrowUpRight size={26} /></span>
          </div>
          <div className="eyebrow">06 — Contact</div>
          <h2 id="contact-titre" className="h2" style={{ maxWidth: 760 }}>Un poste ou un projet ? Parlons-en.</h2>
          <p className="lead">Disponible pour un poste de développeur Full-Stack ou des missions, à Abidjan ou à distance.</p>
          <div style={{ marginTop: 40 }}>
            <a className="big-mail" href={`mailto:${MAIL}`}>{MAIL}</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <a className="btn btn-p" href={`mailto:${MAIL}`}>
              Envoyer un email
              <ArrowUpRight />
            </a>
            <a className="btn btn-g" href="tel:+2250767543571">Appeler</a>
            <a className="btn btn-g" href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="cinfo">
            <div><div className="ci-l">Téléphone</div><div className="ci-v">+225 07 67 54 35 71 · 05 44 61 33 25</div></div>
            <div><div className="ci-l">Localisation</div><div className="ci-v">Cocody Faya, Abidjan</div></div>
            <div><div className="ci-l">GitHub</div><a className="ci-v" href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>github.com/Niortien</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
