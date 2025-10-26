import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WorkflowSection } from "@/components/workflow-section"
import { ProjectSection } from "@/components/project-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
