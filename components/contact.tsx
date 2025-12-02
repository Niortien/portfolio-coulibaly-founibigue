import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
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
    value: "+225 0767543571 / 0544613325",
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
  return (
    <section id="contact" className="py-16 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Contactez-<span className="gradient-text ">moi</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg  font-lora lg:text-xl">{info.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm lg:text-base text-muted-foreground">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="animate-fade-in text-center">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-orbitron">Travaillons ensemble</CardTitle>
              <CardDescription className="text-base lg:text-lg font-lora">
                Je suis disponible pour des missions en développement web Full-Stack
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="mailto:niortiencoulibaly2001@gmail.com">
                  <Mail className="w-5 font-lora h-5" />
                  Envoyer un email
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="tel:+2250767543571">
                  <Phone className="w-5 h-5" />
                  Appeler
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Suivez-moi sur</p>
            <div className="flex justify-center gap-4">
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 lg:mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm lg:text-base text-muted-foreground">
          © 2024 COULIBALY Founibigue Issa. Tous droits réservés.
        </p>
      </footer>
    </section>
  );
};
