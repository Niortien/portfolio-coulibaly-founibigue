import type { Metadata } from "next";
import { Geist, Geist_Mono,Orbitron,Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Coulibaly Founibigue Issa Niortien",
  description: "Développeur web passionné, spécialisé dans la création d'applications modernes et performantes. Découvrez mes projets, compétences et parcours professionnel.",
  keywords: ["développeur web", "portfolio", "Coulibaly Founibigue Issa Niortien", "web development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Coulibaly Founibigue Issa Niortien" }],
  openGraph: {
    title: "Portfolio - Coulibaly Founibigue Issa Niortien",
    description: "Développeur web passionné, spécialisé dans la création d'applications modernes et performantes.",
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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${lora.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
