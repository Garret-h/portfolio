import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const contact = {
  email: 'garret.hosey@icloud.com',
  linkedin: 'https://www.linkedin.com/in/garret-hosey-480b64327/'
}

const projects = [
  {
    number: '01',
    name: 'Electric Guitar',
    type: 'Product design & fabrication · May–June 2026',
    desc: 'Designed and manufactured a fully functioning electric guitar body that houses multiple components, carrying the work from scope and planning through fabrication.',
    tags: ['Product design', 'Woodworking', 'Soldering'],
    metric: '01',
    metricLabel: 'working instrument',
    visual: 'guitar',
    image: '/images/Guitar_CAD.jpeg',
    video: '/Website_guitar_master.mp3',
    videoLabel: 'Listen to the final product',
    details: [
      {
        label: 'Scope',
        text: 'Designed a guitar body to house the instrument’s components and deliver a fully functioning final product.'
      },
      {
        label: 'Process',
        text: 'Used a Quality Function Deployment (QFD) table, Failure Modes and Effects Analysis (FMEA), and a bill of materials to guide planning, design, manufacturing, and assembly.'
      },
      {
        label: 'Skills developed',
        text: 'Woodworking, soldering, budgeting, and hands-on product development.'
      }
    ]
  },
  {
    number: '02',
    name: 'Motorized TV Lift Console',
    type: 'Furniture design & build · July 2026',
    desc: 'Designed and built a custom plywood console with a motorized internal lift, allowing the television to disappear when it is not in use.',
    tags: ['Design planning', 'Fabrication', 'Woodworking'],
    metric: '02',
    metricLabel: 'custom build',
    visual: 'lift',
    video: 'https://www.youtube.com/shorts/Yg_irf1FviI',
    videoLabel: 'See how it works',
    details: [
      {
        label: 'Scope',
        text: 'Designed a functional media console that concealed a television when not in use while preserving a clean and intentional living space.'
      },
      {
        label: 'Process',
        text: 'Used a lift mechanism, plywood fabrication, and iterative assembly planning to ensure the console was both practical and durable.'
      },
      {
        label: 'Skills developed',
        text: 'Furniture design, fabrication, assembly planning, and hands-on problem solving.'
      }
    ]
  },
  {
    number: '03',
    name: 'Guitar Pedal',
    type: 'Electronics & fabrication · Summer 2026',
    desc: 'Built a Purple Plexi-inspired distortion pedal to practice soldering and create a high-value sound effect circuit on a budget.',
    tags: ['Electronics', 'Soldering', 'Audio design'],
    metric: '03',
    metricLabel: 'custom pedal',
    visual: 'fiber',
    image: '/images/Guitar_Pedal.jpeg',
    details: [
      {
        label: 'Scope',
        text: 'Built a distortion pedal to practice soldering and create a useful audio circuit before installing electronics in the guitar.'
      },
      {
        label: 'Process',
        text: 'Used a Purple Plexi distortion design and assembled the circuit using a guided kit with components ordered together to reduce shipping costs.'
      },
      {
        label: 'Skills developed',
        text: 'Soldering, electronics assembly, and hands-on audio circuit building.'
      }
    ]
  }
]

function Icon({ name }) {
  const paths = {
    arrow: 'M5 12h14M13 6l6 6-6 6',
    menu: 'M4 7h16M4 12h16M4 17h16',
    close: 'M6 6l12 12M18 6L6 18',
    download: 'M12 3v12m0 0l-5-5m5 5l5 5M4 21h16'
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

/* ---------------- ROUTING ---------------- */

function getPageFromPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  switch (path) {
    case '/':
      return 'home'
    case '/about':
      return 'about'
    case '/projects':
      return 'projects'
    case '/resume':
      return 'resume'
    default:
      return 'home'
  }
}

function navigateTo(page) {
  const routes = {
    home: '/',
    about: '/about',
    projects: '/projects',
    resume: '/resume'
  }

  window.history.pushState({}, '', routes[page])
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/* ---------------- HEADER ---------------- */

function Header({ page }) {
  const [open, setOpen] = useState(false)

  const navigate = (p) => {
    navigateTo(p)
    setOpen(false)
  }

  return (
    <header>
      <button
        className="brand"
        onClick={() => navigate('home')}
        aria-label="Home"
      >
        Garret Hosey
      </button>

      <nav className={open ? 'open' : ''}>
        {[
          ['home', 'Home'],
          ['about', 'About me'],
          ['projects', 'Projects'],
          ['resume', 'Resume']
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => navigate(key)}
            className={page === key ? 'active' : ''}
          >
            {label}
          </button>
        ))}

        <a
          className="nav-contact"
          href={`mailto:${contact.email}`}
        >
          Contact
        </a>
      </nav>

      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>
    </header>
  )
}

/* ---------------- PROJECT VISUAL ---------------- */

function ProjectVisual({ kind, image, alt }) {
  if (image) {
    return (
      <figure className="project-visual project-photo">
        <img src={image} alt={alt} />
      </figure>
    )
  }

  return (
    <div className={`project-visual ${kind}`}>
      <div className="visual-shape one" />
      <div className="visual-shape two" />
      <div className="visual-shape three" />

      <span>
        {kind === 'guitar'
          ? 'DESIGN → BUILD → PLAY'
          : kind === 'lift'
          ? 'CONCEALED LIFT SYSTEM'
          : 'MATERIALS RESEARCH'}
      </span>
    </div>
  )
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">
          <i /> MECHANICAL ENGINEERING / 2027
        </div>

        <div className="hero-grid">
          <h1>
            Plan
            <br />
            Design
            <br />
            <span>Build</span>
          </h1>

          <div className="hero-side">
            <p>
              I’m Garret Hosey, a Virginia Tech mechanical engineering
              student focused on thoughtful design, hands-on fabrication,
              and the details that make a build work.
            </p>

            <div className="hero-actions">
              <button
                className="text-link"
                onClick={() => navigateTo('projects')}
              >
                Explore my work <Icon name="arrow" />
              </button>

              <a
                className="text-link"
                href={`mailto:${contact.email}`}
              >
                Get in touch <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <span>SCROLL TO DISCOVER</span>
          <div className="line" />
          <span>BLACKSBURG, VA · LEXINGTON, KY</span>
        </div>
      </section>

      <section className="intro">
        <p className="section-label">01 / AT A GLANCE</p>

        <h2>
          Applying knowledge from courses to build something interesting
        </h2>

        <div className="stats">
          <div>
            <strong>3.66</strong>
            <span>
              Virginia Tech
              <br />
              GPA
            </span>
          </div>

          <div>
            <strong>2027</strong>
            <span>
              B.S. Mechanical
              <br />
              Engineering
            </span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              hands-on builds
              <br />
              featured here
            </span>
          </div>
        </div>
      </section>

      <section className="feature">
        <div>
          <p className="section-label">FEATURED PROJECT / 01</p>

          <h2>
            Electric guitar design and build
          </h2>

          <p>
            A complete product-development experience: planning,
            component layout, manufacturing, woodworking, soldering,
            and budgeting—all in one playable instrument.
          </p>

          <button
            className="text-link"
            onClick={() => navigateTo('projects')}
          >
            View the projects <Icon name="arrow" />
          </button>
        </div>

        <ProjectVisual
          image="/images/guitarpic.jpeg"
          alt="Finished electric guitar build"
        />
      </section>
    </main>
  )
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <main className="page about">
      <p className="eyebrow">
        <i /> 02 / ABOUT ME
      </p>

      <div className="about-top">
        <h1>
          Senior mechanical engineering student at Virginia Tech
        </h1>

        <div className="portrait">
          <img
            src="/images/electric-guitar.jpg"
            alt="Garret Hosey's electric guitar project"
          />
          <span>PLAN → DESIGN → BUILD</span>
        </div>
      </div>

      <div
        className="about-graphics"
        aria-label="Engineering disciplines"
      >
        <div className="graphic-card blueprint">
          <i />
          <i />
          <i />
          <span>
            MECHANICAL
            <br />
            SYSTEMS
          </span>
        </div>

        <div className="graphic-card process">
          <b>01</b>
          <i />
          <b>02</b>
          <i />
          <b>03</b>

          <span>DEFINE · TEST · REFINE</span>
        </div>
      </div>

      <section className="about-sections">
        <article>
          <p className="section-label">01 / EDUCATION</p>
          <h2>Education</h2>

          <p>
            I’m currently a senior at Virginia Tech majoring in
            Mechanical Engineering with a minor in Biomedical
            Engineering. Through my coursework, I have gained valuable
            knowledge of the fundamental science behind engineering,
            as well as the design process. I’m excited to apply this
            knowledge to build a valuable profession that helps serve
            others.
          </p>
        </article>

        <article>
          <p className="section-label">02 / RESEARCH</p>
          <h2>Research</h2>

          <p>
            My background in research at Virginia Tech has honed my
            ability to define problems and implement creative
            solutions.
          </p>
        </article>

        <article>
          <p className="section-label">03 / FUTURE GOALS</p>
          <h2>Future goals</h2>

          <p>
            I look forward to taking on varied engineering projects as
            a member of a larger collaborative team. I’m especially
            interested in projects relating to biomedical engineering.
          </p>
        </article>
      </section>
    </main>
  )
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  return (
    <main className="page">
      <p className="eyebrow">
        <i /> 03 / SELECTED WORK
      </p>

      <div className="project-heading">
        <h1>
          Personal design projects
        </h1>

        <p>
          From initial concepts to finished physical builds, these
          projects reflect an interest in designing with intent and
          learning through fabrication.
        </p>
      </div>

      <section className="project-list">
        {projects.map((p) => (
          <article className="project-card" key={p.number}>
            <div className="project-number">{p.number}</div>

            <ProjectVisual
              kind={p.visual}
              image={p.image}
              alt={`${p.name} project`}
            />

            <div className="project-info">
              <p className="section-label">{p.type}</p>

              <h2>{p.name}</h2>

              <p>{p.desc}</p>

              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {p.video && (
                <a
                  className="video-link"
                  href={p.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.videoLabel} <Icon name="arrow" />
                </a>
              )}

              {p.details && (
                <details className="project-details">
                  <summary>
                    Project details <Icon name="arrow" />
                  </summary>

                  <div>
                    {p.details.map((detail) => (
                      <p key={detail.label}>
                        <b>{detail.label}</b>
                        {detail.text}
                      </p>
                    ))}
                  </div>
                </details>
              )}
            </div>

            <div className="metric">
              <strong>{p.metric}</strong>
              <span>{p.metricLabel}</span>
            </div>

            <button
              className="circle-button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }
              aria-label="Back to top"
            >
              <Icon name="arrow" />
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}

/* ---------------- RESUME ---------------- */

function Resume() {
  const skills = [
    ['Design', 'SolidWorks, OnShape, GD&T'],
    ['Analysis', 'MATLAB, Minitab, Wolfram'],
    ['Planning', 'Microsoft Project, Excel, Word'],
    ['Fabrication', 'Woodworking, soldering, shop planning']
  ]

  return (
    <main className="page resume">
      <div className="resume-title">
        <p className="eyebrow">
          <i /> 04 / RESUME
        </p>

        <h1>
          Experience outside of personal projects
        </h1>

        <a
          className="button"
          href="/GarretHoseyResume_Lex.KY_MEStudent.pdf"
          download
        >
          <Icon name="download" /> Download PDF
        </a>
      </div>

      <section className="resume-grid">
        <div>
          <p className="section-label">EXPERIENCE</p>

          <article>
            <span>2025–26</span>
            <div>
              <h3>Lab Technician</h3>
              <b>
                Spinnaret-Based Tunable Engineered Parameters Lab
              </b>
              <p>
                Manufactured nanofiber networks and contributed to
                research design, data collection, analysis, and
                organization across multiple projects.
              </p>
            </div>
          </article>

          <article>
            <span>2024</span>
            <div>
              <h3>Range Attendant</h3>
              <b>Keene Trace Golf Club</b>
              <p>
                Maintained stocked, organized driving ranges at two
                facilities while managing a consistent weekly schedule.
              </p>
            </div>
          </article>

          <article>
            <span>2023</span>
            <div>
              <h3>Aviation Maintenance Shadow</h3>
              <b>
                Nexgen Aviation Jet Management & Flight School
              </b>
              <p>
                Performed oil changes and systems checkups alongside
                maintenance technicians; gained exposure to
                single-propeller aircraft maintenance.
              </p>
            </div>
          </article>

          <article>
            <span>2022–23</span>
            <div>
              <h3>Physical Therapy Observer</h3>
              <b>University of Kentucky Physical Therapy</b>
              <p>
                Observed appointments and recovery planning, building
                practical insight into biomechanics, anatomy, and
                patient care.
              </p>
            </div>
          </article>
        </div>

        <div>
          <p className="section-label">EDUCATION</p>

          <article>
            <span>2027</span>
            <div>
              <h3>B.S. Mechanical Engineering</h3>
              <b>Virginia Tech · Blacksburg, VA</b>
              <p>
                Biomedical Engineering minor · GPA 3.66 / 4.00
              </p>
            </div>
          </article>

          <p className="section-label skill-label">TOOLKIT</p>

          {skills.map(([a, b]) => (
            <div className="skill" key={a}>
              <b>{a}</b>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer>
      <div>
        <span>HAVE A PROJECT IN MIND?</span>

        <a href={`mailto:${contact.email}`}>
          Let’s talk <Icon name="arrow" />
        </a>
      </div>

      <p>
        © 2026 GARRET HOSEY{' '}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>{' '}
        <a href={`mailto:${contact.email}`}>EMAIL</a>
      </p>
    </footer>
  )
}

/* ---------------- APP ---------------- */

function App() {
  const [page, setPage] = useState(getPageFromPath)

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [page])

  let Page

  switch (page) {
    case 'about':
      Page = About
      break

    case 'projects':
      Page = Projects
      break

    case 'resume':
      Page = Resume
      break

    case 'home':
    default:
      Page = Home
      break
  }

  return (
    <>
      <Header page={page} />
      <Page />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)