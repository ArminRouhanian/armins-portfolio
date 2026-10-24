import React from 'react'
import { Link } from 'react-router-dom'

export default function Tools() {
  return (
    <section
      id="tools"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '48px 32px',
        scrollMarginTop: '0px'
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
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#0C7BD1' }}>
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
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
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
            Figma carries ideas from sketch to prototype, Notion and Trello keep
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
            Figma · Figma Make · Claude Design · Claude Code · Notion · Trello ·
            Cursor · Google Analytics · Hotjar · ChatGPT · n8n · VS Code
          </p>
        </div>
        <div className="tstage">
          <div className="tscene">
            <div
              className="ox"
              style={{
                '--rx': '230px',
                '--h': '12.0s',
                '--dx': '-0.00s',
                '--dy': '-6.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '92px', '--s0': '0.72', '--s1': '1.18' }}
              >
                <div
                  className="tl"
                  title="Figma"
                  aria-label="Figma"
                  style={{ background: '#1E1E1E' }}
                >
                  <svg
                    viewBox="0 0 24 36"
                    width="20"
                    height="30"
                    aria-hidden="true"
                  >
                    <path d="M12 0H6a6 6 0 000 12h6z" fill="#F24E1E" />
                    <path d="M12 0h6a6 6 0 010 12h-6z" fill="#FF7262" />
                    <path d="M12 12H6a6 6 0 000 12h6z" fill="#A259FF" />
                    <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
                    <path d="M6 24h6v6a6 6 0 11-6-6z" fill="#0ACF83" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '230px',
                '--h': '12.0s',
                '--dx': '-6.00s',
                '--dy': '-12.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '92px', '--s0': '0.72', '--s1': '1.18' }}
              >
                <div
                  className="tl"
                  title="Claude Code"
                  aria-label="Claude Code"
                  style={{ background: '#D97757' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    aria-hidden="true"
                  >
                    <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 12L22.0 12.0" />
                      <path d="M12 12L19.1 19.1" />
                      <path d="M12 12L12.0 22.0" />
                      <path d="M12 12L4.9 19.1" />
                      <path d="M12 12L2.0 12.0" />
                      <path d="M12 12L4.9 4.9" />
                      <path d="M12 12L12.0 2.0" />
                      <path d="M12 12L19.1 4.9" />
                    </g>
                  </svg>
                  <span
                    style={{
                      fontSize: '9px',
                      fontWeight: '700',
                      color: '#fff',
                      marginTop: '1px',
                      letterSpacing: '.02em'
                    }}
                  >
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '230px',
                '--h': '12.0s',
                '--dx': '-12.00s',
                '--dy': '-18.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '92px', '--s0': '0.72', '--s1': '1.18' }}
              >
                <div
                  className="tl"
                  title="Notion"
                  aria-label="Notion"
                  style={{ background: '#fff', border: '1px solid #E5E5E5' }}
                >
                  <span
                    style={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: '#1E1E1E',
                      border: '2.5px solid #1E1E1E',
                      borderRadius: '6px',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Georgia,serif'
                    }}
                  >
                    N
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '230px',
                '--h': '12.0s',
                '--dx': '-18.00s',
                '--dy': '-24.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '92px', '--s0': '0.72', '--s1': '1.18' }}
              >
                <div
                  className="tl"
                  title="Google Analytics"
                  aria-label="Google Analytics"
                  style={{ background: '#fff', border: '1px solid #E5E5E5' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <rect
                      x="16"
                      y="2"
                      width="6"
                      height="20"
                      rx="3"
                      fill="#F9AB00"
                    />
                    <rect
                      x="9"
                      y="9"
                      width="6"
                      height="13"
                      rx="3"
                      fill="#E37400"
                    />
                    <circle cx="4.5" cy="19" r="3" fill="#E37400" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '165px',
                '--h': '9.0s',
                '--dx': '-0.00s',
                '--dy': '4.50s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '64px', '--s0': '0.58', '--s1': '1.02' }}
              >
                <div
                  className="tl"
                  title="Figma Make"
                  aria-label="Figma Make"
                  style={{ background: '#1E1E1E' }}
                >
                  <svg
                    viewBox="0 0 24 36"
                    width="16"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M12 0H6a6 6 0 000 12h6z" fill="#F24E1E" />
                    <path d="M12 0h6a6 6 0 010 12h-6z" fill="#FF7262" />
                    <path d="M12 12H6a6 6 0 000 12h6z" fill="#A259FF" />
                    <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
                    <path d="M6 24h6v6a6 6 0 11-6-6z" fill="#0ACF83" />
                  </svg>
                  <span
                    style={{ position: 'absolute', right: '6px', top: '5px' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '165px',
                '--h': '9.0s',
                '--dx': '-4.50s',
                '--dy': '0.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '64px', '--s0': '0.58', '--s1': '1.02' }}
              >
                <div
                  className="tl"
                  title="Cursor"
                  aria-label="Cursor"
                  style={{ background: '#1E1E1E' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    aria-hidden="true"
                  >
                    <path d="M5 3l15 8-6.5 2L10 20z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '165px',
                '--h': '9.0s',
                '--dx': '-9.00s',
                '--dy': '-4.50s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '64px', '--s0': '0.58', '--s1': '1.02' }}
              >
                <div
                  className="tl"
                  title="Hotjar"
                  aria-label="Hotjar"
                  style={{ background: '#FD3A5C' }}
                >
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#fff',
                      letterSpacing: '-.04em'
                    }}
                  >
                    hj
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '165px',
                '--h': '9.0s',
                '--dx': '-13.50s',
                '--dy': '-9.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '64px', '--s0': '0.58', '--s1': '1.02' }}
              >
                <div
                  className="tl"
                  title="n8n"
                  aria-label="n8n"
                  style={{ background: '#EA4B71' }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#fff',
                      letterSpacing: '-.03em'
                    }}
                  >
                    n8n
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '105px',
                '--h': '6.5s',
                '--dx': '-0.00s',
                '--dy': '-3.25s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '42px', '--s0': '0.46', '--s1': '0.86' }}
              >
                <div
                  className="tl"
                  title="Claude Design"
                  aria-label="Claude Design"
                  style={{ background: '#D97757' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    aria-hidden="true"
                  >
                    <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 12L22.0 12.0" />
                      <path d="M12 12L19.1 19.1" />
                      <path d="M12 12L12.0 22.0" />
                      <path d="M12 12L4.9 19.1" />
                      <path d="M12 12L2.0 12.0" />
                      <path d="M12 12L4.9 4.9" />
                      <path d="M12 12L12.0 2.0" />
                      <path d="M12 12L19.1 4.9" />
                    </g>
                  </svg>
                  <span
                    style={{
                      fontSize: '9px',
                      fontWeight: '700',
                      color: '#fff',
                      marginTop: '1px',
                      letterSpacing: '.02em'
                    }}
                  >
                    Design
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '105px',
                '--h': '6.5s',
                '--dx': '-3.25s',
                '--dy': '-6.50s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '42px', '--s0': '0.46', '--s1': '0.86' }}
              >
                <div
                  className="tl"
                  title="Trello"
                  aria-label="Trello"
                  style={{ background: '#0C66E4' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="21"
                      height="21"
                      rx="4"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="5"
                      height="11"
                      rx="1.2"
                      fill="#fff"
                    />
                    <rect
                      x="13.5"
                      y="5.5"
                      width="5"
                      height="6.5"
                      rx="1.2"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '105px',
                '--h': '6.5s',
                '--dx': '-6.50s',
                '--dy': '-9.75s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '42px', '--s0': '0.46', '--s1': '0.86' }}
              >
                <div
                  className="tl"
                  title="ChatGPT"
                  aria-label="ChatGPT"
                  style={{ background: '#10A37F' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <polygon
                      points="12,2.5 20.2,7.2 20.2,16.8 12,21.5 3.8,16.8 3.8,7.2"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="2.6" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="ox"
              style={{
                '--rx': '105px',
                '--h': '6.5s',
                '--dx': '-9.75s',
                '--dy': '-13.00s'
              }}
            >
              <div
                className="oy"
                style={{ '--ry': '42px', '--s0': '0.46', '--s1': '0.86' }}
              >
                <div
                  className="tl"
                  title="VS Code"
                  aria-label="VS Code"
                  style={{ background: '#007ACC' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6l-6 6 6 6M15 6l6 6-6 6"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
              <span className="sp2" style={{ left: '-62px', top: '-46px' }}>
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
              <span className="sp3" style={{ left: '50px', top: '-58px' }}>
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
                style={{ left: '46px', top: '40px', animationDelay: '-.8s' }}
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
                style={{ '--px': '-40px', '--pd': '0s', background: '#F24E1E' }}
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
                style={{ '--px': '10px', '--pd': '3.5s', background: '#fff' }}
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
            <div className="tcur" aria-hidden="true">
              <svg width="16" height="18" viewBox="0 0 16 18">
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
                  borderRadius: '99px'
                }}
              >
                Armin Rohanian
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
