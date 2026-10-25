import React from 'react'
import { Link } from 'react-router-dom'
import FooterAnimation from './FooterAnimation'
import Button from './Button/Button'
import SocialButton from './SocialButton/SocialButton'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armin-rouhanian',
    icon: '/assets/icon-linkedin.svg'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@armin.rouhanian',
    icon: '/assets/icon-medium.svg'
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/@arminrouhanian',
    icon: '/assets/icon-figma.svg'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/Armin_Rouhanian',
    icon: '/assets/icon-telegram.svg'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ArminRouhanian',
    icon: '/assets/icon-github.svg'
  }
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        marginTop: '48px',
        backgroundColor: 'var(--color-surface-dark)',
        backgroundImage: 'radial-gradient(#3A3A3A 1px,transparent 1px)',
        backgroundSize: '24px 24px',
        color: 'var(--color-text-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '96px 32px 32px',
          position: 'relative'
        }}
      >
        <FooterAnimation />
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
            maxWidth: '640px'
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
            {SOCIAL_LINKS.map(link => (
              <SocialButton
                key={link.name}
                href={link.href}
                ariaLabel={link.name}
                icon={link.icon}
              />
            ))}
          </span>
          <Button
            variant="tertiary"
            theme="dark"
            href="#top"
          >
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
          </Button>
        </div>
      </div>
    </footer>
  )
}
