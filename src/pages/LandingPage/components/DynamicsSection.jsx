import { ChevronRight as ArrowIcon } from '@mui/icons-material'

export const DynamicsSection = () => {
  const handleScrollClick = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="insights"
      className="py-24 bg-brand-black border-t border-brand-mud-light relative"
    >
      {/* Background decorations */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[300px] h-[300px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-brand-cream tracking-widest uppercase">
            CHANGING DYNAMICS
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto" />
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: SERVICES */}
          <div
            onClick={() => handleScrollClick('#services')}
            className="group relative h-[420px] rounded-2xl bg-brand-tan overflow-hidden border border-brand-tan/10 hover:border-brand-orange/45 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-mud/60 to-transparent z-10" />
            <div className="absolute top-[20%] left-[20%] w-[180px] h-[180px] bg-brand-orange/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-500" />

            {/* SVG Network Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#29231f_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />

            {/* Ambient Illustration simulation (Abstract Sphere) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-brand-orange rounded-full -translate-x-1/2 -translate-y-1/2" />

                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-brand-mud -translate-y-1/2 -translate-x-1/2 rotate-0" />
                <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-brand-mud -translate-y-1/2 -translate-x-1/2 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-brand-mud -translate-y-1/2 -translate-x-1/2 rotate-90" />
                <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-brand-mud -translate-y-1/2 -translate-x-1/2 rotate-135" />

                {/* Outer Nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-brand-tan rounded-full"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Title Label */}
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
                EXPLORE NOW
              </span>
              <h3 className="text-2xl font-black text-black tracking-widest uppercase">SERVICES</h3>
            </div>
          </div>

          {/* Card 2: SOLUTIONS */}
          <div
            onClick={() => handleScrollClick('#solutions')}
            className="group relative h-[420px] rounded-2xl bg-brand-tan overflow-hidden border border-brand-tan/10 hover:border-brand-orange/45 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-mud/60 to-transparent z-10" />
            <div className="absolute top-[30%] right-[20%] w-[160px] h-[160px] bg-brand-orange/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-500" />

            {/* SVG Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#29231f_1px,transparent_1px),linear-gradient(to_bottom,#29231f_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />

            {/* Ambient Illustration simulation (Abstract Digital Transformations blocks) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 flex flex-wrap gap-3 justify-center items-center">
              <div className="w-10 h-10 rounded bg-brand-black border border-brand-orange/20 flex items-center justify-center text-brand-tan text-xs font-bold shadow-inner group-hover:border-brand-orange/50 transition-colors">
                ERP
              </div>
              <div className="w-10 h-10 rounded bg-brand-black border border-brand-orange/20 flex items-center justify-center text-brand-tan text-xs font-bold shadow-inner group-hover:border-brand-orange/50 transition-colors">
                HCM
              </div>
              <div className="w-10 h-10 rounded bg-brand-black border border-brand-orange/20 flex items-center justify-center text-brand-tan text-xs font-bold shadow-inner group-hover:border-brand-orange/50 transition-colors">
                SCM
              </div>
              <div className="w-10 h-10 rounded bg-brand-black border border-brand-orange/20 flex items-center justify-center text-brand-tan text-xs font-bold shadow-inner group-hover:border-brand-orange/50 transition-colors">
                BI
              </div>
            </div>

            {/* Title Label */}
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
                INTEGRATED SYSTEMS
              </span>
              <h3 className="text-2xl font-black text-black tracking-widest uppercase">
                SOLUTIONS
              </h3>
            </div>
          </div>

          {/* Card 3: INSIGHTS */}
          <div
            onClick={() => handleScrollClick('#contact')}
            className="group relative h-[420px] rounded-2xl bg-brand-tan overflow-hidden border border-brand-tan/10 hover:border-brand-orange/45 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end p-8"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-mud/60 to-transparent z-10" />
            <div className="absolute top-[25%] left-[25%] w-[180px] h-[180px] bg-brand-orange/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-500" />

            {/* SVG Dot Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#29231f_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />

            {/* Center Content for Insights */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange border border-brand-orange/30 flex items-center justify-center text-brand-black group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <ArrowIcon className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-black text-black tracking-wider uppercase">
                  INSIGHTS
                </h4>
                <p className="text-xs font-semibold text-brand-tan tracking-widest uppercase group-hover:text-brand-orange transition-colors">
                  Explore Now
                </p>
              </div>
            </div>

            {/* Subtle light bulb overlay vector */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-28 h-28 border border-brand-tan/10 rounded-full opacity-25 group-hover:opacity-45 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicsSection
