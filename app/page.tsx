import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Competencies } from "@/components/portfolio/competencies"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { Experience } from "@/components/portfolio/experience"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <TechStack />
      <Competencies />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
