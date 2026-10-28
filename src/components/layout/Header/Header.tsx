import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import useSectionLink from '../../../hooks/useSectionLink'
import styles from './Header.module.css'

interface NavLinkItem {
  label: string
  section: string
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Work', section: 'work' },
  { label: 'Case studies', section: 'cases' }
]

export default function Header() {
  const getSectionLink = useSectionLink()

  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.brand}
      >
        <img
          src="/assets/logo.svg"
          alt=""
          className={styles.logo}
        />
        <span className={styles.brandName}>
          Armin Rouhanian
        </span>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          {NAV_LINKS.map(({ label, section }) => (
            <Button
              key={section}
              variant="tertiary"
              {...getSectionLink(section)}
            >
              {label}
            </Button>
          ))}
        </div>
        <Button
          variant="primary"
          {...getSectionLink('contact')}
          className={styles.contactButton}
        >
          Contact me
        </Button>
      </nav>
    </header>
  )
}
