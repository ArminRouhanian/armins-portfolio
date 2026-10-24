import React from 'react'
import { Link } from 'react-router-dom'

export default function CaseStudies() {
  return (
    <section
      id="cases"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '48px 32px',
        scrollMarginTop: '0px'
      }}
    >
      <p
        style={{
          fontSize: 'var(--font-size-caption)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-primary-dark)'
        }}
      >
        03 · CASE STUDIES
      </p>
      <h2 style={{ margin: '8px 0 24px', fontSize: 'var(--font-size-h1)' }}>
        How I approach problems
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <a
          href="#"
          className="cd"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 28px'
          }}
        >
          <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-orange)', width: '40px' }}>
            01
          </span>
          <h3 style={{ flex: '1', minWidth: '200px', fontSize: 'var(--font-size-h3)' }}>
            [Case study title]
          </h3>
          <span className="tg">[Role]</span>
          <span className="tg">[Year]</span>
          <span style={{ fontSize: 'var(--font-size-h3)' }}>→</span>
        </a>
        <a
          href="#"
          className="cd"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 28px'
          }}
        >
          <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-purple-light)', width: '40px' }}>
            02
          </span>
          <h3 style={{ flex: '1', minWidth: '200px', fontSize: 'var(--font-size-h3)' }}>
            [Case study title]
          </h3>
          <span className="tg">[Role]</span>
          <span className="tg">[Year]</span>
          <span style={{ fontSize: 'var(--font-size-h3)' }}>→</span>
        </a>
        <a
          href="#"
          className="cd"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 28px'
          }}
        >
          <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-green)', width: '40px' }}>
            03
          </span>
          <h3 style={{ flex: '1', minWidth: '200px', fontSize: 'var(--font-size-h3)' }}>
            [Case study title]
          </h3>
          <span className="tg">[Role]</span>
          <span className="tg">[Year]</span>
          <span style={{ fontSize: '24px' }}>→</span>
        </a>
      </div>
    </section>
  )
}
