import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  description: "Développeur Full-Stack basé à Abidjan. Conception et livraison de systèmes de gestion, back-offices et plateformes web en production pour entreprises, commerces et institutions.",
  keywords: ["développeur web", "portfolio", "Coulibaly Founibigue Issa Niortien", "Next.js", "Nest.js", "Abidjan", "Côte d'Ivoire"],
  authors: [{ name: "Coulibaly Founibigue Issa Niortien" }],
  openGraph: {
    title: "Coulibaly Founibigue Issa — Développeur Full-Stack",
    description: "Conception et livraison de systèmes de gestion, back-offices et plateformes web en production.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||"light";document.documentElement.classList.add(t);}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
