import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Coulibaly Founibigue Issa — Développeur Full-Stack",
  description:
    "Développeur Full-Stack basé à Abidjan. Conception et livraison de systèmes de gestion, back-offices et plateformes web en production pour entreprises, commerces et institutions.",
  keywords: ["développeur web", "portfolio", "Coulibaly Founibigue Issa Niortien", "Next.js", "Nest.js", "Abidjan", "Côte d'Ivoire"],
  authors: [{ name: "Coulibaly Founibigue Issa Niortien" }],
  openGraph: {
    title: "Coulibaly Founibigue Issa — Développeur Full-Stack",
    description: "Conception et livraison de systèmes de gestion, back-offices et plateformes web en production.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport = { themeColor: "#0B0F14" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
