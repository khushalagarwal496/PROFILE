import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  X,
} from 'lucide-react'
import { profile } from './data'

const TOPICS = [
  {
    id: 'internship',
    label: '💼 Internship / Role',
    subject: 'Exploring Internship / Job Opportunity with Khushal',
    body: "Hi Khushal,\n\nI came across your portfolio and would love to discuss an exciting opportunity for you.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'web-dev',
    label: '🌐 Website / Web App',
    subject: 'Web Development / Full-Stack Project Inquiry',
    body: "Hi Khushal,\n\nI have a project idea regarding website or web app development and would like to collaborate.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'ai-product',
    label: '🤖 AI & Automation',
    subject: 'AI Product & Automation Collaboration',
    body: "Hi Khushal,\n\nI saw your work with AI & web products and would love to explore building an AI solution together.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'startup',
    label: '🚀 Startup / Venture',
    subject: 'Startup Collaboration with Khushal',
    body: "Hi Khushal,\n\nI'm building something exciting and would like to discuss teaming up or working together.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'say-hi',
    label: '👋 Just Saying Hi',
    subject: 'Hello from a fellow builder / enthusiast!',
    body: "Hi Khushal,\n\nJust wanted to say hello after checking out your modern bento portfolio!\n\nBest regards,\n[Your Name]",
  },
]

export default function ContactSection() {
  const email = profile.email || 'khushalagarwal496@gmail.com'
  const [copied, setCopied] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0].id)
  const [showQuickForm, setShowQuickForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Live IST Clock
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      const formatter = new Intl.DateTimeFormat([], options)
      setIstTime(formatter.format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  const activeTopicObj = TOPICS.find((t) => t.id === selectedTopic) || TOPICS[0]

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    activeTopicObj.subject
  )}&body=${encodeURIComponent(activeTopicObj.body)}`

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(activeTopicObj.subject)}&body=${encodeURIComponent(
    activeTopicObj.body
  )}`

  const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    email
  )}&subject=${encodeURIComponent(activeTopicObj.subject)}&body=${encodeURIComponent(
    activeTopicObj.body
  )}`

  const handleOpenClient = () => {
    window.location.href = mailtoHref
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const subject = `[Portfolio Contact] Message from ${formData.name || 'Visitor'}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${activeTopicObj.label}\n\nMessage:\n${formData.message}`
    
    // Open Gmail web as fallback or direct mailto
    const directGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.open(directGmail, '_blank')
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setShowQuickForm(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2500)
  }

  return (
    <section id="contact" className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] border border-lime/15 bg-gradient-to-b from-[#141a13] via-[#0f120e] to-[#0a0c0a] p-6 sm:p-12 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[340px] w-[500px] rounded-full bg-lime/10 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-[220px] w-[280px] rounded-full bg-lime/5 blur-[90px]" />

        {/* Decorative Floating Asterisks */}
        <motion.span
          animate={{ rotate: 360, y: [0, -6, 0] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="pointer-events-none absolute left-[6%] top-[8%] text-4xl sm:text-6xl font-light text-lime/20 select-none"
        >
          ✳
        </motion.span>

        <motion.span
          animate={{ rotate: -360, y: [0, 8, 0] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="pointer-events-none absolute bottom-[10%] right-[7%] text-3xl sm:text-5xl font-light text-lime/20 select-none"
        >
          ✳
        </motion.span>

        {/* Top Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-7 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-lime backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-gray-400">
            <MapPin size={12} className="text-lime" />
            <span>Noida, India</span>
            <span className="text-gray-600">·</span>
            <Clock size={12} className="text-lime ml-0.5" />
            <span>{istTime || 'IST'}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.05em] text-[#f4f7f1] leading-[1.08]">
            Let’s build something{' '}
            <span className="text-lime relative inline-block">
              meaningful.
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-300/80 max-w-xl mx-auto font-sans">
            Open to software engineering internships, startup collaborations,
            AI integration, website development, and high-impact digital products.
          </p>
        </div>

        {/* Interactive Topic Selector */}
        <div className="mt-9 text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-400 mb-3.5">
            Select what you’d like to discuss
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
            {TOPICS.map((topic) => {
              const isActive = selectedTopic === topic.id
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  type="button"
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'border-lime bg-lime/15 text-lime shadow-[0_0_15px_rgba(199,243,107,0.25)]'
                      : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-gray-200'
                  }`}
                >
                  {topic.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Main "Get in touch" Button -> Opens Interactive Contact Options Modal */}
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-lime px-7 py-4 text-sm font-bold text-[#0a0d08] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9f99d] hover:shadow-[0_12px_36px_rgba(199,243,107,0.35)] cursor-pointer focus:outline-none"
          >
            <span>Get in touch</span>
            <Mail
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Direct 1-Click "Open in Gmail" */}
          <a
            href={gmailWebUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-lime/30 bg-lime/[0.08] px-5 py-4 text-sm font-medium text-lime transition-all duration-200 hover:bg-lime/15 hover:border-lime/60 hover:-translate-y-0.5"
          >
            <span className="font-sans">Open in Gmail</span>
            <ExternalLink size={15} />
          </a>

          {/* Copy Email Pill */}
          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all duration-200 hover:border-lime/40 hover:bg-white/[0.07] hover:text-white cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} className="text-lime" />
                <span className="text-lime font-mono text-xs">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-gray-400" />
                <span className="font-mono text-xs">{email}</span>
              </>
            )}
          </button>

          {/* Quick Message Toggle */}
          <button
            onClick={() => setShowQuickForm(!showQuickForm)}
            type="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-xs font-mono text-gray-300 transition-all hover:border-lime/30 hover:text-lime cursor-pointer"
          >
            <MessageSquare size={15} />
            <span>{showQuickForm ? 'Hide Form' : 'Quick Message'}</span>
          </button>
        </div>

        {/* Expandable Quick Message Form */}
        <AnimatePresence>
          {showQuickForm && (
            <motion.form
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onSubmit={handleFormSubmit}
              className="overflow-hidden max-w-xl mx-auto rounded-2xl border border-lime/20 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-md text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-lime">
                  Send a Direct Note
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  Topic: {activeTopicObj.label}
                </span>
              </div>

              {formSent ? (
                <div className="py-8 text-center">
                  <CheckCircle2 size={36} className="text-lime mx-auto mb-2" />
                  <p className="text-sm text-gray-200 font-medium">Opening compose window...</p>
                  <p className="text-xs text-gray-400 mt-1">Thank you for reaching out!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">Message</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, role, or ideas..."
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-2.5 text-xs font-bold text-[#0a0d08] hover:bg-[#d9f99d] transition cursor-pointer"
                  >
                    <span>Send Message (Opens Gmail)</span>
                    <Send size={13} />
                  </button>
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>

        {/* Bento Sub-Cards / Channel Links */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-gray-300 group-hover:text-lime transition-colors">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200 group-hover:text-lime transition-colors">
                  LinkedIn
                </p>
                <p className="text-[11px] text-gray-400">Connect & network</p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
            />
          </a>

          {/* GitHub Card */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-gray-300 group-hover:text-lime transition-colors">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200 group-hover:text-lime transition-colors">
                  GitHub
                </p>
                <p className="text-[11px] text-gray-400">@khushalagarwal496</p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
            />
          </a>

          {/* Response Time Badge */}
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200">Fast Response</p>
                <p className="text-[11px] text-gray-400">Replies within 24 hours</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-lime" />
          </div>
        </div>
      </motion.div>

      {/* Interactive Contact Options Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-lime/20 bg-[#111512] p-6 sm:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.85)] text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/30 hover:text-white transition cursor-pointer"
              >
                <X size={17} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-[#0a0d08]">
                  <Mail size={19} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Let’s Connect
                  </h3>
                  <p className="text-xs text-gray-400">
                    Topic: <span className="text-lime">{activeTopicObj.label}</span>
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                Choose your preferred way to reach Khushal. You can compose in Gmail web, use your system mail app, or copy the direct address.
              </p>

              {/* Contact Options List */}
              <div className="mt-6 space-y-3">
                {/* 1. Gmail Web */}
                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowModal(false)}
                  className="group flex items-center justify-between rounded-2xl border border-lime/30 bg-lime/[0.06] p-4 transition-all duration-200 hover:border-lime hover:bg-lime/[0.12] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400 font-bold text-sm">
                      M
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-lime transition-colors">
                          Open in Gmail (Web)
                        </span>
                        <span className="rounded-full bg-lime/20 px-2 py-0.5 font-mono text-[9px] text-lime">
                          RECOMMENDED
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Composes email in your browser with pre-filled message
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={17} className="text-gray-400 group-hover:text-lime transition-colors" />
                </a>

                {/* 2. Default System Mail Client */}
                <button
                  type="button"
                  onClick={() => {
                    handleOpenClient()
                    setShowModal(false)
                  }}
                  className="group w-full flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-0.5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 font-bold text-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
                        Default Email App
                      </span>
                      <p className="text-xs text-gray-400">
                        Apple Mail, Outlook, or Thunderbird desktop app
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={17} className="text-gray-400 group-hover:text-white transition-colors" />
                </button>

                {/* 3. Outlook Web */}
                <a
                  href={outlookWebUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowModal(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 font-bold text-sm">
                      O
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
                        Open in Outlook (Web)
                      </span>
                      <p className="text-xs text-gray-400">
                        Opens Outlook live compose in browser
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={17} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Bottom Email Copy Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-xs font-mono text-gray-200 truncate">{email}</p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-gray-200 hover:border-lime/40 hover:text-lime transition cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-lime" />
                      <span className="text-lime font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
