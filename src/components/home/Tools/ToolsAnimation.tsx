import React from 'react'
import Cursor from '../../ui/Cursor/Cursor'
import styles from './ToolsAnimation.module.css'

const ORBITS = [
  {
    id: 1,
    rx: '230px',
    ry: '92px',
    h: '12.0s',
    s0: '0.72',
    s1: '1.18',
    tools: [
      { name: 'Figma', icon: '/assets/tools/logo-figma.svg' },
      { name: 'Claude Code', icon: '/assets/tools/logo-claude.svg' },
      { name: 'Notion', icon: '/assets/tools/logo-notion.svg' },
      { name: 'Google Analytics', icon: '/assets/tools/logo-google-analytics.svg' },
      { name: 'Jira', icon: '/assets/tools/logo-jira.svg' }
    ],
    delays: [
      { dx: '-0.00s', dy: '-6.00s' },
      { dx: '-4.80s', dy: '-10.80s' },
      { dx: '-9.60s', dy: '-15.60s' },
      { dx: '-14.40s', dy: '-20.40s' },
      { dx: '-19.20s', dy: '-25.20s' }
    ]
  },
  {
    id: 2,
    rx: '165px',
    ry: '64px',
    h: '9.0s',
    s0: '0.58',
    s1: '1.02',
    tools: [
      { name: 'Figma Make', icon: '/assets/tools/logo-figma-make.svg' },
      { name: 'Cursor', icon: '/assets/tools/logo-cursor.svg' },
      { name: 'Hotjar', icon: '/assets/tools/logo-hotjar.svg' },
      { name: 'n8n', icon: '/assets/tools/logo-n8n.svg' }
    ],
    delays: [
      { dx: '-0.00s', dy: '4.50s' },
      { dx: '-4.50s', dy: '0.00s' },
      { dx: '-9.00s', dy: '-4.50s' },
      { dx: '-13.50s', dy: '-9.00s' }
    ]
  },
  {
    id: 3,
    rx: '105px',
    ry: '42px',
    h: '6.5s',
    s0: '0.46',
    s1: '0.86',
    tools: [
      { name: 'Claude Design', icon: '/assets/tools/logo-claude-design.svg' },
      { name: 'Trello', icon: '/assets/tools/logo-trello.svg' },
      { name: 'ChatGPT', icon: '/assets/tools/logo-chatgpt.svg' },
      { name: 'VS Code', icon: '/assets/tools/logo-vscode.svg' }
    ],
    delays: [
      { dx: '-0.00s', dy: '-3.25s' },
      { dx: '-3.25s', dy: '-6.50s' },
      { dx: '-6.50s', dy: '-9.75s' },
      { dx: '-9.75s', dy: '-13.00s' }
    ]
  }
]

interface SparkleSvgProps {
  size: number
  fill: string
}

function SparkleSvg({ size, fill }: SparkleSvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
        fill={fill}
      />
    </svg>
  )
}

const PARTICLES = [
  { px: '-40px', pd: '0s', bg: 'var(--color-fg-accent-orange)' },
  { px: '30px', pd: '0.7s', bg: 'var(--color-fg-brand-secondary)' },
  { px: '-15px', pd: '1.4s', bg: 'var(--color-fg-accent-green)' },
  { px: '50px', pd: '2.1s', bg: 'var(--color-fg-accent-orange_light)' },
  { px: '-55px', pd: '2.8s', bg: 'var(--color-fg-accent-purple_light)' },
  { px: '10px', pd: '3.5s', bg: 'var(--color-fg-solid)' },
  { px: '-30px', pd: '4.2s', bg: 'var(--color-fg-brand-secondary)' },
  { px: '40px', pd: '4.9s', bg: 'var(--color-fg-accent-orange)' }
]

export default function ToolsAnimation() {
  return (
    <div className={styles.stage}>
      <div className={styles.scene}>
        {ORBITS.map((orbit) => (
          <React.Fragment key={orbit.id}>
            {orbit.tools.map((tool, index) => {
              const delays = orbit.delays[index]
              return (
                <div
                  key={tool.name}
                  className={styles.orbitX}
                  style={{
                    '--rx': orbit.rx,
                    '--h': orbit.h,
                    '--dx': delays.dx,
                    '--dy': delays.dy
                  } as React.CSSProperties}
                >
                  <div
                    className={styles.orbitY}
                    style={{
                      '--ry': orbit.ry,
                      '--s0': orbit.s0,
                      '--s1': orbit.s1
                    } as React.CSSProperties}
                  >
                    <div
                      className={styles.toolIcon}
                      title={tool.name}
                      aria-label={tool.name}
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={styles.toolImage}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        ))}
        <div className={styles.core}>
          <div className={styles.glow} />
          <span className={styles.sparkleBig}>
            <SparkleSvg
              size={70}
              fill="var(--color-fg-solid)"
            />
          </span>
          <span
            className={styles.sparkleMedium}
            style={{
              left: '-62px',
              top: '-46px'
            }}
          >
            <SparkleSvg
              size={18}
              fill="var(--color-util-purple-300)"
            />
          </span>
          <span
            className={styles.sparkleSmall}
            style={{
              left: '50px',
              top: '-58px'
            }}
          >
            <SparkleSvg
              size={14}
              fill="var(--color-fg-brand-secondary)"
            />
          </span>
          <span
            className={styles.sparkleMedium}
            style={{
              left: '46px',
              top: '40px',
              animationDelay: '-.8s'
            }}
          >
            <SparkleSvg
              size={12}
              fill="var(--color-fg-accent-green_light)"
            />
          </span>
          {PARTICLES.map((p, idx) => (
            <i
              key={idx}
              className={styles.particle}
              style={{
                '--px': p.px,
                '--pd': p.pd,
                background: p.bg
              } as React.CSSProperties}
            />
          ))}
        </div>
        <Cursor
          thinking
          className={styles.cursorStage}
        />
      </div>
    </div>
  )
}
