import { Groups as WorkforceIcon, CloudDone as DeliveryIcon, Verified as SuccessIcon, Headphones as SupportIcon } from '@mui/icons-material'

const statsData = [
  {
    value: '300+',
    label: 'Senior Consultants',
    icon: <WorkforceIcon className="text-brand-orange w-6 h-6" />
  },
  {
    value: '150+',
    label: 'Enterprise Cloud Projects',
    icon: <DeliveryIcon className="text-brand-orange w-6 h-6" />
  },
  {
    value: '99.8%',
    label: 'Project Delivery Rate',
    icon: <SuccessIcon className="text-brand-orange w-6 h-6" />
  },
  {
    value: '24/7',
    label: 'Global Support & QA',
    icon: <SupportIcon className="text-brand-orange w-6 h-6" />
  }
]

export const Stats = () => {
  return (
    <section className="py-20 bg-brand-black border-t border-b border-brand-mud-light relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-brand-orange/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Summary Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mud border border-brand-tan/10 text-brand-orange text-xs font-semibold uppercase tracking-wider">
              Metrics That Matter
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-brand-cream leading-tight">
              Digitally Transform Your Business By Expanding Your Potential
            </h3>
            <p className="text-brand-cream/65 text-sm md:text-base leading-relaxed">
              We offer secure, resilient, and enterprise-grade consulting solutions built to facilitate scalability, aligning directly with your quarterly milestones and long-term business goals.
            </p>
          </div>

          {/* Right Counters Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-mud/55 border border-brand-tan/10 hover:border-brand-orange/30 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="space-y-1">
                  {/* Number */}
                  <span className="text-3xl md:text-4xl font-black text-brand-orange tracking-tight block">
                    {stat.value}
                  </span>
                  {/* Description */}
                  <span className="text-sm font-semibold text-brand-tan block">
                    {stat.label}
                  </span>
                </div>

                {/* Icon Widget */}
                <div className="w-12 h-12 rounded-xl bg-brand-black/50 border border-brand-tan/5 group-hover:border-brand-orange/20 flex items-center justify-center transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats
