import React from 'react'
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
      { name: 'Figma', icon: '/assets/logo-figma.svg' },
      { name: 'Claude Code', icon: '/assets/logo-claude.svg' },
      { name: 'Notion', icon: '/assets/logo-notion.svg' },
      { name: 'Google Analytics', icon: '/assets/logo-google-analytics.svg' },
      { name: 'Jira', icon: '/assets/logo-jira.svg' }
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
      { name: 'Figma Make', icon: '/assets/logo-figma-make.svg' },
      { name: 'Cursor', icon: '/assets/logo-cursor.svg' },
      { name: 'Hotjar', icon: '/assets/logo-hotjar.svg' },
      { name: 'n8n', icon: '/assets/logo-n8n.svg' }
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
      { name: 'Claude Design', icon: '/assets/logo-claude-design.svg' },
      { name: 'Trello', icon: '/assets/logo-trello.svg' },
      { name: 'ChatGPT', icon: '/assets/logo-chatgpt.svg' },
      { name: 'VS Code', icon: '/assets/logo-vscode.svg' }
    ],
    delays: [
      { dx: '-0.00s', dy: '-3.25s' },
      { dx: '-3.25s', dy: '-6.50s' },
      { dx: '-6.50s', dy: '-9.75s' },
      { dx: '-9.75s', dy: '-13.00s' }
    ]
  }
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
                  }}
                >
                  <div
                    className={styles.orbitY}
                    style={{
                      '--ry': orbit.ry,
                      '--s0': orbit.s0,
                      '--s1': orbit.s1
                    }}
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
            <svg
              viewBox="0 0 24 24"
              width="70"
              height="70"
              aria-hidden="true"
            >
              <path
                d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
                fill="#fff"
              />
            </svg>
          </span>
          <span
            className={styles.sparkleMedium}
            style={{
              left: '-62px',
              top: '-46px'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
                fill="var(--color-purple-subtle)"
              />
            </svg>
          </span>
          <span
            className={styles.sparkleSmall}
            style={{
              left: '50px',
              top: '-58px'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              aria-hidden="true"
            >
              <path
                d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
                fill="var(--color-primary-light)"
              />
            </svg>
          </span>
          <span
            className={styles.sparkleMedium}
            style={{
              left: '46px',
              top: '40px',
              animationDelay: '-.8s'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              aria-hidden="true"
            >
              <path
                d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
                fill="var(--color-green-light)"
              />
            </svg>
          </span>
          <i
            className={styles.particle}
            style={{
              '--px': '-40px',
              '--pd': '0s',
              background: 'var(--color-orange)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '30px',
              '--pd': '0.7s',
              background: 'var(--color-primary-light)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '-15px',
              '--pd': '1.4s',
              background: 'var(--color-green)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '50px',
              '--pd': '2.1s',
              background: 'var(--color-orange-light)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '-55px',
              '--pd': '2.8s',
              background: 'var(--color-purple-light)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '10px',
              '--pd': '3.5s',
              background: '#fff'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '-30px',
              '--pd': '4.2s',
              background: 'var(--color-primary-light)'
            }}
          />
          <i
            className={styles.particle}
            style={{
              '--px': '40px',
              '--pd': '4.9s',
              background: 'var(--color-orange)'
            }}
          />
        </div>
        <div className={styles.cursorStage} aria-hidden="true">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
          >
            <path
              d="M1 1 L1 15.5 L5 12 L11.5 12 Z"
              fill="var(--color-purple)"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.cursorTag}>
            Armin Rouhanian
          </span>
          <span className={styles.thinkingBubble}>
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
  )
}
