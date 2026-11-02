import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import SectionHeader from '../components/ui/SectionHeader/SectionHeader'
import Button from '../components/ui/Button/Button'
import { Carousel } from '../components/ui/Carousel'
import { Icon } from '../components/ui/Icon'
import { getMailtoHref } from '../utils/contact'
import { useFooterCtaNudge } from '../hooks/useFooterCtaNudge'
import styles from './AboutPage.module.css'

function StarBulletIcon() {
  return (
    <Icon
      name="star"
      size={24}
      className={styles.personalBulletIcon}
    />
  )
}

interface CapabilityItem {
  title: string
  description: string
  skills: string[]
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: 'Product & UI Design',
    description: 'Translating requirements into clear, functional interface designs.',
    skills: [
      'User Flows',
      'Wireframing',
      'UI Design',
      'Interactive Prototyping',
      'Usability Testing',
      'Responsive Layouts'
    ]
  },
  {
    title: 'Design Systems',
    description: 'Organizing component libraries, token hierarchies, and handoff files.',
    skills: [
      'Figma Component Libraries',
      'Design Tokens',
      'Style Guides',
      'Developer Handoff',
      'Consistency Audits'
    ]
  },
  {
    title: 'Technical Foundations',
    description: 'Front-end awareness that makes collaboration with developers natural.',
    skills: [
      'HTML5 / Modern CSS',
      'CSS Modules & Grid',
      'React Literacy',
      'Component Structure',
      'Git Basics'
    ]
  },
  {
    title: 'Modern Workflow',
    description: 'Using modern tools to prototype quickly and stay organized.',
    skills: [
      'Figma',
      'Claude Code',
      'Cursor',
      'Notion',
      'Jira',
      'Hotjar'
    ]
  }
]

function CapabilitiesCarousel() {
  const cards = CAPABILITIES.map((item) => (
    <div
      key={item.title}
      className={styles.card}
    >
      <h3 className={styles.cardTitle}>
        {item.title}
      </h3>
      <p className={styles.cardBody}>
        {item.description}
      </p>
      <div className={styles.skillPills}>
        {item.skills.map((skill) => (
          <span
            key={skill}
            className={styles.skillPill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))

  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        infinite={true}
        centered={true}
        bleed={true}
        slideWidth="calc(100% - 56px)"
        gap="16px"
        items={cards}
        ariaLabel="Capabilities carousel"
      />
    </div>
  )
}

export default function AboutPage() {
  useFooterCtaNudge()

  return (
    <div
      id="top"
      className={styles.pageContainer}
    >
      <Header />
      <main
        id="pgs"
        className={`${styles.mainContent} pgs`}
      >
        <div className={styles.pageWrapper}>
          <div className={styles.headerArea}>
            <Button
              as={Link}
              variant="tertiary"
              to="/"
              icon="/assets/icons/chevron-left.svg"
              iconSize={16}
              className={styles.backButton}
            >
              Back to home
            </Button>

            {/* ================================================================
                1. Hero Intro Section (1:1 Profile Image + Bio)
                ================================================================ */}
            <section className={styles.heroSection}>
              <div className={styles.imageFrame}>
                <div className={styles.imageContainer}>
                  <img
                    src="/assets/profile.webp"
                    alt="Armin Rouhanian - Product Designer"
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.imageCaption}>
                  <span>
                    <span className={styles.imageStatusDot} />
                    Available for select projects
                  </span>
                  <span>
                    Yerevan, Armenia
                  </span>
                </div>
              </div>

              <div className={styles.introContent}>
                <div className={styles.introHeader}>
                  <span className={styles.introLabel}>
                    00 · ABOUT ME
                  </span>
                  <h1 className={styles.introTitle}>
                    Armin Rouhanian
                  </h1>
                  <p className={styles.introSubtitle}>
                    Product Designer
                  </p>
                </div>

                <div className={styles.introBio}>
                  <p className={styles.bioLead}>
                    I turn complex, fuzzy ideas into software people understand and
                    want to use.
                  </p>
                  <p className={styles.bioText}>
                    With a background in software development and a strong interest in user
                    experience, I focus on designing clean, usable interfaces. Having written
                    code helps me think in modular components, understand technical constraints,
                    and make developer handoffs straightforward.
                  </p>
                  <p className={styles.bioText}>
                    Over the past few years, I have worked on B2B dashboards, internal portals,
                    and consumer-facing products like Pinket. I enjoy breaking down complex
                    flows into simple, clear steps and keeping design files organized and easy
                    to maintain.
                  </p>
                </div>

                <div className={styles.highlightsGrid}>
                  <div className={styles.highlightItem}>
                    <p className={styles.highlightValue}>
                      Product &amp; UI/UX
                    </p>
                    <p className={styles.highlightLabel}>
                      Web &amp; responsive interface design
                    </p>
                  </div>
                  <div className={styles.highlightItem}>
                    <p className={styles.highlightValue}>
                      Dashboards &amp; SaaS
                    </p>
                    <p className={styles.highlightLabel}>
                      Internal tools, B2B portals &amp; user flows
                    </p>
                  </div>
                  <div className={styles.highlightItem}>
                    <p className={styles.highlightValue}>
                      Dev Awareness
                    </p>
                    <p className={styles.highlightLabel}>
                      Pragmatic handoff &amp; component structure
                    </p>
                  </div>
                  <div className={styles.highlightItem}>
                    <p className={styles.highlightValue}>
                      Modern Toolkit
                    </p>
                    <p className={styles.highlightLabel}>
                      Figma, fast prototyping &amp; AI tools
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ================================================================
              2. Design Philosophy
              ================================================================ */}
          <section className={styles.section}>
            <SectionHeader
              label="01 · PHILOSOPHY"
              title="Three principles that guide my work"
            />
            <div className={styles.cardsGrid3}>
              <div className={`${styles.card} ${styles.cardClarity}`}>
                <div className={styles.cardTop}>
                  <span className={styles.badgeClarity}>
                    <span className={styles.dotClarity} />
                    01 · CLARITY
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <span className={styles.accentClarity}>
                    Clarity
                  </span>{' '}
                  over decoration
                </h3>
                <p className={styles.cardBody}>
                  Dense software doesn't need unnecessary visual flair—it needs clarity.
                  I focus on clean visual hierarchies, intuitive navigation, and obvious
                  user paths.
                </p>
              </div>

              <div className={`${styles.card} ${styles.cardStructure}`}>
                <div className={styles.cardTop}>
                  <span className={styles.badgeStructure}>
                    <span className={styles.dotStructure} />
                    02 · STRUCTURE
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <span className={styles.accentStructure}>
                    Structure
                  </span>{' '}
                  that helps teams
                </h3>
                <p className={styles.cardBody}>
                  A design system should save time, not add friction. I organize components
                  and tokens in Figma and CSS so handoffs are straightforward and the team
                  spends less time guessing.
                </p>
              </div>

              <div className={`${styles.card} ${styles.cardValue}`}>
                <div className={styles.cardTop}>
                  <span className={styles.badgeValue}>
                    <span className={styles.dotValue} />
                    03 · VALUE
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <span className={styles.accentValue}>
                    Value
                  </span>{' '}
                  &amp; velocity with AI
                </h3>
                <p className={styles.cardBody}>
                  I use modern tools like Claude Code, Cursor, and automations to test
                  ideas faster, iterate on feedback, and communicate design intent clearly
                  before implementation.
                </p>
              </div>
            </div>
          </section>

          {/* ================================================================
              3. Experience & Track Record
              ================================================================ */}
          <section className={styles.section}>
            <SectionHeader
              label="02 · EXPERIENCE"
              title="Recent work &amp; background"
            />
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineRoleGroup}>
                    <h3 className={styles.timelineRole}>
                      UI/UX Designer
                    </h3>
                    <p className={styles.timelineCompany}>
                      Pinket
                    </p>
                  </div>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>
                      2022 – 2026
                    </span>
                  </div>
                </div>
                <p className={styles.timelineDescription}>
                  Worked across both customer-facing products and internal operational tools
                  at Pinket, designing the mobile web wallet as well as the tri-portal dashboard
                  system (Admin, Merchant, and Organization).
                </p>
                <ul className={styles.timelineHighlights}>
                  <li className={styles.timelineHighlightItem}>
                    <strong>Customer App:</strong> Designed the mobile web application for
                    employee welfare credit, including digital wallet flows, online purchasing,
                    in-store barcode/QR payments, and UI kit refactoring across company pivots.
                  </li>
                  <li className={styles.timelineHighlightItem}>
                    <strong>B2B &amp; Operational Dashboards:</strong> Designed operator workflows,
                    financial auditing lists, vendor commission contract builders, and responsive
                    views for on-the-go moderation.
                  </li>
                  <li className={styles.timelineHighlightItem}>
                    <strong>Design Systems:</strong> Built cohesive component libraries and
                    collaborated on a shared Figma design system to keep components consistent
                    across both consumer and portal teams.
                  </li>
                </ul>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineRoleGroup}>
                    <h3 className={styles.timelineRole}>
                      Product Designer (Freelance)
                    </h3>
                    <p className={styles.timelineCompany}>
                      MetaMondial 3D
                    </p>
                  </div>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>
                      2022
                    </span>
                  </div>
                </div>
                <p className={styles.timelineDescription}>
                  Designed responsive landing pages, marketplace discovery flows, and user
                  profile screens during the platform's early-stage fundraising phase.
                </p>
                <ul className={styles.timelineHighlights}>
                  <li className={styles.timelineHighlightItem}>
                    Designed clean desktop and mobile layouts for the platform's public landing
                    pages and asset showcases.
                  </li>
                  <li className={styles.timelineHighlightItem}>
                    Structured marketplace cards, auction bidding states, and user profile views
                    with clear visual cues.
                  </li>
                  <li className={styles.timelineHighlightItem}>
                    Delivered organized Figma components and handoff files to help developers
                    implement quickly.
                  </li>
                </ul>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineRoleGroup}>
                    <h3 className={styles.timelineRole}>
                      Software Development Background
                    </h3>
                    <p className={styles.timelineCompany}>
                      Front-End &amp; Technical Foundation
                    </p>
                  </div>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>
                      Foundations
                    </span>
                  </div>
                </div>
                <p className={styles.timelineDescription}>
                  Started out learning software development and building web interfaces.
                  While my focus shifted fully to product and UI/UX design, having written
                  code helps me communicate smoothly with developers, understand technical
                  constraints, and design realistic components.
                </p>
              </div>
            </div>
          </section>

          {/* ================================================================
              4. Capabilities & Skills Matrix
              ================================================================ */}
          <section className={styles.section}>
            <SectionHeader
              label="03 · CAPABILITIES"
              title="Skills &amp; everyday tools"
            />
            <div className={styles.cardsGrid4}>
              {CAPABILITIES.map((item) => (
                <div
                  key={item.title}
                  className={styles.card}
                >
                  <h3 className={styles.cardTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.cardBody}>
                    {item.description}
                  </p>
                  <div className={styles.skillPills}>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={styles.skillPill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <CapabilitiesCarousel />
          </section>

          {/* ================================================================
              5. Beyond Work Section
              ================================================================ */}
          <section className={styles.section}>
            <SectionHeader
              label="04 · BEYOND WORK"
              title="A glimpse outside the canvas"
            />
            <div className={styles.personalCard}>
              <div className={styles.personalText}>
                <h3 className={styles.personalTitle}>
                  Curiosity beyond design &amp; interfaces
                </h3>
                <p className={styles.personalBody}>
                  Outside of product design and design systems, I explore disciplines that
                  nurture creativity, analytical thought, and dedication to craft.
                </p>
                <p className={styles.personalBody}>
                  Whether it is dissecting game mechanics, understanding human cognition,
                  or practicing an acoustic instrument, exploring different worlds keeps my
                  perspective fresh and grounded.
                </p>
              </div>

              <div className={styles.personalList}>
                <div className={styles.personalItem}>
                  <div className={styles.personalItemHeader}>
                    <StarBulletIcon />
                    <h4 className={styles.cardTitle}>
                      Indie Games &amp; Game Development
                    </h4>
                  </div>
                  <p className={styles.personalItemBody}>
                    Fascinated by game design, mechanics, and interactive storytelling.
                    I love exploring creative indie titles and tinkering with game development
                    in my free time.
                  </p>
                </div>

                <div className={styles.personalItem}>
                  <div className={styles.personalItemHeader}>
                    <StarBulletIcon />
                    <h4 className={styles.cardTitle}>
                      Psychology &amp; Human Behavior
                    </h4>
                  </div>
                  <p className={styles.personalItemBody}>
                    Deeply interested in studying cognitive and behavioral psychology
                    independently; exploring how people perceive, decide, and form habits
                    as human beings.
                  </p>
                </div>

                <div className={styles.personalItem}>
                  <div className={styles.personalItemHeader}>
                    <StarBulletIcon />
                    <h4 className={styles.cardTitle}>
                      Playing Violin
                    </h4>
                  </div>
                  <p className={styles.personalItemBody}>
                    Playing an acoustic instrument demands patience, ear training, and continuous
                    refinement; a meditative practice that sharpens focus and emotional expression.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              6. Call to Action Banner
              ================================================================ */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>
                Let's build something clear and impactful
              </h2>
              <p className={styles.ctaDescription}>
                Looking for a product designer to elevate your team, build your
                design system, or tackle your next complex product?
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button
                as="a"
                variant="primary"
                href={getMailtoHref()}
              >
                Get in touch
              </Button>
              <Button
                as={Link}
                to="/#work"
                variant="secondary"
              >
                View selected work
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
