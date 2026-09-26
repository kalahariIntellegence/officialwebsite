import { AnnouncementBar } from './components/AnnouncementBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Technology } from './components/Technology'
import { PlatformStatement } from './components/PlatformStatement'
import { TechnologyAncestors } from './components/TechnologyAncestors'
import { Research } from './components/Research'
import { IntelligenceStack } from './components/IntelligenceStack'
import { Systems } from './components/Systems'
import { Deployment } from './components/Deployment'
import { Industries } from './components/Industries'
import { AfricaSection } from './components/AfricaSection'
import { Insights } from './components/Insights'
import { CompanyStatement } from './components/CompanyStatement'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:border focus:border-line focus:bg-white focus:px-4 focus:py-2 focus:text-[14px]"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Technology />
        <PlatformStatement />
        <TechnologyAncestors />
        <Research />
        <IntelligenceStack />
        <Systems />
        <Deployment />
        <Industries />
        <AfricaSection />
        <Insights />
        <CompanyStatement />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
