import { useState, useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Menu as MenuIcon, Close as CloseIcon, KeyboardArrowUp as ScrollUpIcon, ChevronRight as ChevronRightIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon, YouTube as YouTubeIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export const PublicLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', id: '#home' },
    { name: 'ABOUT', id: '#about' },
    { name: 'SERVICES', id: '#services' },
    { name: 'SOLUTIONS', id: '#solutions' },
    { name: 'INSIGHTS', id: '#insights' },
    { name: 'CAREERS', id: '#careers' },
    { name: 'CONTACT', id: '#contact' },
    { name: 'RESOURCES', id: '#resources' }
  ]

  const handleNavClick = (id) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream selection:bg-brand-orange selection:text-white flex flex-col font-sans relative">

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-brand-black border-b border-brand-mud-light py-3 shadow-lg shadow-black/45'
          : 'bg-brand-black border-b border-brand-mud-light py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Rebranded Logo */}
          <Link
            to="/"
            onClick={() => scrollToTop()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-brand-tan group-hover:text-brand-orange transition-colors">
                <span className="text-brand-orange">es</span>cala
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-cream/65 -mt-1">
                de services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-brand-cream/85 hover:text-brand-orange font-bold text-xs tracking-wider transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Actions - Client Portal */}
          <div className="hidden lg:flex items-center border border-brand-orange/60 bg-orange p-2 rounded-lg">
            {/* <Link
              to="/dashboard"
              className="px-4 py-2 rounded bg-brand-mud border border-brand-tan/10 hover:border-brand-orange/60 text-brand-tan hover:text-brand-orange text-xs font-bold uppercase tracking-wider transition-all duration-300"
            > */}
            Portal Login
            {/* </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-cream hover:text-brand-orange transition-colors"
              aria-label="Toggle menu"
              sx={{
                color: 'white !important',
              }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-brand-mud border-b border-brand-mud-light transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 py-6 px-6 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-brand-cream/80 hover:text-brand-orange font-bold text-sm tracking-wider py-1.5 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-brand-mud-light my-2" />
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded bg-brand-orange text-white text-center font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-orange/15 hover:brightness-110"
            >
              Client Portal Login
            </Link>
          </div>
        </div>
      </header>

      {/* Vertical Sticky Orange Sidebar Tab (Let's Connect) */}
      <button
        onClick={() => handleNavClick('#contact')}
        className="fixed right-0 top-[40%] -translate-y-1/2 z-40 bg-brand-orange hover:bg-brand-orange-hover text-white py-4 px-2.5 rounded-l shadow-2xl cursor-pointer hover:-translate-x-0.5 transition-all duration-300 writing-mode-vertical uppercase font-bold text-xs tracking-widest flex items-center justify-center gap-2"
        style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
        }}
      >
        <span>LET&apos;S CONNECT</span>
      </button>

      {/* Page Content */}
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      {/* Pre-Footer Callout Section (Orange Banner) */}
      <section className="bg-brand-orange py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wider">
              NEED A PARTNER YOU CAN TRUST?
            </h3>
            <p className="text-sm md:text-base text-white/95 font-medium">
              Integrate Information &bull; Accelerate Innovation &bull; Deliver Operational Excellence
            </p>
          </div>
          <button
            onClick={() => handleNavClick('#contact')}
            className="px-8 py-3 rounded-full bg-white hover:bg-brand-cream text-brand-orange font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
          >
            CONNECT NOW
          </button>
        </div>
      </section>

      {/* Detailed 4-Column Footer */}
      <footer className="bg-brand-black border-t border-brand-mud-light relative z-10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Quick Links (3 Cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-brand-tan font-bold text-xs tracking-widest uppercase border-b border-brand-mud-light pb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-cream/65">
              {navLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-1">
                  <ChevronRightIcon className="text-brand-orange w-3.5 h-3.5" />
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-brand-orange transition-colors cursor-pointer text-left"
                  >
                    {link.name === 'HOME' ? 'About Escala' : link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions (3 Cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-brand-tan font-bold text-xs tracking-widest uppercase border-b border-brand-mud-light pb-3">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-[13px] text-brand-cream/65">
              {[
                'Oracle Analytics Cloud',
                'Oracle ERP Cloud',
                'Oracle HCM Cloud',
                'Oracle SCM Cloud',
                'Oracle Digital Assistant',
                'Oracle EPM Cloud',
                'Oracle Cloud Infrastructure',
                'Oracle PaaS Solutions',
                'Workday HCM',
                'Workday Finance',
                'Workday SCM',
                'Workday Integration & Custom Solutions'
              ].map((item) => (
                <li key={item} className="flex items-start gap-1">
                  <ChevronRightIcon className="text-brand-orange w-3.5 h-3.5 mt-0.5" />
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 Cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-brand-tan font-bold text-xs tracking-widest uppercase border-b border-brand-mud-light pb-3">
              SERVICES
            </h4>
            <ul className="space-y-2 text-[13px] text-brand-cream/65">
              {[
                'Oracle Consulting',
                'Oracle Implementation',
                'Value-based delivery',
                'EBS to Cloud',
                'Managed Services',
                'Data Visualization',
                'Quality Assurance',
                'Workday Consulting'
              ].map((item) => (
                <li key={item} className="flex items-start gap-1">
                  <ChevronRightIcon className="text-brand-orange w-3.5 h-3.5 mt-0.5" />
                  <span className="hover:text-brand-orange transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Let's Connect (3 Cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-brand-tan font-bold text-xs tracking-widest uppercase border-b border-brand-mud-light pb-3">
              LET&apos;S CONNECT
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-cream/70">
              <li>
                <span className="font-bold text-brand-tan block mb-0.5">Madrid HQ (Spain)</span>
                Paseo de la Castellana 95, 28046 Madrid
              </li>
              <li>
                <span className="font-bold text-brand-tan block mb-0.5">Mohali Office (India)</span>
                IT Park Sector 67, Mohali, Punjab - 160062
              </li>
              <li>
                <span className="font-bold text-brand-tan block mb-0.5">Pune Office (India)</span>
                Amanora Chambers Hadapsar, Pune, MH - 411028
              </li>
              <li>
                <span className="font-bold text-brand-tan block mb-0.5">Bengaluru Office (India)</span>
                Outer Ring Road Bellandur, Bengaluru, KA - 560103
              </li>
              <li>
                <span className="font-bold text-brand-tan block mb-0.5">Noida Office (India)</span>
                Tapasya Corp Heights Sector 126, Noida, UP - 201313
              </li>
              <li className="pt-2 border-t border-brand-mud-light">
                <span className="block mb-1 font-semibold text-brand-tan">Phone: +34 91 123 4567</span>
                <span className="block font-semibold text-brand-tan">Email: business@escalaservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-mud-light flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-cream/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Escala de services LLP. All Rights Reserved. &bull;{' '}
            <a href="#privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          </p>

          {/* Circular Social Buttons */}
          <div className="flex gap-3">
            {[
              { icon: <FacebookIcon fontSize="inherit" />, url: '#facebook' },
              { icon: <InstagramIcon fontSize="inherit" />, url: '#instagram' },
              { icon: <LinkedInIcon fontSize="inherit" />, url: '#linkedin' },
              { icon: <YouTubeIcon fontSize="inherit" />, url: '#youtube' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="w-8 h-8 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                aria-label={`Social Link ${idx + 1}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating Orange Square Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-brand-orange hover:bg-brand-orange-hover text-white shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer rounded-sm"
          aria-label="Scroll to top"
        >
          <ScrollUpIcon />
        </button>
      )}
    </div>
  )
}

export default PublicLayout
