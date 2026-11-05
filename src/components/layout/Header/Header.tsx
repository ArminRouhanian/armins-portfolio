import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import MobileNavDrawer from '../MobileNavDrawer/MobileNavDrawer'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const getSectionLink = useSectionLink()
  const { pathname } = useLocation()
  const isAbout = pathname === '/about'

  return (
    <>
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
            <Button
              as={Link}
              to="/about"
              variant="tertiary"
              className={isAbout ? styles.activeLink : ''}
            >
              About me
            </Button>
          </div>
          <Button
            variant="primary"
            {...getSectionLink('contact')}
            className={styles.contactButton}
          >
            Contact me
          </Button>
          <Button
            variant="iconPlain"
            icon="menu"
            iconSize={22}
            onClick={() => setIsMenuOpen(true)}
            className={styles.menuButton}
            aria-label="Open menu"
          />
        </nav>
      </header>
      <MobileNavDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}
