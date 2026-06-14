import { useState } from 'react'
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, East as ArrowRightIcon } from '@mui/icons-material'

const accordionItems = [
  {
    title: 'Embedded AI for ERP, SCM, HCM & Custom Architectures',
    content: 'Escala enhances enterprise application suites with embedded AI capabilities that streamline decision-making across finance, supply chain, HR, and custom database integrations. We help organizations tap into native machine learning features to increase transaction accuracy, reduce manual ledger reconciliation, and improve overall operational visibility.'
  },
  {
    title: 'Generative AI Accelerators (FinMate, TalentGenius, Etc.)',
    content: 'We engineer secure generative AI accelerators (like FinMate for automated financial reporting and TalentGenius for resume screening pipelines) that overlay your database entries. These models run locally or via private API endpoints to ensure your enterprise intellectual property is never exposed to public training sets.'
  },
  {
    title: 'Predictive Analytics & Automation Frameworks',
    content: 'Deploy automated data pipelines that forecast supply chain bottlenecks, project workforce retention levels, and detect anomalous logs before they trigger outages. We build the connection modules that feed these predictions directly into executive dashboards in Power BI and Tableau.'
  }
]

export const InnovationsSection = () => {
  const [expandedIdx, setExpandedIdx] = useState(0)

  const toggleAccordion = (idx) => {
    setExpandedIdx(expandedIdx === idx ? -1 : idx)
  }

  return (
    <section className="py-24 bg-brand-mud relative">
      {/* Background ambient mesh */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream leading-[1.15]">
              AI-Powered Enterprise <span className="text-brand-orange">Innovations</span> by Escala
            </h2>
            <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed">
              Escala delivers next-generation AI integrations that accelerate enterprise transformation through automation, predictive insights, and secure generative LLM models. As a certified implementation partner, we embed intelligence across ERP, SCM, HCM, and customer middleware systems to help organizations achieve faster decisions, higher productivity, and optimized business outcomes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-orange hover:text-brand-orange-hover transition-colors group uppercase tracking-wider"
            >
              Read More
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Side: Interactive Custom Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {accordionItems.map((item, idx) => {
              const isExpanded = expandedIdx === idx
              return (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-brand-tan/10 bg-brand-black/25 hover:border-brand-tan/20 transition-all duration-300"
                >
                  {/* Header Row */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer text-brand-tan hover:text-brand-orange transition-colors"
                  >
                    <span className="font-bold text-sm md:text-base leading-relaxed">
                      {item.title}
                    </span>
                    <div className="text-brand-orange">
                      {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                  </button>

                  {/* Body Content Row */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[300px] border-t border-brand-tan/5' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 bg-brand-black/15">
                      <p className="text-brand-cream/75 text-xs md:text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default InnovationsSection
