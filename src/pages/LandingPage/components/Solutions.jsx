import { useState } from 'react'
import { WebAsset as OracleIcon, GroupWork as WorkdayIcon, SettingsInputComponent as MiddlewareIcon, DoneAll as CheckedIcon } from '@mui/icons-material'

const tabs = [
  {
    label: 'Oracle Cloud Suite',
    icon: <OracleIcon fontSize="small" />,
    tagline: 'Streamlining your enterprise operations via high-performance cloud environments.',
    items: [
      {
        name: 'Oracle ERP Cloud',
        desc: 'Advanced accounting, ledger configurations, compliance controls, and procurement automation.',
      },
      {
        name: 'Oracle HCM Cloud',
        desc: 'Global human resources, talent management, payroll architectures, and strategic workforce planning.',
      },
      {
        name: 'Oracle SCM Cloud',
        desc: 'Resilient logistics, inventory modeling, procurement dashboards, and product life-cycle databases.',
      },
      {
        name: 'Oracle Analytics Cloud',
        desc: 'Predictive data modeling, cross-functional intelligence reports, and enterprise data lake setups.',
      }
    ]
  },
  {
    label: 'Workday Enterprise',
    icon: <WorkdayIcon fontSize="small" />,
    tagline: 'Synchronizing human capital, corporate finance, and operations in a single dashboard.',
    items: [
      {
        name: 'Workday HCM',
        desc: 'Global workforce directory, benefits administration, tracking pipelines, and compensation modeling.',
      },
      {
        name: 'Workday Finance',
        desc: 'General ledger configurations, corporate accounting, audits, revenue dashboards, and expense sheets.',
      },
      {
        name: 'Workday SCM',
        desc: 'Sourcing automation, supplier network configurations, contract libraries, and inventory oversight.',
      },
      {
        name: 'Workday Studio Integration',
        desc: 'Bespoke integration pipelines linking Workday to third-party databases, CRMs, and custom APIs.',
      }
    ]
  },
  {
    label: 'Custom Integrations',
    icon: <MiddlewareIcon fontSize="small" />,
    tagline: 'Building zero-latency middleware interfaces that link legacy databases to cloud architectures.',
    items: [
      {
        name: 'Enterprise Middleware API',
        desc: 'REST/GraphQL microservices built to handle concurrent high-volume corporate transactions.',
      },
      {
        name: 'Data Lake Synchronization',
        desc: 'Real-time database mirroring pipelines from legacy systems to cloud-native platforms.',
      },
      {
        name: 'Single Sign-On (SSO)',
        desc: 'Secure authentication directories (Okta, Entra ID, Ping) mapped across all enterprise software.',
      },
      {
        name: 'Serverless Compute & PaaS',
        desc: 'Cloud-native AWS, GCP, and Azure configurations that scale up on demand and cut running costs.',
      }
    ]
  }
]

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="solutions" className="py-24 bg-brand-mud relative">
      {/* Background decoration */}
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-black border border-brand-tan/10 text-brand-orange text-xs font-semibold uppercase tracking-wider">
              Suite Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream tracking-tight">
              Enterprise <span className="text-brand-orange">Solutions</span> We Support
            </h2>
            <p className="text-brand-cream/65 text-sm md:text-base leading-relaxed">
              We guide you from legacy database migrations to optimized cloud application setups. Select a category below to explore specific software architectures we specialize in.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2.5 bg-brand-black/40 p-2 rounded-2xl border border-brand-tan/10 w-fit">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                    : 'text-brand-tan hover:bg-brand-mud-light hover:text-brand-orange'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Header */}
        <div className="mb-10 p-6 rounded-2xl bg-brand-black/20 border border-brand-tan/5">
          <p className="text-brand-tan font-semibold text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            {tabs[activeTab].tagline}
          </p>
        </div>

        {/* Active Tab Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tabs[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-brand-black/40 border border-brand-tan/10 hover:border-brand-orange/20 transition-all duration-300 group flex items-start gap-5 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-mud flex items-center justify-center flex-shrink-0 border border-brand-tan/15 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/10 transition-all">
                <CheckedIcon className="text-brand-tan group-hover:text-brand-orange w-5 h-5 transition-colors" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-brand-tan group-hover:text-brand-orange transition-colors">
                  {item.name}
                </h4>
                <p className="text-brand-cream/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
