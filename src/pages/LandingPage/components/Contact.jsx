import { useState } from 'react'
import { Email as EmailIcon, Phone as PhoneIcon, Room as LocationIcon, Send as SendIcon } from '@mui/icons-material'
import toast from 'react-hot-toast'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! Our advisory team will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitting(false)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      {/* Background glowing decorations */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mud border border-brand-tan/10 text-brand-orange text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-cream tracking-tight">
            Connect With Our <span className="text-brand-orange">Advisors</span>
          </h2>
          <p className="text-brand-cream/65 text-sm md:text-base leading-relaxed">
            Ready to expand your enterprise systems potential? Submit an inquiry, and one of our directors will schedule a scoping call with your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Information & Hubs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-tan">Escala Hub Directory</h3>
              <p className="text-brand-cream/75 text-sm leading-relaxed">
                Reach out to us directly via email, phone, or stop by one of our regional delivery offices.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-4 bg-brand-mud/45 p-6 rounded-2xl border border-brand-tan/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-black flex items-center justify-center border border-brand-tan/10">
                  <EmailIcon className="text-brand-orange w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-cream/50 block">Email Advisory</span>
                  <a href="mailto:advisory@escalaservices.com" className="text-sm font-bold text-brand-tan hover:text-brand-orange transition-colors">
                    advisory@escalaservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-black flex items-center justify-center border border-brand-tan/10">
                  <PhoneIcon className="text-brand-orange w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-cream/50 block">Global Hotline</span>
                  <a href="tel:+34911234567" className="text-sm font-bold text-brand-tan hover:text-brand-orange transition-colors">
                    +34 91 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hubs */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-brand-mud/30 border border-brand-tan/5 hover:border-brand-orange/25 transition-all duration-300">
                <div className="flex gap-3.5">
                  <LocationIcon className="text-brand-orange w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brand-tan text-sm">Madrid Headquarters (Spain)</h5>
                    <p className="text-xs text-brand-cream/60 mt-1 leading-relaxed">
                      Paseo de la Castellana 95, 28046 Madrid
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-brand-mud/30 border border-brand-tan/5 hover:border-brand-orange/25 transition-all duration-300">
                <div className="flex gap-3.5">
                  <LocationIcon className="text-brand-orange w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brand-tan text-sm">Mohali Delivery Center (India)</h5>
                    <p className="text-xs text-brand-cream/60 mt-1 leading-relaxed">
                      Sector 67, IT Park, Mohali, Punjab 160062
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-brand-mud/30 border border-brand-tan/5 hover:border-brand-orange/25 transition-all duration-300">
                <div className="flex gap-3.5">
                  <LocationIcon className="text-brand-orange w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brand-tan text-sm">Bengaluru Tech Hub (India)</h5>
                    <p className="text-xs text-brand-cream/60 mt-1 leading-relaxed">
                      Outer Ring Road, Bellandur, Bengaluru 560103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-brand-mud/30 border border-brand-tan/10 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-brand-tan mb-6">Send an Advisory Query</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-brand-tan uppercase tracking-wider block">
                    Full Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-brand-black border border-brand-tan/15 text-brand-cream focus:border-brand-orange focus:outline-none text-sm transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-brand-tan uppercase tracking-wider block">
                    Business Email <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-black border border-brand-tan/15 text-brand-cream focus:border-brand-orange focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold text-brand-tan uppercase tracking-wider block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g., Cloud ERP Migration Plan"
                  className="w-full px-4 py-3 rounded-xl bg-brand-black border border-brand-tan/15 text-brand-cream focus:border-brand-orange focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-brand-tan uppercase tracking-wider block">
                  Message Details <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Describe your current systems environment and project timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-black border border-brand-tan/15 text-brand-cream focus:border-brand-orange focus:outline-none text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover disabled:bg-brand-orange/50 text-white font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
              >
                {submitting ? 'Sending Request...' : 'Send Advisory Request'}
                <SendIcon fontSize="small" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
