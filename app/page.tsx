import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Navigation } from "@/components/navigation";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Process />
        <Skills />
        <Education />
      </main>
      <Contact />
    </>
  );
}
