import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
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
          <SectionHeader
            label="00 · ABOUT ME"
            title="Armin Rouhanian"
            titleAs="h1"
          >
            <p className={styles.introSubtitle}>
              Product Designer
            </p>
          </SectionHeader>

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
  )
}
