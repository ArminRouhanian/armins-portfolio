import React from 'react'

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
              fontSize: '13px',
              fontWeight: '700',
              color: '#0C7BD1'
            }}
          >
            02 · TOOLS
          </p>
          <h2
            style={{
              margin: '8px 0 20px',
              fontSize: '36px',
              lineHeight: '1.15'
            }}
          >
            Tools I use to make things clear
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#444'
            }}
          >
            I use AI, including Claude Code and Claude Design, to speed up
            ideation and execution without lowering the quality of the design.
          </p>
          <p
            style={{
              marginTop: '16px',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#444'
            }}
          >
            Figma carries ideas from sketch to prototype, Notion, Jira and Trello keep
            decisions and delivery organized, and Google Analytics and Hotjar
            show me what people actually do.
          </p>
          <p
            style={{
              marginTop: '16px',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#444'
            }}
          >
            My background as a developer lets me use Cursor, VS Code and n8n to
            build and automate what would otherwise slow a team down.
          </p>
          <p
            style={{
              marginTop: '20px',
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#777'
            }}
          >
            Figma · Figma Make · Claude Design · Claude Code · Notion · Trello · Jira ·
            Cursor · Google Analytics · Hotjar · ChatGPT · n8n · VS Code
          </p>
        </div>
        <div className="tstage">
          <div className="tscene">
            {ORBITS.map(orbit => (
              <React.Fragment key={orbit.id}>
                {orbit.tools.map((tool, index) => {
                  const delays = orbit.delays[index]
                  return (
                    <div
                      key={tool.name}
                      className="ox"
                      style={{
                        '--rx': orbit.rx,
                        '--h': orbit.h,
                        '--dx': delays.dx,
                        '--dy': delays.dy
                      }}
                    >
                      <div
                        className="oy"
                        style={{
                          '--ry': orbit.ry,
                          '--s0': orbit.s0,
                          '--s1': orbit.s1
                        }}
                      >
                        <div
                          className="tl"
                          title={tool.name}
                          aria-label={tool.name}
                          style={{
                            overflow: 'hidden',
                            padding: 0,
                            border: '1px solid rgba(255, 255, 255, 0.12)'
                          }}
                        >
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </React.Fragment>
            ))}
            <div className="core">
              <div className="glow"></div>
              <span className="sp1">
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
                className="sp2"
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
                    fill="#C39BFF"
                  />
                </svg>
              </span>
              <span
                className="sp3"
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
                    fill="#1ABCFE"
                  />
                </svg>
              </span>
              <span
                className="sp2"
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
                    fill="#3DDC9B"
                  />
                </svg>
              </span>
              <i
                className="pt"
                style={{
                  '--px': '-40px',
                  '--pd': '0s',
                  background: '#F24E1E'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '30px',
                  '--pd': '0.7s',
                  background: '#1ABCFE'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '-15px',
                  '--pd': '1.4s',
                  background: '#0ACF83'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '50px',
                  '--pd': '2.1s',
                  background: '#FF7262'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '-55px',
                  '--pd': '2.8s',
                  background: '#A259FF'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '10px',
                  '--pd': '3.5s',
                  background: '#fff'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '-30px',
                  '--pd': '4.2s',
                  background: '#1ABCFE'
                }}
              ></i>
              <i
                className="pt"
                style={{
                  '--px': '40px',
                  '--pd': '4.9s',
                  background: '#F24E1E'
                }}
              ></i>
            </div>
            <div
              className="tcur"
              aria-hidden="true"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
              >
                <path
                  d="M1 1 L1 15.5 L5 12 L11.5 12 Z"
                  fill="#8A3FF0"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '16px',
                  whiteSpace: 'nowrap',
                  background: '#8A3FF0',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '99px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
                }}
              >
                Armin Rouhanian
              </span>
              <span className="think">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
