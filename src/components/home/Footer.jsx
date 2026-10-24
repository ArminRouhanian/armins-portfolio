import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        marginTop: '48px',
        backgroundColor: '#1E1E1E',
        backgroundImage: 'radial-gradient(#3A3A3A 1px,transparent 1px)',
        backgroundSize: '24px 24px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '0px'
      }}
    >
      <div
        className="fdeco"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '72px',
          top: '88px',
          width: '300px',
          height: '260px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '161px',
            top: '22px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: '#A259FF'
          }}
        ></div>
        <div
          className="fr1"
          style={{
            position: 'absolute',
            left: '34px',
            top: '74px',
            width: '160px',
            height: '80px',
            borderRadius: '12px',
            background: '#F24E1E'
          }}
        ></div>
        <div
          className="fs1"
          style={{
            position: 'absolute',
            left: '182px',
            top: '132px',
            width: '64px',
            height: '64px',
            borderRadius: '12px',
            background: '#1ABCFE'
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            left: '67px',
            top: '140px',
            width: '90px',
            height: '90px',
            borderRadius: '50% 50% 0 50%',
            background: '#0ACF83'
          }}
        ></div>
        <div
          className="fsb fsb2"
          style={{
            left: '182px',
            top: '132px',
            width: '64px',
            height: '64px',
            position: 'absolute'
          }}
        >
          <i className="fhn" style={{ left: '-6px', top: '-6px' }}></i>
          <i className="fhn" style={{ right: '-6px', top: '-6px' }}></i>
          <i className="fhn" style={{ left: '-6px', bottom: '-6px' }}></i>
          <i className="fhn" style={{ right: '-6px', bottom: '-6px' }}></i>
        </div>
        <div
          className="fsb fsb1"
          style={{ left: '34px', top: '74px', width: '160px', height: '80px' }}
        >
          <i className="fhn" style={{ left: '-6px', top: '-6px' }}></i>
          <i className="fhn" style={{ right: '-6px', top: '-6px' }}></i>
          <i className="fhn" style={{ left: '-6px', bottom: '-6px' }}></i>
          <i className="fhn" style={{ right: '-6px', bottom: '-6px' }}></i>
        </div>
        <div className="fcu" style={{ position: 'absolute', zIndex: '2' }}>
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
        </div>
      </div>
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '96px 32px 32px',
          position: 'relative'
        }}
      >
        <p
          style={{
            fontSize: '13px',
            fontWeight: '700',
            color: '#1ABCFE',
            letterSpacing: '.08em'
          }}
        >
          CONTACT
        </p>
        <h2
          style={{
            marginTop: '16px',
            fontSize: 'clamp(44px,8vw,104px)',
            lineHeight: '1',
            fontWeight: '700',
            letterSpacing: '-.02em',
            maxWidth: '760px'
          }}
        >
          Let us work together!
        </h2>
        <p
          style={{
            marginTop: '24px',
            fontSize: 'clamp(20px,3vw,28px)',
            fontWeight: '500'
          }}
        >
          <span style={{ color: '#1ABCFE' }}>Clarity.</span>{' '}
          <span style={{ color: '#C39BFF' }}>Structure.</span>{' '}
          <span style={{ color: '#3DDC9B' }}>Value.</span>
        </p>
        <p
          style={{
            marginTop: '16px',
            fontSize: '18px',
            lineHeight: '1.55',
            color: '#C4C4C4',
            maxWidth: '520px'
          }}
        >
          Tell me what you are building and where it feels unclear. I will help
          you find the next step.
        </p>
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '20px 28px'
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;to=armin.rouhanian@gmail.com"
            className="fcta"
          >
            Contact me{' '}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;to=armin.rouhanian@gmail.com"
            style={{
              color: '#E0E0E0',
              fontSize: '18px',
              borderBottom: '1px solid #777'
            }}
          >
            armin.rouhanian@gmail.com
          </a>
        </div>
        <div
          style={{
            marginTop: '96px',
            paddingTop: '24px',
            borderTop: '1px solid #3A3A3A',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px 32px',
            color: '#C4C4C4',
            fontSize: '14px'
          }}
        >
          <span>
            © Designed By Armin <br />
            Developed by Claude Code
          </span>
          <span style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://www.linkedin.com/in/armin-rouhanian"
              className="fsoc"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://medium.com/@armin.rouhanian"
              className="fsoc"
              aria-label="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a
              href="https://www.figma.com/@arminrouhanian"
              className="fsoc"
              aria-label="Figma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </svg>
            </a>
            <a
              href="https://t.me/Armin_Rouhanian"
              className="fsoc"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://github.com/ArminRouhanian"
              className="fsoc"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </span>
          <a href="#top" className="ftop">
            Back to top{' '}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
