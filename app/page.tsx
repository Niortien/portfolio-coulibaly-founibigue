import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="">
      <ThemeToggle />
      <Navigation/>
      <Hero />
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  );
}
