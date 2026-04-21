"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ArrowRight, Code2, Server, Layers, Github } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "9+", label: "Projets livrÃ©s" },
  { value: "2", label: "Stages pro" },
  { value: "3+", label: "Ans d'expÃ©rience" },
];

const floatingBadges = [
  { text: "Next.js ⚡", color: "#4ADE80", delay: 0, pos: "top-0 -right-8 lg:-right-14", anim: { y: [0, -8, 0] } },
  { text: "Nest.js 🔥", color: "#86EFAC", delay: 0.5, pos: "-bottom-4 -left-8 lg:-left-14", anim: { y: [0, 8, 0] } },
  { text: "PostgreSQL", color: "#84CC16", delay: 1, pos: "top-1/2 -right-2 lg:-right-20", anim: { x: [0, 6, 0] } },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 neural-grid relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* â”€â”€ LEFT COLUMN â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Available badge */}
            <motion.div
              className="flex items-center gap-2.5 mb-7"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <Badge
                variant="outline"
                className="text-primary border-primary/30 bg-primary/5 font-body text-xs tracking-wide"
              >
                Disponible pour de nouvelles opportunitÃ©s
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-foreground">COULIBALY</span>
              <br />
              <span className="gradient-text">Founibigue Issa</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-lg sm:text-xl text-muted-foreground font-heading">
                <Code2 className="w-5 h-5 text-primary" />
                <span>DÃ©veloppeur</span>
                <span className="text-primary font-semibold">Full-Stack</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                <Server className="w-3.5 h-3.5 text-violet-400" />
                <span>Abidjan, CÃ´te d&apos;Ivoire</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed font-body"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              DÃ©veloppeur Full-Stack avec expÃ©rience en stage chez{" "}
              <span className="text-primary font-semibold">Lunion-Lab</span>, oÃ¹ j&apos;ai livrÃ©{" "}
              <span className="text-primary font-semibold">9+ applications web</span> en production.
              MaÃ®trise du stack{" "}
              <span className="text-primary font-semibold">Next.js / Nest.js / PostgreSQL</span> et
              en cours de certification{" "}
              <span className="text-accent font-semibold">Java ☕</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mb-9 pb-8 border-b border-border/30"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-bold gradient-text font-heading">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-body mt-0.5">{stat.label}</span>
                </div>
              ))}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold gradient-text-gold font-heading">Java</span>
                <span className="text-xs text-muted-foreground font-body mt-0.5">En certification</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <a href="mailto:niortiencoulibaly2001@gmail.com">
                <Button size="lg" className="gap-2 neural-border hover-glow font-body">
                  <Mail className="w-4 h-4" />
                  Me contacter
                </Button>
              </a>
              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 hover-glow group font-body border-border/60"
                >
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Contact row */}
            <motion.div
              className="flex flex-wrap gap-5 text-sm text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Cocody Faya, Abidjan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+225 0767543571</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="hidden sm:inline">niortiencoulibaly2001@gmail.com</span>
              </div>
              <a
                href="https://github.com/Niortien"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-primary" />
                <span>github.com/Niortien</span>
              </a>
            </motion.div>
          </motion.div>

          {/* â”€â”€ RIGHT COLUMN â€” Image â”€â”€ */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/25"
                style={{ scale: 1.18 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/15"
                style={{ scale: 1.35 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 pointer-events-none" />

              {/* Photo */}
              <div className="relative z-10">
                <div className="absolute -inset-1 neural-gradient rounded-full opacity-50 blur-sm" />
                <Image
                  src="/assets/image/ma_photo.jpeg"
                  alt="COULIBALY Founibigue Issa"
                  width={320}
                  height={320}
                  className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-[280px] lg:h-[280px] rounded-full object-cover border-4 border-background shadow-2xl"
                  priority
                />
              </div>

              {/* Floating tech pills */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${badge.pos} z-20 glass rounded-xl px-3 py-1.5 text-xs font-semibold shadow-lg`}
                  style={{ color: badge.color, border: `1px solid ${badge.color}30` }}
                  animate={badge.anim}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                >
                  {badge.text}
                </motion.div>
              ))}

              {/* Stack indicator */}
              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 glass rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-foreground/80 font-body whitespace-nowrap">
                  Full-Stack Developer
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
