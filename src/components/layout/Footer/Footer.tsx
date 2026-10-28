import React from 'react'
import FooterAnimation from './FooterAnimation'
import Button from '../../ui/Button/Button'
import SocialButton from './SocialButton/SocialButton'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armin-rouhanian',
    icon: '/assets/icons/icon-linkedin.svg'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@armin.rouhanian',
    icon: '/assets/icons/icon-medium.svg'
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/@arminrouhanian',
    icon: '/assets/icons/icon-figma.svg'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/Armin_Rouhanian',
    icon: '/assets/icons/icon-telegram.svg'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ArminRouhanian',
    icon: '/assets/icons/icon-github.svg'
  }
]

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <FooterAnimation />
        <p className={styles.label}>
          CONTACT
        </p>
        <h2 className={styles.heading}>
          Let us work together!
        </h2>
        <p className={styles.values}>
          <span className={styles.valClarity}>Clarity.</span>{' '}
          <span className={styles.valStructure}>Structure.</span>{' '}
          <span className={styles.valValue}>Value.</span>
        </p>
        <p className={styles.description}>
          Tell me what you are building and where it feels unclear. I will help
          you find the next step.
        </p>
        <div className={styles.actionRow}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;to=armin.rouhanian@gmail.com"
            className={`${styles.ctaButton} fcta`}
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
            className={styles.emailLink}
          >
            armin.rouhanian@gmail.com
          </a>
        </div>
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © Designed By Armin <br />
            Developed by Claude Code
          </span>
          <span className={styles.socialRow}>
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
            className={styles.backToTop}
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
