import { CheckCircleOutline as CheckIcon, Security as ShieldIcon, StarBorder as ExcellenceIcon, TrendingUp as ValueIcon } from '@mui/icons-material'

const coreValues = [
  {
    icon: <ShieldIcon className="text-brand-orange w-6 h-6" />,
    title: 'Absolute Transparency',
    description: 'We believe in honest partnerships, clear roadmaps, and realistic delivery expectations without hidden overheads.'
  },
  {
    icon: <ExcellenceIcon className="text-brand-orange w-6 h-6" />,
    title: 'Elite Technical Depth',
    description: 'Our consultants hold top-tier certifications in Oracle, Workday, and advanced systems integration patterns.'
  },
  {
    icon: <ValueIcon className="text-brand-orange w-6 h-6" />,
    title: 'Value-First Engineering',
    description: 'We prioritize reducing technical debt and streamlining architectures to maximize client return on investment.'
  }
]

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-mud relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 rounded-full bg-brand-tan/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Headline & Main Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-black border border-brand-tan/10 text-brand-tan text-xs font-semibold uppercase tracking-wider">
              About Escala de services
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream leading-[1.2]">
              Bridging the Gap Between <span className="text-brand-orange">Strategy</span> & <span className="text-brand-tan">Architectural Execution</span>
            </h2>

            <p className="text-brand-cream/75 text-base md:text-lg leading-relaxed">
              Founded in 2016, Escala de services was established to redefine how enterprises adopt cloud technologies. Instead of standard &quot;cookie-cutter&quot; templates, we build bespoke migration roadmaps, cloud custom integrations, and data systems.
            </p>

            <p className="text-brand-cream/65 text-sm md:text-base leading-relaxed">
              We focus on high-impact projects. Whether automating financial workflows via Workday, deploying high-availability Oracle cloud infrastructure, or orchestrating real-time integrations, we deliver with speed and architectural clarity.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="text-brand-orange mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-tan text-sm">Global Delivery Model</h4>
                  <p className="text-brand-cream/60 text-xs mt-0.5">Dual-shore execution across Europe and Asia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="text-brand-orange mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-tan text-sm">99.8% Success Rate</h4>
                  <p className="text-brand-cream/60 text-xs mt-0.5">Rigorous quality checkpoints at every milestone.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Value Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-brand-black/40 border border-brand-tan/10 p-8 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-brand-tan border-b border-brand-mud-light pb-4">
                Our Core Philosophy
              </h3>
              <p className="text-brand-cream/77 text-sm leading-relaxed">
                &quot;We do not just install software; we align technology to business velocity. If a system is not actively accelerating your operations, it is creating friction. We eradicate friction.&quot;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center font-bold text-brand-orange text-sm">
                  ES
                </div>
                <div>
                  <h5 className="font-bold text-brand-tan text-sm">Escala Leadership Panel</h5>
                  <p className="text-brand-cream/50 text-xs">Enterprise Advisory Advisory LLP</p>
                </div>
              </div>
            </div>

            {/* Value Items Loop */}
            <div className="space-y-4">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 p-5 rounded-xl bg-brand-black/25 hover:bg-brand-black/40 border border-transparent hover:border-brand-orange/20 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-brand-mud-light group-hover:bg-brand-orange/10 transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-tan group-hover:text-brand-orange transition-colors text-base">
                      {val.title}
                    </h4>
                    <p className="text-brand-cream/60 text-sm mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
