import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.css'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img
          src="/assets/logo.svg"
          alt=""
          className={styles.logo}
        />
        Armin Rouhanian
      </Link>
      <nav className={styles.nav}>
        {isHome ? (
          <>
            <Button
              variant="tertiary"
              href="#work"
            >
              Work
            </Button>
            <Button
              variant="tertiary"
              href="#cases"
            >
              Case studies
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="tertiary"
              to="/#work"
            >
              Work
            </Button>
            <Button
              variant="tertiary"
              to="/#cases"
            >
              Case studies
            </Button>
          </>
        )}
        <Button
          variant="primary"
          href="#contact"
        >
          Contact me
        </Button>
      </nav>
    </header>
  )
}
