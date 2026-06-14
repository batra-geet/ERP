import { Groups as WorkforceIcon, Public as GlobeIcon, PersonRemove as AttritionIcon, Verified as CertifiedIcon, Domain as BuildingIcon, TrendingUp as ChartIcon } from '@mui/icons-material'

const stats = [
  {
    value: '250+',
    icon: <WorkforceIcon className="text-brand-orange w-5 h-5" />,
    label: 'Experienced Workforce'
  },
  {
    value: '50+',
    icon: <GlobeIcon className="text-brand-orange w-5 h-5" />,
    label: 'Happy customers across the globe'
  },
  {
    value: '~ 5-6%',
    icon: <AttritionIcon className="text-brand-orange w-5 h-5" />,
    label: 'Annual Attrition(Stable staff)'
  },
  {
    value: '50%',
    icon: <CertifiedIcon className="text-brand-orange w-5 h-5" />,
    label: 'Oracle Certified Workforce'
  },
  {
    value: '5',
    icon: <BuildingIcon className="text-brand-orange w-5 h-5" />,
    label: 'Offices Globally including 4 Delivery Centers in India'
  },
  {
    value: '99%+',
    icon: <ChartIcon className="text-brand-orange w-5 h-5" />,
    label: 'Projects Delivered on Time'
  }
]

export const StatsSection = () => {
  return (
    <section className="bg-brand-mud relative z-10 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[300px]">
        
        {/* Left Column: Angled Orange Polygon Banner */}
        <div className="lg:w-[35%] bg-brand-orange text-white flex items-center p-8 lg:p-12 xl:p-16 clip-slanted-right-mobile lg:clip-slanted-right lg:pr-24 relative z-20">
          <div className="space-y-4 max-w-md">
            <h3 className="text-2xl lg:text-3xl font-extrabold tracking-wider leading-tight uppercase">
              DIGITALLY TRANSFORM YOUR BUSINESS BY EXPANDING YOUR POTENTIAL
            </h3>
            <p className="text-sm lg:text-base text-white/90 font-medium leading-relaxed">
              We offer safe and reliable solutions to facilitate scalability and delivery assimilating your key goals.
            </p>
          </div>
        </div>

        {/* Right Column: 6 Stats Grid */}
        <div className="lg:w-[65%] flex items-center bg-brand-black/35 py-12 px-6 lg:py-4 lg:px-12 xl:px-16 relative z-10 lg:-ml-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 group transition-all duration-300">
                {/* Number + Icon header row */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-brand-cream tracking-tight group-hover:text-brand-orange transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-mud border border-brand-tan/10 flex items-center justify-center group-hover:border-brand-orange/40 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                {/* Description label */}
                <p className="text-xs font-semibold text-brand-tan leading-relaxed max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default StatsSection
