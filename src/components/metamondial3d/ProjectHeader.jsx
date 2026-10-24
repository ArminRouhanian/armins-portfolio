import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectHeader() {
  return (
    <>
      <header
        style={{
          position: 'relative',
          flex: 'none',
          zIndex: '30',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          background: '#fff',
          borderBottom: '1px solid #E5E5E5'
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
            style={{ height: '28px', width: 'auto', display: 'block' }}
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
          <Link to="/">Work</Link>
          <Link to="/">Case studies</Link>
          <a href="#contact" className="bt dk">
            Contact me
          </a>
        </nav>
      </header>
    </>
  )
}
