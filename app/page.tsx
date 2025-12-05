import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <Contact />
    </main>
  )
}
