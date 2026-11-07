import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import useSectionLink, { SectionLinkTarget } from '../../../hooks/useSectionLink'
import { useFocusTrap } from '../../../hooks/useFocusTrap'
import styles from './MobileNavDrawer.module.css'

export interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface DrawerNavRowProps {
  target: SectionLinkTarget
  onClick: () => void
  children: React.ReactNode
}

function DrawerNavRow({
  target,
  onClick,
  children
}: DrawerNavRowProps) {
  if (target.as === 'a') {
    return (
      <a
        href={target.href}
        onClick={onClick}
        className={styles.navRow}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={target.to}
      onClick={onClick}
      className={styles.navRow}
    >
      {children}
    </Link>
  )
}

export default function MobileNavDrawer({
  isOpen,
  onClose
}: MobileNavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const getSectionLink = useSectionLink()
  const { pathname } = useLocation()
  const isAbout = pathname === '/about'

  useFocusTrap(drawerRef, isOpen)

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
      ref={drawerRef}
      className={`${styles.drawer}${isOpen ? ` ${styles.drawerOpen}` : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      tabIndex={-1}
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
          <DrawerNavRow
            target={workLink}
            onClick={handleRowClick}
          >
            Works
          </DrawerNavRow>

          <DrawerNavRow
            target={casesLink}
            onClick={handleRowClick}
          >
            Case Study
          </DrawerNavRow>

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
