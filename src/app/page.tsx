import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}
