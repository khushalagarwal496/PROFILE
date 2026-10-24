import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BarChart3, BriefcaseBusiness, Calendar, Code2,
  Cpu, Github, Linkedin, Mail, MapPin, MoveUpRight, PenTool, Rocket, Sparkles, Target, Terminal, TrendingUp,
} from 'lucide-react'
import { profile, projects, skills, skillCategories, education, experience } from './data'
import profilePic from './assets/khushal-profile.png'
import ContactSection from './ContactSection'

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionLabel({ children }) {
  return <div className="section-label"><span className="label-dot" />{children}</div>
}

function CategoryIcon({ type }) {
  if (type === 'code') return <Code2 size={17} className="cat-icon cat-icon-code" />
  if (type === 'ai') return <Cpu size={17} className="cat-icon cat-icon-ai" />
  if (type === 'analytics') return <BarChart3 size={17} className="cat-icon cat-icon-analytics" />
  if (type === 'product') return <Target size={17} className="cat-icon cat-icon-product" />
  return <Code2 size={17} />
}

function ExperienceIcon({ type }) {
  if (type === 'analytics') return <BarChart3 size={17} />
  if (type === 'growth') return <TrendingUp size={17} />
  if (type === 'rocket') return <Rocket size={17} />
  if (type === 'code') return <Terminal size={17} />
  if (type === 'ai') return <Cpu size={17} />
  if (type === 'award') return <Award size={17} />
  if (type === 'pen') return <PenTool size={17} />
  return <BriefcaseBusiness size={17} />
}

function ProjectVisual({ project }) {
  const visuals = {
    rank: (
      <div className="visual-rank">
        <div className="mini-window"><span /><span /><span /></div>
        <div className="rank-eyebrow">PREDICT YOUR OUTCOME</div>
        <div className="rank-big">AIR <em>12,480</em></div>
        <div className="rank-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="visual-foot"><span>ESTIMATED RANK</span><span>↗</span></div>
      </div>
    ),
    campus: (
      <div className="visual-campus">
        <div className="campus-orb"><Code2 size={34} /></div>
        <div className="campus-tag tag-one">Daily challenge <b>+120 XP</b></div>
        <div className="campus-tag tag-two">Campus community <b>● Active</b></div>
        <div className="campus-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
    ),
    career: (
      <div className="visual-career">
        <div className="career-ring ring-a" /><div className="career-ring ring-b" />
        <div className="career-center"><Sparkles size={27} /><span>YOUR NEXT<br />CHAPTER</span></div>
        <span className="career-node node-a">Explore</span><span className="career-node node-b">Build</span><span className="career-node node-c">Grow</span>
      </div>
    ),
    analytics: (
      <div className="visual-analytics">
        <div className="analytics-head"><span>PLACEMENT INSIGHTS</span><span>↗</span></div>
        <div className="analytics-number">68.8<small>%</small></div>
        <div className="analytics-caption">Placement rate · sample dataset</div>
        <div className="analytics-chart">{[34, 52, 41, 68, 55, 82, 66, 94, 73, 88, 61, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      </div>
    ),
  }
  return <div className={`project-visual ${project.accent}`}>{visuals[project.visual]}</div>
}

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card project-${project.accent}`} variants={reveal}>
      <div className="project-card-top">
        <span className="project-number">{project.number} / SELECTED WORK</span>
        <a className="icon-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={17} /></a>
      </div>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <div className="project-category">{project.category}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.metric && (
          <div className="project-metric-card">
            <span className="metric-badge">✦ IMPACT & PERFORMANCE</span>
            <p className="metric-details">{project.metric}</p>
          </div>
        )}
        <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={14} /></a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <Github size={14} /></a>
        </div>
      </div>
    </motion.article>
  )
}

export default function App() {
  const year = new Date().getFullYear()
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Khushal home">
          <span className="brand-mark brand-avatar">
            <img src={profilePic} alt={profile.name} className="brand-img" />
          </span>
          <span>KHUSHAL AGARWAL</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </nav>

      <motion.section id="home" className="hero bento-grid" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09 } } }}>
        <motion.div className="tile hero-main" variants={reveal}>
          <div className="hero-meta"><span className="availability"><i /> OPEN TO INTERNSHIP OPPORTUNITIES</span><span className="mono">PORTFOLIO / 2026</span></div>
          <div className="hero-title-wrap">
            <p className="eyebrow">HELLO, I’M {profile.name.toUpperCase()}</p>
            <h1>Building ideas<br />into <span>digital products.</span></h1>
            <p className="hero-description">{profile.intro}</p>
          </div>
          <div className="hero-bottom">
            <a className="primary-button" href="#work">Explore My Work <ArrowDownRight size={17} /></a>
            <div className="location"><MapPin size={14} /> {profile.location}</div>
          </div>
          <div className="hero-decoration" aria-hidden="true">KA<span>↗</span></div>
        </motion.div>

        <motion.div className="tile profile-tile" variants={reveal}>
          <div className="tile-heading"><SectionLabel>THE DEVELOPER</SectionLabel><MoveUpRight size={16} /></div>
          <div className="avatar-art">
            <div className="avatar-wrapper">
              <div className="avatar-glow-ring" />
              <div className="avatar-circle">
                <img src={profilePic} alt={profile.name} className="avatar-img" />
              </div>
              <div className="avatar-badge">
                <span className="badge-dot" />
                <span>ONLINE</span>
              </div>
            </div>
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="avatar-spark">✳</span>
          </div>
          <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
          <p>{profile.about}</p>
          <p>{profile.aboutDetail}</p>
          <a className="text-link" href="#about">More about me <ArrowRight size={14} /></a>
        </motion.div>

        <motion.a href="#skills" className="tile stat-tile" variants={reveal}>
          <div className="tile-heading"><SectionLabel>WHAT I DO</SectionLabel><ArrowUpRight size={16} /></div>
          <div className="stat-content">
            <div className="stat-icon"><Terminal size={20} /></div>
            <div className="stat-titles">
              <h3>Web Development</h3>
              <h3><span>AI & Product Management</span></h3>
            </div>
            <p className="stat-desc">
              Building digital products through web development, AI integration, product strategy, and business thinking — from understanding user problems to developing solutions and identifying growth opportunities.
            </p>
          </div>
          <div className="stat-footer"><span>DISCOVER → STRATEGIZE → BUILD → GROW</span><span>01</span></div>
        </motion.a>

        <motion.a href="#skills" className="tile stack-tile" variants={reveal}>
          <div className="tile-heading"><SectionLabel>MY TOOLKIT</SectionLabel><ArrowUpRight size={16} /></div>
          <div className="toolkit-bento-body">
            <div className="bento-category-list">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="bento-category-item">
                  <span className="bento-cat-num">{cat.number}</span>
                  <span className="bento-cat-name">{cat.name}</span>
                </div>
              ))}
            </div>
            <div className="toolkit-highlight-tags">
              <span>React.js</span>
              <span>Python</span>
              <span>SQL</span>
              <span>Prompt Eng.</span>
              <span className="toolkit-tag-more">+37 more</span>
            </div>
          </div>
          <div className="stack-footer">
            <span className="live-pulse-container"><span className="live-pulse" /> 41 SKILLS IN 4 DOMAINS</span>
            <span>VIEW ALL ↗</span>
          </div>
        </motion.a>

        <motion.a className="tile github-tile" href={profile.githubUrl} target="_blank" rel="noreferrer" variants={reveal}>
          <div className="github-top"><Github size={22} /><ArrowUpRight size={16} /></div>
          <div><h3>Code in public.</h3><p>Explore my repositories<br />and experiments.</p></div>
          <span className="github-handle">@khushalagarwal496</span>
        </motion.a>
      </motion.section>

      <motion.section id="work" className="section work-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <div className="section-header">
          <div><SectionLabel>SELECTED PROJECTS</SectionLabel><h2>Things I’ve <span>built.</span></h2></div>
          <p>A collection of digital products and data-driven solutions built to solve real-world problems, improve user experiences, and create measurable impact through technology and product thinking.</p>
        </div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
      </motion.section>

      <motion.section id="skills" className="section toolkit-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <div className="section-header">
          <div><SectionLabel>MY TOOLKIT — FINAL SKILLS</SectionLabel><h2>Skills & <span>capabilities.</span></h2></div>
          <p>Structured across engineering, AI technology, analytics and product management.</p>
        </div>

        <motion.div className="tile toolkit-container-card" variants={reveal}>
          {skillCategories.map((cat, idx) => (
            <div key={cat.id} className="toolkit-category-block">
              <div className="toolkit-category-head">
                <CategoryIcon type={cat.icon} />
                <h3>{cat.number} — {cat.name}</h3>
              </div>
              <div className="toolkit-pills-row">
                {cat.skills.map((skill) => (
                  <span key={skill} className="toolkit-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              {idx < skillCategories.length - 1 && <div className="toolkit-row-divider" />}
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section id="about" className="section about-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div className="tile about-tile" variants={reveal}>
          <div className="about-header-group">
            <div className="about-avatar-ring">
              <img src={profilePic} alt={profile.name} className="about-avatar-img" />
            </div>
            <div className="about-heading-text">
              <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
              <h2>Technology is the tool.<br /><span>Impact is the goal.</span></h2>
            </div>
          </div>
          <p>{profile.aboutSectionP1}</p>
          <p>{profile.aboutSectionP2}</p>
          <a className="text-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14} /></a>
        </motion.div>
        <motion.div className="tile education-tile" variants={reveal}>
          <div className="tile-heading"><SectionLabel>EDUCATION</SectionLabel><BriefcaseBusiness size={16} /></div>
          <div className="education-symbol">✳</div>
          <div className="education-degree">{education.degree}</div>
          <h3>{education.specialization}</h3>
          <p>{education.institution}</p>
          <div className="education-bottom"><span>{education.period}</span><span>{education.location.toUpperCase()}</span></div>
        </motion.div>
      </motion.section>

      <motion.section id="experience" className="section experience-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <div className="section-header">
          <div><SectionLabel>THE JOURNEY SO FAR</SectionLabel><h2>Experience & <span>growth.</span></h2></div>
          <p>Building experience across data analytics, web development, AI-powered products, community engagement, and business operations.</p>
        </div>

        <div className="experience-cards-grid">
          {experience.map((item) => (
            <motion.div
              className={`tile exp-card ${item.isFeatured ? 'exp-card-featured' : ''}`}
              key={item.id}
              variants={reveal}
            >
              <div className="exp-card-top">
                <div className="exp-org-cluster">
                  <div className={`exp-icon-box exp-icon-${item.icon}`}>
                    <ExperienceIcon type={item.icon} />
                  </div>
                  <div className="exp-org-headings">
                    <div className="exp-org-badge-row">
                      <span className="exp-org-name">{item.organization}</span>
                      {item.highlightBadge && (
                        <span className="exp-highlight-pill">{item.highlightBadge}</span>
                      )}
                    </div>
                    <h3 className="exp-role-title">{item.role}</h3>
                  </div>
                </div>

                <div className="exp-period-pill">
                  {item.isCurrent && <span className="exp-live-dot" />}
                  <Calendar size={12} className="exp-cal-icon" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="exp-description-text">{item.description}</p>

              {item.tags && item.tags.length > 0 && (
                <div className="exp-tags-cluster">
                  {item.tags.map((tag) => (
                    <span key={tag} className="exp-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ContactSection />

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark brand-avatar">
            <img src={profilePic} alt={profile.name} className="brand-img" />
          </span>
          <span>KHUSHAL AGARWAL</span>
        </a>
        <span>Designed & built with care · © {year}</span>
        <div className="footer-socials">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
        </div>
      </footer>
    </main>
  )
}
