import { useRef } from 'react'
import { West as LeftArrow, East as RightArrow } from '@mui/icons-material'

const clientLogos = [
  { name: 'Parker' },
  { name: 'Capital Health' },
  { name: 'Gardenspot' },
  { name: 'Lambeth' },
  { name: 'Adventist' },
  { name: 'Shaner' },
  { name: 'KU' },
  { name: 'MGroup' }
]

const stories = [
  {
    tag: 'Cloud ERP Migration',
    title: 'Reconstruct Achieves Seamless Global Scalability and Cost Optimization',
    desc: 'Escala successfully migrated Reconstruct\'s legacy workloads to a unified Oracle Cloud ecosystem, resolving latency issues.',
    statValue: '50%',
    statLabel: 'Infrastructure Cost Cut'
  },
  {
    tag: 'Workday Financials',
    title: 'Major UK Ferry Port Transforms Operations with Integrated Systems',
    desc: 'Connecting maritime log entries to real-time Workday ledger lines. Completely eliminated paper reconciliation and doubled audit speeds.',
    statValue: '2x',
    statLabel: 'Audit Pipeline Speed'
  },
  {
    tag: 'Analytics & BI',
    title: 'Enabling Decades of Growth: Leading International Port Achieves Scale',
    desc: 'Deploying custom Power BI ETL pipelines that feed ship-to-shore analytics modules directly to the leadership decision dashboards.',
    statValue: '18h',
    statLabel: 'Saved Per Ship Scoping'
  },
  {
    tag: 'Managed Operations',
    title: 'Government Owned Waterworks Modernizes Dispatch & Field Systems',
    desc: 'Set up automated quality engineering controls and 24/7 helpdesk support channels, ensuring continuous supply delivery.',
    statValue: '99.99%',
    statLabel: 'System Core Uptime'
  }
]

export const SuccessStories = () => {
  const carouselRef = useRef(null)

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-brand-black relative z-10 border-t border-brand-mud-light">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Our Customers Logo Grid */}
        <div className="space-y-8">
          <div className="text-left">
            <h3 className="text-xl font-extrabold text-brand-cream uppercase tracking-widest">
              Our Customers
            </h3>
          </div>
          
          <div className="relative overflow-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 w-max animate-marquee">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={idx}
                  className="w-40 h-16 rounded-xl bg-brand-mud/40 border border-brand-tan/5 hover:border-brand-orange/30 transition-all flex items-center justify-center p-3 select-none group flex-shrink-0 cursor-pointer"
                >
                  <span className="text-[11px] font-black text-brand-cream/45 tracking-widest uppercase group-hover:text-brand-orange transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Slider */}
        <div className="space-y-8">
          
          {/* Header Row with Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream tracking-tight">
                Escala Success Stories & <span className="text-brand-orange">Customer Outcomes</span>
              </h2>
              <p className="text-brand-cream/60 text-sm md:text-base">
                Enterprise cloud transformation stories.
              </p>
            </div>

            {/* Slider Action Buttons */}
            <div className="flex gap-3.5">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-brand-tan/15 text-brand-tan hover:border-brand-orange hover:text-brand-orange flex items-center justify-center transition-all cursor-pointer bg-brand-mud/35"
                aria-label="Previous slide"
              >
                <LeftArrow fontSize="small" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-brand-tan/15 text-brand-tan hover:border-brand-orange hover:text-brand-orange flex items-center justify-center transition-all cursor-pointer bg-brand-mud/35"
                aria-label="Next slide"
              >
                <RightArrow fontSize="small" />
              </button>
            </div>
          </div>

          {/* Cards List (Scrollable Row) */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="w-[320px] md:w-[360px] flex-shrink-0 snap-start p-8 rounded-2xl bg-brand-mud/60 border border-brand-tan/10 hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between h-[380px] shadow-lg relative group"
              >
                {/* Visual badge top */}
                <div>
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block mb-4 bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-1 rounded-full w-fit">
                    {story.tag}
                  </span>
                  
                  <h4 className="text-base md:text-lg font-bold text-brand-tan leading-snug group-hover:text-brand-orange transition-colors duration-200">
                    {story.title}
                  </h4>
                  
                  <p className="text-brand-cream/65 text-xs md:text-sm mt-4 leading-relaxed line-clamp-4">
                    {story.desc}
                  </p>
                </div>

                {/* Key metric row at bottom */}
                <div className="pt-6 border-t border-brand-mud-light flex items-center gap-4">
                  <span className="text-2xl font-black text-brand-cream tracking-tight">
                    {story.statValue}
                  </span>
                  <span className="text-[11px] font-semibold text-brand-tan uppercase tracking-wide max-w-[150px] leading-tight">
                    {story.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default SuccessStories
