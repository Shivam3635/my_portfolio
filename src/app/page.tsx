import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { CertificationAndNCC } from "@/components/CertificationAndNCC";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Featured Projects Section */}
        <Projects />

        {/* 6. Hackathons Section */}
        <Hackathons />

        {/* 7. Experience / Leadership Section */}
        <Experience />

        {/* 8. Education Section */}
        <Education />

        {/* 9. Achievements Section */}
        <Achievements />

        {/* 10 & 11. Certification & NCC / Extracurricular */}
        <CertificationAndNCC />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
