import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import styles from './ExperienceSection.module.css'

export default function ExperienceSection() {
  return (
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
  )
}
