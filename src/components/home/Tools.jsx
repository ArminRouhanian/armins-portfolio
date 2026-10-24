import React from 'react'
import ToolsAnimation from './ToolsAnimation'

export default function Tools() {
  return (
    <section
      id="tools"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '48px 32px'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: '40px 56px',
          alignItems: 'center'
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--font-size-caption)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary-dark)'
            }}
          >
            02 · TOOLS
          </p>
          <h2
            style={{
              margin: '8px 0 20px',
              fontSize: 'var(--font-size-h1)',
              lineHeight: 'var(--line-height-h1)'
            }}
          >
            Tools I use to make things clear
          </h2>
          <p
            style={{
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-body-lg)',
              color: 'var(--color-text-secondary)'
            }}
          >
            I use AI, including Claude Code and Claude Design, to speed up
            ideation and execution without lowering the quality of the design.
          </p>
          <p
            style={{
              marginTop: '16px',
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-body-lg)',
              color: 'var(--color-text-secondary)'
            }}
          >
            Figma carries ideas from sketch to prototype, Notion, Jira and Trello keep
            decisions and delivery organized, and Google Analytics and Hotjar
            show me what people actually do.
          </p>
          <p
            style={{
              marginTop: '16px',
              fontSize: 'var(--font-size-body-lg)',
              lineHeight: 'var(--line-height-body-lg)',
              color: 'var(--color-text-secondary)'
            }}
          >
            My background as a developer lets me use Cursor, VS Code and n8n to
            build and automate what would otherwise slow a team down.
          </p>
          <p
            style={{
              marginTop: '20px',
              fontSize: 'var(--font-size-body-sm)',
              lineHeight: '1.7',
              color: 'var(--color-text-caption)'
            }}
          >
            Figma · Figma Make · Claude Design · Claude Code · Notion · Trello · Jira ·
            Cursor · Google Analytics · Hotjar · ChatGPT · n8n · VS Code
          </p>
        </div>
        <ToolsAnimation />
      </div>
    </section>
  )
}
