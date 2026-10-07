import { ProjectThumb } from "@/components/project-thumb";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";

interface Featured {
  index: string;
  sector: string;
  context: string;
  title: string;
  image: string;
  fit: "cover" | "contain";
  description: string;
  purpose: string;
  keyValue: string;
  keyLabel: string;
  tasks: string[];
  impact: string;
  stack: string[];
  url: string;
  screen: ReactNode;
}

/* Mini-écrans animés : décoratifs, masqués aux lecteurs d'écran. */
const BARS = [45, 70, 55, 92, 62, 80, 50, 86];
const ACCENT_BARS = new Set([3, 7]);

const analytics = (
  <div className="screen mono" aria-hidden="true">
    <div className="screen-h"><span>tableau de bord analytique</span><span className="live"><i />temps réel</span></div>
    <div className="bars">
      {BARS.map((h, i) => (
        <span key={i} className={ACCENT_BARS.has(i) ? "bar a" : "bar"} style={{ height: `${h}%`, animationDelay: `${i * 0.3}s` }} />
      ))}
    </div>
  </div>
);

const sync = (
  <div className="screen mono" aria-hidden="true">
    <div className="screen-h"><span>boutique · multi-sites</span><span className="live"><i />synchronisé</span></div>
    <div className="sync">
      <span className="node">Caisse</span><span className="wire" /><span className="node">Stock</span><span className="wire d2" /><span className="node">Vitrine</span>
    </div>
  </div>
);

const roles = (
  <div className="screen mono" aria-hidden="true">
    <div className="screen-h"><span>espaces par rôle</span><span>JWT</span></div>
    <div className="tabs"><span className="tab-ind" /><span className="tab">Admin</span><span className="tab">Étudiant</span><span className="tab">Professeur</span></div>
    {[["filière", 0], ["niveau", 0.5], ["matière", 1]].map(([label, delay]) => (
      <div key={label} className="doc"><span>{label}</span><span className="sk" style={{ animationDelay: `${delay}s` }} /></div>
    ))}
  </div>
);

const fleet = (
  <div className="screen mono" aria-hidden="true">
    <div className="screen-h"><span>suivi des interventions</span><span className="live"><i />flotte</span></div>
    <div className="fleet">
      <span>type de panne</span>
      <span className="status"><span className="st st1">Signalée</span><span className="st st2">En cours</span><span className="st st3">Résolue</span></span>
      <span>priorité</span>
      <span>technicien assigné</span>
    </div>
  </div>
);

const FEATURED: Featured[] = [
  {
    index: "01", sector: "ERP · Logistique", context: "Professionnel", title: "Turbo ERP", image: "/assets/image/turbo.png", fit: "contain",
    purpose: "Une entreprise de livraison pilote ses équipes, ses finances et sa logistique depuis un seul logiciel, au lieu de plusieurs fichiers dispersés.",
    description: "Système de gestion intégré qui centralise les opérations, les ressources humaines et les processus métiers.",
    keyValue: "4", keyLabel: "modules métiers développés : RH, finances, logistique et reporting analytique",
    tasks: [
      "Conception d’APIs REST avec NestJS et PostgreSQL",
      "Tableau de bord analytique avec visualisation des données en temps réel",
      "Module financier intégré à l’ERP via des APIs sécurisées (Turbo Finance)",
    ],
    impact: "données de l’entreprise centralisées, temps de traitement des opérations internes réduit.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "MongoDB"],
    url: "https://admin-erp.turbodeliveryapp.com/analystics", screen: analytics,
  },
  {
    index: "02", sector: "Commerce", context: "Freelance", title: "Dri Valé — Gestion boutique", image: "/assets/image/drivale_logo.jpeg", fit: "contain",
    purpose: "Le commerçant encaisse en caisse, voit son stock en temps réel dans ses deux boutiques et présente ses vêtements aux clients sur un site en ligne.",
    description: "Système complet pour une boutique de vêtements à Yopougon : caisse, stock, entrées/sorties et vitrine en ligne.",
    keyValue: "3 en 1", keyLabel: "caisse, stock en temps réel et vitrine en ligne réunis sur une seule plateforme",
    tasks: [
      "Back-end NestJS en CQRS avec Prisma et PostgreSQL : produits, variantes, stock, caisse, rapports",
      "Back-office multi-boutiques : caisse, stock, promotions et journal d’activité",
      "Vitrine Next.js (catalogue, lookbook) et médias produits via Cloudinary",
    ],
    impact: "une seule plateforme pour vendre, suivre le stock et présenter la marque en ligne.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "CQRS"],
    url: "https://dri-vale.online", screen: sync,
  },
  {
    index: "03", sector: "Éducation", context: "Freelance", title: "Biblio UPB — Plateforme universitaire", image: "/assets/image/biblio.png", fit: "contain",
    purpose: "Les étudiants retrouvent leurs documents, notes et informations de scolarité ; les professeurs publient leurs cours ; l’administration gère le tout.",
    description: "Plateforme multi-rôles pour l’Université Polytechnique de Bingerville : documents, scolarité, notes et transport.",
    keyValue: "10", keyLabel: "modules métiers NestJS, servis à 3 espaces : administration, étudiants et professeurs",
    tasks: [
      "API NestJS : documents, filières, niveaux, matières, scolarité, transport, notes, authentification JWT",
      "Trois espaces Next.js dédiés, chacun avec son tableau de bord",
      "Gestion documentaire classée par filière, niveau et matière",
    ],
    impact: "vie universitaire centralisée, charge administrative réduite, ressources plus accessibles.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "JWT"],
    url: "https://univeriste-polytechnique-de-bingerville.vercel.app/", screen: roles,
  },
  {
    index: "04", sector: "Flotte · Maintenance", context: "Professionnel", title: "Maintenance Pro — SATE", image: "/assets/image/mainteance.png", fit: "cover",
    purpose: "Chaque panne d’un véhicule est signalée, assignée à un technicien et suivie jusqu’à sa résolution, site par site.",
    description: "Gestion de la maintenance d’une flotte de véhicules, avec rôles administrateur et responsable de site.",
    keyValue: "6", keyLabel: "spécialités de techniciens suivies ; interventions tracées de la panne à la résolution",
    tasks: [
      "Back-end NestJS, Prisma et PostgreSQL : véhicules, techniciens, interventions, sites, rapports",
      "Front-end Next.js multi-rôles avec tableaux de bord de suivi en temps réel",
      "Types de pannes, priorités, statuts et temps d’intervention",
    ],
    impact: "moins de pannes non traitées et une meilleure disponibilité des véhicules.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "JWT"],
    url: "https://maintenance-indol.vercel.app/", screen: fleet,
  },
];

/** Quatre projets phares : mini-écran animé, chiffre clé, tâches, impact, stack et lien. */
export function Projects() {
  return (
    <section id="projets" className="sec" aria-labelledby="projets-titre">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">01 — Projets phares</div>
          <h2 id="projets-titre" className="h2">Des systèmes livrés, utilisés en production.</h2>
          <p className="lead">Quatre projets représentatifs, conçus de bout en bout : modèle de données, API, interfaces métier et mise en ligne.</p>
        </div>
        <div className="cards">
          {FEATURED.map((p) => (
            <div key={p.title} className="rv">
              <article className="card">
                <ProjectThumb name={p.title} image={p.image} size="lg" fit={p.fit} />
                {p.screen}
                <div className="card-top">
                  <span className="mono idx">{p.index}</span>
                  <span className="tag">{p.sector}</span>
                  <span className="tag tag-o">{p.context}</span>
                </div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.description}</p>
                <p className="impact" style={{ marginTop: -6 }}><b>À quoi il sert —</b> {p.purpose}</p>
                <div className="kf"><span className="kf-v">{p.keyValue}</span><span className="kf-l">{p.keyLabel}</span></div>
                <ul className="bul">
                  {p.tasks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="impact"><b>Pourquoi c&rsquo;est important —</b> {p.impact}</p>
                <ul className="chips" style={{ margin: 0, padding: 0, listStyle: "none" }} aria-label="Technologies">
                  {p.stack.map((s) => (
                    <li key={s} className="chip-s">{s}</li>
                  ))}
                </ul>
                <a className="card-link" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir ${p.title} en ligne`}>
                  Voir en ligne
                  <ArrowUpRight />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
