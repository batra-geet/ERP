import { useState, useEffect } from 'react'

const slides = [
  {
    header: 'MIGRATE TO THE CLOUD CORE',
    subheader: 'ENTERPRISE CLOUD TRANSFORMATION',
    desc: 'We deliver cost-effective, resilient solutions in key functional areas across Cloud ERP, Financials, HCM, and Supply Chain systems.'
  },
  {
    header: 'DATA ANALYTICS — POWER BI, LOOKER, TABLEAU',
    subheader: 'DECISION INTELLIGENCE PORTAL',
    desc: 'Discover, interpret, and analyze complex data patterns to entail effective and actionable decision-making for enterprise leadership.'
  },
  {
    header: 'FULFILL SYSTEM ARCHITECTURE NEEDS',
    subheader: 'ORACLE & WORKDAY EXPERT PANEL',
    desc: 'Get comprehensive and value-based delivery through a diverse panel of certified ERP consultants and system configuration directors.'
  },
  {
    header: 'LEGACY MODERNIZATION & EVOLUTION',
    subheader: 'SYSTEM INTEGRATIONS & MIDDLEWARE',
    desc: 'We deliver new application development, custom API pipeline expansions, and legacy system modernization to drive corporate agility.'
  }
]

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Glow Spheres */}
        <div className="absolute top-[15%] right-[20%] w-[350px] h-[350px] bg-brand-orange/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />
        
        {/* Tech Grid Matrix */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#29231f_1px,transparent_1px),linear-gradient(to_bottom,#29231f_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-25" />
        
        {/* Slanted overlay block representing digital connection mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-mud/60 to-brand-black/90 mix-blend-multiply" />
      </div>

      {/* Slide Text Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center text-left">
        <div className="relative min-h-[250px] md:min-h-[220px]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ${
                idx === currentSlide
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              {/* Stacked Headings in Uppercase */}
              <h3 className="text-brand-orange text-sm md:text-base font-extrabold tracking-widest uppercase mb-2">
                {slide.subheader}
              </h3>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wider leading-none mb-6 max-w-4xl uppercase">
                {slide.header}
              </h2>

              {/* Slide Description */}
              <p className="text-brand-cream/80 text-sm md:text-lg max-w-2xl leading-relaxed">
                {slide.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center Bottom Slide Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'bg-brand-orange scale-110' : 'bg-white hover:bg-brand-tan/80'
              }`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
