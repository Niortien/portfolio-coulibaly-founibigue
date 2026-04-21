"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "niortiencoulibaly2001@gmail.com",
    href: "mailto:niortiencoulibaly2001@gmail.com",
    color: "#22C55E",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 0767543571 / 0544613325",
    href: "tel:+2250767543571",
    color: "#4ADE80",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Cocody Faya, Abidjan, Côte d'Ivoire",
    href: "#",
    color: "#84CC16",
  },
];

export const Contact = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <motion.div
            ref={titleRef}
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 font-heading">
              Contactez-<span className="gradient-text">moi</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 lg:mb-14">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div
                    className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: info.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-heading">{info.label}</p>
                  {info.href !== "#" ? (
                    <a
                      href={info.href}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors wrap-break-word font-body"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/80 font-body">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(16,185,129,0.04) 100%)" }} />
            <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
            <div className="relative z-10 py-12 px-8 lg:px-14 text-center">
              <div className="flex items-center justify-center gap-2 mb-5">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary font-heading">Disponible</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3 font-heading">Travaillons ensemble</h3>
              <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto font-body">
                Je suis disponible pour des missions en développement web Full-Stack. Contactez-moi pour démarrer votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 neural-border hover-glow font-body" asChild>
                  <Link href="mailto:niortiencoulibaly2001@gmail.com">
                    <Mail className="w-4 h-4" />
                    Envoyer un email
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 hover-glow font-body border-border/60" asChild>
                  <a href="tel:+2250767543571">
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-muted-foreground text-sm mb-5 font-body">Suivez-moi sur</p>
            <div className="flex justify-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover-glow border-border/50" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover-glow border-border/50" asChild>
                <a href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-16 lg:mt-24 pt-8 border-t border-border/30 text-center">
        <p className="text-sm text-muted-foreground font-body">
          © 2025 COULIBALY Founibigue Issa — Développeur Full-Stack
        </p>
      </footer>
    </section>
  );
};
