import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen  flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Photo de profil */}
          <div className="mb-8 lg:mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary-glow rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <Image
                src={'/assets/image/téléchargement (3).jpg'}
                alt="COULIBALY Founibigue Issa"
                width={200}
                height={200}
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>

          <div className="mb-6 lg:mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
              <span className="gradient-text font-orbitron ">COULIBALY</span>
              <br />
              <span className="text-foreground font-orbitron ">Founibigue Issa</span>
            </h1>
            <p className="text-xl sm:text-2xl  font-orbitron lg:text-3xl text-muted-foreground mb-6 lg:mb-8">
              Développeur Web Full-Stack
            </p>
          </div>

          <p className="font-lora text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionné par le développement web moderne avec React, Next.js et les technologies MERN.
            Spécialisé dans la création d&apos;applications web performantes et élégantes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
            <a href="mailto:niortiencoulibaly2001@gmail.com">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Me contacter
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="gap-2">
                Voir mes projets
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm lg:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Cocody Faya, Abidjan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+225 0767543571</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">niortiencoulibaly2001@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
