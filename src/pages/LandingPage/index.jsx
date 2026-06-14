import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import About from './components/About'
import DynamicsSection from './components/DynamicsSection'
import Solutions from './components/Solutions'
import InnovationsSection from './components/InnovationsSection'
import SuccessStories from './components/SuccessStories'
import Contact from './components/Contact'

export const LandingPage = () => {
  return (
    <div className="flex flex-col bg-brand-black overflow-x-hidden w-full">
      {/* 1. Hero Slides Header */}
      <Hero />

      {/* 2. Angled Orange Stats Banner */}
      <StatsSection />

      {/* 3. About Us & Core Philosophy */}
      <About />

      {/* 4. Changing Dynamics 3-Card Block */}
      <DynamicsSection />

      {/* 5. Tabbed Detailed Solutions Panels */}
      <Solutions />

      {/* 6. AI Innovations Split & Accordion List */}
      <InnovationsSection />

      {/* 7. Customers Logos & Success Stories Carousel */}
      <SuccessStories />

      {/* 8. Contact Form Scoping Block */}
      <Contact />
    </div>
  )
}

export default LandingPage
