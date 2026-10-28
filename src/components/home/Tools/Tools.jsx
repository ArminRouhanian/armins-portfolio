import React from 'react'
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
              I use AI, including Claude Code and Claude Design, to speed up
              ideation and execution without lowering the quality of the design.
            </p>
            <p className={styles.bodyTextSpaced}>
              Figma carries ideas from sketch to prototype, Notion, Jira and Trello keep
              decisions and delivery organized, and Google Analytics and Hotjar
              show me what people actually do.
            </p>
            <p className={styles.bodyTextSpaced}>
              My background as a developer lets me use Cursor, VS Code and n8n to
              build and automate what would otherwise slow a team down.
            </p>
            <p className={styles.toolListCaption}>
              Figma · Figma Make · Claude Design · Claude Code · Notion · Trello · Jira ·
              Cursor · Google Analytics · Hotjar · ChatGPT · n8n · VS Code
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
