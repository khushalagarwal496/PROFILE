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
} from 'lucide-react'
import { profile } from './data'

const TOPICS = [
  {
    id: 'internship',
    label: '💼 Internship / Role',
    subject: "Exploring Internship / Job Opportunity with Khushal",
    body: "Hi Khushal,\n\nI came across your portfolio and would love to discuss an exciting opportunity for you.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'web-dev',
    label: '🌐 Website / Web App',
    subject: "Web Development / Full-Stack Project Inquiry",
    body: "Hi Khushal,\n\nI have a project idea regarding website or web app development and would like to collaborate.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'ai-product',
    label: '🤖 AI & Automation',
    subject: "AI Product & Automation Collaboration",
    body: "Hi Khushal,\n\nI saw your work with AI & web products and would love to explore building an AI solution together.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'startup',
    label: '🚀 Startup / Venture',
    subject: "Startup Collaboration with Khushal",
    body: "Hi Khushal,\n\nI'm building something exciting and would like to discuss teaming up or working together.\n\nBest regards,\n[Your Name]",
  },
  {
    id: 'say-hi',
    label: '👋 Just Saying Hi',
    subject: "Hello from a fellow builder / enthusiast!",
    body: "Hi Khushal,\n\nJust wanted to say hello after checking out your modern bento portfolio!\n\nBest regards,\n[Your Name]",
  },
]

export default function ContactSection() {
  const email = profile.email || 'khushalagarwal496@gmail.com'
  const [copied, setCopied] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0].id)
  const [showQuickForm, setShowQuickForm] = useState(false)
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
      // fallback
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const subject = `[Portfolio Contact] Message from ${formData.name || 'Visitor'}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${activeTopicObj.label}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setShowQuickForm(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] border border-lime-300/15 bg-gradient-to-b from-[#141a13] via-[#0f120e] to-[#0a0c0a] p-6 sm:p-12 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[340px] w-[500px] rounded-full bg-lime-300/10 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-[220px] w-[280px] rounded-full bg-lime-400/5 blur-[90px]" />

        {/* Decorative Floating Asterisks */}
        <motion.span
          animate={{ rotate: 360, y: [0, -6, 0] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="pointer-events-none absolute left-[6%] top-[8%] text-4xl sm:text-6xl font-light text-lime-300/20 select-none"
        >
          ✳
        </motion.span>

        <motion.span
          animate={{ rotate: -360, y: [0, 8, 0] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="pointer-events-none absolute bottom-[10%] right-[7%] text-3xl sm:text-5xl font-light text-lime-300/20 select-none"
        >
          ✳
        </motion.span>

        {/* Top Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-7 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-400/10 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-lime-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-gray-400">
            <MapPin size={12} className="text-lime-300" />
            <span>Noida, India</span>
            <span className="text-gray-600">·</span>
            <Clock size={12} className="text-lime-300 ml-0.5" />
            <span>{istTime || 'IST'}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.05em] text-[#f4f7f1] leading-[1.08]">
            Let’s build something{' '}
            <span className="text-lime-300 relative inline-block">
              meaningful.
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime-300/40 to-transparent" />
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
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? 'border-lime-300 bg-lime-300/15 text-lime-300 shadow-[0_0_15px_rgba(199,243,107,0.25)]'
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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href={mailtoHref}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-lime px-7 py-4 text-sm font-bold text-[#0a0d08] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_12px_36px_rgba(199,243,107,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#111410]"
          >
            <span>Get in touch</span>
            <Mail
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all duration-200 hover:border-lime-300/40 hover:bg-white/[0.07] hover:text-white"
          >
            {copied ? (
              <>
                <Check size={16} className="text-lime-300 animate-in zoom-in" />
                <span className="text-lime-300 font-mono text-xs">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-gray-400" />
                <span className="font-mono text-xs">{email}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setShowQuickForm(!showQuickForm)}
            type="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-xs font-mono text-gray-300 transition-all hover:border-lime-300/30 hover:text-lime-300"
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
              className="overflow-hidden max-w-xl mx-auto rounded-2xl border border-lime-300/20 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-md text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-lime-300">
                  Send a Direct Note
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  Topic: {activeTopicObj.label}
                </span>
              </div>

              {formSent ? (
                <div className="py-8 text-center">
                  <CheckCircle2 size={36} className="text-lime-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-200 font-medium">Opening your email client...</p>
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
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime-300 focus:outline-none"
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
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime-300 focus:outline-none"
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
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:border-lime-300 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-2.5 text-xs font-bold text-[#0a0d08] hover:bg-lime-200 transition"
                  >
                    <span>Send via Email</span>
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
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-lime-300/30 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-gray-300 group-hover:text-lime-300 transition-colors">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200 group-hover:text-lime-300 transition-colors">
                  LinkedIn
                </p>
                <p className="text-[11px] text-gray-400">Connect & network</p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-300"
            />
          </a>

          {/* GitHub Card */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-lime-300/30 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-gray-300 group-hover:text-lime-300 transition-colors">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200 group-hover:text-lime-300 transition-colors">
                  GitHub
                </p>
                <p className="text-[11px] text-gray-400">@khushalagarwal496</p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-300"
            />
          </a>

          {/* Response Time Badge */}
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-200">Fast Response</p>
                <p className="text-[11px] text-gray-400">Replies within 24 hours</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-lime-400" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
