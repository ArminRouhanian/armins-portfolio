import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import useSectionLink from '../../../hooks/useSectionLink'
import styles from './MobileNavDrawer.module.css'

export interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNavDrawer({
  isOpen,
  onClose
}: MobileNavDrawerProps) {
  const getSectionLink = useSectionLink()
  const { pathname } = useLocation()
  const isAbout = pathname === '/about'

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleRowClick = () => {
    onClose()
  }

  const workLink = getSectionLink('work')
  const casesLink = getSectionLink('cases')
  const contactLink = getSectionLink('contact')

  return (
    <div
      className={`${styles.drawer}${isOpen ? ` ${styles.drawerOpen}` : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className={styles.topBar}>
        <Link
          to="/"
          onClick={handleRowClick}
          className={styles.brand}
        >
          <img
            src="/assets/logo.svg"
            alt=""
            className={styles.logo}
          />
        </Link>
        <Button
          variant="iconPlain"
          icon="close"
          iconSize={24}
          onClick={onClose}
          aria-label="Close menu"
          className={styles.closeButton}
        />
      </div>

      <div className={styles.content}>
        <nav className={styles.navRows}>
          {workLink.as === 'a' ? (
            <a
              href={workLink.href}
              onClick={handleRowClick}
              className={styles.navRow}
            >
              Works
            </a>
          ) : (
            <Link
              to={workLink.to}
              onClick={handleRowClick}
              className={styles.navRow}
            >
              Works
            </Link>
          )}

          {casesLink.as === 'a' ? (
            <a
              href={casesLink.href}
              onClick={handleRowClick}
              className={styles.navRow}
            >
              Case Study
            </a>
          ) : (
            <Link
              to={casesLink.to}
              onClick={handleRowClick}
              className={styles.navRow}
            >
              Case Study
            </Link>
          )}

          <Link
            to="/about"
            onClick={handleRowClick}
            className={`${styles.navRow}${isAbout ? ` ${styles.activeRow}` : ''}`}
          >
            About
          </Link>
        </nav>
      </div>

      <div className={styles.bottomArea}>
        <Button
          variant="primary"
          className={styles.contactButton}
          {...contactLink}
          onClick={handleRowClick}
        >
          Contact me
        </Button>
      </div>
    </div>
  )
}
