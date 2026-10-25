import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button/Button'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '65px',
        boxSizing: 'border-box',
        zIndex: 100,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          fontSize: '20px'
        }}
      >
        <img
          src="/assets/logo.svg"
          alt=""
          style={{
            height: '28px',
            width: 'auto',
            display: 'block'
          }}
        />
        Armin Rouhanian
      </Link>
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px 24px',
          fontWeight: '500'
        }}
      >
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
