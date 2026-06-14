import { CloudQueue as CloudIcon, Speed as ModernizationIcon, AutoStories as IntegrationIcon, PieChartOutline as AnalyticsIcon, EngineeringOutlined as QaIcon, PublicOutlined as MarketingIcon } from '@mui/icons-material'

const servicesData = [
  {
    icon: <CloudIcon className="text-brand-orange w-8 h-8" />,
    title: 'Cloud ERP Consulting',
    description: 'Bespoke implementation, configuration, and optimization of leading enterprise cloud resource planning platforms.',
    bullets: ['Oracle Cloud ERP & SCM integrations', 'Security role mappings', 'Custom financial ledger setups']
  },
  {
    icon: <IntegrationIcon className="text-brand-orange w-8 h-8" />,
    title: 'Workday Ecosystems',
    description: 'Connecting HCM, Financial Management, and SCM data suites seamlessly across your corporate IT environment.',
    bullets: ['Full-lifecycle HCM deployment', 'Custom API integration builds', 'Automated business process flows']
  },
  {
    icon: <ModernizationIcon className="text-brand-orange w-8 h-8" />,
    title: 'Legacy Modernization',
    description: 'Migrating on-premise setups (like EBS or older SAP modules) to the cloud with zero downtime and total data integrity.',
    bullets: ['Risk assessment & architecture plan', 'Database optimization & staging', 'Automated regression testing']
  },
  {
    icon: <AnalyticsIcon className="text-brand-orange w-8 h-8" />,
    title: 'Insight & Data Analytics',
    description: 'Transforming databases into dashboards using Power BI, Looker, and Tableau to guide executive decision-making.',
    bullets: ['Real-time pipeline modeling', 'Predictive KPI charts', 'Cross-platform ETL processing']
  },
  {
    icon: <QaIcon className="text-brand-orange w-8 h-8" />,
    title: 'Quality & Operations',
    description: 'Continuous managed services and testing pipelines that guarantee system uptime and prevent software regressions.',
    bullets: ['24/7 technical helpdesk support', 'Automated QA testing pipelines', 'Monthly performance auditing']
  },
  {
    icon: <MarketingIcon className="text-brand-orange w-8 h-8" />,
    title: 'Growth Marketing',
    description: 'Custom digital inbound campaigns and system integrations designed to convert corporate leads into active pipeline growth.',
    bullets: ['HubSpot & Salesforce automation', 'Enterprise content strategies', 'Targeted marketing analytics']
  }
]

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      {/* Background decorations */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mud border border-brand-tan/10 text-brand-orange text-xs font-semibold uppercase tracking-wider">
            Our functional areas
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream tracking-tight">
            Consulting Services Structured for <span className="text-brand-orange">Impact</span>
          </h2>
          <p className="text-brand-cream/65 text-base md:text-lg leading-relaxed">
            We deliver deep-domain technical expertise across major cloud software suites and custom developer platforms to modernize your enterprise operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-brand-mud/60 border border-brand-tan/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              {/* Hover highlight background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-orange/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-brand-mud flex items-center justify-center mb-6 border border-brand-tan/15 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/10 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-tan group-hover:text-brand-orange transition-colors duration-200 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brand-cream/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet List */}
                <ul className="space-y-2.5 mb-8 border-t border-brand-mud-light pt-6">
                  {service.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-xs text-brand-cream/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/60 group-hover:bg-brand-orange transition-colors" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="text-xs font-bold text-brand-tan group-hover:text-brand-orange transition-colors flex items-center gap-1.5"
              >
                Inquire About Capability &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
