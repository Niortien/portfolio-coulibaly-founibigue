import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Navigation } from "@/components/navigation";
import { ProjectIndex } from "@/components/project-index";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <div className="pf" style={{ minHeight: "100vh" }}>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Projects />
        <ProjectIndex />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
