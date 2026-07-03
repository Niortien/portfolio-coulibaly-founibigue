"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight, Github } from "lucide-react";
import Image from "next/image";

const statusRows = [
  { label: "Statut", value: "Disponible pour de nouvelles missions" },
  { label: "Basé à", value: "Abidjan, Côte d'Ivoire" },
  { label: "Développeur depuis", value: "2022" },
  { label: "Stack principale", value: "Next.js · Nest.js · PostgreSQL" },
  { label: "Livré", value: "9+ applications en production" },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 pb-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-14 items-start max-w-6xl mx-auto">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="flex items-center gap-2.5 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="eyebrow">Développeur Full-Stack — Dossier professionnel</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold mb-6 leading-[0.98] tracking-tight"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Coulibaly
              <br />
              <span className="text-primary">Founibigue Issa</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Je conçois et livre des systèmes de gestion, back-offices et plateformes web pour de
              vraies entreprises — ERP, caisses, back-offices immobiliers, associatifs et
              universitaires. Développeur Full-Stack chez <span className="text-foreground font-medium">Lunion-Lab</span>,
              où j&apos;ai livré <span className="text-foreground font-medium">9+ applications</span> en
              production sur le stack <span className="text-foreground font-medium">Next.js / Nest.js / PostgreSQL</span>.
            </motion.p>

            {/* Status readout — signature panel */}
            <motion.div
              className="border border-border mb-10 max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {statusRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 px-4 py-3 ${i !== statusRows.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="eyebrow shrink-0">{row.label}</span>
                  <span className="text-sm font-body text-right text-foreground/90">{row.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mb-9"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <a href="mailto:niortiencoulibaly2001@gmail.com">
                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Me contacter
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="gap-2 group">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Cocody Faya, Abidjan
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +225 07 67 54 35 71
              </span>
              <a href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 ink-link hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" />
                github.com/Niortien
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Photo ── */}
          <motion.div
            className="flex justify-center lg:justify-end lg:pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-[300px]">
              <div className="register-mark p-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Image
                    src="/assets/image/ma_photo.jpeg"
                    alt="Coulibaly Founibigue Issa"
                    fill
                    sizes="300px"
                    className="object-cover grayscale-[15%]"
                    priority
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-1 mt-3">
                <span className="eyebrow">Réf. CI-DEV-01</span>
                <span className="eyebrow">Abidjan, 2026</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
