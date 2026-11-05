import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import { Carousel } from '../../ui/Carousel'
import styles from './CapabilitiesSection.module.css'

export interface CapabilityItem {
  title: string
  description: string
  skills: string[]
}

export const CAPABILITIES: CapabilityItem[] = [
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
      'Pragmatic Handoff'
    ]
  },
  {
    title: 'Speed & Exploration with AI',
    description: 'Leveraging AI-assisted tools to speed up discovery, drafts, and testing.',
    skills: [
      'Claude Code & CLI',
      'Cursor Workflows',
      'Fast Prototyping',
      'Design Exploration',
      'Workflow Automation'
    ]
  }
]

function CapabilityCard({ item }: { item: CapabilityItem }) {
  return (
    <div className={styles.card}>
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
  )
}

export default function CapabilitiesSection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        label="03 · CAPABILITIES"
        title="Skills &amp; everyday tools"
      />
      <div className={styles.cardsGrid4}>
        {CAPABILITIES.map((item) => (
          <CapabilityCard
            key={item.title}
            item={item}
          />
        ))}
      </div>

      <div className={styles.carouselWrapper}>
        <Carousel
          infinite={false}
          centered={true}
          bleed={true}
          slideWidth="calc(100% - 56px)"
          gap="16px"
          showController={true}
          ariaLabel="Capabilities carousel"
        >
          {CAPABILITIES.map((item) => (
            <CapabilityCard
              key={item.title}
              item={item}
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
