import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ValueProposition } from "@/components/landing/value-proposition"
import { Pricing } from "@/components/landing/pricing"
import { Services } from "@/components/landing/services"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen text-tech-white selection:bg-tech-blue selection:text-white">
      <Header />
      <Hero />
      <ValueProposition />
      <Pricing />
      <Services />
      <Footer />
    </main>
  )
}
