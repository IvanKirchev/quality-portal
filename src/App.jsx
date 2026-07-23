import { useEffect, useState } from 'react'
import {
  BOOKING_URL,
  founder,
  lifecycleAgents,
  navItems,
  principles,
  services,
  sources,
} from './content.js'

function BrandMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 48 48">
      <rect width="48" height="48" rx="14" fill="currentColor" />
      <path d="M10 12h8l6 19 6-19h8L28 38h-8L10 12Z" fill="var(--warm-white)" />
      <circle cx="24" cy="9" r="3" fill="var(--sage)" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M7 4h7v7M14 4 6 12" fill="none" stroke="currentColor" strokeLinecap="round" />
      <path d="M12 10v4H4V6h4" fill="none" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" />
      ) : (
        <path d="M5 8h14M5 16h14" fill="none" stroke="currentColor" strokeLinecap="round" />
      )}
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Velithic AI, home" onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <span>Velithic <strong>AI</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav id="site-navigation" className={`site-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="button button-small" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a call
            <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}

const engagementStages = [
  {
    number: '01',
    title: 'Discover',
    detail: 'Workflow & desired outcome',
    gate: 'Scope agreed',
  },
  {
    number: '02',
    title: 'Roadmap',
    detail: 'Scope, risks & milestones',
    gate: 'Milestone review',
  },
  {
    number: '03',
    title: 'Deliver',
    detail: 'Visible increments & reviews',
    gate: 'Delivery accepted',
  },
  {
    number: '04',
    title: 'Handover',
    detail: 'Acceptance & knowledge transfer',
  },
]

function EngagementMap() {
  return (
    <figure className="engagement-map" aria-labelledby="engagement-map-title">
      <div className="engagement-map-header">
        <p id="engagement-map-title">example engagement</p>
        <span><i aria-hidden="true" /> Client-visible roadmap</span>
      </div>

      <ol className="engagement-track">
        {engagementStages.map((stage, index) => (
          <li className={`engagement-track-item stage-${index + 1}`} key={stage.title}>
            <div className="engagement-stage">
              <span className="engagement-stage-number">{stage.number}</span>
              <span className="engagement-stage-copy">
                <strong>{stage.title}</strong>
                <small>{stage.detail}</small>
              </span>
              <span className="engagement-stage-progress" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            {stage.gate && (
              <div className="engagement-gate">
                <span aria-hidden="true" />
                <small>{stage.gate}</small>
              </div>
            )}
          </li>
        ))}
      </ol>

      <figcaption>
        <span aria-hidden="true">↗</span>
        <p><strong>Visible progress.</strong> Explicit decisions. No black-box delivery.</p>
      </figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AI engineering consultancy</p>
            <h1>Building <em>production grade AI systems</em> tuned for you</h1>
            <p className="hero-lead">
              Velithic AI helps organizations design, build, and operate custom AI agents, grounded knowledge applications, and teams ready to use them well.
            </p>
            <div className="hero-actions">
              <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a 30-minute call
                <ArrowIcon />
              </a>
              <a className="text-link" href="#services">
                Explore our services
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <EngagementMap />
        </div>
      </section>

      <Services />
      <KnowledgeSystem />
      <Principles />
      <About />
      <FinalCallToAction />
    </main>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What we build"
          title="Practical AI, at the point where work happens."
          copy="Start with a focused engagement or combine capabilities around a larger AI initiative. Every path is grounded in measurable workflow value."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.featured ? 'is-featured' : ''}`} key={service.title}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                {service.featured && <span className="feature-label">Signature capability</span>}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-outcome">{service.outcome}</p>
              <ul>
                {service.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlowArrow() {
  return (
    <div className="flow-arrow" aria-hidden="true">
      <span />
      <svg viewBox="0 0 20 20"><path d="M5 4l6 6-6 6" fill="none" stroke="currentColor" /></svg>
    </div>
  )
}

function KnowledgeSystem() {
  return (
    <section className="section knowledge-section" id="system">
      <div className="container">
        <div className="knowledge-intro">
          <div>
            <p className="eyebrow eyebrow-light"><span /> In development at Velithic</p>
            <h2>One knowledge layer.<br /><em>Agents for every handoff.</em></h2>
          </div>
          <div className="knowledge-copy">
            <p>
              We are developing a system that turns existing organizational data into portable, structured knowledge—then gives each step of the software delivery lifecycle an agent with the right context and boundaries.
            </p>
            <a
              className="format-link"
              href="https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built on the vendor-neutral Open Knowledge Format
              <ExternalIcon />
            </a>
          </div>
        </div>

        <div className="system-flow" aria-label="Existing organizational data flows into an Open Knowledge Format layer and then to lifecycle agents">
          <div className="flow-column source-column">
            <span className="flow-label">01 / Existing context</span>
            <div className="source-list">
              {sources.map((source) => <span key={source}>{source}</span>)}
            </div>
          </div>
          <FlowArrow />
          <div className="flow-column okf-column">
            <span className="flow-label">02 / Portable knowledge</span>
            <div className="okf-core">
              <span className="core-orbit orbit-one" />
              <span className="core-orbit orbit-two" />
              <small>Open Knowledge Format</small>
              <strong>Shared<br />domain context</strong>
              <span className="core-status"><i /> Versioned · linked · agent-readable</span>
            </div>
          </div>
          <FlowArrow />
          <div className="flow-column agent-column">
            <span className="flow-label">03 / Lifecycle agents</span>
            <div className="agent-grid">
              {lifecycleAgents.map((agent, index) => (
                <span key={agent}><small>{String(index + 1).padStart(2, '0')}</small>{agent}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="independence-note">
          Velithic AI’s system is an independent project. Open Knowledge Format is an open format hosted in the GoogleCloudPlatform Knowledge Catalog repository.
        </p>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="section principles-section" id="principles">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="Reliability is part of the design—not a final checklist."
        />
        <div className="principles-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FounderPortrait() {
  if (founder.image) {
    return <img className="founder-portrait" src={founder.image} alt={`${founder.name}, ${founder.role}`} />
  }

  return (
    <div className="founder-portrait founder-placeholder" role="img" aria-label={`Portrait placeholder for ${founder.name}`}>
      <span className="portrait-grid" aria-hidden="true" />
      <span className="portrait-mark" aria-hidden="true"><BrandMark /></span>
      <strong>{founder.initials}</strong>
      <small>Founder / Velithic AI</small>
    </div>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-heading">
          <p className="eyebrow"><span /> The team</p>
          <h2>Senior thinking.<br />Hands-on delivery.</h2>
          <p>Founder-led, with specialist collaborators assembled around the real needs of each engagement.</p>
        </div>
        <article className="founder-card">
          <FounderPortrait />
          <div className="founder-copy">
            <span className="founder-label">Founder profile</span>
            <h3>{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            {founder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="founder-expertise" aria-label="Areas of expertise">
              <span>Agentic systems</span>
              <span>RAG</span>
              <span>LLM operations</span>
              <span>Enterprise architecture</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function FinalCallToAction() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-inner">
        <div>
          <p className="eyebrow eyebrow-light"><span /> Start with a conversation</p>
          <h2 id="final-cta-title">Bring us the workflow<br />that should work better.</h2>
        </div>
        <div className="final-cta-action">
          <p>In 30 minutes, we can clarify the opportunity, the constraints, and the smallest useful next step.</p>
          <a className="button button-light" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand brand-footer" href="#top" aria-label="Velithic AI, back to top">
          <BrandMark />
          <span>Velithic <strong>AI</strong></span>
        </a>
        <p>Practical AI systems for engineering-led organizations.</p>
        <div className="footer-meta">
          <a href="https://velithic.com">velithic.com</a>
          <span>© {new Date().getFullYear()} Velithic AI</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
