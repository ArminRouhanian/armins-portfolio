import ToolsAnimation from './ToolsAnimation'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import styles from './Tools.module.css'

export default function Tools() {
  return (
    <section id="tools" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.textContent}>
          <SectionHeader
            label="02 · TOOLS"
            title="Tools I use to make things clear"
            className={styles.header}
          />
          <div className={styles.paragraphs}>
            <p className={styles.bodyText}>
              I use AI tools like Claude Code and Cursor to move quickly from ideas
              to interactive prototypes, speeding up execution without sacrificing craft.
            </p>
            <p className={styles.bodyTextSpaced}>
              Figma holds a focused role, Including housing design system details, tokens,
              and component structures. While Notion, Jira, and Hotjar keep delivery
              and feedback organized.
            </p>
            <p className={styles.bodyTextSpaced}>
              My coding background means handoffs aren't guesswork. I understand how
              developers build, anticipate technical constraints, and deliver clear
              specs that teams can ship without friction.
            </p>
            <p className={styles.toolListCaption}>
              Figma · Claude Code · Cursor · VS Code · Notion · Jira · Trello · Hotjar · Google Analytics · n8n
            </p>
          </div>
        </div>
        <div className={styles.animationSlot}>
          <ToolsAnimation />
        </div>
      </div>
    </section>
  )
}
