"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "niortiencoulibaly2001@gmail.com",
    href: "mailto:niortiencoulibaly2001@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 07 67 54 35 71",
    href: "tel:+2250767543571",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Cocody Faya, Abidjan, Côte d'Ivoire",
    href: "#",
  },
];

export const Contact = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          <motion.div
            ref={titleRef}
            className="mb-14 lg:mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">06 — Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mt-3">
              Travaillons ensemble
            </h2>
          </motion.div>

          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border mb-6 lg:mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 ${index !== contactInfo.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Icon className="w-4 h-4 text-primary mb-4" />
                  <p className="eyebrow mb-2">{info.label}</p>
                  {info.href !== "#" ? (
                    <a href={info.href} className="text-sm text-foreground/85 hover:text-primary transition-colors break-words">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/85">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="border border-border bg-secondary/30 p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="max-w-lg">
              <span className="eyebrow">Disponible</span>
              <h3 className="text-2xl lg:text-3xl font-display font-semibold mt-3 mb-3">
                Un projet en tête ?
              </h3>
              <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                Je suis disponible pour des missions en développement web Full-Stack.
                Contactez-moi pour en discuter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="mailto:niortiencoulibaly2001@gmail.com">
                    <Mail className="w-4 h-4" />
                    Envoyer un email
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="tel:+2250767543571">
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button size="icon" variant="outline" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href="https://github.com/Niortien" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <footer className="mt-16 lg:mt-24 pt-8 border-t border-border max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Coulibaly Founibigue Issa — Développeur Full-Stack
        </p>
      </footer>
    </section>
  );
};
