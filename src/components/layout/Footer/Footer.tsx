import React from 'react'
import FooterAnimation from './FooterAnimation'
import Button from '../../ui/Button/Button'
import SocialButton from './SocialButton/SocialButton'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armin-rouhanian',
    icon: '/assets/social-icons/linkedin.svg'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@armin.rouhanian',
    icon: '/assets/social-icons/medium.svg'
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/@arminrouhanian',
    icon: '/assets/social-icons/figma.svg'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/Armin_Rouhanian',
    icon: '/assets/social-icons/telegram.svg'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ArminRouhanian',
    icon: '/assets/social-icons/github.svg'
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
          <Button
            as="a"
            variant="cta"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;to=armin.rouhanian@gmail.com"
            icon="/assets/icons/arrow-right.svg"
            iconPosition="right"
            iconSize={24}
            className="fcta"
          >
            Contact me
          </Button>
          <Button
            as="a"
            variant="tertiary"
            theme="dark"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;to=armin.rouhanian@gmail.com"
            className={styles.emailButton}
          >
            armin.rouhanian@gmail.com
          </Button>
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
            as="a"
            variant="tertiary"
            theme="dark"
            href="#top"
            icon="/assets/icons/arrow-up.svg"
            iconPosition="right"
            iconSize={18}
            className={styles.backToTop}
          >
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
